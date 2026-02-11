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
import { dealVisitor } from "./dealVisitor";


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
	public static readonly COMMENT = 38;
	public static readonly MOVE_DEST = 39;
	public static readonly MOVE_SOURCE = 40;
	public static readonly NUMBER = 41;
	public static readonly ID = 42;
	public static readonly CARD = 43;
	public static readonly STRING = 44;
	public static readonly SPACES = 45;
	public static readonly NEWLINE = 46;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_player = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_move = 5;
	public static readonly RULE_source = 6;
	public static readonly RULE_destination = 7;
	public static readonly RULE_on_action = 8;
	public static readonly RULE_on_move = 9;
	public static readonly RULE_for = 10;
	public static readonly RULE_if = 11;
	public static readonly RULE_assign = 12;
	public static readonly RULE_function_call = 13;
	public static readonly RULE_updateTurn = 14;
	public static readonly RULE_variable = 15;
	public static readonly RULE_args = 16;
	public static readonly RULE_arg = 17;
	public static readonly RULE_arearef = 18;
	public static readonly RULE_area = 19;
	public static readonly RULE_stack = 20;
	public static readonly RULE_position = 21;
	public static readonly RULE_term = 22;
	public static readonly RULE_property = 23;
	public static readonly RULE_bexpr = 24;
	public static readonly RULE_aexpr = 25;
	public static readonly RULE_set = 26;
	public static readonly RULE_intset = 27;
	public static readonly RULE_positionset = 28;
	public static readonly RULE_playerset = 29;
	public static readonly RULE_move_catch = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "block", "player", "definition", "move", "source", "destination", 
		"on_action", "on_move", "for", "if", "assign", "function_call", "updateTurn", 
		"variable", "args", "arg", "arearef", "area", "stack", "position", "term", 
		"property", "bexpr", "aexpr", "set", "intset", "positionset", "playerset", 
		"move_catch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cancel'", "';'", "'<'", "'.'", "'@'", "'>'", "'define'", 
		"'area'", "'action'", "'int'", "'card'", "'move'", "'on'", "'{'", "'}'", 
		"'for'", "'in'", "'if'", "'else'", "'='", "'++'", "'('", "','", "')'", 
		"':'", "'['", "']'", "'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", "'=?'", 
		"'!?'", "'*'", "'?'", undefined, "'/'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "COMMENT", "MOVE_DEST", "MOVE_SOURCE", 
		"NUMBER", "ID", "CARD", "STRING", "SPACES", "NEWLINE",
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
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__6) | (1 << dealParser.T__11) | (1 << dealParser.T__12) | (1 << dealParser.T__15) | (1 << dealParser.T__17))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 62;
				this.stmt();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
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
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 70;
				this.definition();
				}
				break;

			case 2:
				{
				this.state = 71;
				this.move();
				}
				break;

			case 3:
				{
				this.state = 72;
				this.on_action();
				}
				break;

			case 4:
				{
				this.state = 73;
				this.on_move();
				}
				break;

			case 5:
				{
				this.state = 74;
				this.for();
				}
				break;

			case 6:
				{
				this.state = 75;
				this.if();
				}
				break;

			case 7:
				{
				this.state = 76;
				this.match(dealParser.T__0);
				}
				break;

			case 8:
				{
				this.state = 77;
				this.assign();
				}
				break;

			case 9:
				{
				this.state = 78;
				this.function_call();
				}
				break;

			case 10:
				{
				this.state = 79;
				this.updateTurn();
				}
				break;
			}
			this.state = 82;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, dealParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__0) | (1 << dealParser.T__2) | (1 << dealParser.T__6) | (1 << dealParser.T__11) | (1 << dealParser.T__12) | (1 << dealParser.T__15) | (1 << dealParser.T__17))) !== 0) || _la === dealParser.ID) {
				{
				{
				this.state = 84;
				this.stmt();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public player(): PlayerContext {
		let _localctx: PlayerContext = new PlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, dealParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(dealParser.T__2);
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.MOVE_DEST:
				{
				this.state = 91;
				this.match(dealParser.MOVE_DEST);
				}
				break;
			case dealParser.T__3:
				{
				this.state = 92;
				this.match(dealParser.T__3);
				}
				break;
			case dealParser.T__4:
				{
				this.state = 93;
				this.match(dealParser.T__4);
				}
				break;
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 94;
				this.aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 97;
			this.match(dealParser.T__5);
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
			this.state = 99;
			this.match(dealParser.T__6);
			this.state = 100;
			_localctx._type = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__7) | (1 << dealParser.T__8) | (1 << dealParser.T__9) | (1 << dealParser.T__10))) !== 0))) {
				_localctx._type = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 101;
			this.match(dealParser.ID);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__21) {
				{
				this.state = 102;
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
		this.enterRule(_localctx, 10, dealParser.RULE_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(dealParser.T__11);
			this.state = 106;
			this.source();
			this.state = 107;
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
		this.enterRule(_localctx, 12, dealParser.RULE_source);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 109;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 110;
				this.position();
				}
				break;

			case 3:
				{
				this.state = 111;
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
		this.enterRule(_localctx, 14, dealParser.RULE_destination);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
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
		this.enterRule(_localctx, 16, dealParser.RULE_on_action);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(dealParser.T__12);
			this.state = 117;
			this.match(dealParser.ID);
			this.state = 118;
			this.match(dealParser.T__13);
			this.state = 119;
			this.block();
			this.state = 120;
			this.match(dealParser.T__14);
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
		this.enterRule(_localctx, 18, dealParser.RULE_on_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(dealParser.T__12);
			this.state = 123;
			this.match(dealParser.T__11);
			this.state = 124;
			this.move_catch();
			this.state = 125;
			this.move_catch();
			this.state = 126;
			this.match(dealParser.T__13);
			this.state = 127;
			this.block();
			this.state = 128;
			this.match(dealParser.T__14);
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
		this.enterRule(_localctx, 20, dealParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(dealParser.T__15);
			this.state = 131;
			this.match(dealParser.ID);
			this.state = 132;
			this.match(dealParser.T__16);
			this.state = 133;
			this.set();
			this.state = 134;
			this.match(dealParser.T__13);
			this.state = 135;
			this.block();
			this.state = 136;
			this.match(dealParser.T__14);
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
		this.enterRule(_localctx, 22, dealParser.RULE_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(dealParser.T__17);
			this.state = 139;
			this.bexpr();
			this.state = 140;
			this.match(dealParser.T__13);
			this.state = 141;
			_localctx._consequent = this.block();
			this.state = 142;
			this.match(dealParser.T__14);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__18) {
				{
				this.state = 143;
				this.match(dealParser.T__18);
				this.state = 144;
				this.match(dealParser.T__13);
				this.state = 145;
				_localctx._antecedent = this.block();
				this.state = 146;
				this.match(dealParser.T__14);
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
		this.enterRule(_localctx, 24, dealParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.variable();
			this.state = 151;
			this.match(dealParser.T__19);
			this.state = 152;
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
		this.enterRule(_localctx, 26, dealParser.RULE_function_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(dealParser.ID);
			this.state = 155;
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
		this.enterRule(_localctx, 28, dealParser.RULE_updateTurn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(dealParser.T__2);
			this.state = 158;
			this.match(dealParser.T__3);
			this.state = 159;
			this.match(dealParser.T__5);
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__20:
				{
				this.state = 160;
				this.match(dealParser.T__20);
				}
				break;
			case dealParser.T__19:
				{
				this.state = 161;
				this.match(dealParser.T__19);
				this.state = 162;
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
		this.enterRule(_localctx, 30, dealParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
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
		this.enterRule(_localctx, 32, dealParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(dealParser.T__21);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.ID) {
				{
				this.state = 168;
				this.arg();
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dealParser.T__22) {
					{
					{
					this.state = 169;
					this.match(dealParser.T__22);
					this.state = 170;
					this.arg();
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 178;
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
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, dealParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(dealParser.ID);
			this.state = 181;
			this.match(dealParser.T__24);
			this.state = 182;
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
		this.enterRule(_localctx, 36, dealParser.RULE_arearef);
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
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
	public area(): AreaContext {
		let _localctx: AreaContext = new AreaContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, dealParser.RULE_area);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.arearef();
			this.state = 189;
			this.match(dealParser.T__25);
			this.state = 190;
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
	public stack(): StackContext {
		let _localctx: StackContext = new StackContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, dealParser.RULE_stack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.arearef();
			this.state = 193;
			this.match(dealParser.T__25);
			this.state = 194;
			this.aexpr();
			this.state = 195;
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
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, dealParser.RULE_position);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__2:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.arearef();
				this.state = 198;
				this.match(dealParser.T__25);
				this.state = 199;
				this.aexpr();
				this.state = 200;
				this.match(dealParser.T__22);
				this.state = 201;
				this.aexpr();
				this.state = 202;
				this.match(dealParser.T__26);
				}
				break;
			case dealParser.MOVE_SOURCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.match(dealParser.MOVE_SOURCE);
				}
				break;
			case dealParser.MOVE_DEST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.match(dealParser.MOVE_DEST);
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, dealParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 208;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 209;
				this.match(dealParser.STRING);
				}
				break;

			case 3:
				{
				this.state = 210;
				this.aexpr();
				}
				break;

			case 4:
				{
				this.state = 211;
				this.player();
				}
				break;

			case 5:
				{
				this.state = 212;
				this.area();
				}
				break;

			case 6:
				{
				this.state = 213;
				this.stack();
				}
				break;

			case 7:
				{
				this.state = 214;
				this.position();
				}
				break;
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__3) {
				{
				this.state = 217;
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
		this.enterRule(_localctx, 46, dealParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(dealParser.T__3);
			this.state = 221;
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
		this.enterRule(_localctx, 48, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.term();
			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__27:
			case dealParser.T__28:
			case dealParser.T__29:
			case dealParser.T__30:
			case dealParser.T__31:
			case dealParser.T__32:
				{
				{
				this.state = 224;
				_la = this._input.LA(1);
				if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (dealParser.T__27 - 28)) | (1 << (dealParser.T__28 - 28)) | (1 << (dealParser.T__29 - 28)) | (1 << (dealParser.T__30 - 28)) | (1 << (dealParser.T__31 - 28)) | (1 << (dealParser.T__32 - 28)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 225;
				this.term();
				}
				}
				break;
			case dealParser.T__33:
			case dealParser.T__34:
				{
				{
				this.state = 226;
				_la = this._input.LA(1);
				if (!(_la === dealParser.T__33 || _la === dealParser.T__34)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 227;
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
		this.enterRule(_localctx, 50, dealParser.RULE_aexpr);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.match(dealParser.NUMBER);
				}
				break;
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.variable();
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
		this.enterRule(_localctx, 52, dealParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 234;
				this.intset();
				}
				break;

			case 2:
				{
				this.state = 235;
				this.positionset();
				}
				break;

			case 3:
				{
				this.state = 236;
				this.playerset();
				}
				break;
			}
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__3) {
				{
				this.state = 239;
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
		this.enterRule(_localctx, 54, dealParser.RULE_intset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.aexpr();
			this.state = 243;
			this.match(dealParser.T__24);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.NUMBER || _la === dealParser.ID) {
				{
				this.state = 244;
				this.aexpr();
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
	public positionset(): PositionsetContext {
		let _localctx: PositionsetContext = new PositionsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.arearef();
			this.state = 248;
			this.match(dealParser.T__25);
			this.state = 249;
			this.intset();
			this.state = 250;
			this.match(dealParser.T__22);
			this.state = 251;
			this.intset();
			this.state = 252;
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
		this.enterRule(_localctx, 58, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(dealParser.T__2);
			this.state = 255;
			this.match(dealParser.T__35);
			this.state = 256;
			this.match(dealParser.T__5);
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
		this.enterRule(_localctx, 60, dealParser.RULE_move_catch);
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.match(dealParser.T__36);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.position();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 260;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u010A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x07\x02B\n\x02" +
		"\f\x02\x0E\x02E\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03S\n\x03\x03\x03" +
		"\x03\x03\x03\x04\x07\x04X\n\x04\f\x04\x0E\x04[\v\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05b\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06j\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x05\bs\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\x97\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xA6\n" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xAE\n\x12" +
		"\f\x12\x0E\x12\xB1\v\x12\x05\x12\xB3\n\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\xBD\n\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xD1\n" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xDA" +
		"\n\x18\x03\x18\x05\x18\xDD\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xE7\n\x1A\x03\x1B\x03\x1B\x05\x1B\xEB" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\xF0\n\x1C\x03\x1C\x05\x1C\xF3\n" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xF8\n\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x05 \u0108\n \x03 \x02\x02\x02!\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02\x02\x06\x03\x02\n\r\x04\x02++..\x03\x02\x1E#" +
		"\x03\x02$%\x02\u0111\x02C\x03\x02\x02\x02\x04R\x03\x02\x02\x02\x06Y\x03" +
		"\x02\x02\x02\b\\\x03\x02\x02\x02\ne\x03\x02\x02\x02\fk\x03\x02\x02\x02" +
		"\x0Er\x03\x02\x02\x02\x10t\x03\x02\x02\x02\x12v\x03\x02\x02\x02\x14|\x03" +
		"\x02\x02\x02\x16\x84\x03\x02\x02\x02\x18\x8C\x03\x02\x02\x02\x1A\x98\x03" +
		"\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E\x9F\x03\x02\x02\x02 \xA7\x03" +
		"\x02\x02\x02\"\xA9\x03\x02\x02\x02$\xB6\x03\x02\x02\x02&\xBC\x03\x02\x02" +
		"\x02(\xBE\x03\x02\x02\x02*\xC2\x03\x02\x02\x02,\xD0\x03\x02\x02\x02.\xD9" +
		"\x03\x02\x02\x020\xDE\x03\x02\x02\x022\xE1\x03\x02\x02\x024\xEA\x03\x02" +
		"\x02\x026\xEF\x03\x02\x02\x028\xF4\x03\x02\x02\x02:\xF9\x03\x02\x02\x02" +
		"<\u0100\x03\x02\x02\x02>\u0107\x03\x02\x02\x02@B\x05\x04\x03\x02A@\x03" +
		"\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03" +
		"\x02\x02\x02EC\x03\x02\x02\x02FG\x07\x02\x02\x03G\x03\x03\x02\x02\x02" +
		"HS\x05\n\x06\x02IS\x05\f\x07\x02JS\x05\x12\n\x02KS\x05\x14\v\x02LS\x05" +
		"\x16\f\x02MS\x05\x18\r\x02NS\x07\x03\x02\x02OS\x05\x1A\x0E\x02PS\x05\x1C" +
		"\x0F\x02QS\x05\x1E\x10\x02RH\x03\x02\x02\x02RI\x03\x02\x02\x02RJ\x03\x02" +
		"\x02\x02RK\x03\x02\x02\x02RL\x03\x02\x02\x02RM\x03\x02\x02\x02RN\x03\x02" +
		"\x02\x02RO\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02ST\x03\x02" +
		"\x02\x02TU\x07\x04\x02\x02U\x05\x03\x02\x02\x02VX\x05\x04\x03\x02WV\x03" +
		"\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x07" +
		"\x03\x02\x02\x02[Y\x03\x02\x02\x02\\a\x07\x05\x02\x02]b\x07)\x02\x02^" +
		"b\x07\x06\x02\x02_b\x07\x07\x02\x02`b\x054\x1B\x02a]\x03\x02\x02\x02a" +
		"^\x03\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"cd\x07\b\x02\x02d\t\x03\x02\x02\x02ef\x07\t\x02\x02fg\t\x02\x02\x02gi" +
		"\x07,\x02\x02hj\x05\"\x12\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02j\v\x03" +
		"\x02\x02\x02kl\x07\x0E\x02\x02lm\x05\x0E\b\x02mn\x05\x10\t\x02n\r\x03" +
		"\x02\x02\x02os\x07-\x02\x02ps\x05,\x17\x02qs\x05:\x1E\x02ro\x03\x02\x02" +
		"\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\x0F\x03\x02\x02\x02tu\x05,\x17" +
		"\x02u\x11\x03\x02\x02\x02vw\x07\x0F\x02\x02wx\x07,\x02\x02xy\x07\x10\x02" +
		"\x02yz\x05\x06\x04\x02z{\x07\x11\x02\x02{\x13\x03\x02\x02\x02|}\x07\x0F" +
		"\x02\x02}~\x07\x0E\x02\x02~\x7F\x05> \x02\x7F\x80\x05> \x02\x80\x81\x07" +
		"\x10\x02\x02\x81\x82\x05\x06\x04\x02\x82\x83\x07\x11\x02\x02\x83\x15\x03" +
		"\x02\x02\x02\x84\x85\x07\x12\x02\x02\x85\x86\x07,\x02\x02\x86\x87\x07" +
		"\x13\x02\x02\x87\x88\x056\x1C\x02\x88\x89\x07\x10\x02\x02\x89\x8A\x05" +
		"\x06\x04\x02\x8A\x8B\x07\x11\x02\x02\x8B\x17\x03\x02\x02\x02\x8C\x8D\x07" +
		"\x14\x02\x02\x8D\x8E\x052\x1A\x02\x8E\x8F\x07\x10\x02\x02\x8F\x90\x05" +
		"\x06\x04\x02\x90\x96\x07\x11\x02\x02\x91\x92\x07\x15\x02\x02\x92\x93\x07" +
		"\x10\x02\x02\x93\x94\x05\x06\x04\x02\x94\x95\x07\x11\x02\x02\x95\x97\x03" +
		"\x02\x02\x02\x96\x91\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x19\x03" +
		"\x02\x02\x02\x98\x99\x05 \x11\x02\x99\x9A\x07\x16\x02\x02\x9A\x9B\x05" +
		".\x18\x02\x9B\x1B\x03\x02\x02\x02\x9C\x9D\x07,\x02\x02\x9D\x9E\x05\"\x12" +
		"\x02\x9E\x1D\x03\x02\x02\x02\x9F\xA0\x07\x05\x02\x02\xA0\xA1\x07\x06\x02" +
		"\x02\xA1\xA5\x07\b\x02\x02\xA2\xA6\x07\x17\x02\x02\xA3\xA4\x07\x16\x02" +
		"\x02\xA4\xA6\x05\b\x05\x02\xA5\xA2\x03\x02\x02\x02\xA5\xA3\x03\x02\x02" +
		"\x02\xA6\x1F\x03\x02\x02\x02\xA7\xA8\x07,\x02\x02\xA8!\x03\x02\x02\x02" +
		"\xA9\xB2\x07\x18\x02\x02\xAA\xAF\x05$\x13\x02\xAB\xAC\x07\x19\x02\x02" +
		"\xAC\xAE\x05$\x13\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02" +
		"\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02" +
		"\xB1\xAF\x03\x02\x02\x02\xB2\xAA\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02" +
		"\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x07\x1A\x02\x02\xB5#\x03\x02\x02\x02" +
		"\xB6\xB7\x07,\x02\x02\xB7\xB8\x07\x1B\x02\x02\xB8\xB9\t\x03\x02\x02\xB9" +
		"%\x03\x02\x02\x02\xBA\xBD\x07,\x02\x02\xBB\xBD\x05\b\x05\x02\xBC\xBA\x03" +
		"\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\'\x03\x02\x02\x02\xBE\xBF\x05" +
		"&\x14\x02\xBF\xC0\x07\x1C\x02\x02\xC0\xC1\x07\x1D\x02\x02\xC1)\x03\x02" +
		"\x02\x02\xC2\xC3\x05&\x14\x02\xC3\xC4\x07\x1C\x02\x02\xC4\xC5\x054\x1B" +
		"\x02\xC5\xC6\x07\x1D\x02\x02\xC6+\x03\x02\x02\x02\xC7\xC8\x05&\x14\x02" +
		"\xC8\xC9\x07\x1C\x02\x02\xC9\xCA\x054\x1B\x02\xCA\xCB\x07\x19\x02\x02" +
		"\xCB\xCC\x054\x1B\x02\xCC\xCD\x07\x1D\x02\x02\xCD\xD1\x03\x02\x02\x02" +
		"\xCE\xD1\x07*\x02\x02\xCF\xD1\x07)\x02\x02\xD0\xC7\x03\x02\x02\x02\xD0" +
		"\xCE\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1-\x03\x02\x02\x02\xD2" +
		"\xDA\x07-\x02\x02\xD3\xDA\x07.\x02\x02\xD4\xDA\x054\x1B\x02\xD5\xDA\x05" +
		"\b\x05\x02\xD6\xDA\x05(\x15\x02\xD7\xDA\x05*\x16\x02\xD8\xDA\x05,\x17" +
		"\x02\xD9\xD2\x03\x02\x02\x02\xD9\xD3\x03\x02\x02\x02\xD9\xD4\x03\x02\x02" +
		"\x02\xD9\xD5\x03\x02\x02\x02\xD9\xD6\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
		"\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xDD\x050\x19" +
		"\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD/\x03\x02\x02" +
		"\x02\xDE\xDF\x07\x06\x02\x02\xDF\xE0\x07,\x02\x02\xE01\x03\x02\x02\x02" +
		"\xE1\xE6\x05.\x18\x02\xE2\xE3\t\x04\x02\x02\xE3\xE7\x05.\x18\x02\xE4\xE5" +
		"\t\x05\x02\x02\xE5\xE7\x056\x1C\x02\xE6\xE2\x03\x02\x02\x02\xE6\xE4\x03" +
		"\x02\x02\x02\xE73\x03\x02\x02\x02\xE8\xEB\x07+\x02\x02\xE9\xEB\x05 \x11" +
		"\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB5\x03\x02\x02" +
		"\x02\xEC\xF0\x058\x1D\x02\xED\xF0\x05:\x1E\x02\xEE\xF0\x05<\x1F\x02\xEF" +
		"\xEC\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0" +
		"\xF2\x03\x02\x02\x02\xF1\xF3\x050\x19\x02\xF2\xF1\x03\x02\x02\x02\xF2" +
		"\xF3\x03\x02\x02\x02\xF37\x03\x02\x02\x02\xF4\xF5\x054\x1B\x02\xF5\xF7" +
		"\x07\x1B\x02\x02\xF6\xF8\x054\x1B\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF89\x03\x02\x02\x02\xF9\xFA\x05&\x14\x02\xFA\xFB\x07" +
		"\x1C\x02\x02\xFB\xFC\x058\x1D\x02\xFC\xFD\x07\x19\x02\x02\xFD\xFE\x05" +
		"8\x1D\x02\xFE\xFF\x07\x1D\x02\x02\xFF;\x03\x02\x02\x02\u0100\u0101\x07" +
		"\x05\x02\x02\u0101\u0102\x07&\x02\x02\u0102\u0103\x07\b\x02\x02\u0103" +
		"=\x03\x02\x02\x02\u0104\u0108\x07\'\x02\x02\u0105\u0108\x05,\x17\x02\u0106" +
		"\u0108\x05:\x1E\x02\u0107\u0104\x03\x02\x02\x02\u0107\u0105\x03\x02\x02" +
		"\x02\u0107\u0106\x03\x02\x02\x02\u0108?\x03\x02\x02\x02\x16CRYair\x96" +
		"\xA5\xAF\xB2\xBC\xD0\xD9\xDC\xE6\xEA\xEF\xF2\xF7\u0107";
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return dealParser.RULE_block; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayerContext extends ParserRuleContext {
	public MOVE_DEST(): TerminalNode | undefined { return this.tryGetToken(dealParser.MOVE_DEST, 0); }
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPlayer) {
			return visitor.visitPlayer(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitSource) {
			return visitor.visitSource(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitDestination) {
			return visitor.visitDestination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class On_actionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitOn_action) {
			return visitor.visitOn_action(this);
		} else {
			return visitor.visitChildren(this);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitOn_move) {
			return visitor.visitOn_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public set(): SetContext {
		return this.getRuleContext(0, SetContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitFor) {
			return visitor.visitFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfContext extends ParserRuleContext {
	public _consequent!: BlockContext;
	public _antecedent!: BlockContext;
	public bexpr(): BexprContext {
		return this.getRuleContext(0, BexprContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitIf) {
			return visitor.visitIf(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitUpdateTurn) {
			return visitor.visitUpdateTurn(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArearef) {
			return visitor.visitArearef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AreaContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_area; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArea) {
			listener.enterArea(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArea) {
			listener.exitArea(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArea) {
			return visitor.visitArea(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitStack) {
			return visitor.visitStack(this);
		} else {
			return visitor.visitChildren(this);
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
	public MOVE_SOURCE(): TerminalNode | undefined { return this.tryGetToken(dealParser.MOVE_SOURCE, 0); }
	public MOVE_DEST(): TerminalNode | undefined { return this.tryGetToken(dealParser.MOVE_DEST, 0); }
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(dealParser.STRING, 0); }
	public aexpr(): AexprContext | undefined {
		return this.tryGetRuleContext(0, AexprContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public area(): AreaContext | undefined {
		return this.tryGetRuleContext(0, AreaContext);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitBexpr) {
			return visitor.visitBexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AexprContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(dealParser.NUMBER, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitAexpr) {
			return visitor.visitAexpr(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitSet) {
			return visitor.visitSet(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitIntset) {
			return visitor.visitIntset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionsetContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	public intset(): IntsetContext[];
	public intset(i: number): IntsetContext;
	public intset(i?: number): IntsetContext | IntsetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntsetContext);
		} else {
			return this.getRuleContext(i, IntsetContext);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPositionset) {
			return visitor.visitPositionset(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPlayerset) {
			return visitor.visitPlayerset(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitMove_catch) {
			return visitor.visitMove_catch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


