import { dealListener } from "./parser/dealListener";
import { DefinitionContext, On_actionContext } from "./parser/dealParser";
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

    enterOn_action(ctx: On_actionContext) {
        ctx.children = [];
    }

}