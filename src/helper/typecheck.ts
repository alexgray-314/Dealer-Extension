import { dealListener } from "../language/dealListener";
import { AreaContext, dealParser, DefinitionContext, ObjectContext, PositionContext, PositionsetContext, StackContext, VariableContext } from "../language/dealParser";
import { dealLexer } from "../language/dealLexer";
import { dealVisitor } from "../language/dealVisitor";
import { CharStream, CommonTokenStream, ErrorNode, ParseTree, ParseTreeWalker, TerminalNode } from "antlr4ng";

export class TypeChecker extends dealVisitor<string> {

    ids : Map<string, string>; // id : type

    constructor(program : string) {
        super();
        this.ids = new Map<string, string>();

        try {
            const lexer = new dealLexer(CharStream.fromString(program));
            const tokens = new CommonTokenStream(lexer);
            const parser = new dealParser(tokens);
            const tree = parser.prog();

            // Hack to get around "this." changing meaning within scope of anonymous inner class
            const ids = this.ids;
            // const listener : dealListener = {
            //     enterDefinition = (ctx : DefinitionContext) => {
            //         ids.set(ctx.ID().text, ctx._type.text?.toUpperCase() ?? "NONE");
            //     }
            // };
            // ParseTreeWalker.DEFAULT.walk(listener, tree);
        } catch (e) {};
    }

    typeOf(term : string) : string {

        return this.getParser(term).object().accept(this) ?? "NONE";

    }

    private getParser(sourcecode : string) : dealParser {
        const lexer = new dealLexer(CharStream.fromString(sourcecode));
        const tokens = new CommonTokenStream(lexer);
        return new dealParser(tokens);
    }

    visitStack = (ctx: StackContext) => {
        return "STACK";
    };

    visitPositionset = (ctx: PositionsetContext) => {
        return "CARD";
    };

    visitPosition = (ctx : PositionContext) : string  => {
        return "CARD";
    };

    visitVariable = (ctx: VariableContext) : string => {
        const id : string = ctx.ID().getText();
        if (this.ids.has(id)) {
            return this.ids.get(id) ?? "NONE";
        }
        return "NONE";
    };

    visitObject = (ctx: ObjectContext) => {
        return ctx.getChild(0)!.accept(this) ?? "NONE";
    };

    visit (tree: ParseTree) : string {
        return tree.accept(this) ?? "NONE";
    };

    visitChildren (node: ParseTree): string {
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