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
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly TYPE = 8;
	public static readonly NUMBER = 9;
	public static readonly ID = 10;
	public static readonly SPACES = 11;
	public static readonly NEWLINE = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "TYPE", "NUMBER", 
		"ID", "SPACES", "NEWLINE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'define'", "'*'", "'/'", "'+'", "'-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "TYPE", "NUMBER", "ID", "SPACES", "NEWLINE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E[\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tB\n\t\x03\n\x06" +
		"\nE\n\n\r\n\x0E\nF\x03\v\x06\vJ\n\v\r\v\x0E\vK\x03\f\x06\fO\n\f\r\f\x0E" +
		"\fP\x03\f\x03\f\x03\r\x06\rV\n\r\r\r\x0E\rW\x03\r\x03\r\x02\x02\x02\x0E" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x03\x02\x06\x03" +
		"\x022;\x04\x02C\\c|\x05\x02\v\f\x0F\x0F\"\"\x04\x02\f\f\x0F\x0F\x02a\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B" +
		"\x03\x02\x02\x02\x05\"\x03\x02\x02\x02\x07$\x03\x02\x02\x02\t&\x03\x02" +
		"\x02\x02\v(\x03\x02\x02\x02\r*\x03\x02\x02\x02\x0F,\x03\x02\x02\x02\x11" +
		"A\x03\x02\x02\x02\x13D\x03\x02\x02\x02\x15I\x03\x02\x02\x02\x17N\x03\x02" +
		"\x02\x02\x19U\x03\x02\x02\x02\x1B\x1C\x07f\x02\x02\x1C\x1D\x07g\x02\x02" +
		"\x1D\x1E\x07h\x02\x02\x1E\x1F\x07k\x02\x02\x1F \x07p\x02\x02 !\x07g\x02" +
		"\x02!\x04\x03\x02\x02\x02\"#\x07,\x02\x02#\x06\x03\x02\x02\x02$%\x071" +
		"\x02\x02%\b\x03\x02\x02\x02&\'\x07-\x02\x02\'\n\x03\x02\x02\x02()\x07" +
		"/\x02\x02)\f\x03\x02\x02\x02*+\x07*\x02\x02+\x0E\x03\x02\x02\x02,-\x07" +
		"+\x02\x02-\x10\x03\x02\x02\x02./\x07c\x02\x02/0\x07t\x02\x0201\x07g\x02" +
		"\x021B\x07c\x02\x0223\x07c\x02\x0234\x07e\x02\x0245\x07v\x02\x0256\x07" +
		"k\x02\x0267\x07q\x02\x027B\x07p\x02\x0289\x07k\x02\x029:\x07p\x02\x02" +
		":B\x07v\x02\x02;<\x07u\x02\x02<=\x07v\x02\x02=>\x07t\x02\x02>?\x07k\x02" +
		"\x02?@\x07p\x02\x02@B\x07i\x02\x02A.\x03\x02\x02\x02A2\x03\x02\x02\x02" +
		"A8\x03\x02\x02\x02A;\x03\x02\x02\x02B\x12\x03\x02\x02\x02CE\t\x02\x02" +
		"\x02DC\x03\x02\x02\x02EF\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02" +
		"\x02G\x14\x03\x02\x02\x02HJ\t\x03\x02\x02IH\x03\x02\x02\x02JK\x03\x02" +
		"\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02L\x16\x03\x02\x02\x02MO\t" +
		"\x04\x02\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03" +
		"\x02\x02\x02QR\x03\x02\x02\x02RS\b\f\x02\x02S\x18\x03\x02\x02\x02TV\t" +
		"\x05\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03" +
		"\x02\x02\x02XY\x03\x02\x02\x02YZ\b\r\x02\x02Z\x1A\x03\x02\x02\x02\b\x02" +
		"AFKPW\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dealLexer.__ATN) {
			dealLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dealLexer._serializedATN));
		}

		return dealLexer.__ATN;
	}

}

