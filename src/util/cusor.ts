import { ParseTree } from "antlr4ts/tree/ParseTree";
import * as vscode from "vscode";
import { dealListener } from "../language/dealListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParserRuleContext, VocabularyImpl } from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export function findCursorTokenIndex(tree : ParseTree, cursor: vscode.Position) : number {

    let tokenIndex = 0;
    const listener : dealListener = {
        visitTerminal(node : TerminalNode) {
            const position = new vscode.Position(node.symbol.line - 1, node.symbol.charPositionInLine + (node.symbol.text?.length ?? 0));
            if (position.isBefore(cursor)) {
                tokenIndex++;
            }
        },
    };

    ParseTreeWalker.DEFAULT.walk(listener, tree);
    return tokenIndex;

}