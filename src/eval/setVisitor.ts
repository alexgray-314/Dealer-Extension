import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Primitive } from "../logic/comparator";
import { ProgContext, StmtContext, BlockContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../parser/dealParser";
import { dealVisitor } from "../parser/dealVisitor";
import { State } from "../state/state";

export class SetVisitor implements dealVisitor<void> {

    state : State;
    task : (item: Primitive) => boolean;
    
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    constructor(state : State, task: ((item: Primitive) => boolean)) {
        this.state = state;
        this.task = task;
    }

    visitProg?: ((ctx: ProgContext) => void) | undefined;
    visitStmt?: ((ctx: StmtContext) => void) | undefined;
    visitBlock?: ((ctx: BlockContext) => void) | undefined;
    visitPlayer?: ((ctx: PlayerContext) => void) | undefined;
    visitDefinition?: ((ctx: DefinitionContext) => void) | undefined;
    visitMove?: ((ctx: MoveContext) => void) | undefined;
    visitSource?: ((ctx: SourceContext) => void) | undefined;
    visitDestination?: ((ctx: DestinationContext) => void) | undefined;
    visitOn_action?: ((ctx: On_actionContext) => void) | undefined;
    visitOn_move?: ((ctx: On_moveContext) => void) | undefined;
    visitFor?: ((ctx: ForContext) => void) | undefined;
    visitIf?: ((ctx: IfContext) => void) | undefined;
    visitAssign?: ((ctx: AssignContext) => void) | undefined;
    visitFunction_call?: ((ctx: Function_callContext) => void) | undefined;
    visitUpdateTurn?: ((ctx: UpdateTurnContext) => void) | undefined;
    visitVariable?: ((ctx: VariableContext) => void) | undefined;
    visitArgs?: ((ctx: ArgsContext) => void) | undefined;
    visitArg?: ((ctx: ArgContext) => void) | undefined;
    visitArearef?: ((ctx: ArearefContext) => void) | undefined;
    visitArea?: ((ctx: AreaContext) => void) | undefined;
    visitStack?: ((ctx: StackContext) => void) | undefined;
    visitPosition?: ((ctx: PositionContext) => void) | undefined;
    visitTerm?: ((ctx: TermContext) => void) | undefined;
    visitProperty?: ((ctx: PropertyContext) => void) | undefined;
    visitBexpr?: ((ctx: BexprContext) => void) | undefined;
    visitAexpr?: ((ctx: AexprContext) => void) | undefined;
    visitSet?: ((ctx: SetContext) => void) | undefined;
    visitIntset?: ((ctx: IntsetContext) => void) | undefined;
    visitPositionset?: ((ctx: PositionsetContext) => void) | undefined;
    visitPlayerset?: ((ctx: PlayersetContext) => void) | undefined;
    visitMove_catch?: ((ctx: Move_catchContext) => void) | undefined;
    visit(tree: ParseTree): void {
        throw new Error("Method not implemented.");
    }
    visitChildren(node: RuleNode): void {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): void {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): void {
        throw new Error("Method not implemented.");
    }

}