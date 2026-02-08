import { CardEvaluator } from "./cardEvaluator";
import { dealListener } from "./parser/dealListener";
import { BexprContext, DefinitionContext, MoveContext, On_actionContext, TermContext } from "./parser/dealParser";
import { Card } from "./state/card";
import { State } from "./state/state";

export class Loader implements dealListener {

    state : State;
    constructor(state : State) {
        this.state = state;
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
        const evaluator : CardEvaluator = new CardEvaluator(this.state);
        console.log("source");
        evaluator.visit(ctx.source());
        console.log("destination");
        evaluator.visit(ctx.destination());
    }

    enterTerm(ctx: TermContext) {
        console.log("I AM A TERM");
    }

    enterOn_action(ctx: On_actionContext) {
        // ctx.children = [];
    }

}