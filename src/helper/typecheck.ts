import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { dealListener } from "../language/dealListener";
import { AreaContext, dealParser, Define_functionContext, DefinitionContext, ForContext, IntsetContext, ObjectContext, Picture_cardsContext, PlayerContext, PlayersetContext, PositionContext, PositionsetContext, PrimitivesContext, SetContext, StackContext, SuitsContext, TermContext, VariableContext } from "../language/dealParser";
import { dealLexer } from "../language/dealLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { dealVisitor } from "../language/dealVisitor";

type DealType = "STRING" | "INT" | "CARD" | "NONE";

export class TypeChecker implements dealVisitor<DealType> {

    ids : Map<string, string>; // id : type

    constructor(tree : ParseTree) {
        this.ids = new Map<string, string>();
        this.ids.set("deck", "AREA");

        try {
            // Hack to get around "this." changing meaning within scope of anonymous inner class
            const t = this;
            const listener : dealListener = {
                enterDefinition(ctx : DefinitionContext) {
                    t.ids.set(ctx.ID().text, ctx._type.text?.toUpperCase() ?? "NONE");
                },
                enterDefine_function(ctx : Define_functionContext) {
                    t.ids.set(ctx.ID().text, "FUNCTION");
                },
                enterFor(ctx : ForContext) {
                    console.log("setting", ctx.ID().text, "to", ctx.set().accept(t));
                    t.ids.set(ctx.ID().text, ctx.set().accept(t));
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

    visitTerm(ctx: TermContext) : DealType {
        const type : DealType = ctx.getChild(0).accept(this);
        if (ctx.property() !== undefined) {
            if (type === "CARD") {
                switch(ctx.property()?.ID().text.toUpperCase()) {
                    case "RANK":
                        return "INT";
                    case "SUIT":
                        return "STRING";
                }
            }
            if (ctx.stack() !== undefined) {
                if (ctx.property()?.ID().text.toUpperCase() === "LENGTH") {
                    return "INT";
                }
            }
        }
        return type;

    }

    visitPlayerset (ctx: PlayersetContext) : DealType {
        return "INT";
    }

    visitPlayer (ctx: PlayerContext) : DealType {
        return "INT";
    }

    visitPrimitives (ctx: PrimitivesContext) : DealType {
        return ctx.getChild(0).accept(this);
    }

    visitSuits (ctx: SuitsContext) : DealType {
        return "STRING";
    }

    visitPicture_cards (ctx: Picture_cardsContext) : DealType {
        return "INT";
    }

    visitSet (ctx: SetContext) : DealType {
        const setType : DealType = ctx.getChild(0).accept(this);
        if (ctx.property() !== undefined) {
            if (setType === "CARD") {
                switch(ctx.property()?.ID().text.toUpperCase()) {
                    case "SUIT":
                        return "STRING";
                    case "RANK":
                        return "INT";
                }
            }
            return "NONE";
        } else {
            return setType;
        }
    }

    visitIntset (ctx: IntsetContext) : DealType {
        return "INT";
    }

    visitPositionset (ctx: PositionsetContext) : DealType {
        return "CARD";
    }

    visitPosition(ctx : PositionContext) : DealType {
        return "CARD";
    };

    visitVariable (ctx: VariableContext) : DealType {
        const id : string = ctx.ID().text;
        if (this.ids.has(id)) {
            switch (this.ids.get(id)) {
                case "INT":
                    return "INT";
                case "STRING":
                    return "STRING";
                case "CARD":
                    return "CARD";
            }
        }
        return "NONE";
    };

    visit (tree: ParseTree) : DealType {
        return tree.accept(this);
    };

    visitChildren (node: RuleNode): DealType {
        return "NONE";
    };

    visitTerminal (node: TerminalNode): DealType {
        if (node.symbol.type === dealLexer.CARD) {
            return "CARD";
        } else if (node.symbol.type === dealLexer.STRING) {
            return "STRING";
        } else if (node.symbol.type === dealLexer.NUMBER) {
            return "INT";
        } else if (node.symbol.type === dealLexer.EMPTY) {
            return "CARD";
        }
        return "NONE";
    };

    visitErrorNode (node: ErrorNode): DealType {
        return "NONE";
    };

}