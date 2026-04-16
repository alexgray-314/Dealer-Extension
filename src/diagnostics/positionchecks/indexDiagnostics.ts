import { dealListener } from "../../language/dealListener";
import * as vscode from "vscode";
import { PositionContext } from "../../language/dealParser";
import { Coverage } from "./coverage";

export class IndexDiagnostics implements dealListener {

    diagnostics: vscode.Diagnostic[];
    coverage : Coverage;

    constructor(diagnostics: vscode.Diagnostic[], coverage : Coverage) {
        this.diagnostics = diagnostics;
        this.coverage = coverage;
        console.log(coverage.ranges);
    }

    enterPosition(ctx: PositionContext) {

    }

}