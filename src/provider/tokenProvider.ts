import * as vscode from "vscode";
import { dealListener } from "../language/dealListener";
import { AttributeContext, dealParser } from "../language/dealParser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { dealLexer } from "../language/dealLexer";
import { CharStreams } from "antlr4ts/CharStreams";
import { CommonTokenStream } from "antlr4ts/CommonTokenStream";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { RuleContext, Token } from "antlr4ts";

export class TokenProvider implements vscode.DocumentSemanticTokensProvider, dealListener {

    legend : vscode.SemanticTokensLegend;
    tokensBuilder: vscode.SemanticTokensBuilder;

    constructor(context: vscode.ExtensionContext) {
        const tokenTypes = ['class', 'interface', 'enum', 'function', 'variable', 'id', 'value', 'string'];
        const tokenModifiers = ['declaration', 'documentation', 'config'];
        this.legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);
        this.tokensBuilder = new vscode.SemanticTokensBuilder(this.legend);

        context.subscriptions.push(
            vscode.languages.registerDocumentSemanticTokensProvider(
                {
                    language: 'deal',
                    scheme: 'file'
                }, 
                this, 
                this.legend
            )
        );
    }

    provideDocumentSemanticTokens(
        document: vscode.TextDocument,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.SemanticTokens> {

        const lexer = new dealLexer(CharStreams.fromString(document.getText()));
        const parser = new dealParser(new CommonTokenStream(lexer));
        const tree = parser.prog();

        this.tokensBuilder = new vscode.SemanticTokensBuilder(this.legend);

        ParseTreeWalker.DEFAULT.walk(this as dealListener, tree);

        return this.tokensBuilder.build();
    }

    private getRange(tree : ParseTree) {
        const length : number = Math.max((tree.text.length), 1);

        const token = (tree as TerminalNode).symbol ?? (tree as ParserRuleContext).start;

        try {
            return new vscode.Range(
                token.line - 1,
                token.charPositionInLine,
                token.line - 1,
                token.charPositionInLine + length
            );
        } catch (e) {
            console.error((tree as TerminalNode).symbol);
        }

        return new vscode.Range(-1, -1, -1, -1);
    }

    enterAttribute (ctx: AttributeContext) {

        this.tokensBuilder.push(
            this.getRange(ctx.getChild(0)),
            'id',
            ['config']
        );

        if(ctx.atts() === undefined) {

            this.tokensBuilder.push(
                this.getRange(ctx.getChild(1)),
                (ctx.STRING() === undefined) ? 'value' : 'string',
                ['config']
            );

        }
    }
    
}