import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "./parser/dealParser";
import { dealVisitor } from "./parser/dealVisitor";
import { StandardCard, SpecialCard, Card } from "./state/card";
import { dealLexer } from "./parser/dealLexer";
import { State } from "./state/state";

// Either get a position or a card from a tree
export class CardEvaluator implements dealVisitor<[string, number, number] | Card | undefined> {

    state : State;
    constructor(state : State) {
        this.state = state;
    }

    visitProg?: ((ctx: ProgContext) => [string, number, number] | Card | undefined) | undefined;
    visitStmt?: ((ctx: StmtContext) => [string, number, number] | Card | undefined) | undefined;
    visitPlayer (ctx: PlayerContext) {
        return undefined;
    }
    visitDefinition?: ((ctx: DefinitionContext) => [string, number, number] | Card | undefined) | undefined;
    visitMove?: ((ctx: MoveContext) => [string, number, number] | Card | undefined) | undefined;
    visitSource?: ((ctx: SourceContext) => [string, number, number] | Card | undefined) | undefined;
    visitDestination?: ((ctx: DestinationContext) => [string, number, number] | Card | undefined) | undefined;
    visitOn_action?: ((ctx: On_actionContext) => [string, number, number] | Card | undefined) | undefined;
    visitOn_move?: ((ctx: On_moveContext) => [string, number, number] | Card | undefined) | undefined;
    visitFor?: ((ctx: ForContext) => [string, number, number] | Card | undefined) | undefined;
    visitIf?: ((ctx: IfContext) => [string, number, number] | Card | undefined) | undefined;
    visitAssign?: ((ctx: AssignContext) => [string, number, number] | Card | undefined) | undefined;
    visitFunction_call?: ((ctx: Function_callContext) => [string, number, number] | Card | undefined) | undefined;
    visitUpdateTurn?: ((ctx: UpdateTurnContext) => [string, number, number] | Card | undefined) | undefined;
    visitVariable?: ((ctx: VariableContext) => [string, number, number] | Card | undefined) | undefined;
    visitArgs?: ((ctx: ArgsContext) => [string, number, number] | Card | undefined) | undefined;
    visitArg?: ((ctx: ArgContext) => [string, number, number] | Card | undefined) | undefined;
    visitArearef(ctx: ArearefContext) {
        return undefined;
    }
    visitArea?: ((ctx: AreaContext) => [string, number, number] | Card | undefined) | undefined;
    visitStack?: ((ctx: StackContext) => [string, number, number] | Card | undefined) | undefined;
    visitPosition (ctx: PositionContext){
        // const pos : [string, number, number] = this.visitArearef(ctx.arearef()!);
        return undefined;
    }
    visitTerm?: ((ctx: TermContext) => [string, number, number] | Card | undefined) | undefined;
    visitProperty?: ((ctx: PropertyContext) => [string, number, number] | Card | undefined) | undefined;
    visitBexpr?: ((ctx: BexprContext) => [string, number, number] | Card | undefined) | undefined;
    visitAexpr?: ((ctx: AexprContext) => [string, number, number] | Card | undefined) | undefined;
    visitSet?: ((ctx: SetContext) => [string, number, number] | Card | undefined) | undefined;
    visitIntset?: ((ctx: IntsetContext) => [string, number, number] | Card | undefined) | undefined;
    visitPositionset?: ((ctx: PositionsetContext) => [string, number, number] | Card | undefined) | undefined;
    visitPlayerset?: ((ctx: PlayersetContext) => [string, number, number] | Card | undefined) | undefined;
    visitMove_catch?: ((ctx: Move_catchContext) => [string, number, number] | Card | undefined) | undefined;

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