import { dealListener } from "../../language/dealListener";
import { ArearefContext, Function_callContext, IntsetContext, MoveContext, On_moveContext, PositionContext, PositionsetContext } from "../../language/dealParser";
import { Range } from "./range";

export class Coverage implements dealListener {
    ranges : Range[];
    all : boolean;
    constructor() {
        this.ranges = [];
        this.all = false;
    }

    enterMove(ctx: MoveContext) {
        this.addPosition(ctx.destination().position());
    };

    enterOn_move(ctx: On_moveContext) {
        if (ctx.move_catch()[1].position() !== undefined) {
            this.addPosition(ctx.move_catch()[1].position()!);
        } else if (ctx.move_catch()[1].positionset() !== undefined) {

        } else {
            this.add("all", 0, 0);
        }
    }

    enterFunction_call (ctx: Function_callContext) {
        if (ctx.ID().text === "deal") {
            this.add("player", 0, 0);
            console.log("deal");
        }
    }

    private getArea(ctx : ArearefContext | undefined) : string {
        if (ctx === undefined) {
            return "none";
        }
        if (ctx.player() !== undefined) {
            return "player";
        } else {
            return ctx.ID()?.text ?? "none";
        }
    }

    private addPositionSet(ctx : PositionsetContext) {
        const area : string = this.getArea(ctx.arearef());
        const set : IntsetContext = ctx.intset()[0];
        const start : number | undefined = Number(set.term()[0].NUMBER()?.text);
        let end : number = Number(set.term()[1].NUMBER()?.text);

        if (set.childCount === 2) {
            end = Infinity;
        } else if (set.childCount === 1) {
            end = start;
        }

        if (!Number.isNaN(start) && !Number.isNaN(end)) {
            this.add(area, start, end);
        }
    }

    private addPosition(ctx : PositionContext) {
        const area : string = this.getArea(ctx.arearef());
        const stack : number = Number(ctx.term()[0].NUMBER()?.text);
        if (!Number.isNaN(stack)) {
            this.add(area, stack, stack);
        }
    }

    add(area : string, start_stack : number, end_stack : number) {
        if (area === "none") {
            return;
        }
        if (area === "all") {
            this.all = true;
            return;
        }
        this.ranges.push(new Range(area, start_stack, end_stack));
    }
    check(area : string, stack : number, pos : number) : boolean {
        if (this.all) {
            return true;
        }
        for (let r of this.ranges) {
            if (r.covers(area, stack, pos)) {
                return true;
            }
        }
        return false;
    }
}