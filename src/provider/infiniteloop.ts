import { dealListener } from "../language/dealListener";
import * as vscode from "vscode";
import { SetContext } from "../language/dealParser";
import { getRange } from "../util/range";

export class InfiniteLoop implements dealListener {

    diagnostics: vscode.Diagnostic[];

    constructor(diagnostics: vscode.Diagnostic[]) {
        this.diagnostics = diagnostics;
    }

    enterSet (ctx: SetContext) {
        if (ctx.intset() !== undefined) {
            if (ctx.intset()!.term().length < 2) {
                this.diagnostics.push(
                    new vscode.Diagnostic(
                        getRange(ctx.intset()!),
                        "Infinite uncapped set. Code may run forever.",
                        vscode.DiagnosticSeverity.Error
                    )
                );
            }
        }
    }

}