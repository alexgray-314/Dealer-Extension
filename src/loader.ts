import { CardVisitor } from "./eval/cardVisitor";
import { NumberVisitor } from "./eval/numberVisitor";
import { dealListener } from "./parser/dealListener";
import { AexprContext, AreaContext, ArearefContext, ArgContext, ArgsContext, AssignContext, BexprContext, DefinitionContext, DestinationContext, ForContext, Function_callContext, IfContext, IntsetContext, Move_catchContext, MoveContext, On_actionContext, On_moveContext, PlayerContext, PlayersetContext, PositionContext, PositionsetContext, ProgContext, PropertyContext, SetContext, SourceContext, StackContext, StmtContext, TermContext, UpdateTurnContext, VariableContext } from "./parser/dealParser";
import { Card, SpecialCard, StandardCard } from "./state/card";
import { State } from "./state/state";
import { PositionVisitor } from "./eval/positionVisitor";
import { dealVisitor } from "./parser/dealVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Comparator, Primitive } from "./logic/comparator";
import { TermVisitor } from "./eval/termVisitor";
import { IntSetVisitor } from "./eval/intSetVisitor";
import { PositionSetVisitor } from "./eval/positionSetVisitor";
import { Position } from "./state/area";

export class Loader implements dealVisitor<void> {

    state : State;
    positionVisitor : PositionVisitor;
    cardVisitor : CardVisitor;
    numberVisitor : NumberVisitor;
    termVisitor : TermVisitor;
    comparator : Comparator;
    constructor(state : State) {
        this.state = state;
        this.positionVisitor = new PositionVisitor(state);
        this.cardVisitor = new CardVisitor(this.state);
        this.numberVisitor = new NumberVisitor(this.state);
        this.termVisitor = new TermVisitor(this.state);
        this.comparator = new Comparator();
    }

    visitDefinition(ctx: DefinitionContext) : void {

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

    visitMove(ctx: MoveContext) : void {

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

    visitAssign(ctx: AssignContext) : void {
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

    visitIf (ctx: IfContext) : void {

        const comparator : string = ctx.bexpr().getChild(1).text;
        const termA = ctx.bexpr().getChild(0);
        const termB = ctx.bexpr().getChild(2);

        const a : Primitive = termA.accept(this.termVisitor);
        const b : Primitive = termB.accept(this.termVisitor);

        if (this.comparator.equals(a, b)) {
            ctx._consequent.accept(this); 
        } else {
            if (ctx.childCount > 5) { // this accounts for if statements with no else clause
                ctx._antecedent.accept(this);
            }
        }

    }

    visitFor (ctx: ForContext) {

        const loopVar = ctx.ID().text;

        if (ctx.set().intset() !== undefined || ctx.set().playerset() !== undefined) {

            new IntSetVisitor(this.state, (i : number) => {
                this.state.variables.set(loopVar, ["INT", i]);
                ctx.block().accept(this);
                return true;
            }).visit(ctx.set());

        } else if (ctx.set().positionset() !== undefined) {
            
            new PositionSetVisitor(this.state, (pos : Position) => {
                const c : Card = this.state.get_card(pos);
                this.state.variables.set(loopVar, ["CARD", c]);
                ctx.block().accept(this);
                return true;
            }).visit(ctx.set());

        }

    }

    visit(tree: ParseTree): void {
        tree.accept(this);
    }
    visitChildren(node: RuleNode): void {
        for (let i = 0; i < node.childCount ; i++) {
            node.getChild(i).accept(this);
        }
    }
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}

}