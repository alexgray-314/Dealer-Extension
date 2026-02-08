import { Area } from "./area";
import { Card, SpecialCards } from "./card";
import { Stack } from "./stack";

// This is not to be accessed directly from clients, they must go through the API to validate
export class State {

    areas : Map<string, Area>;
    actions : Map<string, (state : State) => void>;
    variables : Map<string, [string, Card|number|undefined]>;
    num_players : number;
    turn : number;

    constructor (num_players : number) {

        this.areas = new Map<string, Area>();
        this.actions = new Map<string, (state: State) => void>();
        this.variables = new Map<string, [string, Card|number]>();;
        this.num_players = num_players;
        this.turn = 0;

        // Set up the player hands
        for (let i = 0; i < num_players; i++) {

            this.areas.set(i.toString(), new Area(
                i.toString(),
                {
                    min:1,
                    hand:"true",
                    text:"Player " + i + "'s hand",
                }
            ));

        }

    }

    next_turn() {
        this.turn++;
        if (this.turn >= this.num_players) {
            this.turn = 0;
        }
    }

    set_turn(turn : number) {
        if (turn >= this.num_players || turn < 0) {
            throw new Error("Player id [" + turn + "] is out of bounds");
        }
        this.turn = turn;
    }

    // ---------------- CARD MOVEMENT -----------------------
    
    move_card(source : [string, number, number], destination : [string, number, number]) {

        const card : Card = this.get_card(source);
        if (card !== SpecialCards.Empty) {
            this.remove_card(source);
            this.add_card(card, destination);
        }

    }

    add_card(card : Card, [a, s, p] : [string, number, number]) {
        if (card === SpecialCards.Empty) {
            return;
        }
        if (!this.areas.hasOwnProperty(a)) {
            throw new Error("Invalid area id " + a);
        }

        const area : Area = this.areas.get(a)!;
        const stacks : Stack[] = area.stacks;

        // Create the stack if it does not exists
        if (s >= stacks.length) {
            // add new stacks if necessary so that the index is reachable
            for (let i = stacks.length; i <= s; i++) {
                // define a new stack
                stacks.push(new Stack());
            }
        }

        // add the card to the deck
        stacks[s].cards.splice(p, 0, card);
        return true;
    }

    remove_card([a, s, p] : [string, number, number]) {

        if (!this.areas.hasOwnProperty(a)) {
            console.error("invalid area id", a);
            return;
        }

        const area = this.areas.get(a)!;

        if (s >= area.stacks.length) {
            return;
        }

        const stack = area.stacks[s];

        stack.cards.splice(p, 1);

    }

    get_card([a, s, p] : [string, number, number]) {

        if (!this.areas.hasOwnProperty(a)) {
            return SpecialCards.Empty;
        }

        const area = this.areas.get(a)!;

        if (s >= area.stacks.length) {
            return SpecialCards.Empty;
        }

        const stack = area.stacks[s];

        if (p >= stack.cards.length) {
            return SpecialCards.Empty;
        }

        return stack.cards[p];

    }

    // ------------------ DEFINITIONS --------------------

    define_area(id : string, args: Record<string, string | number>) {

        // default parameters
        const defaultArgs = {
            "min": 1,
            "text": id,
        };
        Object.assign(defaultArgs, args);// merge defaults with set parameters

        this.areas.set(id, new Area(
            id,
            defaultArgs
        ));

    }

    define_variable(type : string, id : string) {
        this.variables.set(id, [type, undefined]);
    }

    define_action(id : string, args: Record<string, string | number>) {

        // default parameters
        const defaultArgs = {
            "text": id,
        };
        Object.assign(defaultArgs, args);// merge defaults with set parameters

        this.actions.set(id, ()=>{});

    }

    assign_action_subtree() {


    }

    add_catch() {
    }

    deal(args: Record<string, number | string>) {
        const defaultArgs = {
            jokers:"false",
            distribute:"all",
            shuffle:"true",
            hand_max:52
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters

        const deckArray = this.areas.get("deck")!.stacks[0].cards;
        // ---- Shuffle the deck
        if (defaultArgs.shuffle === "true") {
            deckArray.sort(function (a, b) {
                return Math.random() - 0.5;
            });
        }

        // TODO actually consider the args

        // Deal out the cards until done
        let player = 0;
        for (let i= 0; deckArray.length > 0; i++) {
          this.add_card(deckArray[0], [player.toString(), 0, 0]);
          this.remove_card(["deck", 0, 0]);
          player++;
          if (player >= this.num_players) {
              player = 0;
          }
        }

  }

}
