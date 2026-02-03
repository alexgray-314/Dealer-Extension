// Generated from C:\Users\alexj\University\dealer/antlr/deal.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly COMMENT = 40;
	public static readonly NUMBER = 41;
	public static readonly ID = 42;
	public static readonly CARD = 43;
	public static readonly STRING = 44;
	public static readonly SPACES = 45;
	public static readonly NEWLINE = 46;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_player = 2;
	public static readonly RULE_definition = 3;
	public static readonly RULE_move = 4;
	public static readonly RULE_on_action = 5;
	public static readonly RULE_on_move = 6;
	public static readonly RULE_for = 7;
	public static readonly RULE_if = 8;
	public static readonly RULE_assign = 9;
	public static readonly RULE_function_call = 10;
	public static readonly RULE_updateTurn = 11;
	public static readonly RULE_args = 12;
	public static readonly RULE_arg = 13;
	public static readonly RULE_arearef = 14;
	public static readonly RULE_position = 15;
	public static readonly RULE_stack = 16;
	public static readonly RULE_term = 17;
	public static readonly RULE_property = 18;
	public static readonly RULE_bexpr = 19;
	public static readonly RULE_aexpr = 20;
	public static readonly RULE_set = 21;
	public static readonly RULE_intset = 22;
	public static readonly RULE_positionset = 23;
	public static readonly RULE_playerset = 24;
	public static readonly RULE_move_catch = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "player", "definition", "move", "on_action", "on_move", 
		"for", "if", "assign", "function_call", "updateTurn", "args", "arg", "arearef", 
		"position", "stack", "term", "property", "bexpr", "aexpr", "set", "intset", 
		"positionset", "playerset", "move_catch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cancel'", "';'", "'<'", "'/'", "'.'", "'@'", "'>'", "'define'", 
		"'area'", "'action'", "'int'", "'card'", "'move'", "'on'", "'{'", "'}'", 
		"'for'", "'in'", "'if'", "'else'", "'='", "'++'", "'('", "','", "')'", 
		"':'", "'['", "']'", "'\\'", "'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", 
		"'=?'", "'!?'", "'*'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "COMMENT", "NUMBER", 
		"ID", "CARD", "STRING", "SPACES", "NEWLINE",
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
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 52;
				this.stmt();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
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
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 60;
				this.definition();
				}
				break;

			case 2:
				{
				this.state = 61;
				this.move();
				}
				break;

			case 3:
				{
				this.state = 62;
				this.on_action();
				}
				break;

			case 4:
				{
				this.state = 63;
				this.on_move();
				}
				break;

			case 5:
				{
				this.state = 64;
				this.for();
				}
				break;

			case 6:
				{
				this.state = 65;
				this.if();
				}
				break;

			case 7:
				{
				this.state = 66;
				this.match(dealParser.T__0);
				}
				break;

			case 8:
				{
				this.state = 67;
				this.assign();
				}
				break;

			case 9:
				{
				this.state = 68;
				this.function_call();
				}
				break;

			case 10:
				{
				this.state = 69;
				this.updateTurn();
				}
				break;
			}
			this.state = 72;
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
			this.state = 74;
			this.match(dealParser.T__2);
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__3:
				{
				this.state = 75;
				this.match(dealParser.T__3);
				}
				break;
			case dealParser.T__4:
				{
				this.state = 76;
				this.match(dealParser.T__4);
				}
				break;
			case dealParser.T__5:
				{
				this.state = 77;
				this.match(dealParser.T__5);
				}
				break;
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 78;
				this.aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 81;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, dealParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(dealParser.T__7);
			this.state = 84;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__8) | (1 << dealParser.T__9) | (1 << dealParser.T__10) | (1 << dealParser.T__11))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 85;
			this.match(dealParser.ID);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__22) {
				{
				this.state = 86;
				this.args();
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
	public move(): MoveContext {
		let _localctx: MoveContext = new MoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, dealParser.RULE_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(dealParser.T__12);
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 90;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 91;
				this.position();
				}
				break;

			case 3:
				{
				this.state = 92;
				this.positionset();
				}
				break;
			}
			this.state = 95;
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
		this.enterRule(_localctx, 10, dealParser.RULE_on_action);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(dealParser.T__13);
			this.state = 98;
			this.match(dealParser.ID);
			this.state = 99;
			this.match(dealParser.T__14);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
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
			this.match(dealParser.T__15);
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
		this.enterRule(_localctx, 12, dealParser.RULE_on_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(dealParser.T__13);
			this.state = 109;
			this.match(dealParser.T__12);
			this.state = 110;
			this.move_catch();
			this.state = 111;
			this.move_catch();
			this.state = 112;
			this.match(dealParser.T__14);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
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
			this.match(dealParser.T__15);
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
		this.enterRule(_localctx, 14, dealParser.RULE_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(dealParser.T__16);
			this.state = 122;
			this.match(dealParser.ID);
			this.state = 123;
			this.match(dealParser.T__17);
			this.state = 124;
			this.set();
			this.state = 125;
			this.match(dealParser.T__14);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 126;
				this.stmt();
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 132;
			this.match(dealParser.T__15);
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
		this.enterRule(_localctx, 16, dealParser.RULE_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(dealParser.T__18);
			this.state = 135;
			this.bexpr();
			this.state = 136;
			this.match(dealParser.T__14);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 137;
				this.stmt();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 143;
			this.match(dealParser.T__15);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__19) {
				{
				this.state = 144;
				this.match(dealParser.T__19);
				this.state = 145;
				this.match(dealParser.T__14);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 146;
					this.stmt();
					}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 152;
				this.match(dealParser.T__15);
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
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, dealParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(dealParser.ID);
			this.state = 156;
			this.match(dealParser.T__20);
			this.state = 157;
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
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dealParser.RULE_function_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(dealParser.ID);
			this.state = 160;
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
	public updateTurn(): UpdateTurnContext {
		let _localctx: UpdateTurnContext = new UpdateTurnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, dealParser.RULE_updateTurn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(dealParser.T__2);
			this.state = 163;
			this.match(dealParser.T__4);
			this.state = 164;
			this.match(dealParser.T__6);
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__21:
				{
				this.state = 165;
				this.match(dealParser.T__21);
				}
				break;
			case dealParser.T__20:
				{
				this.state = 166;
				this.match(dealParser.T__20);
				this.state = 167;
				this.player();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, dealParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(dealParser.T__22);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.ID) {
				{
				this.state = 171;
				this.arg();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dealParser.T__23) {
					{
					{
					this.state = 172;
					this.match(dealParser.T__23);
					this.state = 173;
					this.arg();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 181;
			this.match(dealParser.T__24);
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
		this.enterRule(_localctx, 26, dealParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(dealParser.ID);
			this.state = 184;
			this.match(dealParser.T__25);
			this.state = 185;
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
		this.enterRule(_localctx, 28, dealParser.RULE_arearef);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
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
		this.enterRule(_localctx, 30, dealParser.RULE_position);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__2:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 191;
				this.arearef();
				this.state = 192;
				this.match(dealParser.T__26);
				this.state = 193;
				this.aexpr();
				this.state = 194;
				this.match(dealParser.T__23);
				this.state = 195;
				this.aexpr();
				this.state = 196;
				this.match(dealParser.T__27);
				}
				break;
			case dealParser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.match(dealParser.T__28);
				}
				break;
			case dealParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 199;
				this.match(dealParser.T__3);
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
	public stack(): StackContext {
		let _localctx: StackContext = new StackContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, dealParser.RULE_stack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.arearef();
			this.state = 203;
			this.match(dealParser.T__26);
			this.state = 204;
			this.aexpr();
			this.state = 205;
			this.match(dealParser.T__27);
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
		this.enterRule(_localctx, 34, dealParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 207;
				this.aexpr();
				}
				break;

			case 2:
				{
				this.state = 208;
				this.player();
				}
				break;

			case 3:
				{
				this.state = 209;
				this.stack();
				}
				break;

			case 4:
				{
				this.state = 210;
				this.position();
				}
				break;
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__4) {
				{
				this.state = 213;
				this.property();
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, dealParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(dealParser.T__4);
			this.state = 217;
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
		this.enterRule(_localctx, 38, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.term();
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__29:
			case dealParser.T__30:
			case dealParser.T__31:
			case dealParser.T__32:
			case dealParser.T__33:
			case dealParser.T__34:
				{
				{
				this.state = 220;
				_la = this._input.LA(1);
				if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (dealParser.T__29 - 30)) | (1 << (dealParser.T__30 - 30)) | (1 << (dealParser.T__31 - 30)) | (1 << (dealParser.T__32 - 30)) | (1 << (dealParser.T__33 - 30)) | (1 << (dealParser.T__34 - 30)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 221;
				this.term();
				}
				}
				break;
			case dealParser.T__35:
			case dealParser.T__36:
				{
				{
				this.state = 222;
				_la = this._input.LA(1);
				if (!(_la === dealParser.T__35 || _la === dealParser.T__36)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 223;
				this.set();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public aexpr(): AexprContext {
		let _localctx: AexprContext = new AexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, dealParser.RULE_aexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
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
		this.enterRule(_localctx, 42, dealParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 228;
				this.intset();
				}
				break;

			case 2:
				{
				this.state = 229;
				this.positionset();
				}
				break;

			case 3:
				{
				this.state = 230;
				this.playerset();
				}
				break;
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__4) {
				{
				this.state = 233;
				this.property();
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
	public intset(): IntsetContext {
		let _localctx: IntsetContext = new IntsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, dealParser.RULE_intset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.aexpr();
			this.state = 237;
			this.match(dealParser.T__25);
			this.state = 238;
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
		this.enterRule(_localctx, 46, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.arearef();
			this.state = 241;
			this.match(dealParser.T__26);
			this.state = 242;
			this.aexpr();
			this.state = 243;
			this.match(dealParser.T__25);
			this.state = 244;
			this.aexpr();
			this.state = 245;
			this.match(dealParser.T__23);
			this.state = 246;
			this.aexpr();
			this.state = 247;
			this.match(dealParser.T__25);
			this.state = 248;
			this.aexpr();
			this.state = 249;
			this.match(dealParser.T__27);
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
		this.enterRule(_localctx, 48, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(dealParser.T__2);
			this.state = 252;
			this.match(dealParser.T__37);
			this.state = 253;
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
		this.enterRule(_localctx, 50, dealParser.RULE_move_catch);
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.match(dealParser.T__38);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.position();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 257;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0107\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x07\x028" +
		"\n\x02\f\x02\x0E\x02;\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03I\n\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04R\n\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05Z\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06`\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07h\n\x07\f\x07\x0E\x07k\v\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bu\n\b\f\b\x0E\bx\v\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x82\n\t\f\t\x0E\t\x85\v\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\x8D\n\n\f\n\x0E\n\x90\v\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\x96\n\n\f\n\x0E\n\x99\v\n\x03\n\x05\n\x9C\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\xAB\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xB1\n\x0E\f\x0E" +
		"\x0E\x0E\xB4\v\x0E\x05\x0E\xB6\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xC0\n\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xCB\n\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\xD6\n\x13\x03\x13\x05\x13\xD9\n\x13\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xE3\n\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\xEA\n\x17\x03\x17\x05\x17\xED\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0105\n\x1B\x03\x1B\x02\x02\x02\x1C\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x02\x02\x07\x03\x02\v\x0E\x04\x02++..\x03\x02 %" +
		"\x03\x02&\'\x03\x02+,\x02\u0112\x029\x03\x02\x02\x02\x04H\x03\x02\x02" +
		"\x02\x06L\x03\x02\x02\x02\bU\x03\x02\x02\x02\n[\x03\x02\x02\x02\fc\x03" +
		"\x02\x02\x02\x0En\x03\x02\x02\x02\x10{\x03\x02\x02\x02\x12\x88\x03\x02" +
		"\x02\x02\x14\x9D\x03\x02\x02\x02\x16\xA1\x03\x02\x02\x02\x18\xA4\x03\x02" +
		"\x02\x02\x1A\xAC\x03\x02\x02\x02\x1C\xB9\x03\x02\x02\x02\x1E\xBF\x03\x02" +
		"\x02\x02 \xCA\x03\x02\x02\x02\"\xCC\x03\x02\x02\x02$\xD5\x03\x02\x02\x02" +
		"&\xDA\x03\x02\x02\x02(\xDD\x03\x02\x02\x02*\xE4\x03\x02\x02\x02,\xE9\x03" +
		"\x02\x02\x02.\xEE\x03\x02\x02\x020\xF2\x03\x02\x02\x022\xFD\x03\x02\x02" +
		"\x024\u0104\x03\x02\x02\x0268\x05\x04\x03\x0276\x03\x02\x02\x028;\x03" +
		"\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02;9\x03" +
		"\x02\x02\x02<=\x07\x02\x02\x03=\x03\x03\x02\x02\x02>I\x05\b\x05\x02?I" +
		"\x05\n\x06\x02@I\x05\f\x07\x02AI\x05\x0E\b\x02BI\x05\x10\t\x02CI\x05\x12" +
		"\n\x02DI\x07\x03\x02\x02EI\x05\x14\v\x02FI\x05\x16\f\x02GI\x05\x18\r\x02" +
		"H>\x03\x02\x02\x02H?\x03\x02\x02\x02H@\x03\x02\x02\x02HA\x03\x02\x02\x02" +
		"HB\x03\x02\x02\x02HC\x03\x02\x02\x02HD\x03\x02\x02\x02HE\x03\x02\x02\x02" +
		"HF\x03\x02\x02\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x07\x04\x02\x02" +
		"K\x05\x03\x02\x02\x02LQ\x07\x05\x02\x02MR\x07\x06\x02\x02NR\x07\x07\x02" +
		"\x02OR\x07\b\x02\x02PR\x05*\x16\x02QM\x03\x02\x02\x02QN\x03\x02\x02\x02" +
		"QO\x03\x02\x02\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\t\x02\x02" +
		"T\x07\x03\x02\x02\x02UV\x07\n\x02\x02VW\t\x02\x02\x02WY\x07,\x02\x02X" +
		"Z\x05\x1A\x0E\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\t\x03\x02\x02\x02" +
		"[_\x07\x0F\x02\x02\\`\x07-\x02\x02]`\x05 \x11\x02^`\x050\x19\x02_\\\x03" +
		"\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x05" +
		" \x11\x02b\v\x03\x02\x02\x02cd\x07\x10\x02\x02de\x07,\x02\x02ei\x07\x11" +
		"\x02\x02fh\x05\x04\x03\x02gf\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02\x02\x02lm\x07\x12" +
		"\x02\x02m\r\x03\x02\x02\x02no\x07\x10\x02\x02op\x07\x0F\x02\x02pq\x05" +
		"4\x1B\x02qr\x054\x1B\x02rv\x07\x11\x02\x02su\x05\x04\x03\x02ts\x03\x02" +
		"\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02" +
		"\x02\x02xv\x03\x02\x02\x02yz\x07\x12\x02\x02z\x0F\x03\x02\x02\x02{|\x07" +
		"\x13\x02\x02|}\x07,\x02\x02}~\x07\x14\x02\x02~\x7F\x05,\x17\x02\x7F\x83" +
		"\x07\x11\x02\x02\x80\x82\x05\x04\x03\x02\x81\x80\x03\x02\x02\x02\x82\x85" +
		"\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86" +
		"\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x87\x07\x12\x02\x02\x87\x11" +
		"\x03\x02\x02\x02\x88\x89\x07\x15\x02\x02\x89\x8A\x05(\x15\x02\x8A\x8E" +
		"\x07\x11\x02\x02\x8B\x8D\x05\x04\x03\x02\x8C\x8B\x03\x02\x02\x02\x8D\x90" +
		"\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91" +
		"\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x9B\x07\x12\x02\x02\x92\x93" +
		"\x07\x16\x02\x02\x93\x97\x07\x11\x02\x02\x94\x96\x05\x04\x03\x02\x95\x94" +
		"\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9C" +
		"\x07\x12\x02\x02\x9B\x92\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x13" +
		"\x03\x02\x02\x02\x9D\x9E\x07,\x02\x02\x9E\x9F\x07\x17\x02\x02\x9F\xA0" +
		"\x05$\x13\x02\xA0\x15\x03\x02\x02\x02\xA1\xA2\x07,\x02\x02\xA2\xA3\x05" +
		"\x1A\x0E\x02\xA3\x17\x03\x02\x02\x02\xA4\xA5\x07\x05\x02\x02\xA5\xA6\x07" +
		"\x07\x02\x02\xA6\xAA\x07\t\x02\x02\xA7\xAB\x07\x18\x02\x02\xA8\xA9\x07" +
		"\x17\x02\x02\xA9\xAB\x05\x06\x04\x02\xAA\xA7\x03\x02\x02\x02\xAA\xA8\x03" +
		"\x02\x02\x02\xAB\x19\x03\x02\x02\x02\xAC\xB5\x07\x19\x02\x02\xAD\xB2\x05" +
		"\x1C\x0F\x02\xAE\xAF\x07\x1A\x02\x02\xAF\xB1\x05\x1C\x0F\x02\xB0\xAE\x03" +
		"\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03" +
		"\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xAD\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07" +
		"\x1B\x02\x02\xB8\x1B\x03\x02\x02\x02\xB9\xBA\x07,\x02\x02\xBA\xBB\x07" +
		"\x1C\x02\x02\xBB\xBC\t\x03\x02\x02\xBC\x1D\x03\x02\x02\x02\xBD\xC0\x07" +
		",\x02\x02\xBE\xC0\x05\x06\x04\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03" +
		"\x02\x02\x02\xC0\x1F\x03\x02\x02\x02\xC1\xC2\x05\x1E\x10\x02\xC2\xC3\x07" +
		"\x1D\x02\x02\xC3\xC4\x05*\x16\x02\xC4\xC5\x07\x1A\x02\x02\xC5\xC6\x05" +
		"*\x16\x02\xC6\xC7\x07\x1E\x02\x02\xC7\xCB\x03\x02\x02\x02\xC8\xCB\x07" +
		"\x1F\x02\x02\xC9\xCB\x07\x06\x02\x02\xCA\xC1\x03\x02\x02\x02\xCA\xC8\x03" +
		"\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB!\x03\x02\x02\x02\xCC\xCD\x05" +
		"\x1E\x10\x02\xCD\xCE\x07\x1D\x02\x02\xCE\xCF\x05*\x16\x02\xCF\xD0\x07" +
		"\x1E\x02\x02\xD0#\x03\x02\x02\x02\xD1\xD6\x05*\x16\x02\xD2\xD6\x05\x06" +
		"\x04\x02\xD3\xD6\x05\"\x12\x02\xD4\xD6\x05 \x11\x02\xD5\xD1\x03\x02\x02" +
		"\x02\xD5\xD2\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02" +
		"\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD9\x05&\x14\x02\xD8\xD7\x03\x02\x02" +
		"\x02\xD8\xD9\x03\x02\x02\x02\xD9%\x03\x02\x02\x02\xDA\xDB\x07\x07\x02" +
		"\x02\xDB\xDC\x07,\x02\x02\xDC\'\x03\x02\x02\x02\xDD\xE2\x05$\x13\x02\xDE" +
		"\xDF\t\x04\x02\x02\xDF\xE3\x05$\x13\x02\xE0\xE1\t\x05\x02\x02\xE1\xE3" +
		"\x05,\x17\x02\xE2\xDE\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3)\x03" +
		"\x02\x02\x02\xE4\xE5\t\x06\x02\x02\xE5+\x03\x02\x02\x02\xE6\xEA\x05.\x18" +
		"\x02\xE7\xEA\x050\x19\x02\xE8\xEA\x052\x1A\x02\xE9\xE6\x03\x02\x02\x02" +
		"\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02" +
		"\xEB\xED\x05&\x14\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02" +
		"\xED-\x03\x02\x02\x02\xEE\xEF\x05*\x16\x02\xEF\xF0\x07\x1C\x02\x02\xF0" +
		"\xF1\x05*\x16\x02\xF1/\x03\x02\x02\x02\xF2\xF3\x05\x1E\x10\x02\xF3\xF4" +
		"\x07\x1D\x02\x02\xF4\xF5\x05*\x16\x02\xF5\xF6\x07\x1C\x02\x02\xF6\xF7" +
		"\x05*\x16\x02\xF7\xF8\x07\x1A\x02\x02\xF8\xF9\x05*\x16\x02\xF9\xFA\x07" +
		"\x1C\x02\x02\xFA\xFB\x05*\x16\x02\xFB\xFC\x07\x1E\x02\x02\xFC1\x03\x02" +
		"\x02\x02\xFD\xFE\x07\x05\x02\x02\xFE\xFF\x07(\x02\x02\xFF\u0100\x07\t" +
		"\x02\x02\u01003\x03\x02\x02\x02\u0101\u0105\x07)\x02\x02\u0102\u0105\x05" +
		" \x11\x02\u0103\u0105\x050\x19\x02\u0104\u0101\x03\x02\x02\x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u01055\x03\x02\x02\x02\x18" +
		"9HQY_iv\x83\x8E\x97\x9B\xAA\xB2\xB5\xBF\xCA\xD5\xD8\xE2\xE9\xEC\u0104";
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
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public updateTurn(): UpdateTurnContext | undefined {
		return this.tryGetRuleContext(0, UpdateTurnContext);
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


export class DefinitionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public args(): ArgsContext | undefined {
		return this.tryGetRuleContext(0, ArgsContext);
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


export class Function_callContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_function_call; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
}


export class UpdateTurnContext extends ParserRuleContext {
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_updateTurn; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterUpdateTurn) {
			listener.enterUpdateTurn(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitUpdateTurn) {
			listener.exitUpdateTurn(this);
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
	public arearef(): ArearefContext | undefined {
		return this.tryGetRuleContext(0, ArearefContext);
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


export class StackContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	public aexpr(): AexprContext {
		return this.getRuleContext(0, AexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_stack; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterStack) {
			listener.enterStack(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitStack) {
			listener.exitStack(this);
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
	public stack(): StackContext | undefined {
		return this.tryGetRuleContext(0, StackContext);
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
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
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
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
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


