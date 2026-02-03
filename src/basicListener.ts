import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { dealListener } from "./parser/dealListener";
import { MoveContext, SourceContext } from "./parser/dealParser";
import { OutputChannel } from "vscode";

export class BasicListener implements dealListener {

    output: OutputChannel;

    constructor(outputChannel: OutputChannel) {
        this.output = outputChannel;
    }

    // Only override exitExpr if you want to print when leaving
    exitMove(ctx: MoveContext) {
        this.output.appendLine("Moving");
        this.output.appendLine("Source: " + ctx.source().text);
        this.output.appendLine("Destination: " + ctx.destination().position().arearef()?.text);
    }

}