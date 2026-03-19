import { dealListener } from "../language/dealListener";
import { ArgdefContext, AssignContext, Define_functionContext, DefinitionContext, ForContext, MoveContext, SourceContext, TermContext, VariableContext } from "../language/dealParser";
import * as vscode from "vscode";
import { getRange } from "../util/range";

export class VariableAnalysis implements dealListener {

    ids: Map<string,string>;
    diagnostics: vscode.Diagnostic[];

    constructor(diagnostics : vscode.Diagnostic[], ids : Map<string,string>) {
        this.ids = ids;
        this.diagnostics = diagnostics;
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
                (ctx.variable() !== undefined && this.ids.get(ctx.variable()?.text ??"") === "CARD")
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

    

    enterVariable(ctx: VariableContext) {

        const id = ctx.ID().text;
        // Check for undeclared variables
        switch(this.ids.get(id)) {
            case "CARD":
            case "INT":
            case "STRING":
                break;
            default:
                this.diagnostics.push(
                    new vscode.Diagnostic(
                        getRange(ctx.ID()),
                        "Variable " + id + " is undefined or out of scope",
                        vscode.DiagnosticSeverity.Error
                    )
                );
        }

    }

}