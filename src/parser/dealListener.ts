// Generated from deal.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./dealParser";
import { StmtContext } from "./dealParser";
import { DefinitionContext } from "./dealParser";
import { MoveContext } from "./dealParser";
import { PositionContext } from "./dealParser";


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
	 * Enter a parse tree produced by `dealParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;
}

