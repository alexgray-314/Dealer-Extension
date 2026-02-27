import { dealListener } from "../language/dealListener";

import * as vscode from 'vscode';
import { dealParser, PositionContext } from "../language/dealParser";
import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { dealLexer } from "../language/dealLexer";
import { ParseTreeWalker } from "antlr4ng";

export class DealInlayHintsProvider extends dealListener implements vscode.InlayHintsProvider {

    hints: vscode.InlayHint[];
    
    constructor() {
        super();
        this.hints = [];
    }

    provideInlayHints(document: vscode.TextDocument, range: vscode.Range, token: vscode.CancellationToken): vscode.ProviderResult<vscode.InlayHint[]> {
        const lexer = new dealLexer(CharStream.fromString(document.getText(range)));
        const parser = new dealParser(new CommonTokenStream(lexer));
        const tree = parser.prog(); // entry rule

        this.hints = [];

        ParseTreeWalker.DEFAULT.walk(this as dealListener, tree);

        return this.hints;
    }

}