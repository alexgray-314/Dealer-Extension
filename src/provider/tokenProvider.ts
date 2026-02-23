import * as vscode from "vscode";
import { dealListener } from "../language/dealListener";
import { ArearefContext, AttributeContext, ConfigContext, dealParser, DefinitionContext, ForContext, Function_callContext, VariableContext } from "../language/dealParser";
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
    ids : string[];

    constructor(context: vscode.ExtensionContext) {
        const tokenTypes = ['keyword', 'function', 'variable', 'id', 'value', 'string', 'attribute'];
        const tokenModifiers = ['declaration', 'documentation', 'config'];
        this.legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);
        this.tokensBuilder = new vscode.SemanticTokensBuilder(this.legend);
        this.ids = [];

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
        this.ids = [];

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

    enterDefinition (ctx: DefinitionContext) {
        this.ids.push(ctx.ID().text);
        this.tokensBuilder.push(
            this.getRange(ctx.ID()),
            'variable',
            ['declaration']
        );
    }

    enterVariable (ctx: VariableContext) {
        if (this.ids.includes(ctx.ID().text)) {
            this.tokensBuilder.push(
                this.getRange(ctx.ID()),
                'variable',
                ['declaration']
            );
        }
    }

    enterFor (ctx: ForContext) {
        this.ids.push(ctx.ID().text);
        this.tokensBuilder.push(
            this.getRange(ctx.ID()),
            'variable',
            ['declaration']
        );
    }

    enterArearef (ctx: ArearefContext) {
        if (ctx.ID() !== undefined) {
            if (this.ids.includes(ctx.ID()!.text) || ctx.ID()!.text === "deck") {
                this.tokensBuilder.push(
                    this.getRange(ctx.ID()!),
                    'variable',
                    ['declaration']
                );
            }
        }
        
    }

    enterFunction_call (ctx: Function_callContext) {
        this.tokensBuilder.push(
            this.getRange(ctx.ID()),
            'function',
            ['declaration']
        );
    }

    enterConfig (ctx: ConfigContext) {
        this.tokensBuilder.push(
            this.getRange(ctx.ID()),
            'keyword',
            ['config']
        );
    }

    enterAttribute (ctx: AttributeContext) {

        if(ctx.atts() === undefined) {

            this.tokensBuilder.push(
                this.getRange(ctx.getChild(0)),
                'attribute',
                ['config']
            );

            if (ctx.STRING() === undefined) {
                switch (ctx.getChild(1).text) {
                    case "private":
                    case "public":
                    case "hidden": 
                    case "centre": // centre
                    case "side": // side
                    case "hand": // hand
                    case "north":
                    case "east":
                    case "south":
                    case "west":
                    case "spread":
                    case "single":
                        this.tokensBuilder.push(
                            this.getRange(ctx.getChild(1)),
                            'value',
                            ['config']
                        );
                }
            }

        } else {

            this.tokensBuilder.push(
                this.getRange(ctx.getChild(0)),
                'id',
                ['config']
            );

        }
    }
    
}