import { dealListener } from "./parser/dealListener";
import { DefinitionContext } from "./parser/dealParser";
import { State } from "./state/state";

export class Loader implements dealListener {

    state : State;
    constructor(state : State) {
        this.state = state;
    }

    exitDefinition(ctx: DefinitionContext) {

        switch((ctx._type.text??"").toUpperCase()) {
            case "AREA": 
                this.state.define_area(ctx.ID().text, {});
        }

    }

}