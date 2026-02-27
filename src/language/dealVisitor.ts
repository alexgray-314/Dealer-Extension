
import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./dealParser.js";
import { StmtContext } from "./dealParser.js";
import { BlockContext } from "./dealParser.js";
import { PlayerContext } from "./dealParser.js";
import { DefinitionContext } from "./dealParser.js";
import { Define_functionContext } from "./dealParser.js";
import { ArgdefContext } from "./dealParser.js";
import { MoveContext } from "./dealParser.js";
import { SourceContext } from "./dealParser.js";
import { DestinationContext } from "./dealParser.js";
import { On_actionContext } from "./dealParser.js";
import { On_moveContext } from "./dealParser.js";
import { On_interactContext } from "./dealParser.js";
import { ForContext } from "./dealParser.js";
import { IfContext } from "./dealParser.js";
import { CancelContext } from "./dealParser.js";
import { AssignContext } from "./dealParser.js";
import { Function_callContext } from "./dealParser.js";
import { UpdateTurnContext } from "./dealParser.js";
import { LogContext } from "./dealParser.js";
import { ModifyContext } from "./dealParser.js";
import { ShowContext } from "./dealParser.js";
import { ConfigContext } from "./dealParser.js";
import { AttributeContext } from "./dealParser.js";
import { AttsContext } from "./dealParser.js";
import { VariableContext } from "./dealParser.js";
import { ArgsContext } from "./dealParser.js";
import { ArgContext } from "./dealParser.js";
import { ArearefContext } from "./dealParser.js";
import { AreaContext } from "./dealParser.js";
import { StackContext } from "./dealParser.js";
import { PositionContext } from "./dealParser.js";
import { TermContext } from "./dealParser.js";
import { PropertyContext } from "./dealParser.js";
import { PrimitivesContext } from "./dealParser.js";
import { BexprContext } from "./dealParser.js";
import { SetContext } from "./dealParser.js";
import { IntsetContext } from "./dealParser.js";
import { PositionsetContext } from "./dealParser.js";
import { PlayersetContext } from "./dealParser.js";
import { ObjectContext } from "./dealParser.js";
import { Move_catchContext } from "./dealParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `dealParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class dealVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `dealParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.player`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlayer?: (ctx: PlayerContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinition?: (ctx: DefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.define_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefine_function?: (ctx: Define_functionContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.argdef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgdef?: (ctx: ArgdefContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove?: (ctx: MoveContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.source`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSource?: (ctx: SourceContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.destination`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDestination?: (ctx: DestinationContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.on_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_action?: (ctx: On_actionContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.on_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_move?: (ctx: On_moveContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.on_interact`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_interact?: (ctx: On_interactContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor?: (ctx: ForContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf?: (ctx: IfContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.cancel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancel?: (ctx: CancelContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.assign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign?: (ctx: AssignContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.function_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_call?: (ctx: Function_callContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.updateTurn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTurn?: (ctx: UpdateTurnContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.log`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLog?: (ctx: LogContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.modify`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify?: (ctx: ModifyContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.show`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShow?: (ctx: ShowContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.config`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfig?: (ctx: ConfigContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.attribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute?: (ctx: AttributeContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.atts`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtts?: (ctx: AttsContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable?: (ctx: VariableContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgs?: (ctx: ArgsContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArg?: (ctx: ArgContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.arearef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArearef?: (ctx: ArearefContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.area`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArea?: (ctx: AreaContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.stack`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStack?: (ctx: StackContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.position`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition?: (ctx: PositionContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.term`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTerm?: (ctx: TermContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.primitives`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitives?: (ctx: PrimitivesContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.bexpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBexpr?: (ctx: BexprContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet?: (ctx: SetContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.intset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntset?: (ctx: IntsetContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.positionset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPositionset?: (ctx: PositionsetContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.playerset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlayerset?: (ctx: PlayersetContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.object`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject?: (ctx: ObjectContext) => Result;
    /**
     * Visit a parse tree produced by `dealParser.move_catch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_catch?: (ctx: Move_catchContext) => Result;
}

