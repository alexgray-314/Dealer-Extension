import { dealListener } from "../parser/dealListener";

import * as vscode from 'vscode';
import { dealParser, PositionContext } from "../parser/dealParser";
import { CharStreams, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { dealLexer } from "../parser/dealLexer";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

export class DealInlayHintsProvider implements dealListener, vscode.InlayHintsProvider {

    hints: vscode.InlayHint[];
    
    constructor() {
        this.hints = [];
    }

    provideInlayHints(document: vscode.TextDocument, range: vscode.Range, token: vscode.CancellationToken): vscode.ProviderResult<vscode.InlayHint[]> {
        const lexer = new dealLexer(CharStreams.fromString(document.getText(range)));
        const parser = new dealParser(new CommonTokenStream(lexer));
        const tree = parser.prog(); // entry rule

        this.hints = [];

        ParseTreeWalker.DEFAULT.walk(this as dealListener, tree);

        return this.hints;
    }

    enterPosition (ctx: PositionContext) {
        if (ctx.childCount > 1) {

            const stack = new vscode.Position(
                (ctx.getChild(2) as ParserRuleContext).start.line - 1,
                (ctx.getChild(2) as ParserRuleContext).start.charPositionInLine
            );
            const card = new vscode.Position(
                (ctx.getChild(4) as ParserRuleContext).start.line - 1,
                (ctx.getChild(4) as ParserRuleContext).start.charPositionInLine
            );

            this.hints.push(new vscode.InlayHint(
                stack,
                "stack:",
                vscode.InlayHintKind.Parameter
            ));

            this.hints.push(new vscode.InlayHint(
                card,
                "card:",
                vscode.InlayHintKind.Parameter
            ));
        }
    }

}