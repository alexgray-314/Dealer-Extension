import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";

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
 * This interface defines a complete listener for a parse tree produced by
 * `dealParser`.
 */
export class dealListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `dealParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.player`.
     * @param ctx the parse tree
     */
    enterPlayer?: (ctx: PlayerContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.player`.
     * @param ctx the parse tree
     */
    exitPlayer?: (ctx: PlayerContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.definition`.
     * @param ctx the parse tree
     */
    enterDefinition?: (ctx: DefinitionContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.definition`.
     * @param ctx the parse tree
     */
    exitDefinition?: (ctx: DefinitionContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.define_function`.
     * @param ctx the parse tree
     */
    enterDefine_function?: (ctx: Define_functionContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.define_function`.
     * @param ctx the parse tree
     */
    exitDefine_function?: (ctx: Define_functionContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.argdef`.
     * @param ctx the parse tree
     */
    enterArgdef?: (ctx: ArgdefContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.argdef`.
     * @param ctx the parse tree
     */
    exitArgdef?: (ctx: ArgdefContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.move`.
     * @param ctx the parse tree
     */
    enterMove?: (ctx: MoveContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.move`.
     * @param ctx the parse tree
     */
    exitMove?: (ctx: MoveContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.source`.
     * @param ctx the parse tree
     */
    enterSource?: (ctx: SourceContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.source`.
     * @param ctx the parse tree
     */
    exitSource?: (ctx: SourceContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.destination`.
     * @param ctx the parse tree
     */
    enterDestination?: (ctx: DestinationContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.destination`.
     * @param ctx the parse tree
     */
    exitDestination?: (ctx: DestinationContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.on_action`.
     * @param ctx the parse tree
     */
    enterOn_action?: (ctx: On_actionContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.on_action`.
     * @param ctx the parse tree
     */
    exitOn_action?: (ctx: On_actionContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.on_move`.
     * @param ctx the parse tree
     */
    enterOn_move?: (ctx: On_moveContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.on_move`.
     * @param ctx the parse tree
     */
    exitOn_move?: (ctx: On_moveContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.on_interact`.
     * @param ctx the parse tree
     */
    enterOn_interact?: (ctx: On_interactContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.on_interact`.
     * @param ctx the parse tree
     */
    exitOn_interact?: (ctx: On_interactContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.for`.
     * @param ctx the parse tree
     */
    enterFor?: (ctx: ForContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.for`.
     * @param ctx the parse tree
     */
    exitFor?: (ctx: ForContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.if`.
     * @param ctx the parse tree
     */
    enterIf?: (ctx: IfContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.if`.
     * @param ctx the parse tree
     */
    exitIf?: (ctx: IfContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.cancel`.
     * @param ctx the parse tree
     */
    enterCancel?: (ctx: CancelContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.cancel`.
     * @param ctx the parse tree
     */
    exitCancel?: (ctx: CancelContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.assign`.
     * @param ctx the parse tree
     */
    enterAssign?: (ctx: AssignContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.assign`.
     * @param ctx the parse tree
     */
    exitAssign?: (ctx: AssignContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.function_call`.
     * @param ctx the parse tree
     */
    enterFunction_call?: (ctx: Function_callContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.function_call`.
     * @param ctx the parse tree
     */
    exitFunction_call?: (ctx: Function_callContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.updateTurn`.
     * @param ctx the parse tree
     */
    enterUpdateTurn?: (ctx: UpdateTurnContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.updateTurn`.
     * @param ctx the parse tree
     */
    exitUpdateTurn?: (ctx: UpdateTurnContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.log`.
     * @param ctx the parse tree
     */
    enterLog?: (ctx: LogContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.log`.
     * @param ctx the parse tree
     */
    exitLog?: (ctx: LogContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.modify`.
     * @param ctx the parse tree
     */
    enterModify?: (ctx: ModifyContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.modify`.
     * @param ctx the parse tree
     */
    exitModify?: (ctx: ModifyContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.show`.
     * @param ctx the parse tree
     */
    enterShow?: (ctx: ShowContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.show`.
     * @param ctx the parse tree
     */
    exitShow?: (ctx: ShowContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.config`.
     * @param ctx the parse tree
     */
    enterConfig?: (ctx: ConfigContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.config`.
     * @param ctx the parse tree
     */
    exitConfig?: (ctx: ConfigContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.attribute`.
     * @param ctx the parse tree
     */
    enterAttribute?: (ctx: AttributeContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.attribute`.
     * @param ctx the parse tree
     */
    exitAttribute?: (ctx: AttributeContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.atts`.
     * @param ctx the parse tree
     */
    enterAtts?: (ctx: AttsContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.atts`.
     * @param ctx the parse tree
     */
    exitAtts?: (ctx: AttsContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.variable`.
     * @param ctx the parse tree
     */
    enterVariable?: (ctx: VariableContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.variable`.
     * @param ctx the parse tree
     */
    exitVariable?: (ctx: VariableContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.args`.
     * @param ctx the parse tree
     */
    enterArgs?: (ctx: ArgsContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.args`.
     * @param ctx the parse tree
     */
    exitArgs?: (ctx: ArgsContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.arg`.
     * @param ctx the parse tree
     */
    enterArg?: (ctx: ArgContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.arg`.
     * @param ctx the parse tree
     */
    exitArg?: (ctx: ArgContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.arearef`.
     * @param ctx the parse tree
     */
    enterArearef?: (ctx: ArearefContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.arearef`.
     * @param ctx the parse tree
     */
    exitArearef?: (ctx: ArearefContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.area`.
     * @param ctx the parse tree
     */
    enterArea?: (ctx: AreaContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.area`.
     * @param ctx the parse tree
     */
    exitArea?: (ctx: AreaContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.stack`.
     * @param ctx the parse tree
     */
    enterStack?: (ctx: StackContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.stack`.
     * @param ctx the parse tree
     */
    exitStack?: (ctx: StackContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.position`.
     * @param ctx the parse tree
     */
    enterPosition?: (ctx: PositionContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.position`.
     * @param ctx the parse tree
     */
    exitPosition?: (ctx: PositionContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.term`.
     * @param ctx the parse tree
     */
    enterTerm?: (ctx: TermContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.term`.
     * @param ctx the parse tree
     */
    exitTerm?: (ctx: TermContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.primitives`.
     * @param ctx the parse tree
     */
    enterPrimitives?: (ctx: PrimitivesContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.primitives`.
     * @param ctx the parse tree
     */
    exitPrimitives?: (ctx: PrimitivesContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.bexpr`.
     * @param ctx the parse tree
     */
    enterBexpr?: (ctx: BexprContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.bexpr`.
     * @param ctx the parse tree
     */
    exitBexpr?: (ctx: BexprContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.set`.
     * @param ctx the parse tree
     */
    enterSet?: (ctx: SetContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.set`.
     * @param ctx the parse tree
     */
    exitSet?: (ctx: SetContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.intset`.
     * @param ctx the parse tree
     */
    enterIntset?: (ctx: IntsetContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.intset`.
     * @param ctx the parse tree
     */
    exitIntset?: (ctx: IntsetContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.positionset`.
     * @param ctx the parse tree
     */
    enterPositionset?: (ctx: PositionsetContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.positionset`.
     * @param ctx the parse tree
     */
    exitPositionset?: (ctx: PositionsetContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.playerset`.
     * @param ctx the parse tree
     */
    enterPlayerset?: (ctx: PlayersetContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.playerset`.
     * @param ctx the parse tree
     */
    exitPlayerset?: (ctx: PlayersetContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.object`.
     * @param ctx the parse tree
     */
    enterObject?: (ctx: ObjectContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.object`.
     * @param ctx the parse tree
     */
    exitObject?: (ctx: ObjectContext) => void;
    /**
     * Enter a parse tree produced by `dealParser.move_catch`.
     * @param ctx the parse tree
     */
    enterMove_catch?: (ctx: Move_catchContext) => void;
    /**
     * Exit a parse tree produced by `dealParser.move_catch`.
     * @param ctx the parse tree
     */
    exitMove_catch?: (ctx: Move_catchContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

