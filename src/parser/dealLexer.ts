// Generated from deal.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class dealLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "VARTYPE", "NUMBER", "ID", "CARD", 
		"SPACES", "NEWLINE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'define'", "'move'", "'['", "','", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "VARTYPE", 
		"NUMBER", "ID", "CARD", "SPACES", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(dealLexer._LITERAL_NAMES, dealLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return dealLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(dealLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "deal.g4"; }

	// @Override
	public get ruleNames(): string[] { return dealLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return dealLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return dealLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return dealLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r`\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07?\n\x07\x03\b\x06\bB\n\b\r\b\x0E\bC\x03\t\x06\tG\n\t\r\t\x0E\tH\x03" +
		"\n\x03\n\x03\n\x03\n\x05\nO\n\n\x03\n\x03\n\x03\v\x06\vT\n\v\r\v\x0E\v" +
		"U\x03\v\x03\v\x03\f\x06\f[\n\f\r\f\x0E\f\\\x03\f\x03\f\x02\x02\x02\r\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03\x02\b\x03\x022;\x04\x02C" +
		"\\c|\t\x024;CCLMSScclmss\b\x02EFJJUUefjjuu\x05\x02\v\f\x0F\x0F\"\"\x04" +
		"\x02\f\f\x0F\x0F\x02g\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03" +
		"\x19\x03\x02\x02\x02\x05 \x03\x02\x02\x02\x07%\x03\x02\x02\x02\t\'\x03" +
		"\x02\x02\x02\v)\x03\x02\x02\x02\r>\x03\x02\x02\x02\x0FA\x03\x02\x02\x02" +
		"\x11F\x03\x02\x02\x02\x13J\x03\x02\x02\x02\x15S\x03\x02\x02\x02\x17Z\x03" +
		"\x02\x02\x02\x19\x1A\x07f\x02\x02\x1A\x1B\x07g\x02\x02\x1B\x1C\x07h\x02" +
		"\x02\x1C\x1D\x07k\x02\x02\x1D\x1E\x07p\x02\x02\x1E\x1F\x07g\x02\x02\x1F" +
		"\x04\x03\x02\x02\x02 !\x07o\x02\x02!\"\x07q\x02\x02\"#\x07x\x02\x02#$" +
		"\x07g\x02\x02$\x06\x03\x02\x02\x02%&\x07]\x02\x02&\b\x03\x02\x02\x02\'" +
		"(\x07.\x02\x02(\n\x03\x02\x02\x02)*\x07_\x02\x02*\f\x03\x02\x02\x02+," +
		"\x07c\x02\x02,-\x07t\x02\x02-.\x07g\x02\x02.?\x07c\x02\x02/0\x07c\x02" +
		"\x0201\x07e\x02\x0212\x07v\x02\x0223\x07k\x02\x0234\x07q\x02\x024?\x07" +
		"p\x02\x0256\x07k\x02\x0267\x07p\x02\x027?\x07v\x02\x0289\x07u\x02\x02" +
		"9:\x07v\x02\x02:;\x07t\x02\x02;<\x07k\x02\x02<=\x07p\x02\x02=?\x07i\x02" +
		"\x02>+\x03\x02\x02\x02>/\x03\x02\x02\x02>5\x03\x02\x02\x02>8\x03\x02\x02" +
		"\x02?\x0E\x03\x02\x02\x02@B\t\x02\x02\x02A@\x03\x02\x02\x02BC\x03\x02" +
		"\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\x10\x03\x02\x02\x02EG\t" +
		"\x03\x02\x02FE\x03\x02\x02\x02GH\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03" +
		"\x02\x02\x02I\x12\x03\x02\x02\x02JN\x07%\x02\x02KL\x073\x02\x02LO\x07" +
		"2\x02\x02MO\t\x04\x02\x02NK\x03\x02\x02\x02NM\x03\x02\x02\x02OP\x03\x02" +
		"\x02\x02PQ\t\x05\x02\x02Q\x14\x03\x02\x02\x02RT\t\x06\x02\x02SR\x03\x02" +
		"\x02\x02TU\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02" +
		"\x02\x02WX\b\v\x02\x02X\x16\x03\x02\x02\x02Y[\t\x07\x02\x02ZY\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03" +
		"\x02\x02\x02^_\b\f\x02\x02_\x18\x03\x02\x02\x02\t\x02>CHNU\\\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dealLexer.__ATN) {
			dealLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dealLexer._serializedATN));
		}

		return dealLexer.__ATN;
	}

}

