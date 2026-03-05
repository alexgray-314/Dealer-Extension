import { dealListener } from "../language/dealListener";
import { ArgdefContext, AssignContext, Define_functionContext, DefinitionContext, ForContext, MoveContext, SourceContext, TermContext, VariableContext } from "../language/dealParser";
import * as vscode from "vscode";
import { getRange } from "../util/range";

type varDef = ["CARD"|"INT", string];

export class VariableAnalysis implements dealListener {

    output: vscode.OutputChannel;
    variables: varDef[];
    diagnostics: vscode.Diagnostic[];

    constructor(outputChannel: vscode.OutputChannel, diagnostics : vscode.Diagnostic[]) {
        this.output = outputChannel;
        this.variables = [];
        this.diagnostics = diagnostics;
    }

    enterFor(ctx: ForContext){
        const id = ctx.ID().text;
        const type = (ctx.set().positionset() !== undefined) ? "CARD" : "INT";
        this.variables.push([type,id]);
    }


    enterTerm (ctx: TermContext) {

        // Check for properties
        if (ctx.property() !== undefined) {
            // Stack
            if (ctx.stack() !== undefined) {
                if (ctx.property()!.ID().text !== "length") {
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
                    return name === ctx.variable()?.text && type === "CARD";
                }))
            ) {
                if (!["rank", "suit"].includes(ctx.property()!.ID().text)) {
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
                        "Object " + ctx.getChild(0).text + " does not have property: " + (ctx.property()?.ID()?.text ?? "undefined"),
                        vscode.DiagnosticSeverity.Warning
                    )
                );
            }
        }

    }

    enterDefinition(ctx: DefinitionContext) {
        
        const type = ctx._type.text?.toUpperCase();
        const id = ctx.ID().text;
        if (type === "INT" || type === "CARD") {
            this.variables.push([type, id]);
        }

    }

    enterArgdef (ctx: ArgdefContext) {
        const ids = ctx.ID();
        const types = ctx.VARTYPE();
        for (let i = 0; i < ids.length; i++) {
            const type = types[i].text.toUpperCase();
            if (type === 'INT' || type === 'CARD') {
                this.variables.push([type, ids[i].text]);
            }
        }
    }

    exitVariable(ctx: VariableContext) {

        const id = ctx.ID().text;
        // Check for undeclared variables
        if (!this.variables.some(([_, name]) => {
            return id === name;
        })) {
            
            this.diagnostics.push(
                new vscode.Diagnostic(
                    getRange(ctx.ID()),
                    "Variable " + id + " has not been declared",
                    vscode.DiagnosticSeverity.Warning
                )
            );
        }

    }

}