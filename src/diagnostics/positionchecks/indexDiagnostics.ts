import { dealListener } from "../../language/dealListener";
import * as vscode from "vscode";
import { PositionContext } from "../../language/dealParser";
import { Coverage } from "./coverage";
import { getRange } from "../../util/range";

// The purpose of this is not to catch all index errors, but to instead spot typos where an index is completely impossible.
export class IndexDiagnostics implements dealListener {

    diagnostics: vscode.Diagnostic[];
    coverage : Coverage;

    constructor(diagnostics: vscode.Diagnostic[], coverage : Coverage) {
        this.diagnostics = diagnostics;
        this.coverage = coverage;
        // console.log(coverage.ranges);
    }

    enterPosition(ctx: PositionContext) {
        const area : string = this.coverage.getArea(ctx.arearef());
        const index : number = Number(ctx.term()[0]?.NUMBER()?.text);
        if (!Number.isNaN(index)) {
            if (!this.coverage.check(area, index)) {
                this.diagnostics.push(new vscode.Diagnostic(
                    getRange(ctx),
                    "Reference to uncovered stack. It is impossible for any card to be in this stack. ",
                    vscode.DiagnosticSeverity.Information
                ));
            }
        }
    }

}