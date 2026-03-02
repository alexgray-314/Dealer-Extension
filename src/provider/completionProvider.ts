import * as vscode from "vscode";
import { TypeChecker } from "../helper/typecheck";
import * as info from "../docs/properties.json";
import { dealLexer } from "../language/dealLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { dealParser } from "../language/dealParser";
import * as c3 from "antlr4-c3";
import { findCursorTokenIndex } from "../util/cusor";
import * as keywords from "../docs/keywords.json";

export class CompletionProvider implements vscode.CompletionItemProvider {

    constructor(context: vscode.ExtensionContext) {
        context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
            'deal',
            this,
            '.','$'
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
        // parser.errorHandler = new CompletionErrorStrategy();
        const tree = parser.prog();

        const tokenIndex = findCursorTokenIndex(tree, position);
        const core = new c3.CodeCompletionCore(parser);

        const checker : TypeChecker = new TypeChecker(tree);

        if (context.triggerCharacter === undefined) {

            core.preferredRules = new Set<number>([
                dealParser.RULE_term,
                dealParser.RULE_property
            ]);
            const candidates = core.collectCandidates(tokenIndex);

            return [
                ...this.fromRules(checker.ids, candidates.rules),
                ...this.fromTokens(parser, candidates.tokens),
            ];
        } else if (context.triggerCharacter === '.') {

            core.preferredRules = new Set<number>([
                dealParser.RULE_variable,
                dealParser.RULE_position,
                dealParser.RULE_positionset,
                dealParser.RULE_stack,
            ]);
            const candidates = core.collectCandidates(tokenIndex-1);
            console.log("PROPERTY TOKEN:",tokens.get(tokenIndex-1).text);
            return this.properties(candidates);
            
        } else if (context.triggerCharacter === '$') {
            return [
                this.style(checker),
                this.config()
            ];
        }

    }

    fromRules(ids : Map<string, string>, rules : Map<number, c3.ICandidateRule>) : vscode.CompletionItem[] {

        const items : vscode.CompletionItem[] = [];

        for (const [ruleID, ruleData] of rules) {
            switch(ruleID) {
                case dealParser.RULE_config:
                    console.log("config");
                    break;
                case dealParser.RULE_term:
                    console.log("term");
                    return this.ids(ids, "CARD", "INT", "AREA");
                    break;
            }
        }

        return items;

    }

    fromTokens(parser : dealParser, tokens : Map<number, c3.TokenList>) : vscode.CompletionItem[] {

        const completions : vscode.CompletionItem[] = [];

        for (let candidate of tokens) {
            const word : string = parser.vocabulary.getDisplayName(candidate[0]).replaceAll("'", "").toLowerCase();

            if (keywords.control.includes(word)) {
                completions.push(this.completion(word, vscode.CompletionItemKind.Keyword, word, ""));
            }

            if (keywords.primitives.includes(word)) {
                completions.push(this.completion(word, vscode.CompletionItemKind.Constant, word, "Constant: " + word));
            }

            if (keywords.commands.includes(word)) {
                completions.push(this.completion(word, vscode.CompletionItemKind.Function, word, "Command: " + word));
            }

            if (keywords.types.includes(word)) {
                completions.push(this.completion(word, vscode.CompletionItemKind.TypeParameter, word, "Type: " + word));
            }

        }

        return completions;

    }

    private properties(candidates : c3.CandidatesCollection) : vscode.CompletionItem[] {
        
        if ([...candidates.rules.keys()].includes(dealParser.RULE_variable)) {
            const ruleList = candidates.rules.get(dealParser.RULE_variable)?.ruleList ?? [];
            return this.cardProperties(ruleList);
        }

        if ([...candidates.rules.keys()].includes(dealParser.RULE_stack)) {
            const ruleList = candidates.rules.get(dealParser.RULE_stack)?.ruleList ?? [];
            return this.stackProperties(ruleList);
        }

        if ([...candidates.rules.keys()].includes(dealParser.RULE_position)) {
            const ruleList = candidates.rules.get(dealParser.RULE_position)?.ruleList ?? [];
            return this.cardProperties(ruleList);
        }

        if ([...candidates.rules.keys()].includes(dealParser.RULE_positionset)) {
            const ruleList = candidates.rules.get(dealParser.RULE_positionset)?.ruleList ?? [];
            return this.cardProperties(ruleList);
        }

        return[];
    }

    private cardProperties(ruleList : c3.RuleList) : vscode.CompletionItem[] {
        if (ruleList.includes(dealParser.RULE_bexpr)) {
            // Attributes
            return [
                this.completion("rank", vscode.CompletionItemKind.Property, "rank", info.card.attributes.rank),
                this.completion("suit", vscode.CompletionItemKind.Property, "suit", info.card.attributes.suit)
            ];
        } else if (ruleList.includes(dealParser.RULE_modify)) {
            // Methods
            return [
                this.completion("up()", vscode.CompletionItemKind.Method, "up()", info.card.methods.up),
                this.completion("down()", vscode.CompletionItemKind.Method, "down()", info.card.methods.down),
            ];

        }
        return [];
    }

    private stackProperties(ruleList : c3.RuleList) : vscode.CompletionItem[] {
        if (ruleList.includes(dealParser.RULE_bexpr)) {
            // Attributes
            return [
                this.completion("length", vscode.CompletionItemKind.Property, "length", info.stack.attributes.length)
            ];
        }
        return [];
    }

    private ids(map : Map<string,string>, ...types : string[]) : vscode.CompletionItem[] {

        return [...map.entries()].filter(([id, t]) : boolean => {
            return types.includes(t);
        }).map(([id, t], index : number) : vscode.CompletionItem => {
            return this.completion(id, vscode.CompletionItemKind.Variable, id, "define " + t + " " + id + ";");
        });
    }

    /**
     * @returns Code snippet for $config variables
     */
    private config() : vscode.CompletionItem {

        const insertText = 
`config {
    title "My Game",
    players 4,
    jokers 0
}`;

        return this.completion('$config', vscode.CompletionItemKind.Snippet, insertText, "Global config attributes for the game");

    }

    /**
     * @returns Code snippet for the $style config
     */
    private style(checker : TypeChecker) : vscode.CompletionItem {

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