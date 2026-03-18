import { TypeChecker } from "../helper/typecheck";
import { dealListener } from "../language/dealListener";
import { BexprContext, IfContext } from "../language/dealParser";
import * as vscode from "vscode";
import { getRange } from "../util/range";

export class TypeSafety implements dealListener {

    diagnostics: vscode.Diagnostic[];
    check : TypeChecker;

    constructor(diagnostics: vscode.Diagnostic[], check : TypeChecker) {
        this.diagnostics = diagnostics;
        this.check = check;
    }

    enterBexpr (ctx: BexprContext) {
        const a : string = this.check.visit(ctx.getChild(0));
        const b : string = this.check.visit(ctx.getChild(2));
        if (a !== b) {
            this.diagnostics.push(
                new vscode.Diagnostic(
                    getRange(ctx.getChild(0)).union(getRange(ctx.getChild(2))),
                    "Cannot compare mismatched types.\n" + ctx.getChild(0).text + " -> " + a + "\n" + ctx.getChild(2).text + " -> " + b,
                    vscode.DiagnosticSeverity.Error
                )
            );
        }
    }

}