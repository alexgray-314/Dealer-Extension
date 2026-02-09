import { Position } from "vscode";
import { CardVisitor } from "./eval/cardVisitor";
import { NumberVisitor } from "./eval/numberVisitor";
import { dealListener } from "./parser/dealListener";
import { BexprContext, DefinitionContext, MoveContext, On_actionContext, TermContext } from "./parser/dealParser";
import { Card, SpecialCard } from "./state/card";
import { State } from "./state/state";
import { PositionVisitor } from "./eval/positionVisitor";

export class Loader implements dealListener {

    state : State;
    positionVisitor : PositionVisitor;
    cardVisitor : CardVisitor;
    constructor(state : State) {
        this.state = state;
        this.positionVisitor = new PositionVisitor(state);
        this.cardVisitor = new CardVisitor(this.state);
    }

    enterDefinition(ctx: DefinitionContext) {

        console.log("Entered Definition");

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
        
        console.log(ctx.source().text, ctx.destination().text);

        const dest = ctx.destination().accept(this.positionVisitor);
        console.log(dest);

        if (ctx.source().position !== undefined) {
            const source = ctx.source().accept(this.positionVisitor);
            console.log(source);
            this.state.move_card(source!, dest!);
        } else {
            const card = ctx.source().accept(this.cardVisitor);
            this.state.add_card(card!, dest!);
        }
        // TODO move sets

    }

    enterTerm(ctx: TermContext) {
        console.log("TERM: ",ctx.text);
        console.log(new NumberVisitor(this.state).visit(ctx));
    }

    enterOn_action(ctx: On_actionContext) {
        // ctx.children = [];
    }

}