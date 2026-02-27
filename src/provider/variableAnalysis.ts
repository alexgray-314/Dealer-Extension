import { dealListener } from "../language/dealListener";
import { ArgdefContext, AssignContext, Define_functionContext, DefinitionContext, ForContext, MoveContext, SourceContext, TermContext, VariableContext } from "../language/dealParser";
import * as vscode from "vscode";
import { getRange } from "../util/range";

const keyWords = ['empty', 'jack', 'queen','king','ace','spades','hearts','clubs','diamonds','on','move','for','interract','if','define','function','int','card','area','action', 'for','in','else','cancel','log','show'];

type varDef = ["CARD"|"INT", string];

export class VariableAnalysis extends dealListener {

    output: vscode.OutputChannel;
    variables: varDef[];
    diagnostics: vscode.Diagnostic[];

    constructor(outputChannel: vscode.OutputChannel, diagnostics : vscode.Diagnostic[]) {
        super();
        this.output = outputChannel;
        this.variables = [];
        this.diagnostics = diagnostics;
    }

    enterFor = (ctx: ForContext) => {
        const id = ctx.ID().getText();
        const type = (ctx.set().positionset() !== undefined) ? "CARD" : "INT";
        this.variables.push([type,id]);
    };


    enterTerm = (ctx: TermContext) => {

        // Check for properties
        if (ctx.property() !== undefined) {
            // Stack
            if (ctx.stack() !== undefined) {
                if (ctx.property()!.ID().getText() !== "length") {
                    this.diagnostics.push(
                        new vscode.Diagnostic(
                            getRange(ctx.property()!),
                            "Invalid property on type STACK",
                            vscode.DiagnosticSeverity.Warning
                        )
                    );
                }
            } else if (
                ctx.CARD() !== undefined ||
                ctx.position() !== undefined ||
                (ctx.variable() !== undefined && this.variables.some(([type, name]) => {
                    return name === ctx.variable()?.getText() && type === "CARD";
                }))
            ) {
                if (!["rank", "suit"].includes(ctx.property()!.ID().getText())) {
                    this.diagnostics.push(
                        new vscode.Diagnostic(
                            getRange(ctx.property()!),
                            "Invalid property on type CARD",
                            vscode.DiagnosticSeverity.Warning
                        )
                    );
                }
            } else {
                this.diagnostics.push(
                    new vscode.Diagnostic(
                        getRange(ctx.property()!),
                        "No such property exists",
                        vscode.DiagnosticSeverity.Warning
                    )
                );
            }
        }

    };

    enterDefinition = (ctx: DefinitionContext) => {
        
        const type = ctx._type_?.text?.toUpperCase();
        const id = ctx.ID().getText();
        if (type === "INT" || type === "CARD") {
            this.variables.push([type, id]);
        }

    };

    enterArgdef = (ctx: ArgdefContext) => {
        const ids = ctx.ID();
        const types = ctx.VARTYPE();
        for (let i = 0; i < ids.length; i++) {
            const type = types[i].getText().toUpperCase();
            if (type === 'INT' || type === 'CARD') {
                this.variables.push([type, ids[i].getText()]);
            }
        }
    };

    exitVariable = (ctx: VariableContext) => {

        const id = ctx.ID().getText();
        // Check for undeclared variables
        if (!this.variables.some(([_, name]) => {
            return id === name;
        })) {
            
            this.diagnostics.push(
                new vscode.Diagnostic(
                    getRange(ctx.ID()),
                    "Variable " + id + " has not been declared" + this.variables,
                    vscode.DiagnosticSeverity.Warning
                )
            );
        }

    };

}