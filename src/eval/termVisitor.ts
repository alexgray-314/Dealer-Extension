import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Primitive } from "../logic/comparator";
import { ProgContext, StmtContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../parser/dealParser";
import { dealVisitor } from "../parser/dealVisitor";
import { dealLexer } from "../parser/dealLexer";
import { State } from "../state/state";
import { StandardCard } from "../state/card";

export class TermVisitor implements dealVisitor<Primitive> {

    state : State;

    constructor(state : State) {
        this.state = state;
    }

    visitProg?: ((ctx: ProgContext) => Primitive) | undefined;
    visitStmt?: ((ctx: StmtContext) => Primitive) | undefined;
    visitPlayer?: ((ctx: PlayerContext) => Primitive) | undefined;
    visitDefinition?: ((ctx: DefinitionContext) => Primitive) | undefined;
    visitMove?: ((ctx: MoveContext) => Primitive) | undefined;
    visitSource?: ((ctx: SourceContext) => Primitive) | undefined;
    visitDestination?: ((ctx: DestinationContext) => Primitive) | undefined;
    visitOn_action?: ((ctx: On_actionContext) => Primitive) | undefined;
    visitOn_move?: ((ctx: On_moveContext) => Primitive) | undefined;
    visitFor?: ((ctx: ForContext) => Primitive) | undefined;
    visitIf?: ((ctx: IfContext) => Primitive) | undefined;
    visitAssign?: ((ctx: AssignContext) => Primitive) | undefined;
    visitFunction_call?: ((ctx: Function_callContext) => Primitive) | undefined;
    visitUpdateTurn?: ((ctx: UpdateTurnContext) => Primitive) | undefined;
    visitVariable?: ((ctx: VariableContext) => Primitive) | undefined;
    visitArgs?: ((ctx: ArgsContext) => Primitive) | undefined;
    visitArg?: ((ctx: ArgContext) => Primitive) | undefined;
    visitArearef?: ((ctx: ArearefContext) => Primitive) | undefined;
    visitArea?: ((ctx: AreaContext) => Primitive) | undefined;
    visitStack?: ((ctx: StackContext) => Primitive) | undefined;
    visitPosition?: ((ctx: PositionContext) => Primitive) | undefined;
    visitTerm?: ((ctx: TermContext) => Primitive) | undefined;
    visitProperty?: ((ctx: PropertyContext) => Primitive) | undefined;
    visitBexpr?: ((ctx: BexprContext) => Primitive) | undefined;
    visitAexpr?: ((ctx: AexprContext) => Primitive) | undefined;
    visitSet?: ((ctx: SetContext) => Primitive) | undefined;
    visitIntset?: ((ctx: IntsetContext) => Primitive) | undefined;
    visitPositionset?: ((ctx: PositionsetContext) => Primitive) | undefined;
    visitPlayerset?: ((ctx: PlayersetContext) => Primitive) | undefined;
    visitMove_catch?: ((ctx: Move_catchContext) => Primitive) | undefined;
    
    visit(tree: ParseTree): Primitive {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): Primitive {
        return node.getChild(0).accept(this);
    }

    visitTerminal(node: TerminalNode): Primitive {
        if (node.symbol.type === dealLexer.NUMBER) {
            return Number(node.text);
        } else if (node.symbol.type === dealLexer.STRING) {
            return node.text.slice(1,-1); // remove double quotes from either end
        } else if (node.symbol.type === dealLexer.CARD) {
            return new StandardCard(node.text);
        }
        return undefined;
    }

    visitErrorNode(node: ErrorNode): Primitive {
        return undefined;
    }
    
}