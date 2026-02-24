import * as vscode from "vscode";

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
        return [
            this.completion("up", vscode.CompletionItemKind.Function, "..up();\n$1", "## {CARD}..up()\nFlips a card to be facing upwards, so it can be seen"),
            this.completion("rank", vscode.CompletionItemKind.Property, ".rank $1", "## {CARD}.rank\n For example: {4 of spades}.rank == 4")
        ];
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