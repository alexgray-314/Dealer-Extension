import { dealListener } from "../language/dealListener";
import { ArgdefContext, AssignContext, DefinitionContext, ForContext, MoveContext, SourceContext, VariableContext } from "../language/dealParser";
import * as vscode from "vscode";
import { getRange } from "../util/range";

const keyWords = ['empty', 'jack', 'queen','king','ace','spades','hearts','clubs','diamonds','on','move','for','interract','if','define','function','int','card','area','action', 'for','in','else','cancel','log','show'];

export class VariableAnalysis implements dealListener {

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

    enterArgdef (ctx: ArgdefContext) {
        for (let id of ctx.ID()) {
            this.variables.push(id.text);
        }
    }

    enterVariable(ctx: VariableContext) {

        const id = ctx.ID().text;
        // Check for undeclared variables
        if (!this.variables.includes(id)) {
            
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