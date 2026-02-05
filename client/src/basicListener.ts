import { dealListener } from "./parser/dealListener";
import { AssignContext, DefinitionContext, ForContext, MoveContext, SourceContext, VariableContext } from "./parser/dealParser";
import * as vscode from "vscode";

export class BasicListener implements dealListener {

    output: vscode.OutputChannel;
    variables: string[];
    diagnostics: vscode.Diagnostic[];

    constructor(outputChannel: vscode.OutputChannel, diagnostics : vscode.Diagnostic[]) {
        this.output = outputChannel;
        this.variables = [];
        this.diagnostics = diagnostics;
    }

    enterFor(ctx: ForContext){
        const id = ctx.ID().text;
        this.variables.push(id);
    }

    enterDefinition(ctx: DefinitionContext) {
        
        const type = ctx._type.text;
        const id = ctx.ID().text;
        if (type === "int" || type === "card") {
            this.variables.push(id);
        }

    }

    enterVariable(ctx: VariableContext) {

        const id = ctx.ID().text;
        // Check for undeclared variables
        if (!this.variables.includes(id)) {
            const length : number = Math.max((id.length), 1);
            
            const range = new vscode.Range(
                ctx._start.line - 1,
                ctx._start.charPositionInLine,
                ctx._start.line - 1,
                ctx._start.charPositionInLine + length
            );
            
            this.diagnostics.push(
                new vscode.Diagnostic(
                    range,
                    "Variable " + id + " has not been declared",
                    vscode.DiagnosticSeverity.Warning
                )
            );
        }

    }

}