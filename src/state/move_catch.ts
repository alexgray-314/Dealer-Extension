import { ParseTree } from "antlr4ts/tree/ParseTree";
import { deepStrictEqual } from "assert";

export class MoveCatch {

    source : ParseTree;
    dest : ParseTree;
    block : ParseTree;

    constructor(source : ParseTree, dest : ParseTree, block : ParseTree) {
        this.source = source;
        this.dest = dest;
        this.block = block;
    }

}