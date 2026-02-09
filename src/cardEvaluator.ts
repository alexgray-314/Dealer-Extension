import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ArearefContext, PositionContext } from "./parser/dealParser";
import { dealVisitor } from "./parser/dealVisitor";
import { StandardCard, Card } from "./state/card";
import { dealLexer } from "./parser/dealLexer";
import { State } from "./state/state";
import { NumberEvaluator } from "./numberEvaluator";

// Either get a position or a card from a tree
export class CardEvaluator implements dealVisitor<[string, number, number] | Card | undefined> {

    state : State;
    numberEvaluator : NumberEvaluator;
    constructor(state : State) {
        this.state = state;
        this.numberEvaluator = new NumberEvaluator(this.state);
    }

    private extract_areaID(ctx: ArearefContext) {
        if (ctx.player() !== undefined) {
            return this.numberEvaluator.visit(ctx.player()!).toString();
        } else {
            return (ctx.ID()??"").toString();
        }
    }

    visitPosition (ctx: PositionContext) {
        const areaID = this.extract_areaID(ctx.arearef()!);
        const stack = this.numberEvaluator.visit(ctx.getChild(2));
        const pos = this.numberEvaluator.visit(ctx.getChild(4));
        if (!Number.isNaN(stack) && !Number.isNaN(pos)) {
            const tuple : [string, number, number] = [areaID, stack, pos];
            return tuple;
        }
        return undefined;
    }

    visit(tree: ParseTree): Card | [string, number, number] | undefined {
        return tree.accept(this);
    }
    visitChildren(node: RuleNode): Card | [string, number, number] | undefined {
        for (let i = 0; i < node.childCount ; i++){
            return node.getChild(i).accept(this);
        }
    }
    visitTerminal(node: TerminalNode): Card | [string, number, number] | undefined {
        if (node.symbol.type === dealLexer.CARD) {
            return new StandardCard(node.text);
        }
        return undefined;
    }
    visitErrorNode(node: ErrorNode): Card | [string, number, number] | undefined {
        console.log("Error node");
        return undefined;
    }


}