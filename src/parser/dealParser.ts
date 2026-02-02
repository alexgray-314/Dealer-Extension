// Generated from deal.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { dealListener } from "./dealListener";

export class dealParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly COMMENT = 33;
	public static readonly SPACES = 34;
	public static readonly NEWLINE = 35;
	public static readonly SEMI_COLON = 36;
	public static readonly NUMBER = 37;
	public static readonly ID = 38;
	public static readonly CARD = 39;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmts = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_assign = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_move = 5;
	public static readonly RULE_on_action = 6;
	public static readonly RULE_on_move = 7;
	public static readonly RULE_for = 8;
	public static readonly RULE_if = 9;
	public static readonly RULE_player = 10;
	public static readonly RULE_arearef = 11;
	public static readonly RULE_position = 12;
	public static readonly RULE_term = 13;
	public static readonly RULE_bexpr = 14;
	public static readonly RULE_aexpr = 15;
	public static readonly RULE_set = 16;
	public static readonly RULE_intset = 17;
	public static readonly RULE_positionset = 18;
	public static readonly RULE_playerset = 19;
	public static readonly RULE_move_catch = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmts", "stmt", "assign", "definition", "move", "on_action", 
		"on_move", "for", "if", "player", "arearef", "position", "term", "bexpr", 
		"aexpr", "set", "intset", "positionset", "playerset", "move_catch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cancel'", "'='", "'define'", "'area'", "'action'", "'int'", 
		"'string'", "'move'", "'on'", "'{'", "'}'", "'for'", "'in'", "'if'", "'else'", 
		"'<'", "'/'", "'.'", "'@'", "'>'", "'['", "','", "']'", "'=='", "'!='", 
		"'<<'", "'<='", "'>='", "'>>'", "':'", "'*'", "'?'", undefined, undefined, 
		undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "COMMENT", "SPACES", 
		"NEWLINE", "SEMI_COLON", "NUMBER", "ID", "CARD",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(dealParser._LITERAL_NAMES, dealParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return dealParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "deal.g4"; }

	// @Override
	public get ruleNames(): string[] { return dealParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return dealParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(dealParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, dealParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.stmts();
			this.state = 43;
			this.match(dealParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmts(): StmtsContext {
		let _localctx: StmtsContext = new StmtsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, dealParser.RULE_stmts);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__0:
			case dealParser.T__2:
			case dealParser.T__7:
			case dealParser.T__8:
			case dealParser.T__11:
			case dealParser.T__13:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 45;
				this.stmt();
				this.state = 46;
				this.stmts();
				}
				break;
			case dealParser.EOF:
			case dealParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, dealParser.RULE_stmt);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.definition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.move();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 53;
				this.on_action();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 54;
				this.on_move();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 55;
				this.for();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 56;
				this.if();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 57;
				this.assign();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 58;
				this.match(dealParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, dealParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(dealParser.ID);
			this.state = 62;
			this.match(dealParser.T__1);
			this.state = 63;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, dealParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(dealParser.T__2);
			this.state = 66;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__3) | (1 << dealParser.T__4) | (1 << dealParser.T__5) | (1 << dealParser.T__6))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 67;
			this.match(dealParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move(): MoveContext {
		let _localctx: MoveContext = new MoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, dealParser.RULE_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(dealParser.T__7);
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.CARD:
				{
				this.state = 70;
				this.match(dealParser.CARD);
				}
				break;
			case dealParser.T__15:
			case dealParser.ID:
				{
				this.state = 71;
				this.position();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 74;
			this.position();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public on_action(): On_actionContext {
		let _localctx: On_actionContext = new On_actionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, dealParser.RULE_on_action);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(dealParser.T__8);
			this.state = 77;
			this.match(dealParser.ID);
			this.state = 78;
			this.match(dealParser.T__9);
			this.state = 79;
			this.stmts();
			this.state = 80;
			this.match(dealParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public on_move(): On_moveContext {
		let _localctx: On_moveContext = new On_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, dealParser.RULE_on_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(dealParser.T__8);
			this.state = 83;
			this.match(dealParser.T__7);
			this.state = 84;
			this.move_catch();
			this.state = 85;
			this.move_catch();
			this.state = 86;
			this.match(dealParser.T__9);
			this.state = 87;
			this.stmts();
			this.state = 88;
			this.match(dealParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for(): ForContext {
		let _localctx: ForContext = new ForContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, dealParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(dealParser.T__11);
			this.state = 91;
			this.match(dealParser.ID);
			this.state = 92;
			this.match(dealParser.T__12);
			this.state = 93;
			this.set();
			this.state = 94;
			this.match(dealParser.T__9);
			this.state = 95;
			this.stmts();
			this.state = 96;
			this.match(dealParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if(): IfContext {
		let _localctx: IfContext = new IfContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, dealParser.RULE_if);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.match(dealParser.T__13);
				this.state = 99;
				this.bexpr();
				this.state = 100;
				this.match(dealParser.T__9);
				this.state = 101;
				this.stmts();
				this.state = 102;
				this.match(dealParser.T__10);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.match(dealParser.T__13);
				this.state = 105;
				this.bexpr();
				this.state = 106;
				this.match(dealParser.T__9);
				this.state = 107;
				this.stmts();
				this.state = 108;
				this.match(dealParser.T__10);
				this.state = 109;
				this.match(dealParser.T__14);
				this.state = 110;
				this.match(dealParser.T__9);
				this.state = 111;
				this.stmts();
				this.state = 112;
				this.match(dealParser.T__10);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public player(): PlayerContext {
		let _localctx: PlayerContext = new PlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dealParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(dealParser.T__15);
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 117;
				this.aexpr();
				}
				break;
			case dealParser.T__16:
				{
				this.state = 118;
				this.match(dealParser.T__16);
				}
				break;
			case dealParser.T__17:
				{
				this.state = 119;
				this.match(dealParser.T__17);
				}
				break;
			case dealParser.T__18:
				{
				this.state = 120;
				this.match(dealParser.T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 123;
			this.match(dealParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arearef(): ArearefContext {
		let _localctx: ArearefContext = new ArearefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, dealParser.RULE_arearef);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.player();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, dealParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.arearef();
			this.state = 130;
			this.match(dealParser.T__20);
			this.state = 131;
			this.aexpr();
			this.state = 132;
			this.match(dealParser.T__21);
			this.state = 133;
			this.aexpr();
			this.state = 134;
			this.match(dealParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, dealParser.RULE_term);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.aexpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.position();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this.match(dealParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bexpr(): BexprContext {
		let _localctx: BexprContext = new BexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.term();
			this.state = 142;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__23) | (1 << dealParser.T__24) | (1 << dealParser.T__25) | (1 << dealParser.T__26) | (1 << dealParser.T__27) | (1 << dealParser.T__28))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 143;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aexpr(): AexprContext {
		let _localctx: AexprContext = new AexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, dealParser.RULE_aexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			_la = this._input.LA(1);
			if (!(_la === dealParser.NUMBER || _la === dealParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, dealParser.RULE_set);
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.intset();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.positionset();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 149;
				this.playerset();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intset(): IntsetContext {
		let _localctx: IntsetContext = new IntsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, dealParser.RULE_intset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.aexpr();
			this.state = 153;
			this.match(dealParser.T__29);
			this.state = 154;
			this.aexpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public positionset(): PositionsetContext {
		let _localctx: PositionsetContext = new PositionsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.arearef();
			this.state = 157;
			this.match(dealParser.T__20);
			this.state = 158;
			this.aexpr();
			this.state = 159;
			this.match(dealParser.T__29);
			this.state = 160;
			this.aexpr();
			this.state = 161;
			this.match(dealParser.T__21);
			this.state = 162;
			this.aexpr();
			this.state = 163;
			this.match(dealParser.T__29);
			this.state = 164;
			this.aexpr();
			this.state = 165;
			this.match(dealParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public playerset(): PlayersetContext {
		let _localctx: PlayersetContext = new PlayersetContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(dealParser.T__15);
			this.state = 168;
			this.match(dealParser.T__30);
			this.state = 169;
			this.match(dealParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move_catch(): Move_catchContext {
		let _localctx: Move_catchContext = new Move_catchContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, dealParser.RULE_move_catch);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__31:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this.match(dealParser.T__31);
				}
				break;
			case dealParser.T__15:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				this.position();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xB2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x05\x07K\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vu\n\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f|\n\f\x03\f\x03\f\x03\r\x03\r\x05\r\x82\n\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\x8E\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x05\x12\x99\n\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x05\x16\xB0\n\x16\x03\x16\x02\x02\x02\x17\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02\x05\x03\x02\x06\t\x03" +
		"\x02\x1A\x1F\x03\x02\'(\x02\xAF\x02,\x03\x02\x02\x02\x043\x03\x02\x02" +
		"\x02\x06=\x03\x02\x02\x02\b?\x03\x02\x02\x02\nC\x03\x02\x02\x02\fG\x03" +
		"\x02\x02\x02\x0EN\x03\x02\x02\x02\x10T\x03\x02\x02\x02\x12\\\x03\x02\x02" +
		"\x02\x14t\x03\x02\x02\x02\x16v\x03\x02\x02\x02\x18\x81\x03\x02\x02\x02" +
		"\x1A\x83\x03\x02\x02\x02\x1C\x8D\x03\x02\x02\x02\x1E\x8F\x03\x02\x02\x02" +
		" \x93\x03\x02\x02\x02\"\x98\x03\x02\x02\x02$\x9A\x03\x02\x02\x02&\x9E" +
		"\x03\x02\x02\x02(\xA9\x03\x02\x02\x02*\xAF\x03\x02\x02\x02,-\x05\x04\x03" +
		"\x02-.\x07\x02\x02\x03.\x03\x03\x02\x02\x02/0\x05\x06\x04\x0201\x05\x04" +
		"\x03\x0214\x03\x02\x02\x0224\x03\x02\x02\x023/\x03\x02\x02\x0232\x03\x02" +
		"\x02\x024\x05\x03\x02\x02\x025>\x05\n\x06\x026>\x05\f\x07\x027>\x05\x0E" +
		"\b\x028>\x05\x10\t\x029>\x05\x12\n\x02:>\x05\x14\v\x02;>\x05\b\x05\x02" +
		"<>\x07\x03\x02\x02=5\x03\x02\x02\x02=6\x03\x02\x02\x02=7\x03\x02\x02\x02" +
		"=8\x03\x02\x02\x02=9\x03\x02\x02\x02=:\x03\x02\x02\x02=;\x03\x02\x02\x02" +
		"=<\x03\x02\x02\x02>\x07\x03\x02\x02\x02?@\x07(\x02\x02@A\x07\x04\x02\x02" +
		"AB\x05\x1C\x0F\x02B\t\x03\x02\x02\x02CD\x07\x05\x02\x02DE\t\x02\x02\x02" +
		"EF\x07(\x02\x02F\v\x03\x02\x02\x02GJ\x07\n\x02\x02HK\x07)\x02\x02IK\x05" +
		"\x1A\x0E\x02JH\x03\x02\x02\x02JI\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x05" +
		"\x1A\x0E\x02M\r\x03\x02\x02\x02NO\x07\v\x02\x02OP\x07(\x02\x02PQ\x07\f" +
		"\x02\x02QR\x05\x04\x03\x02RS\x07\r\x02\x02S\x0F\x03\x02\x02\x02TU\x07" +
		"\v\x02\x02UV\x07\n\x02\x02VW\x05*\x16\x02WX\x05*\x16\x02XY\x07\f\x02\x02" +
		"YZ\x05\x04\x03\x02Z[\x07\r\x02\x02[\x11\x03\x02\x02\x02\\]\x07\x0E\x02" +
		"\x02]^\x07(\x02\x02^_\x07\x0F\x02\x02_`\x05\"\x12\x02`a\x07\f\x02\x02" +
		"ab\x05\x04\x03\x02bc\x07\r\x02\x02c\x13\x03\x02\x02\x02de\x07\x10\x02" +
		"\x02ef\x05\x1E\x10\x02fg\x07\f\x02\x02gh\x05\x04\x03\x02hi\x07\r\x02\x02" +
		"iu\x03\x02\x02\x02jk\x07\x10\x02\x02kl\x05\x1E\x10\x02lm\x07\f\x02\x02" +
		"mn\x05\x04\x03\x02no\x07\r\x02\x02op\x07\x11\x02\x02pq\x07\f\x02\x02q" +
		"r\x05\x04\x03\x02rs\x07\r\x02\x02su\x03\x02\x02\x02td\x03\x02\x02\x02" +
		"tj\x03\x02\x02\x02u\x15\x03\x02\x02\x02v{\x07\x12\x02\x02w|\x05 \x11\x02" +
		"x|\x07\x13\x02\x02y|\x07\x14\x02\x02z|\x07\x15\x02\x02{w\x03\x02\x02\x02" +
		"{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}~\x07\x16\x02\x02~\x17\x03\x02\x02\x02\x7F\x82\x07(\x02\x02\x80\x82\x05" +
		"\x16\f\x02\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x19\x03" +
		"\x02\x02\x02\x83\x84\x05\x18\r\x02\x84\x85\x07\x17\x02\x02\x85\x86\x05" +
		" \x11\x02\x86\x87\x07\x18\x02\x02\x87\x88\x05 \x11\x02\x88\x89\x07\x19" +
		"\x02\x02\x89\x1B\x03\x02\x02\x02\x8A\x8E\x05 \x11\x02\x8B\x8E\x05\x1A" +
		"\x0E\x02\x8C\x8E\x07(\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8B\x03\x02" +
		"\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x1D\x03\x02\x02\x02\x8F\x90\x05\x1C" +
		"\x0F\x02\x90\x91\t\x03\x02\x02\x91\x92\x05\x1C\x0F\x02\x92\x1F\x03\x02" +
		"\x02\x02\x93\x94\t\x04\x02\x02\x94!\x03\x02\x02\x02\x95\x99\x05$\x13\x02" +
		"\x96\x99\x05&\x14\x02\x97\x99\x05(\x15\x02\x98\x95\x03\x02\x02\x02\x98" +
		"\x96\x03\x02\x02\x02\x98\x97\x03\x02\x02\x02\x99#\x03\x02\x02\x02\x9A" +
		"\x9B\x05 \x11\x02\x9B\x9C\x07 \x02\x02\x9C\x9D\x05 \x11\x02\x9D%\x03\x02" +
		"\x02\x02\x9E\x9F\x05\x18\r\x02\x9F\xA0\x07\x17\x02\x02\xA0\xA1\x05 \x11" +
		"\x02\xA1\xA2\x07 \x02\x02\xA2\xA3\x05 \x11\x02\xA3\xA4\x07\x18\x02\x02" +
		"\xA4\xA5\x05 \x11\x02\xA5\xA6\x07 \x02\x02\xA6\xA7\x05 \x11\x02\xA7\xA8" +
		"\x07\x19\x02\x02\xA8\'\x03\x02\x02\x02\xA9\xAA\x07\x12\x02\x02\xAA\xAB" +
		"\x07!\x02\x02\xAB\xAC\x07\x16\x02\x02\xAC)\x03\x02\x02\x02\xAD\xB0\x07" +
		"\"\x02\x02\xAE\xB0\x05\x1A\x0E\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03" +
		"\x02\x02\x02\xB0+\x03\x02\x02\x02\v3=Jt{\x81\x8D\x98\xAF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dealParser.__ATN) {
			dealParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dealParser._serializedATN));
		}

		return dealParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public stmts(): StmtsContext {
		return this.getRuleContext(0, StmtsContext);
	}
	public EOF(): TerminalNode { return this.getToken(dealParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_prog; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class StmtsContext extends ParserRuleContext {
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public stmts(): StmtsContext | undefined {
		return this.tryGetRuleContext(0, StmtsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_stmts; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterStmts) {
			listener.enterStmts(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitStmts) {
			listener.exitStmts(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public move(): MoveContext | undefined {
		return this.tryGetRuleContext(0, MoveContext);
	}
	public on_action(): On_actionContext | undefined {
		return this.tryGetRuleContext(0, On_actionContext);
	}
	public on_move(): On_moveContext | undefined {
		return this.tryGetRuleContext(0, On_moveContext);
	}
	public for(): ForContext | undefined {
		return this.tryGetRuleContext(0, ForContext);
	}
	public if(): IfContext | undefined {
		return this.tryGetRuleContext(0, IfContext);
	}
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_stmt; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_assign; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_definition; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public position(): PositionContext[];
	public position(i: number): PositionContext;
	public position(i?: number): PositionContext | PositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PositionContext);
		} else {
			return this.getRuleContext(i, PositionContext);
		}
	}
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_move; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterMove) {
			listener.enterMove(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitMove) {
			listener.exitMove(this);
		}
	}
}


export class On_actionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public stmts(): StmtsContext {
		return this.getRuleContext(0, StmtsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_on_action; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterOn_action) {
			listener.enterOn_action(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitOn_action) {
			listener.exitOn_action(this);
		}
	}
}


export class On_moveContext extends ParserRuleContext {
	public move_catch(): Move_catchContext[];
	public move_catch(i: number): Move_catchContext;
	public move_catch(i?: number): Move_catchContext | Move_catchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Move_catchContext);
		} else {
			return this.getRuleContext(i, Move_catchContext);
		}
	}
	public stmts(): StmtsContext {
		return this.getRuleContext(0, StmtsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_on_move; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterOn_move) {
			listener.enterOn_move(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitOn_move) {
			listener.exitOn_move(this);
		}
	}
}


export class ForContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public set(): SetContext {
		return this.getRuleContext(0, SetContext);
	}
	public stmts(): StmtsContext {
		return this.getRuleContext(0, StmtsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_for; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterFor) {
			listener.enterFor(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitFor) {
			listener.exitFor(this);
		}
	}
}


export class IfContext extends ParserRuleContext {
	public bexpr(): BexprContext {
		return this.getRuleContext(0, BexprContext);
	}
	public stmts(): StmtsContext[];
	public stmts(i: number): StmtsContext;
	public stmts(i?: number): StmtsContext | StmtsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtsContext);
		} else {
			return this.getRuleContext(i, StmtsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_if; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterIf) {
			listener.enterIf(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitIf) {
			listener.exitIf(this);
		}
	}
}


export class PlayerContext extends ParserRuleContext {
	public aexpr(): AexprContext | undefined {
		return this.tryGetRuleContext(0, AexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_player; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPlayer) {
			listener.enterPlayer(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPlayer) {
			listener.exitPlayer(this);
		}
	}
}


export class ArearefContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(dealParser.ID, 0); }
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_arearef; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArearef) {
			listener.enterArearef(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArearef) {
			listener.exitArearef(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	public aexpr(): AexprContext[];
	public aexpr(i: number): AexprContext;
	public aexpr(i?: number): AexprContext | AexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AexprContext);
		} else {
			return this.getRuleContext(i, AexprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_position; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public aexpr(): AexprContext | undefined {
		return this.tryGetRuleContext(0, AexprContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(dealParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_term; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class BexprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_bexpr; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterBexpr) {
			listener.enterBexpr(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitBexpr) {
			listener.exitBexpr(this);
		}
	}
}


export class AexprContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(dealParser.ID, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(dealParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_aexpr; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterAexpr) {
			listener.enterAexpr(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitAexpr) {
			listener.exitAexpr(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public intset(): IntsetContext | undefined {
		return this.tryGetRuleContext(0, IntsetContext);
	}
	public positionset(): PositionsetContext | undefined {
		return this.tryGetRuleContext(0, PositionsetContext);
	}
	public playerset(): PlayersetContext | undefined {
		return this.tryGetRuleContext(0, PlayersetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_set; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
}


export class IntsetContext extends ParserRuleContext {
	public aexpr(): AexprContext[];
	public aexpr(i: number): AexprContext;
	public aexpr(i?: number): AexprContext | AexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AexprContext);
		} else {
			return this.getRuleContext(i, AexprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_intset; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterIntset) {
			listener.enterIntset(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitIntset) {
			listener.exitIntset(this);
		}
	}
}


export class PositionsetContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	public aexpr(): AexprContext[];
	public aexpr(i: number): AexprContext;
	public aexpr(i?: number): AexprContext | AexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AexprContext);
		} else {
			return this.getRuleContext(i, AexprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_positionset; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPositionset) {
			listener.enterPositionset(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPositionset) {
			listener.exitPositionset(this);
		}
	}
}


export class PlayersetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_playerset; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPlayerset) {
			listener.enterPlayerset(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPlayerset) {
			listener.exitPlayerset(this);
		}
	}
}


export class Move_catchContext extends ParserRuleContext {
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_move_catch; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterMove_catch) {
			listener.enterMove_catch(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitMove_catch) {
			listener.exitMove_catch(this);
		}
	}
}


