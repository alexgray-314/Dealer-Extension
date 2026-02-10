import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, BlockContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../parser/dealParser";
import { dealVisitor } from "../parser/dealVisitor";
import { IntSetVisitor } from "./intSetVisitor";
import { Position } from "../state/area";
import { State } from "../state/state";
import { stat } from "fs";
import { StringVisitor } from "./stringVisitor";

export class PositionSetVisitor implements dealVisitor<void> {
    
    state : State;
    task : ((item: Position) => boolean);

    constructor(state : State, task : (item: Position) => boolean) {
        this.state = state;
        this.task = task;
    }

    visitSet (ctx: SetContext) {
        ctx.accept(this);
    }

    visitPositionset (ctx: PositionsetContext) : void {
        const areaID : string = new StringVisitor(this.state).visit(ctx.arearef()) ?? "";
        new IntSetVisitor(this.state, (stack : number) => {
            new IntSetVisitor(this.state, (pos : number) => {
                this.task([areaID, stack, pos]);
                return pos < ((this.state.areas.get(areaID)?.stacks[pos].cards.length) ?? -Infinity);
            }).visit(ctx.getChild(4));
            return stack < ((this.state.areas.get(areaID)?.stacks.length) ?? -Infinity);
        }).visit(ctx.getChild(2));
    }
    
    visit(tree: ParseTree): void {}
    visitChildren(node: RuleNode): void {}
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}

}