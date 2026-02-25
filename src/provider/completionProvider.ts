import * as vscode from "vscode";
import { dealListener } from "../language/dealListener";
import { dealParser, DefinitionContext } from "../language/dealParser";
import { dealLexer } from "../language/dealLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

export class CompletionProvider implements vscode.CompletionItemProvider {
    
    constructor(context: vscode.ExtensionContext) {
        context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
            'deal',
            this,
            '.'
        ));
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> 
    {

        const lexer = new dealLexer(CharStreams.fromString(document.getText()));
        const tokens = new CommonTokenStream(lexer);
        const parser = new dealParser(tokens);
        const tree = parser.prog();

        return [
            this.completion("up", vscode.CompletionItemKind.Function, "..up();\n$1", "## {CARD}..up()\nFlips a card to be facing upwards, so it can be seen"),
            this.completion("rank", vscode.CompletionItemKind.Property, ".rank $1", "## {CARD}.rank\n For example: {4 of spades}.rank == 4"),
            this.style(tree)
        ];
    }

    /**
     * @returns Code snippet for the $style config
     */
    private style(tree : ParseTree) : vscode.CompletionItem {

        const areas : string[] = [];
        const actions : string[] = [];
        const listener : dealListener = {
            enterDefinition(ctx : DefinitionContext) {
                if (ctx._type.text === "area") {
                    areas.push(ctx.ID().text);
                } else if (ctx._type.text === "action") {
                    actions.push(ctx.ID().text);
                }
            }
        };
        ParseTreeWalker.DEFAULT.walk(listener, tree);

        let insertText : string =        
`style {
    player {
        visibility hidden,
        0 {
            label "Your Hand",
            visibility private,
            display spread,
            location hand
        }
    }`;

        for (let area of areas) {
            insertText = insertText + `,
    ${area} {
        visibility public,
        location centre,
        display single,
        0 {
            label "%a"
        }
    }`;
        }

        for (let action of actions) {
            insertText = insertText + `,
    ${action} {
        label "%a"
    }`;
        }

        insertText = insertText + "\n};";

        return this.completion("$style", vscode.CompletionItemKind.Snippet, insertText, "Styling for the card game");

    }

    private completion(label : string, kind : vscode.CompletionItemKind, insertText : string, documentation : string) : vscode.CompletionItem {

        const completion = new vscode.CompletionItem(
            label,
            kind
        );

        completion.insertText = new vscode.SnippetString(insertText);
        completion.documentation = new vscode.MarkdownString(documentation);

        return completion;

    }
    
}