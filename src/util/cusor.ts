import { ParseTree } from "antlr4ts/tree/ParseTree";
import * as vscode from "vscode";
import { dealListener } from "../language/dealListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParserRuleContext, VocabularyImpl } from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export function findCursorTokenIndex(tree : ParseTree, cursor: vscode.Position) : number {

    let tokenIndex = 0;
    let output : number|undefined;
    const listener : dealListener = {
        visitTerminal(node : TerminalNode) {
            if (output === undefined) {
                const position = new vscode.Position(node.symbol.line - 1, node.symbol.charPositionInLine + (node.symbol.text?.length ?? 0));
                // console.log(node.text);
                if (position.isAfterOrEqual(cursor)) {
                    output = tokenIndex;
                } else {
                    tokenIndex++;
                }
            }
        },
    };

    ParseTreeWalker.DEFAULT.walk(listener, tree);
    return output ?? 0;

}