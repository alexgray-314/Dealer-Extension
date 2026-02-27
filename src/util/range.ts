import { ParserRuleContext, ParseTree, TerminalNode } from "antlr4ng";
import * as vscode from "vscode";

export function getRange(tree : ParseTree) : vscode.Range {
    const length : number = Math.max((tree.getText().length), 1);

    const token = (tree as TerminalNode).symbol ?? (tree as ParserRuleContext).start;

    try {
        return new vscode.Range(
            token.line - 1,
            token.column,
            token.line - 1,
            token.column + length
        );
    } catch (e) {
        console.error((tree as TerminalNode).symbol);
    }

    return new vscode.Range(-1, -1, -1, -1);
}