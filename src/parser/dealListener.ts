// Generated from deal.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./dealParser";
import { StmtsContext } from "./dealParser";
import { StmtContext } from "./dealParser";
import { DefinitionContext } from "./dealParser";
import { MoveContext } from "./dealParser";
import { On_actionContext } from "./dealParser";
import { On_moveContext } from "./dealParser";
import { ForContext } from "./dealParser";
import { IfContext } from "./dealParser";
import { PlayerContext } from "./dealParser";
import { ArearefContext } from "./dealParser";
import { PositionContext } from "./dealParser";
import { TermContext } from "./dealParser";
import { BexprContext } from "./dealParser";
import { SetContext } from "./dealParser";
import { IntsetContext } from "./dealParser";
import { Move_catchContext } from "./dealParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `dealParser`.
 */
export interface dealListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `dealParser.stmts`.
	 * @param ctx the parse tree
	 */
	enterStmts?: (ctx: StmtsContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.stmts`.
	 * @param ctx the parse tree
	 */
	exitStmts?: (ctx: StmtsContext) => void;

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
	 * Enter a parse tree produced by `dealParser.move_catch`.
	 * @param ctx the parse tree
	 */
	enterMove_catch?: (ctx: Move_catchContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.move_catch`.
	 * @param ctx the parse tree
	 */
	exitMove_catch?: (ctx: Move_catchContext) => void;
}

