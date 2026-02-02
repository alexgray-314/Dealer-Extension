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
	public static readonly T__32 = 33;
	public static readonly COMMENT = 34;
	public static readonly SPACES = 35;
	public static readonly NEWLINE = 36;
	public static readonly NUMBER = 37;
	public static readonly ID = 38;
	public static readonly CARD = 39;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_player = 2;
	public static readonly RULE_assign = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_move = 5;
	public static readonly RULE_on_action = 6;
	public static readonly RULE_on_move = 7;
	public static readonly RULE_for = 8;
	public static readonly RULE_if = 9;
	public static readonly RULE_arearef = 10;
	public static readonly RULE_position = 11;
	public static readonly RULE_term = 12;
	public static readonly RULE_bexpr = 13;
	public static readonly RULE_aexpr = 14;
	public static readonly RULE_set = 15;
	public static readonly RULE_intset = 16;
	public static readonly RULE_positionset = 17;
	public static readonly RULE_playerset = 18;
	public static readonly RULE_move_catch = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "player", "assign", "definition", "move", "on_action", 
		"on_move", "for", "if", "arearef", "position", "term", "bexpr", "aexpr", 
		"set", "intset", "positionset", "playerset", "move_catch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cancel'", "';'", "'<'", "'/'", "'.'", "'@'", "'>'", "'='", 
		"'define'", "'area'", "'action'", "'int'", "'string'", "'move'", "'on'", 
		"'{'", "'}'", "'for'", "'in'", "'if'", "'else'", "'['", "','", "']'", 
		"'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", "':'", "'*'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "COMMENT", 
		"SPACES", "NEWLINE", "NUMBER", "ID", "CARD",
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 40;
				this.stmt();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, dealParser.RULE_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 48;
				this.definition();
				}
				break;

			case 2:
				{
				this.state = 49;
				this.move();
				}
				break;

			case 3:
				{
				this.state = 50;
				this.on_action();
				}
				break;

			case 4:
				{
				this.state = 51;
				this.on_move();
				}
				break;

			case 5:
				{
				this.state = 52;
				this.for();
				}
				break;

			case 6:
				{
				this.state = 53;
				this.if();
				}
				break;

			case 7:
				{
				this.state = 54;
				this.assign();
				}
				break;

			case 8:
				{
				this.state = 55;
				this.match(dealParser.T__0);
				}
				break;
			}
			this.state = 58;
			this.match(dealParser.T__1);
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
		this.enterRule(_localctx, 4, dealParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(dealParser.T__2);
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__3:
				{
				this.state = 61;
				this.match(dealParser.T__3);
				}
				break;
			case dealParser.T__4:
				{
				this.state = 62;
				this.match(dealParser.T__4);
				}
				break;
			case dealParser.T__5:
				{
				this.state = 63;
				this.match(dealParser.T__5);
				}
				break;
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 64;
				this.aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 67;
			this.match(dealParser.T__6);
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
			this.state = 69;
			this.match(dealParser.ID);
			this.state = 70;
			this.match(dealParser.T__7);
			this.state = 71;
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
			this.state = 73;
			this.match(dealParser.T__8);
			this.state = 74;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__9) | (1 << dealParser.T__10) | (1 << dealParser.T__11) | (1 << dealParser.T__12))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 75;
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
			this.state = 77;
			this.match(dealParser.T__13);
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.CARD:
				{
				this.state = 78;
				this.match(dealParser.CARD);
				}
				break;
			case dealParser.T__2:
			case dealParser.ID:
				{
				this.state = 79;
				this.position();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 82;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(dealParser.T__14);
			this.state = 85;
			this.match(dealParser.ID);
			this.state = 86;
			this.match(dealParser.T__15);
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 87;
				this.stmt();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this.match(dealParser.T__16);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(dealParser.T__14);
			this.state = 96;
			this.match(dealParser.T__13);
			this.state = 97;
			this.move_catch();
			this.state = 98;
			this.move_catch();
			this.state = 99;
			this.match(dealParser.T__15);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 100;
				this.stmt();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 106;
			this.match(dealParser.T__16);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(dealParser.T__17);
			this.state = 109;
			this.match(dealParser.ID);
			this.state = 110;
			this.match(dealParser.T__18);
			this.state = 111;
			this.set();
			this.state = 112;
			this.match(dealParser.T__15);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 113;
				this.stmt();
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this.match(dealParser.T__16);
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
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.match(dealParser.T__19);
				this.state = 122;
				this.bexpr();
				this.state = 123;
				this.match(dealParser.T__15);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 124;
					this.stmt();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 130;
				this.match(dealParser.T__16);
				this.state = 131;
				this.match(dealParser.T__20);
				this.state = 132;
				this.match(dealParser.T__15);
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 133;
					this.stmt();
					}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 139;
				this.match(dealParser.T__16);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.match(dealParser.T__19);
				this.state = 142;
				this.bexpr();
				this.state = 143;
				this.match(dealParser.T__15);
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 144;
					this.stmt();
					}
					}
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 150;
				this.match(dealParser.T__16);
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
	public arearef(): ArearefContext {
		let _localctx: ArearefContext = new ArearefContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dealParser.RULE_arearef);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
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
		this.enterRule(_localctx, 22, dealParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.arearef();
			this.state = 159;
			this.match(dealParser.T__21);
			this.state = 160;
			this.aexpr();
			this.state = 161;
			this.match(dealParser.T__22);
			this.state = 162;
			this.aexpr();
			this.state = 163;
			this.match(dealParser.T__23);
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
		this.enterRule(_localctx, 24, dealParser.RULE_term);
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.aexpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
				this.player();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 167;
				this.position();
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
		this.enterRule(_localctx, 26, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.term();
			this.state = 171;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__24) | (1 << dealParser.T__25) | (1 << dealParser.T__26) | (1 << dealParser.T__27) | (1 << dealParser.T__28) | (1 << dealParser.T__29))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 172;
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
		this.enterRule(_localctx, 28, dealParser.RULE_aexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
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
		this.enterRule(_localctx, 30, dealParser.RULE_set);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.intset();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.positionset();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 178;
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
		this.enterRule(_localctx, 32, dealParser.RULE_intset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.aexpr();
			this.state = 182;
			this.match(dealParser.T__30);
			this.state = 183;
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
		this.enterRule(_localctx, 34, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.arearef();
			this.state = 186;
			this.match(dealParser.T__21);
			this.state = 187;
			this.aexpr();
			this.state = 188;
			this.match(dealParser.T__30);
			this.state = 189;
			this.aexpr();
			this.state = 190;
			this.match(dealParser.T__22);
			this.state = 191;
			this.aexpr();
			this.state = 192;
			this.match(dealParser.T__30);
			this.state = 193;
			this.aexpr();
			this.state = 194;
			this.match(dealParser.T__23);
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
		this.enterRule(_localctx, 36, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(dealParser.T__2);
			this.state = 197;
			this.match(dealParser.T__31);
			this.state = 198;
			this.match(dealParser.T__6);
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
		this.enterRule(_localctx, 38, dealParser.RULE_move_catch);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__32:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.match(dealParser.T__32);
				}
				break;
			case dealParser.T__2:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xCF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x07\x02,\n\x02\f\x02\x0E" +
		"\x02/\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04D\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05" +
		"\x07S\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b[\n\b\f\b\x0E" +
		"\b^\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\th\n\t\f\t" +
		"\x0E\tk\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\nu\n\n" +
		"\f\n\x0E\nx\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\x80\n\v\f\v" +
		"\x0E\v\x83\v\v\x03\v\x03\v\x03\v\x03\v\x07\v\x89\n\v\f\v\x0E\v\x8C\v\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x94\n\v\f\v\x0E\v\x97\v\v\x03" +
		"\v\x03\v\x05\v\x9B\n\v\x03\f\x03\f\x05\f\x9F\n\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xAB\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\xB6\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xCD\n\x15\x03\x15\x02\x02" +
		"\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02\x02\x05\x03\x02\f\x0F\x03\x02\x1B \x03\x02\'(\x02\xD3\x02-\x03" +
		"\x02\x02\x02\x04:\x03\x02\x02\x02\x06>\x03\x02\x02\x02\bG\x03\x02\x02" +
		"\x02\nK\x03\x02\x02\x02\fO\x03\x02\x02\x02\x0EV\x03\x02\x02\x02\x10a\x03" +
		"\x02\x02\x02\x12n\x03\x02\x02\x02\x14\x9A\x03\x02\x02\x02\x16\x9E\x03" +
		"\x02\x02\x02\x18\xA0\x03\x02\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xAC\x03" +
		"\x02\x02\x02\x1E\xB0\x03\x02\x02\x02 \xB5\x03\x02\x02\x02\"\xB7\x03\x02" +
		"\x02\x02$\xBB\x03\x02\x02\x02&\xC6\x03\x02\x02\x02(\xCC\x03\x02\x02\x02" +
		"*,\x05\x04\x03\x02+*\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02" +
		"-.\x03\x02\x02\x02.0\x03\x02\x02\x02/-\x03\x02\x02\x0201\x07\x02\x02\x03" +
		"1\x03\x03\x02\x02\x022;\x05\n\x06\x023;\x05\f\x07\x024;\x05\x0E\b\x02" +
		"5;\x05\x10\t\x026;\x05\x12\n\x027;\x05\x14\v\x028;\x05\b\x05\x029;\x07" +
		"\x03\x02\x02:2\x03\x02\x02\x02:3\x03\x02\x02\x02:4\x03\x02\x02\x02:5\x03" +
		"\x02\x02\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02:8\x03\x02\x02\x02:9\x03" +
		"\x02\x02\x02;<\x03\x02\x02\x02<=\x07\x04\x02\x02=\x05\x03\x02\x02\x02" +
		">C\x07\x05\x02\x02?D\x07\x06\x02\x02@D\x07\x07\x02\x02AD\x07\b\x02\x02" +
		"BD\x05\x1E\x10\x02C?\x03\x02\x02\x02C@\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"CB\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x07\t\x02\x02F\x07\x03\x02\x02" +
		"\x02GH\x07(\x02\x02HI\x07\n\x02\x02IJ\x05\x1A\x0E\x02J\t\x03\x02\x02\x02" +
		"KL\x07\v\x02\x02LM\t\x02\x02\x02MN\x07(\x02\x02N\v\x03\x02\x02\x02OR\x07" +
		"\x10\x02\x02PS\x07)\x02\x02QS\x05\x18\r\x02RP\x03\x02\x02\x02RQ\x03\x02" +
		"\x02\x02ST\x03\x02\x02\x02TU\x05\x18\r\x02U\r\x03\x02\x02\x02VW\x07\x11" +
		"\x02\x02WX\x07(\x02\x02X\\\x07\x12\x02\x02Y[\x05\x04\x03\x02ZY\x03\x02" +
		"\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03" +
		"\x02\x02\x02^\\\x03\x02\x02\x02_`\x07\x13\x02\x02`\x0F\x03\x02\x02\x02" +
		"ab\x07\x11\x02\x02bc\x07\x10\x02\x02cd\x05(\x15\x02de\x05(\x15\x02ei\x07" +
		"\x12\x02\x02fh\x05\x04\x03\x02gf\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02\x02\x02lm\x07" +
		"\x13\x02\x02m\x11\x03\x02\x02\x02no\x07\x14\x02\x02op\x07(\x02\x02pq\x07" +
		"\x15\x02\x02qr\x05 \x11\x02rv\x07\x12\x02\x02su\x05\x04\x03\x02ts\x03" +
		"\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03" +
		"\x02\x02\x02xv\x03\x02\x02\x02yz\x07\x13\x02\x02z\x13\x03\x02\x02\x02" +
		"{|\x07\x16\x02\x02|}\x05\x1C\x0F\x02}\x81\x07\x12\x02\x02~\x80\x05\x04" +
		"\x03\x02\x7F~\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02" +
		"\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02" +
		"\x02\x02\x84\x85\x07\x13\x02\x02\x85\x86\x07\x17\x02\x02\x86\x8A\x07\x12" +
		"\x02\x02\x87\x89\x05\x04\x03\x02\x88\x87\x03\x02\x02\x02\x89\x8C\x03\x02" +
		"\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02" +
		"\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x8E\x07\x13\x02\x02\x8E\x9B\x03\x02" +
		"\x02\x02\x8F\x90\x07\x16\x02\x02\x90\x91\x05\x1C\x0F\x02\x91\x95\x07\x12" +
		"\x02\x02\x92\x94\x05\x04\x03\x02\x93\x92\x03\x02\x02\x02\x94\x97\x03\x02" +
		"\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x03\x02" +
		"\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07\x13\x02\x02\x99\x9B\x03\x02" +
		"\x02\x02\x9A{\x03\x02\x02\x02\x9A\x8F\x03\x02\x02\x02\x9B\x15\x03\x02" +
		"\x02\x02\x9C\x9F\x07(\x02\x02\x9D\x9F\x05\x06\x04\x02\x9E\x9C\x03\x02" +
		"\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\x17\x03\x02\x02\x02\xA0\xA1\x05\x16" +
		"\f\x02\xA1\xA2\x07\x18\x02\x02\xA2\xA3\x05\x1E\x10\x02\xA3\xA4\x07\x19" +
		"\x02\x02\xA4\xA5\x05\x1E\x10\x02\xA5\xA6\x07\x1A\x02\x02\xA6\x19\x03\x02" +
		"\x02\x02\xA7\xAB\x05\x1E\x10\x02\xA8\xAB\x05\x06\x04\x02\xA9\xAB\x05\x18" +
		"\r\x02\xAA\xA7\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xA9\x03\x02" +
		"\x02\x02\xAB\x1B\x03\x02\x02\x02\xAC\xAD\x05\x1A\x0E\x02\xAD\xAE\t\x03" +
		"\x02\x02\xAE\xAF\x05\x1A\x0E\x02\xAF\x1D\x03\x02\x02\x02\xB0\xB1\t\x04" +
		"\x02\x02\xB1\x1F\x03\x02\x02\x02\xB2\xB6\x05\"\x12\x02\xB3\xB6\x05$\x13" +
		"\x02\xB4\xB6\x05&\x14\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3\x03\x02\x02" +
		"\x02\xB5\xB4\x03\x02\x02\x02\xB6!\x03\x02\x02\x02\xB7\xB8\x05\x1E\x10" +
		"\x02\xB8\xB9\x07!\x02\x02\xB9\xBA\x05\x1E\x10\x02\xBA#\x03\x02\x02\x02" +
		"\xBB\xBC\x05\x16\f\x02\xBC\xBD\x07\x18\x02\x02\xBD\xBE\x05\x1E\x10\x02" +
		"\xBE\xBF\x07!\x02\x02\xBF\xC0\x05\x1E\x10\x02\xC0\xC1\x07\x19\x02\x02" +
		"\xC1\xC2\x05\x1E\x10\x02\xC2\xC3\x07!\x02\x02\xC3\xC4\x05\x1E\x10\x02" +
		"\xC4\xC5\x07\x1A\x02\x02\xC5%\x03\x02\x02\x02\xC6\xC7\x07\x05\x02\x02" +
		"\xC7\xC8\x07\"\x02\x02\xC8\xC9\x07\t\x02\x02\xC9\'\x03\x02\x02\x02\xCA" +
		"\xCD\x07#\x02\x02\xCB\xCD\x05\x18\r\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB" +
		"\x03\x02\x02\x02\xCD)\x03\x02\x02\x02\x11-:CR\\iv\x81\x8A\x95\x9A\x9E" +
		"\xAA\xB5\xCC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dealParser.__ATN) {
			dealParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dealParser._serializedATN));
		}

		return dealParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(dealParser.EOF, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
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
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
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
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
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
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
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
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
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
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
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


