export type Card = StandardCard | SpecialCards.Empty | SpecialCards.Joker;

export enum SpecialCards {Empty, Joker}

export class StandardCard {
    private rank : string;
    private suit : string;

    // Value #<rank><suit>
    // E.g. #4S == the 4 of spades
    constructor(value : string) {
        this.rank = value.slice(0, -1).toUpperCase();
        const suit = value.slice(-1);

        // Convert the suit from a single digit to the full name
        if (/[hH]/.test(suit)) {
        this.suit = "hearts";
        } else if (/[dD]/.test(suit)) {
        this.suit = "diamonds";
        } else if (/[cC]/.test(suit)) {
        this.suit = "clubs";
        } else if (/[sS]/.test(suit)) {
        this.suit = "spades";
        } else {
            this.suit = "joker";
        }
    }

}