import { ParserRuleContext } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import * as vscode from "vscode";

export function getRange(tree : ParseTree) : vscode.Range {
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