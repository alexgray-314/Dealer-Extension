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
	public static readonly RULE_source = 5;
	public static readonly RULE_destination = 6;
	public static readonly RULE_on_action = 7;
	public static readonly RULE_on_move = 8;
	public static readonly RULE_for = 9;
	public static readonly RULE_if = 10;
	public static readonly RULE_assign = 11;
	public static readonly RULE_function_call = 12;
	public static readonly RULE_updateTurn = 13;
	public static readonly RULE_variable = 14;
	public static readonly RULE_args = 15;
	public static readonly RULE_arg = 16;
	public static readonly RULE_arearef = 17;
	public static readonly RULE_position = 18;
	public static readonly RULE_stack = 19;
	public static readonly RULE_term = 20;
	public static readonly RULE_property = 21;
	public static readonly RULE_bexpr = 22;
	public static readonly RULE_aexpr = 23;
	public static readonly RULE_set = 24;
	public static readonly RULE_intset = 25;
	public static readonly RULE_positionset = 26;
	public static readonly RULE_playerset = 27;
	public static readonly RULE_move_catch = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "player", "definition", "move", "source", "destination", 
		"on_action", "on_move", "for", "if", "assign", "function_call", "updateTurn", 
		"variable", "args", "arg", "arearef", "position", "stack", "term", "property", 
		"bexpr", "aexpr", "set", "intset", "positionset", "playerset", "move_catch",
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
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 58;
				this.stmt();
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 64;
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
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 66;
				this.definition();
				}
				break;

			case 2:
				{
				this.state = 67;
				this.move();
				}
				break;

			case 3:
				{
				this.state = 68;
				this.on_action();
				}
				break;

			case 4:
				{
				this.state = 69;
				this.on_move();
				}
				break;

			case 5:
				{
				this.state = 70;
				this.for();
				}
				break;

			case 6:
				{
				this.state = 71;
				this.if();
				}
				break;

			case 7:
				{
				this.state = 72;
				this.match(dealParser.T__0);
				}
				break;

			case 8:
				{
				this.state = 73;
				this.assign();
				}
				break;

			case 9:
				{
				this.state = 74;
				this.function_call();
				}
				break;

			case 10:
				{
				this.state = 75;
				this.updateTurn();
				}
				break;
			}
			this.state = 78;
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
			this.state = 80;
			this.match(dealParser.T__2);
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__3:
				{
				this.state = 81;
				this.match(dealParser.T__3);
				}
				break;
			case dealParser.T__4:
				{
				this.state = 82;
				this.match(dealParser.T__4);
				}
				break;
			case dealParser.T__5:
				{
				this.state = 83;
				this.match(dealParser.T__5);
				}
				break;
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 84;
				this.aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 87;
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
			this.state = 89;
			this.match(dealParser.T__7);
			this.state = 90;
			_localctx._type = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__8) | (1 << dealParser.T__9) | (1 << dealParser.T__10) | (1 << dealParser.T__11))) !== 0))) {
				_localctx._type = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 91;
			this.match(dealParser.ID);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__22) {
				{
				this.state = 92;
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
			this.state = 95;
			this.match(dealParser.T__12);
			this.state = 96;
			this.source();
			this.state = 97;
			this.destination();
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
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, dealParser.RULE_source);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 99;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 100;
				this.position();
				}
				break;

			case 3:
				{
				this.state = 101;
				this.positionset();
				}
				break;
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
	public destination(): DestinationContext {
		let _localctx: DestinationContext = new DestinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, dealParser.RULE_destination);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
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
		this.enterRule(_localctx, 14, dealParser.RULE_on_action);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(dealParser.T__13);
			this.state = 107;
			this.match(dealParser.ID);
			this.state = 108;
			this.match(dealParser.T__14);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 109;
				this.stmt();
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
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
		this.enterRule(_localctx, 16, dealParser.RULE_on_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(dealParser.T__13);
			this.state = 118;
			this.match(dealParser.T__12);
			this.state = 119;
			this.move_catch();
			this.state = 120;
			this.move_catch();
			this.state = 121;
			this.match(dealParser.T__14);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 122;
				this.stmt();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
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
		this.enterRule(_localctx, 18, dealParser.RULE_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(dealParser.T__16);
			this.state = 131;
			this.match(dealParser.ID);
			this.state = 132;
			this.match(dealParser.T__17);
			this.state = 133;
			this.set();
			this.state = 134;
			this.match(dealParser.T__14);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 135;
				this.stmt();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
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
		this.enterRule(_localctx, 20, dealParser.RULE_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(dealParser.T__18);
			this.state = 144;
			this.bexpr();
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
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__19) {
				{
				this.state = 153;
				this.match(dealParser.T__19);
				this.state = 154;
				this.match(dealParser.T__14);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__7) | (1 << dealParser.T__12) | (1 << dealParser.T__13) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
					{
					{
					this.state = 155;
					this.stmt();
					}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 161;
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
		this.enterRule(_localctx, 22, dealParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.variable();
			this.state = 165;
			this.match(dealParser.T__20);
			this.state = 166;
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
		this.enterRule(_localctx, 24, dealParser.RULE_function_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(dealParser.ID);
			this.state = 169;
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
		this.enterRule(_localctx, 26, dealParser.RULE_updateTurn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(dealParser.T__2);
			this.state = 172;
			this.match(dealParser.T__4);
			this.state = 173;
			this.match(dealParser.T__6);
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__21:
				{
				this.state = 174;
				this.match(dealParser.T__21);
				}
				break;
			case dealParser.T__20:
				{
				this.state = 175;
				this.match(dealParser.T__20);
				this.state = 176;
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, dealParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
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
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, dealParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(dealParser.T__22);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.ID) {
				{
				this.state = 182;
				this.arg();
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dealParser.T__23) {
					{
					{
					this.state = 183;
					this.match(dealParser.T__23);
					this.state = 184;
					this.arg();
					}
					}
					this.state = 189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 192;
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
		this.enterRule(_localctx, 32, dealParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(dealParser.ID);
			this.state = 195;
			this.match(dealParser.T__25);
			this.state = 196;
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
		this.enterRule(_localctx, 34, dealParser.RULE_arearef);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
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
		this.enterRule(_localctx, 36, dealParser.RULE_position);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__2:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.arearef();
				this.state = 203;
				this.match(dealParser.T__26);
				this.state = 204;
				this.aexpr();
				this.state = 205;
				this.match(dealParser.T__23);
				this.state = 206;
				this.aexpr();
				this.state = 207;
				this.match(dealParser.T__27);
				}
				break;
			case dealParser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.match(dealParser.T__28);
				}
				break;
			case dealParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
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
		this.enterRule(_localctx, 38, dealParser.RULE_stack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.arearef();
			this.state = 214;
			this.match(dealParser.T__26);
			this.state = 215;
			this.aexpr();
			this.state = 216;
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
		this.enterRule(_localctx, 40, dealParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 218;
				this.aexpr();
				}
				break;

			case 2:
				{
				this.state = 219;
				this.player();
				}
				break;

			case 3:
				{
				this.state = 220;
				this.stack();
				}
				break;

			case 4:
				{
				this.state = 221;
				this.position();
				}
				break;
			}
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__4) {
				{
				this.state = 224;
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
		this.enterRule(_localctx, 42, dealParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(dealParser.T__4);
			this.state = 228;
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
		this.enterRule(_localctx, 44, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.term();
			this.state = 235;
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
				this.state = 231;
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
				this.state = 232;
				this.term();
				}
				}
				break;
			case dealParser.T__35:
			case dealParser.T__36:
				{
				{
				this.state = 233;
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
				this.state = 234;
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
		this.enterRule(_localctx, 46, dealParser.RULE_aexpr);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.variable();
				}
				break;
			case dealParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.match(dealParser.NUMBER);
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
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, dealParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 241;
				this.intset();
				}
				break;

			case 2:
				{
				this.state = 242;
				this.positionset();
				}
				break;

			case 3:
				{
				this.state = 243;
				this.playerset();
				}
				break;
			}
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__4) {
				{
				this.state = 246;
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
		this.enterRule(_localctx, 50, dealParser.RULE_intset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.aexpr();
			this.state = 250;
			this.match(dealParser.T__25);
			this.state = 251;
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
		this.enterRule(_localctx, 52, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.arearef();
			this.state = 254;
			this.match(dealParser.T__26);
			this.state = 255;
			this.aexpr();
			this.state = 256;
			this.match(dealParser.T__25);
			this.state = 257;
			this.aexpr();
			this.state = 258;
			this.match(dealParser.T__23);
			this.state = 259;
			this.aexpr();
			this.state = 260;
			this.match(dealParser.T__25);
			this.state = 261;
			this.aexpr();
			this.state = 262;
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
		this.enterRule(_localctx, 54, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(dealParser.T__2);
			this.state = 265;
			this.match(dealParser.T__37);
			this.state = 266;
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
		this.enterRule(_localctx, 56, dealParser.RULE_move_catch);
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.match(dealParser.T__38);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.position();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 270;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u0114\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03O\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04X\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05`\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x05\x07i\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07\t" +
		"q\n\t\f\t\x0E\tt\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n~\n\n\f\n\x0E\n\x81\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\x8B\n\v\f\v\x0E\v\x8E\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
		"\x07\f\x96\n\f\f\f\x0E\f\x99\v\f\x03\f\x03\f\x03\f\x03\f\x07\f\x9F\n\f" +
		"\f\f\x0E\f\xA2\v\f\x03\f\x05\f\xA5\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\xB4\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xBC" +
		"\n\x11\f\x11\x0E\x11\xBF\v\x11\x05\x11\xC1\n\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xCB\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xD6" +
		"\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\xE1\n\x16\x03\x16\x05\x16\xE4\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xEE\n\x18\x03\x19" +
		"\x03\x19\x05\x19\xF2\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xF7\n\x1A\x03" +
		"\x1A\x05\x1A\xFA\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0112" +
		"\n\x1E\x03\x1E\x02\x02\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"\x02\x06\x03\x02\v\x0E\x04\x02++..\x03\x02 %\x03\x02&\'\x02\u011D\x02" +
		"?\x03\x02\x02\x02\x04N\x03\x02\x02\x02\x06R\x03\x02\x02\x02\b[\x03\x02" +
		"\x02\x02\na\x03\x02\x02\x02\fh\x03\x02\x02\x02\x0Ej\x03\x02\x02\x02\x10" +
		"l\x03\x02\x02\x02\x12w\x03\x02\x02\x02\x14\x84\x03\x02\x02\x02\x16\x91" +
		"\x03\x02\x02\x02\x18\xA6\x03\x02\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xAD" +
		"\x03\x02\x02\x02\x1E\xB5\x03\x02\x02\x02 \xB7\x03\x02\x02\x02\"\xC4\x03" +
		"\x02\x02\x02$\xCA\x03\x02\x02\x02&\xD5\x03\x02\x02\x02(\xD7\x03\x02\x02" +
		"\x02*\xE0\x03\x02\x02\x02,\xE5\x03\x02\x02\x02.\xE8\x03\x02\x02\x020\xF1" +
		"\x03\x02\x02\x022\xF6\x03\x02\x02\x024\xFB\x03\x02\x02\x026\xFF\x03\x02" +
		"\x02\x028\u010A\x03\x02\x02\x02:\u0111\x03\x02\x02\x02<>\x05\x04\x03\x02" +
		"=<\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@B\x03\x02\x02\x02A?\x03\x02\x02\x02BC\x07\x02\x02\x03C\x03\x03\x02\x02" +
		"\x02DO\x05\b\x05\x02EO\x05\n\x06\x02FO\x05\x10\t\x02GO\x05\x12\n\x02H" +
		"O\x05\x14\v\x02IO\x05\x16\f\x02JO\x07\x03\x02\x02KO\x05\x18\r\x02LO\x05" +
		"\x1A\x0E\x02MO\x05\x1C\x0F\x02ND\x03\x02\x02\x02NE\x03\x02\x02\x02NF\x03" +
		"\x02\x02\x02NG\x03\x02\x02\x02NH\x03\x02\x02\x02NI\x03\x02\x02\x02NJ\x03" +
		"\x02\x02\x02NK\x03\x02\x02\x02NL\x03\x02\x02\x02NM\x03\x02\x02\x02OP\x03" +
		"\x02\x02\x02PQ\x07\x04\x02\x02Q\x05\x03\x02\x02\x02RW\x07\x05\x02\x02" +
		"SX\x07\x06\x02\x02TX\x07\x07\x02\x02UX\x07\b\x02\x02VX\x050\x19\x02WS" +
		"\x03\x02\x02\x02WT\x03\x02\x02\x02WU\x03\x02\x02\x02WV\x03\x02\x02\x02" +
		"XY\x03\x02\x02\x02YZ\x07\t\x02\x02Z\x07\x03\x02\x02\x02[\\\x07\n\x02\x02" +
		"\\]\t\x02\x02\x02]_\x07,\x02\x02^`\x05 \x11\x02_^\x03\x02\x02\x02_`\x03" +
		"\x02\x02\x02`\t\x03\x02\x02\x02ab\x07\x0F\x02\x02bc\x05\f\x07\x02cd\x05" +
		"\x0E\b\x02d\v\x03\x02\x02\x02ei\x07-\x02\x02fi\x05&\x14\x02gi\x056\x1C" +
		"\x02he\x03\x02\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\r\x03\x02" +
		"\x02\x02jk\x05&\x14\x02k\x0F\x03\x02\x02\x02lm\x07\x10\x02\x02mn\x07," +
		"\x02\x02nr\x07\x11\x02\x02oq\x05\x04\x03\x02po\x03\x02\x02\x02qt\x03\x02" +
		"\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02" +
		"\x02\x02uv\x07\x12\x02\x02v\x11\x03\x02\x02\x02wx\x07\x10\x02\x02xy\x07" +
		"\x0F\x02\x02yz\x05:\x1E\x02z{\x05:\x1E\x02{\x7F\x07\x11\x02\x02|~\x05" +
		"\x04\x03\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02" +
		"\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02" +
		"\x82\x83\x07\x12\x02\x02\x83\x13\x03\x02\x02\x02\x84\x85\x07\x13\x02\x02" +
		"\x85\x86\x07,\x02\x02\x86\x87\x07\x14\x02\x02\x87\x88\x052\x1A\x02\x88" +
		"\x8C\x07\x11\x02\x02\x89\x8B\x05\x04\x03\x02\x8A\x89\x03\x02\x02\x02\x8B" +
		"\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D" +
		"\x8F\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x90\x07\x12\x02\x02\x90" +
		"\x15\x03\x02\x02\x02\x91\x92\x07\x15\x02\x02\x92\x93\x05.\x18\x02\x93" +
		"\x97\x07\x11\x02\x02\x94\x96\x05\x04\x03\x02\x95\x94\x03\x02\x02\x02\x96" +
		"\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" +
		"\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\xA4\x07\x12\x02\x02\x9B" +
		"\x9C\x07\x16\x02\x02\x9C\xA0\x07\x11\x02\x02\x9D\x9F\x05\x04\x03\x02\x9E" +
		"\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0" +
		"\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3" +
		"\xA5\x07\x12\x02\x02\xA4\x9B\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5" +
		"\x17\x03\x02\x02\x02\xA6\xA7\x05\x1E\x10\x02\xA7\xA8\x07\x17\x02\x02\xA8" +
		"\xA9\x05*\x16\x02\xA9\x19\x03\x02\x02\x02\xAA\xAB\x07,\x02\x02\xAB\xAC" +
		"\x05 \x11\x02\xAC\x1B\x03\x02\x02\x02\xAD\xAE\x07\x05\x02\x02\xAE\xAF" +
		"\x07\x07\x02\x02\xAF\xB3\x07\t\x02\x02\xB0\xB4\x07\x18\x02\x02\xB1\xB2" +
		"\x07\x17\x02\x02\xB2\xB4\x05\x06\x04\x02\xB3\xB0\x03\x02\x02\x02\xB3\xB1" +
		"\x03\x02\x02\x02\xB4\x1D\x03\x02\x02\x02\xB5\xB6\x07,\x02\x02\xB6\x1F" +
		"\x03\x02\x02\x02\xB7\xC0\x07\x19\x02\x02\xB8\xBD\x05\"\x12\x02\xB9\xBA" +
		"\x07\x1A\x02\x02\xBA\xBC\x05\"\x12\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBF" +
		"\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC1" +
		"\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xB8\x03\x02\x02\x02\xC0\xC1" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x07\x1B\x02\x02\xC3!" +
		"\x03\x02\x02\x02\xC4\xC5\x07,\x02\x02\xC5\xC6\x07\x1C\x02\x02\xC6\xC7" +
		"\t\x03\x02\x02\xC7#\x03\x02\x02\x02\xC8\xCB\x07,\x02\x02\xC9\xCB\x05\x06" +
		"\x04\x02\xCA\xC8\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB%\x03\x02" +
		"\x02\x02\xCC\xCD\x05$\x13\x02\xCD\xCE\x07\x1D\x02\x02\xCE\xCF\x050\x19" +
		"\x02\xCF\xD0\x07\x1A\x02\x02\xD0\xD1\x050\x19\x02\xD1\xD2\x07\x1E\x02" +
		"\x02\xD2\xD6\x03\x02\x02\x02\xD3\xD6\x07\x1F\x02\x02\xD4\xD6\x07\x06\x02" +
		"\x02\xD5\xCC\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02" +
		"\x02\xD6\'\x03\x02\x02\x02\xD7\xD8\x05$\x13\x02\xD8\xD9\x07\x1D\x02\x02" +
		"\xD9\xDA\x050\x19\x02\xDA\xDB\x07\x1E\x02\x02\xDB)\x03\x02\x02\x02\xDC" +
		"\xE1\x050\x19\x02\xDD\xE1\x05\x06\x04\x02\xDE\xE1\x05(\x15\x02\xDF\xE1" +
		"\x05&\x14\x02\xE0\xDC\x03\x02\x02\x02\xE0\xDD\x03\x02\x02\x02\xE0\xDE" +
		"\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE4" +
		"\x05,\x17\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4+\x03" +
		"\x02\x02\x02\xE5\xE6\x07\x07\x02\x02\xE6\xE7\x07,\x02\x02\xE7-\x03\x02" +
		"\x02\x02\xE8\xED\x05*\x16\x02\xE9\xEA\t\x04\x02\x02\xEA\xEE\x05*\x16\x02" +
		"\xEB\xEC\t\x05\x02\x02\xEC\xEE\x052\x1A\x02\xED\xE9\x03\x02\x02\x02\xED" +
		"\xEB\x03\x02\x02\x02\xEE/\x03\x02\x02\x02\xEF\xF2\x05\x1E\x10\x02\xF0" +
		"\xF2\x07+\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2" +
		"1\x03\x02\x02\x02\xF3\xF7\x054\x1B\x02\xF4\xF7\x056\x1C\x02\xF5\xF7\x05" +
		"8\x1D\x02\xF6\xF3\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF5\x03" +
		"\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xFA\x05,\x17\x02\xF9\xF8\x03" +
		"\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA3\x03\x02\x02\x02\xFB\xFC\x05" +
		"0\x19\x02\xFC\xFD\x07\x1C\x02\x02\xFD\xFE\x050\x19\x02\xFE5\x03\x02\x02" +
		"\x02\xFF\u0100\x05$\x13\x02\u0100\u0101\x07\x1D\x02\x02\u0101\u0102\x05" +
		"0\x19\x02\u0102\u0103\x07\x1C\x02\x02\u0103\u0104\x050\x19\x02\u0104\u0105" +
		"\x07\x1A\x02\x02\u0105\u0106\x050\x19\x02\u0106\u0107\x07\x1C\x02\x02" +
		"\u0107\u0108\x050\x19\x02\u0108\u0109\x07\x1E\x02\x02\u01097\x03\x02\x02" +
		"\x02\u010A\u010B\x07\x05\x02\x02\u010B\u010C\x07(\x02\x02\u010C\u010D" +
		"\x07\t\x02\x02\u010D9\x03\x02\x02\x02\u010E\u0112\x07)\x02\x02\u010F\u0112" +
		"\x05&\x14\x02\u0110\u0112\x056\x1C\x02\u0111\u010E\x03\x02\x02\x02\u0111" +
		"\u010F\x03\x02\x02\x02\u0111\u0110\x03\x02\x02\x02\u0112;\x03\x02\x02" +
		"\x02\x19?NW_hr\x7F\x8C\x97\xA0\xA4\xB3\xBD\xC0\xCA\xD5\xE0\xE3\xED\xF1" +
		"\xF6\xF9\u0111";
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
	public _type!: Token;
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
	public source(): SourceContext {
		return this.getRuleContext(0, SourceContext);
	}
	public destination(): DestinationContext {
		return this.getRuleContext(0, DestinationContext);
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


export class SourceContext extends ParserRuleContext {
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
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
	public get ruleIndex(): number { return dealParser.RULE_source; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterSource) {
			listener.enterSource(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitSource) {
			listener.exitSource(this);
		}
	}
}


export class DestinationContext extends ParserRuleContext {
	public position(): PositionContext {
		return this.getRuleContext(0, PositionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_destination; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterDestination) {
			listener.enterDestination(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitDestination) {
			listener.exitDestination(this);
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
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
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


export class VariableContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_variable; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
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
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
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


