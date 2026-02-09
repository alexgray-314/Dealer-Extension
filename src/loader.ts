import { Position } from "vscode";
import { CardVisitor } from "./eval/cardVisitor";
import { NumberVisitor } from "./eval/numberVisitor";
import { dealListener } from "./parser/dealListener";
import { AssignContext, BexprContext, DefinitionContext, MoveContext, On_actionContext, TermContext } from "./parser/dealParser";
import { Card, SpecialCard } from "./state/card";
import { State } from "./state/state";
import { PositionVisitor } from "./eval/positionVisitor";

export class Loader implements dealListener {

    state : State;
    positionVisitor : PositionVisitor;
    cardVisitor : CardVisitor;
    numberVisitor : NumberVisitor;
    constructor(state : State) {
        this.state = state;
        this.positionVisitor = new PositionVisitor(state);
        this.cardVisitor = new CardVisitor(this.state);
        this.numberVisitor = new NumberVisitor(this.state);
    }

    enterDefinition(ctx: DefinitionContext) {

        const type = (ctx._type.text??"").toUpperCase();
        switch(type) {
            case "AREA": 
                this.state.define_area(ctx.ID().text, {});
                break;
            case "ACTION":
                this.state.define_action(ctx.ID().text, {});
                break;
            case "INT":
            case "CARD":
                this.state.define_variable(type, ctx.ID().text);
                break;

        }

    }

    enterMove(ctx: MoveContext) {

        const dest = ctx.destination().accept(this.positionVisitor);
        if (dest === undefined) {
            console.log("Destination is undefined: ", ctx.destination().text);
            return;
        }

        if (ctx.source().position() !== undefined) {
            const source = ctx.source().accept(this.positionVisitor);
            if (source === undefined) {
                console.log("Source is undefined ", ctx.source().text);
                return;
            }
            this.state.move_card(source, dest);
        } else {
            const card = ctx.source().accept(this.cardVisitor);
            if (card === undefined) {
                console.log("Card is undefined ", ctx.source().text);
                return;
            }
            this.state.add_card(card, dest);
        }
        // TODO move sets

    }

    enterAssign(ctx: AssignContext)  {
        const id : string = ctx.variable().text;
        const [type, _] = this.state.variables.get(id) ?? ["NULL", undefined];
        switch(type) {
            case "NULL":
                break;
                // It is safe to use forced types (!) from this points on as undefined variables will have type NULL
            case "INT":
                this.state.variables.get(id)![1] = ctx.term().accept(this.numberVisitor);
                break;
            case "CARD":
                this.state.variables.get(id)![1] = ctx.term().accept(this.cardVisitor);
                break;
        }
    }

    enterOn_action(ctx: On_actionContext) {
        // ctx.children = [];
    }

}