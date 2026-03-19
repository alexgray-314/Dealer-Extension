import { ParserRuleContext } from "antlr4ts";
import { dealListener } from "../language/dealListener";
import { ArgdefContext, Define_functionContext, DefinitionContext, ForContext } from "../language/dealParser";

// Traverses the AST and keeps track of which ids are which types
export class IDRecord implements dealListener {
    ids : Map<string, string>; // id : type
    forStack : string[];
    argStack : string[][];

    constructor(ids : Map<string, string>) {
        this.ids = ids;
        this.ids.set("deck", "AREA");
        this.forStack = [];
        this.argStack = [];
    }

    enterDefinition(ctx : DefinitionContext) {
        this.ids.set(ctx.ID().text, ctx._type.text?.toUpperCase() ?? "NONE");
    };

    enterDefine_function(ctx : Define_functionContext) {
        this.ids.set(ctx.ID().text, "FUNCTION");
        const ids : string[] = ctx.argdef()?.ID().map((node) => {return node.text;}) ?? [];
        const types : string[] = ctx.argdef()?.VARTYPE().map((node) => {return node.text.toUpperCase();}) ?? [];
        for (let i = 0; i < ids.length; i++) {
            this.ids.set(ids[i], types[i]);
        }
        this.argStack.push(ids);
    };

    exitDefine_function (ctx: Define_functionContext) {
        const ids : string[] = this.argStack.pop() ?? [];
        for (const id of ids) {
            this.ids.delete(id);
        }
    }

    enterFor(ctx : ForContext) {
        const id = ctx.ID().text;
        const type = (ctx.set().positionset() !== undefined) ? "CARD" : "INT";
        this.ids.set(id, type);
        this.forStack.push(id);
    };
    
    exitFor (ctx: ForContext) {
        this.ids.delete(this.forStack.pop() ?? "");
    }

}