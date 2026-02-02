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
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly COMMENT = 37;
	public static readonly SPACES = 38;
	public static readonly NEWLINE = 39;
	public static readonly NUMBER = 40;
	public static readonly ID = 41;
	public static readonly CARD = 42;
	public static readonly STRING = 43;
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
	public static readonly RULE_args = 10;
	public static readonly RULE_arg = 11;
	public static readonly RULE_arearef = 12;
	public static readonly RULE_position = 13;
	public static readonly RULE_term = 14;
	public static readonly RULE_property = 15;
	public static readonly RULE_bexpr = 16;
	public static readonly RULE_aexpr = 17;
	public static readonly RULE_set = 18;
	public static readonly RULE_intset = 19;
	public static readonly RULE_positionset = 20;
	public static readonly RULE_playerset = 21;
	public static readonly RULE_move_catch = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "player", "assign", "definition", "move", "on_action", 
		"on_move", "for", "if", "args", "arg", "arearef", "position", "term", 
		"property", "bexpr", "aexpr", "set", "intset", "positionset", "playerset", 
		"move_catch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cancel'", "';'", "'<'", "'/'", "'.'", "'@'", "'>'", "'='", 
		"'define'", "'area'", "'action'", "'int'", "'card'", "'move'", "'on'", 
		"'{'", "'}'", "'for'", "'in'", "'if'", "'else'", "'('", "','", "')'", 
		"':'", "'['", "']'", "'\\'", "'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", 
		"'*'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "COMMENT", "SPACES", "NEWLINE", "NUMBER", "ID", 
		"CARD", "STRING",
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
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 46;
				this.stmt();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
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
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 54;
				this.definition();
				}
				break;

			case 2:
				{
				this.state = 55;
				this.move();
				}
				break;

			case 3:
				{
				this.state = 56;
				this.on_action();
				}
				break;

			case 4:
				{
				this.state = 57;
				this.on_move();
				}
				break;

			case 5:
				{
				this.state = 58;
				this.for();
				}
				break;

			case 6:
				{
				this.state = 59;
				this.if();
				}
				break;

			case 7:
				{
				this.state = 60;
				this.assign();
				}
				break;

			case 8:
				{
				this.state = 61;
				this.match(dealParser.T__0);
				}
				break;
			}
			this.state = 64;
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
			this.state = 66;
			this.match(dealParser.T__2);
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__3:
				{
				this.state = 67;
				this.match(dealParser.T__3);
				}
				break;
			case dealParser.T__4:
				{
				this.state = 68;
				this.match(dealParser.T__4);
				}
				break;
			case dealParser.T__5:
				{
				this.state = 69;
				this.match(dealParser.T__5);
				}
				break;
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 70;
				this.aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 73;
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
			this.state = 75;
			this.match(dealParser.ID);
			this.state = 76;
			this.match(dealParser.T__7);
			this.state = 77;
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
			this.state = 79;
			this.match(dealParser.T__8);
			this.state = 80;
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
			this.state = 81;
			this.match(dealParser.ID);
			this.state = 82;
			this.args();
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
			this.state = 84;
			this.match(dealParser.T__13);
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 85;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 86;
				this.position();
				}
				break;

			case 3:
				{
				this.state = 87;
				this.positionset();
				}
				break;
			}
			this.state = 90;
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
			this.state = 92;
			this.match(dealParser.T__14);
			this.state = 93;
			this.match(dealParser.ID);
			this.state = 94;
			this.match(dealParser.T__15);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 95;
				this.stmt();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
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
			this.state = 103;
			this.match(dealParser.T__14);
			this.state = 104;
			this.match(dealParser.T__13);
			this.state = 105;
			this.move_catch();
			this.state = 106;
			this.move_catch();
			this.state = 107;
			this.match(dealParser.T__15);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 108;
				this.stmt();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
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
			this.state = 116;
			this.match(dealParser.T__17);
			this.state = 117;
			this.match(dealParser.ID);
			this.state = 118;
			this.match(dealParser.T__18);
			this.state = 119;
			this.set();
			this.state = 120;
			this.match(dealParser.T__15);
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 121;
				this.stmt();
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 127;
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
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.match(dealParser.T__19);
				this.state = 130;
				this.bexpr();
				this.state = 131;
				this.match(dealParser.T__15);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 132;
					this.stmt();
					}
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 138;
				this.match(dealParser.T__16);
				this.state = 139;
				this.match(dealParser.T__20);
				this.state = 140;
				this.match(dealParser.T__15);
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 141;
					this.stmt();
					}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 147;
				this.match(dealParser.T__16);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 149;
				this.match(dealParser.T__19);
				this.state = 150;
				this.bexpr();
				this.state = 151;
				this.match(dealParser.T__15);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__8) | (1 << dealParser.T__13) | (1 << dealParser.T__14) | (1 << dealParser.T__17) | (1 << dealParser.T__19))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 152;
					this.stmt();
					}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 158;
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
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dealParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__21) {
				{
				this.state = 162;
				this.match(dealParser.T__21);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === dealParser.ID) {
					{
					this.state = 163;
					this.arg();
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === dealParser.T__22) {
						{
						{
						this.state = 164;
						this.match(dealParser.T__22);
						this.state = 165;
						this.arg();
						}
						}
						this.state = 170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 173;
				this.match(dealParser.T__23);
				}
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
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, dealParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(dealParser.ID);
			this.state = 177;
			this.match(dealParser.T__24);
			this.state = 178;
			_la = this._input.LA(1);
			if (!(_la === dealParser.NUMBER || _la === dealParser.STRING)) {
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
	public arearef(): ArearefContext {
		let _localctx: ArearefContext = new ArearefContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, dealParser.RULE_arearef);
		try {
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
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
		this.enterRule(_localctx, 26, dealParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.arearef();
			this.state = 185;
			this.match(dealParser.T__25);
			this.state = 186;
			this.aexpr();
			this.state = 187;
			this.match(dealParser.T__22);
			this.state = 188;
			this.aexpr();
			this.state = 189;
			this.match(dealParser.T__26);
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
		this.enterRule(_localctx, 28, dealParser.RULE_term);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 191;
				this.aexpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 192;
				this.player();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 193;
				this.position();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 194;
				this.match(dealParser.T__27);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 195;
				this.match(dealParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 196;
				this.property();
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, dealParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 199;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 200;
				this.player();
				}
				break;

			case 3:
				{
				this.state = 201;
				this.position();
				}
				break;
			}
			this.state = 204;
			this.match(dealParser.T__4);
			this.state = 205;
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
	public bexpr(): BexprContext {
		let _localctx: BexprContext = new BexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.term();
			this.state = 208;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (dealParser.T__28 - 29)) | (1 << (dealParser.T__29 - 29)) | (1 << (dealParser.T__30 - 29)) | (1 << (dealParser.T__31 - 29)) | (1 << (dealParser.T__32 - 29)) | (1 << (dealParser.T__33 - 29)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 209;
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
		this.enterRule(_localctx, 34, dealParser.RULE_aexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
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
		this.enterRule(_localctx, 36, dealParser.RULE_set);
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.intset();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.positionset();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 215;
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
		this.enterRule(_localctx, 38, dealParser.RULE_intset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.aexpr();
			this.state = 219;
			this.match(dealParser.T__24);
			this.state = 220;
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
		this.enterRule(_localctx, 40, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.arearef();
			this.state = 223;
			this.match(dealParser.T__25);
			this.state = 224;
			this.aexpr();
			this.state = 225;
			this.match(dealParser.T__24);
			this.state = 226;
			this.aexpr();
			this.state = 227;
			this.match(dealParser.T__22);
			this.state = 228;
			this.aexpr();
			this.state = 229;
			this.match(dealParser.T__24);
			this.state = 230;
			this.aexpr();
			this.state = 231;
			this.match(dealParser.T__26);
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
		this.enterRule(_localctx, 42, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(dealParser.T__2);
			this.state = 234;
			this.match(dealParser.T__34);
			this.state = 235;
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
		this.enterRule(_localctx, 44, dealParser.RULE_move_catch);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.match(dealParser.T__35);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.position();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 239;
				this.positionset();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\xF5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"A\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"J\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07[\n\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bc\n\b\f\b\x0E\bf\v\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\tp\n\t\f\t\x0E\ts\v\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n}\n\n\f\n\x0E\n" +
		"\x80\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\x88\n\v\f\v\x0E\v\x8B" +
		"\v\v\x03\v\x03\v\x03\v\x03\v\x07\v\x91\n\v\f\v\x0E\v\x94\v\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\x9C\n\v\f\v\x0E\v\x9F\v\v\x03\v\x03\v" +
		"\x05\v\xA3\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\xA9\n\f\f\f\x0E\f\xAC\v\f" +
		"\x05\f\xAE\n\f\x03\f\x05\f\xB1\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x05\x0E\xB9\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xC8\n" +
		"\x10\x03\x11\x03\x11\x03\x11\x05\x11\xCD\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\xDB\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\xF3\n\x18" +
		"\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02\x06\x03\x02\f\x0F\x04\x02" +
		"**--\x03\x02\x1F$\x03\x02*+\x02\u0100\x023\x03\x02\x02\x02\x04@\x03\x02" +
		"\x02\x02\x06D\x03\x02\x02\x02\bM\x03\x02\x02\x02\nQ\x03\x02\x02\x02\f" +
		"V\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10i\x03\x02\x02\x02\x12v\x03\x02" +
		"\x02\x02\x14\xA2\x03\x02\x02\x02\x16\xB0\x03\x02\x02\x02\x18\xB2\x03\x02" +
		"\x02\x02\x1A\xB8\x03\x02\x02\x02\x1C\xBA\x03\x02\x02\x02\x1E\xC7\x03\x02" +
		"\x02\x02 \xCC\x03\x02\x02\x02\"\xD1\x03\x02\x02\x02$\xD5\x03\x02\x02\x02" +
		"&\xDA\x03\x02\x02\x02(\xDC\x03\x02\x02\x02*\xE0\x03\x02\x02\x02,\xEB\x03" +
		"\x02\x02\x02.\xF2\x03\x02\x02\x0202\x05\x04\x03\x0210\x03\x02\x02\x02" +
		"25\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0267\x07\x02\x02\x037\x03\x03\x02\x02\x028A\x05\n\x06" +
		"\x029A\x05\f\x07\x02:A\x05\x0E\b\x02;A\x05\x10\t\x02<A\x05\x12\n\x02=" +
		"A\x05\x14\v\x02>A\x05\b\x05\x02?A\x07\x03\x02\x02@8\x03\x02\x02\x02@9" +
		"\x03\x02\x02\x02@:\x03\x02\x02\x02@;\x03\x02\x02\x02@<\x03\x02\x02\x02" +
		"@=\x03\x02\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"BC\x07\x04\x02\x02C\x05\x03\x02\x02\x02DI\x07\x05\x02\x02EJ\x07\x06\x02" +
		"\x02FJ\x07\x07\x02\x02GJ\x07\b\x02\x02HJ\x05$\x13\x02IE\x03\x02\x02\x02" +
		"IF\x03\x02\x02\x02IG\x03\x02\x02\x02IH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KL\x07\t\x02\x02L\x07\x03\x02\x02\x02MN\x07+\x02\x02NO\x07\n\x02\x02O" +
		"P\x05\x1E\x10\x02P\t\x03\x02\x02\x02QR\x07\v\x02\x02RS\t\x02\x02\x02S" +
		"T\x07+\x02\x02TU\x05\x16\f\x02U\v\x03\x02\x02\x02VZ\x07\x10\x02\x02W[" +
		"\x07,\x02\x02X[\x05\x1C\x0F\x02Y[\x05*\x16\x02ZW\x03\x02\x02\x02ZX\x03" +
		"\x02\x02\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\x1C\x0F\x02]" +
		"\r\x03\x02\x02\x02^_\x07\x11\x02\x02_`\x07+\x02\x02`d\x07\x12\x02\x02" +
		"ac\x05\x04\x03\x02ba\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02" +
		"de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x07\x13\x02\x02" +
		"h\x0F\x03\x02\x02\x02ij\x07\x11\x02\x02jk\x07\x10\x02\x02kl\x05.\x18\x02" +
		"lm\x05.\x18\x02mq\x07\x12\x02\x02np\x05\x04\x03\x02on\x03\x02\x02\x02" +
		"ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02" +
		"sq\x03\x02\x02\x02tu\x07\x13\x02\x02u\x11\x03\x02\x02\x02vw\x07\x14\x02" +
		"\x02wx\x07+\x02\x02xy\x07\x15\x02\x02yz\x05&\x14\x02z~\x07\x12\x02\x02" +
		"{}\x05\x04\x03\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x81\x82\x07\x13\x02\x02\x82\x13\x03\x02\x02\x02\x83\x84\x07\x16\x02\x02" +
		"\x84\x85\x05\"\x12\x02\x85\x89\x07\x12\x02\x02\x86\x88\x05\x04\x03\x02" +
		"\x87\x86\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02" +
		"\x89\x8A\x03\x02\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02" +
		"\x8C\x8D\x07\x13\x02\x02\x8D\x8E\x07\x17\x02\x02\x8E\x92\x07\x12\x02\x02" +
		"\x8F\x91\x05\x04\x03\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02" +
		"\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02" +
		"\x94\x92\x03\x02\x02\x02\x95\x96\x07\x13\x02\x02\x96\xA3\x03\x02\x02\x02" +
		"\x97\x98\x07\x16\x02\x02\x98\x99\x05\"\x12\x02\x99\x9D\x07\x12\x02\x02" +
		"\x9A\x9C\x05\x04\x03\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02" +
		"\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02" +
		"\x9F\x9D\x03\x02\x02\x02\xA0\xA1\x07\x13\x02\x02\xA1\xA3\x03\x02\x02\x02" +
		"\xA2\x83\x03\x02\x02\x02\xA2\x97\x03\x02\x02\x02\xA3\x15\x03\x02\x02\x02" +
		"\xA4\xAD\x07\x18\x02\x02\xA5\xAA\x05\x18\r\x02\xA6\xA7\x07\x19\x02\x02" +
		"\xA7\xA9\x05\x18\r\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02" +
		"\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02" +
		"\xAC\xAA\x03\x02\x02\x02\xAD\xA5\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02" +
		"\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x07\x1A\x02\x02\xB0\xA4\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\x17\x03\x02\x02\x02\xB2\xB3\x07+\x02\x02" +
		"\xB3\xB4\x07\x1B\x02\x02\xB4\xB5\t\x03\x02\x02\xB5\x19\x03\x02\x02\x02" +
		"\xB6\xB9\x07+\x02\x02\xB7\xB9\x05\x06\x04\x02\xB8\xB6\x03\x02\x02\x02" +
		"\xB8\xB7\x03\x02\x02\x02\xB9\x1B\x03\x02\x02\x02\xBA\xBB\x05\x1A\x0E\x02" +
		"\xBB\xBC\x07\x1C\x02\x02\xBC\xBD\x05$\x13\x02\xBD\xBE\x07\x19\x02\x02" +
		"\xBE\xBF\x05$\x13\x02\xBF\xC0\x07\x1D\x02\x02\xC0\x1D\x03\x02\x02\x02" +
		"\xC1\xC8\x05$\x13\x02\xC2\xC8\x05\x06\x04\x02\xC3\xC8\x05\x1C\x0F\x02" +
		"\xC4\xC8\x07\x1E\x02\x02\xC5\xC8\x07\x06\x02\x02\xC6\xC8\x05 \x11\x02" +
		"\xC7\xC1\x03\x02\x02\x02\xC7\xC2\x03\x02\x02\x02\xC7\xC3\x03\x02\x02\x02" +
		"\xC7\xC4\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02" +
		"\xC8\x1F\x03\x02\x02\x02\xC9\xCD\x07,\x02\x02\xCA\xCD\x05\x06\x04\x02" +
		"\xCB\xCD\x05\x1C\x0F\x02\xCC\xC9\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02" +
		"\xCC\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07\x07\x02\x02" +
		"\xCF\xD0\x07+\x02\x02\xD0!\x03\x02\x02\x02\xD1\xD2\x05\x1E\x10\x02\xD2" +
		"\xD3\t\x04\x02\x02\xD3\xD4\x05\x1E\x10\x02\xD4#\x03\x02\x02\x02\xD5\xD6" +
		"\t\x05\x02\x02\xD6%\x03\x02\x02\x02\xD7\xDB\x05(\x15\x02\xD8\xDB\x05*" +
		"\x16\x02\xD9\xDB\x05,\x17\x02\xDA\xD7\x03\x02\x02\x02\xDA\xD8\x03\x02" +
		"\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\'\x03\x02\x02\x02\xDC\xDD\x05$\x13" +
		"\x02\xDD\xDE\x07\x1B\x02\x02\xDE\xDF\x05$\x13\x02\xDF)\x03\x02\x02\x02" +
		"\xE0\xE1\x05\x1A\x0E\x02\xE1\xE2\x07\x1C\x02\x02\xE2\xE3\x05$\x13\x02" +
		"\xE3\xE4\x07\x1B\x02\x02\xE4\xE5\x05$\x13\x02\xE5\xE6\x07\x19\x02\x02" +
		"\xE6\xE7\x05$\x13\x02\xE7\xE8\x07\x1B\x02\x02\xE8\xE9\x05$\x13\x02\xE9" +
		"\xEA\x07\x1D\x02\x02\xEA+\x03\x02\x02\x02\xEB\xEC\x07\x05\x02\x02\xEC" +
		"\xED\x07%\x02\x02\xED\xEE\x07\t\x02\x02\xEE-\x03\x02\x02\x02\xEF\xF3\x07" +
		"&\x02\x02\xF0\xF3\x05\x1C\x0F\x02\xF1\xF3\x05*\x16\x02\xF2\xEF\x03\x02" +
		"\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3/\x03\x02" +
		"\x02\x02\x153@IZdq~\x89\x92\x9D\xA2\xAA\xAD\xB0\xB8\xC7\xCC\xDA\xF2";
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
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
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
	public positionset(): PositionsetContext | undefined {
		return this.tryGetRuleContext(0, PositionsetContext);
	}
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


export class ArgsContext extends ParserRuleContext {
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_args; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(dealParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(dealParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_arg; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
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
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
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


export class PropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
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
	public get ruleIndex(): number { return dealParser.RULE_property; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
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
	public positionset(): PositionsetContext | undefined {
		return this.tryGetRuleContext(0, PositionsetContext);
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


