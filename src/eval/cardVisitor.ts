import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { dealVisitor } from "../parser/dealVisitor";
import { StandardCard, Card } from "../state/card";
import { dealLexer } from "../parser/dealLexer";
import { State } from "../state/state";

// Either get a position or a card from a tree
export class CardVisitor implements dealVisitor<Card | undefined> {

    state : State;
    constructor(state : State) {
        this.state = state;
    }

    visit(tree: ParseTree): Card | undefined {
        return tree.accept(this);
    }
    visitChildren(node: RuleNode): Card | undefined {
        for (let i = 0; i < node.childCount ; i++){
            return node.getChild(i).accept(this);
        }
    }
    visitTerminal(node: TerminalNode): Card | undefined {
        if (node.symbol.type === dealLexer.CARD) {
            return new StandardCard(node.text);
        }
        return undefined;
    }
    visitErrorNode(node: ErrorNode): Card | undefined {
        return undefined;
    }


}