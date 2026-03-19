import { TypeChecker } from "../helper/typecheck";
import { dealListener } from "../language/dealListener";
import { AssignContext, BexprContext, IfContext } from "../language/dealParser";
import * as vscode from "vscode";
import { getRange } from "../util/range";

export class TypeSafety implements dealListener {

    diagnostics: vscode.Diagnostic[];
    check : TypeChecker;

    constructor(diagnostics: vscode.Diagnostic[], ids : Map<string, string>) {
        this.diagnostics = diagnostics;
        this.check = new TypeChecker(ids);
    }

    enterBexpr (ctx: BexprContext) {
        const a : string = this.check.visit(ctx.getChild(0));
        const b : string = this.check.visit(ctx.getChild(2));
        if (a !== b) {
            this.diagnostics.push(
                new vscode.Diagnostic(
                    getRange(ctx.getChild(0)).union(getRange(ctx.getChild(2))),
                    "Cannot compare mismatched types.\n" + ctx.getChild(0).text + " -> " + a + "\n" + ctx.getChild(2).text + " -> " + b,
                    vscode.DiagnosticSeverity.Warning
                )
            );
        }
    }

    enterAssign (ctx: AssignContext) {
        const varType = this.check.visit(ctx.variable());
        const termType = this.check.visit(ctx.term());
        if (varType !== termType) {
            this.diagnostics.push(
                new vscode.Diagnostic(
                    getRange(ctx.getChild(1)).union(getRange(ctx.getChild(ctx.childCount - 1))),
                    "Cannot assign " + termType + " to variable of type " + varType + ".",
                    vscode.DiagnosticSeverity.Error
                )
            );
        }
    }

}