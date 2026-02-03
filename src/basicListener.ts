import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { dealListener } from "./parser/dealListener";
import { MoveContext } from "./parser/dealParser";

export class BasicListener implements dealListener {

    // Only override exitExpr if you want to print when leaving
    exitMove(ctx: MoveContext) {
        console.log(ctx.CARD()?.text);
        this.printChildren(ctx);
    }

    // Helper method to print children recursively
    private printChildren(ctx: any) {
        const children = ctx.children;
        if (!children) {
            console.log("No children");
            return;
        }

        children.forEach((child: any, index: number) => {
            if (child instanceof TerminalNode) {
                console.log(`Child ${index}: Terminal = '${child.text}'`);
            } else {
                console.log(`Child ${index}: Non-terminal = '${child.text ?? child.constructor.name}'`);
            }
        });
    }

}