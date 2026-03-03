import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { dealListener } from "../language/dealListener";
import { AreaContext, dealParser, Define_functionContext, DefinitionContext, ObjectContext, PositionContext, PositionsetContext, StackContext, VariableContext } from "../language/dealParser";
import { dealLexer } from "../language/dealLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { dealVisitor } from "../language/dealVisitor";

export class TypeChecker implements dealVisitor<string> {

    ids : Map<string, string>; // id : type

    constructor(tree : ParseTree) {
        this.ids = new Map<string, string>();

        try {
            // Hack to get around "this." changing meaning within scope of anonymous inner class
            const ids = this.ids;
            const listener : dealListener = {
                enterDefinition(ctx : DefinitionContext) {
                    ids.set(ctx.ID().text, ctx._type.text?.toUpperCase() ?? "NONE");
                },
                enterDefine_function(ctx : Define_functionContext) {
                    ids.set(ctx.ID().text, "FUNCTION");
                },
            };
            ParseTreeWalker.DEFAULT.walk(listener, tree);
        } catch (e) {};
    }

    typeOf(term : string) : string {

        return this.getParser(term).object().accept(this);

    }

    private getParser(sourcecode : string) : dealParser {
        const lexer = new dealLexer(CharStreams.fromString(sourcecode));
        const tokens = new CommonTokenStream(lexer);
        return new dealParser(tokens);
    }

    visitStack (ctx: StackContext){
        return "STACK";
    }

    visitPositionset (ctx: PositionsetContext) {
        return "CARD";
    }

    visitPosition(ctx : PositionContext) : string {
        return "CARD";
    };

    visitVariable (ctx: VariableContext) : string {
        const id : string = ctx.ID().text;
        if (this.ids.has(id)) {
            return this.ids.get(id) ?? "NONE";
        }
        return "NONE";
    };

    visitObject (ctx: ObjectContext) {
        return ctx.getChild(0).accept(this);
    }

    visit (tree: ParseTree) : string {
        return tree.accept(this);
    };

    visitChildren (node: RuleNode): string {
        return "NONE";
    };

    visitTerminal (node: TerminalNode): string {
        if (node.symbol.type === dealLexer.CARD) {
            return "CARD";
        } else if (node.symbol.type === dealLexer.STRING) {
            return "STRING";
        } else if (node.symbol.type === dealLexer.NUMBER) {
            return "INT";
        }
        return "NONE";
    };

    visitErrorNode (node: ErrorNode): string {
        return "NONE";
    };

}