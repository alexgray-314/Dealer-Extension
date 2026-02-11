import { ParseTree } from "antlr4ts/tree/ParseTree";
import { Card, StandardCard } from "../state/card";

export type Primitive = string | number | Card | undefined;

export class Comparator {

    equals(a : Primitive, b : Primitive) : boolean {
        if (a === undefined || b === undefined) {
            return false;
        }

        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b);
        }

        return a === b;
    }

    contains(item : Primitive, set : ParseTree) : boolean {

        // TODO implement set visitor
        return true;

    }

}