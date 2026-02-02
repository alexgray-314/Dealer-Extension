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
	public static readonly VARTYPE = 6;
	public static readonly NUMBER = 7;
	public static readonly ID = 8;
	public static readonly CARD = 9;
	public static readonly SPACES = 10;
	public static readonly NEWLINE = 11;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_definition = 2;
	public static readonly RULE_move = 3;
	public static readonly RULE_position = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "definition", "move", "position",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'define'", "'move'", "'['", "','", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "VARTYPE", 
		"NUMBER", "ID", "CARD", "SPACES", "NEWLINE",
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
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === dealParser.T__0 || _la === dealParser.T__1) {
				{
				{
				this.state = 10;
				this.stmt();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 16;
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
			this.state = 20;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.definition();
				}
				break;
			case dealParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.move();
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, dealParser.RULE_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(dealParser.T__0);
			this.state = 23;
			this.match(dealParser.VARTYPE);
			this.state = 24;
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
		this.enterRule(_localctx, 6, dealParser.RULE_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(dealParser.T__1);
			this.state = 29;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.CARD:
				{
				this.state = 27;
				this.match(dealParser.CARD);
				}
				break;
			case dealParser.ID:
				{
				this.state = 28;
				this.position();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 31;
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
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, dealParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.match(dealParser.ID);
			this.state = 34;
			this.match(dealParser.T__2);
			this.state = 35;
			this.match(dealParser.NUMBER);
			this.state = 36;
			this.match(dealParser.T__3);
			this.state = 37;
			this.match(dealParser.NUMBER);
			this.state = 38;
			this.match(dealParser.T__4);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r+\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x07" +
		"\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x05\x05 \n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\x02\x02\x02(\x02\x0F\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02" +
		"\x06\x18\x03\x02\x02\x02\b\x1C\x03\x02\x02\x02\n#\x03\x02\x02\x02\f\x0E" +
		"\x05\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02\x02\x0F\r\x03" +
		"\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x12\x03\x02\x02\x02\x11\x0F\x03" +
		"\x02\x02\x02\x12\x13\x07\x02\x02\x03\x13\x03\x03\x02\x02\x02\x14\x17\x05" +
		"\x06\x04\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02\x02\x02\x16\x15\x03" +
		"\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\x07\x03\x02\x02\x19\x1A\x07" +
		"\b\x02\x02\x1A\x1B\x07\n\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1F\x07\x04" +
		"\x02\x02\x1D \x07\v\x02\x02\x1E \x05\n\x06\x02\x1F\x1D\x03\x02\x02\x02" +
		"\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x05\n\x06\x02\"\t\x03\x02" +
		"\x02\x02#$\x07\n\x02\x02$%\x07\x05\x02\x02%&\x07\t\x02\x02&\'\x07\x06" +
		"\x02\x02\'(\x07\t\x02\x02()\x07\x07\x02\x02)\v\x03\x02\x02\x02\x05\x0F" +
		"\x16\x1F";
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


export class DefinitionContext extends ParserRuleContext {
	public VARTYPE(): TerminalNode { return this.getToken(dealParser.VARTYPE, 0); }
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


export class PositionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dealParser.NUMBER);
		} else {
			return this.getToken(dealParser.NUMBER, i);
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


