import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, PlayerContext, DefinitionContext, MoveContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, ArgsContext, ArgContext, ArearefContext, PositionContext, StackContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "./parser/dealParser";
import { dealVisitor } from "./parser/dealVisitor";

export class DebugOutputVisitor implements dealVisitor<number> {

    visitProg?: ((ctx: ProgContext) => number) | undefined;
    visitStmt?: ((ctx: StmtContext) => number) | undefined;
    visitPlayer?: ((ctx: PlayerContext) => number) | undefined;
    visitDefinition?: ((ctx: DefinitionContext) => number) | undefined;
    visitMove?: ((ctx: MoveContext) => number) | undefined;
    visitOn_action?: ((ctx: On_actionContext) => number) | undefined;
    visitOn_move?: ((ctx: On_moveContext) => number) | undefined;
    visitFor?: ((ctx: ForContext) => number) | undefined;
    visitIf?: ((ctx: IfContext) => number) | undefined;
    visitAssign?: ((ctx: AssignContext) => number) | undefined;
    visitFunction_call?: ((ctx: Function_callContext) => number) | undefined;
    visitUpdateTurn?: ((ctx: UpdateTurnContext) => number) | undefined;
    visitArgs?: ((ctx: ArgsContext) => number) | undefined;
    visitArg?: ((ctx: ArgContext) => number) | undefined;
    visitArearef?: ((ctx: ArearefContext) => number) | undefined;
    visitPosition?: ((ctx: PositionContext) => number) | undefined;
    visitStack?: ((ctx: StackContext) => number) | undefined;
    visitTerm?: ((ctx: TermContext) => number) | undefined;
    visitProperty?: ((ctx: PropertyContext) => number) | undefined;
    visitBexpr?: ((ctx: BexprContext) => number) | undefined;
    visitAexpr?: ((ctx: AexprContext) => number) | undefined;
    visitSet?: ((ctx: SetContext) => number) | undefined;
    visitIntset?: ((ctx: IntsetContext) => number) | undefined;
    visitPositionset?: ((ctx: PositionsetContext) => number) | undefined;
    visitPlayerset?: ((ctx: PlayersetContext) => number) | undefined;
    visitMove_catch?: ((ctx: Move_catchContext) => number) | undefined;
    visit(tree: ParseTree): number {
        throw new Error("Method not implemented.");
    }
    visitChildren(node: RuleNode): number {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): number {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): number {
        throw new Error("Method not implemented.");
    }

}