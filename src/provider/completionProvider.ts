import * as vscode from "vscode";
import { TypeChecker } from "../helper/typecheck";
import * as info from "../docs/info.json";
import { dealLexer } from "../language/dealLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { dealParser } from "../language/dealParser";
import * as c3 from "antlr4-c3";
import { findCursorTokenIndex } from "../util/cusor";

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

        const checker : TypeChecker = new TypeChecker(document.getText());

        const lexer = new dealLexer(CharStreams.fromString(document.getText()));
        const tokens = new CommonTokenStream(lexer);
        const parser = new dealParser(tokens);
        const tree = parser.prog();

        let core = new c3.CodeCompletionCore(parser);
        // core.preferredRules = new Set<number>([
        //     dealParser.RULE_term
        // ]);
        // core.ignoredTokens = new Set([

        // ]);
        

        const i = findCursorTokenIndex(tree, position);
        let candidates = core.collectCandidates(i);

        let words : string[] = [];
        for (let candidate of candidates.tokens) {
            words.push(parser.vocabulary.getDisplayName(candidate[0]).replaceAll('"', "").replaceAll("'", ""));
        }
        return words.map((word) : vscode.CompletionItem  => {
            return this.completion(word, vscode.CompletionItemKind.Keyword, word, "");
        }, this);

        const previousTerm : string = document.getText(new vscode.Range(
            document.lineAt(position.line).range.start,
            position
        )).split(/\s/).pop()?.replaceAll('.', '') ?? "";

        let previousType = "NONE";
        try {
            previousType = checker.typeOf(previousTerm).toUpperCase() ?? "NONE";
        } catch (e) {}

        return [
            ...this.properties(previousType),
            ...this.style(checker, previousType),
            ...this.ids(checker, previousType)
        ];
    }

    private properties(type : string) : vscode.CompletionItem[] {
        switch(type) {
            case "CARD":
                return [
                    this.completion("rank", vscode.CompletionItemKind.Property, "rank", info.rank),
                    this.completion("suit", vscode.CompletionItemKind.Property, "suit", info.suit)
                ];
            case "STACK":
                return [
                    this.completion("length", vscode.CompletionItemKind.Property, "length", info.length)
                ];
        }
        return [];
    }

    private ids(checker : TypeChecker, type: string) : vscode.CompletionItem[] {

        if (type !== "NONE") {
            return [];
        }

        return [...checker.ids.entries()].map(([id, type], index : number) : vscode.CompletionItem => {
            return this.completion(id, vscode.CompletionItemKind.Variable, id, "define " + type + " " + id + ";");
        });
    }

    /**
     * @returns Code snippet for the $style config
     */
    private style(checker : TypeChecker, type : string) : vscode.CompletionItem[] {

        if (type !== "NONE") {
            return [];
        }

        const areas : string[] = [];
        const actions : string[] = [];

        for (let [id, type] of checker.ids.entries()) {
            if (type === "AREA") {
                areas.push(id);
            } else if (type === "ACTION") {
                actions.push(id);
            }
        }


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

        return [this.completion("$style", vscode.CompletionItemKind.Snippet, insertText, "Styling for the card game")];

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