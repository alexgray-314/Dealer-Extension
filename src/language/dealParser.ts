
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { dealListener } from "./dealListener.js";
import { dealVisitor } from "./dealVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class dealParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly COMMENT = 38;
    public static readonly VARTYPE = 39;
    public static readonly MOVE_DEST = 40;
    public static readonly MOVE_SOURCE = 41;
    public static readonly INTERACT_CARD = 42;
    public static readonly PLUS = 43;
    public static readonly MINUS = 44;
    public static readonly TIMES = 45;
    public static readonly WILDCARD = 46;
    public static readonly EMPTY = 47;
    public static readonly SPADES = 48;
    public static readonly HEARTS = 49;
    public static readonly CLUBS = 50;
    public static readonly DIAMONDS = 51;
    public static readonly JACK = 52;
    public static readonly QUEEN = 53;
    public static readonly KING = 54;
    public static readonly ACE = 55;
    public static readonly NUMBER = 56;
    public static readonly ID = 57;
    public static readonly CARD = 58;
    public static readonly STRING = 59;
    public static readonly SPACES = 60;
    public static readonly NEWLINE = 61;
    public static readonly RULE_prog = 0;
    public static readonly RULE_stmt = 1;
    public static readonly RULE_block = 2;
    public static readonly RULE_player = 3;
    public static readonly RULE_definition = 4;
    public static readonly RULE_define_function = 5;
    public static readonly RULE_argdef = 6;
    public static readonly RULE_move = 7;
    public static readonly RULE_source = 8;
    public static readonly RULE_destination = 9;
    public static readonly RULE_on_action = 10;
    public static readonly RULE_on_move = 11;
    public static readonly RULE_on_interact = 12;
    public static readonly RULE_for = 13;
    public static readonly RULE_if = 14;
    public static readonly RULE_cancel = 15;
    public static readonly RULE_assign = 16;
    public static readonly RULE_function_call = 17;
    public static readonly RULE_updateTurn = 18;
    public static readonly RULE_log = 19;
    public static readonly RULE_modify = 20;
    public static readonly RULE_show = 21;
    public static readonly RULE_config = 22;
    public static readonly RULE_attribute = 23;
    public static readonly RULE_atts = 24;
    public static readonly RULE_variable = 25;
    public static readonly RULE_args = 26;
    public static readonly RULE_arg = 27;
    public static readonly RULE_arearef = 28;
    public static readonly RULE_area = 29;
    public static readonly RULE_stack = 30;
    public static readonly RULE_position = 31;
    public static readonly RULE_term = 32;
    public static readonly RULE_property = 33;
    public static readonly RULE_primitives = 34;
    public static readonly RULE_bexpr = 35;
    public static readonly RULE_set = 36;
    public static readonly RULE_intset = 37;
    public static readonly RULE_positionset = 38;
    public static readonly RULE_playerset = 39;
    public static readonly RULE_object = 40;
    public static readonly RULE_move_catch = 41;

    public static readonly literalNames = [
        null, "';'", "'<'", "'.'", "'>'", "'define'", "'area'", "'action'", 
        "'function'", "'('", "')'", "'{'", "'}'", "','", "'move'", "'on'", 
        "'interact'", "'for'", "'in'", "'if'", "'else'", "'cancel'", "'='", 
        "'++'", "'log'", "'show'", "'$'", "'['", "']'", "'=='", "'!='", 
        "'<<'", "'<='", "'>='", "'>>'", "'=?'", "'!?'", "':'", null, null, 
        "'/'", "'\\'", "'@'", "'+'", "'-'", "'*'", "'?'", "'empty'", "'spades'", 
        "'hearts'", "'clubs'", "'diamonds'", "'jack'", "'queen'", "'king'", 
        "'ace'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "COMMENT", "VARTYPE", "MOVE_DEST", 
        "MOVE_SOURCE", "INTERACT_CARD", "PLUS", "MINUS", "TIMES", "WILDCARD", 
        "EMPTY", "SPADES", "HEARTS", "CLUBS", "DIAMONDS", "JACK", "QUEEN", 
        "KING", "ACE", "NUMBER", "ID", "CARD", "STRING", "SPACES", "NEWLINE"
    ];
    public static readonly ruleNames = [
        "prog", "stmt", "block", "player", "definition", "define_function", 
        "argdef", "move", "source", "destination", "on_action", "on_move", 
        "on_interact", "for", "if", "cancel", "assign", "function_call", 
        "updateTurn", "log", "modify", "show", "config", "attribute", "atts", 
        "variable", "args", "arg", "arearef", "area", "stack", "position", 
        "term", "property", "primitives", "bexpr", "set", "intset", "positionset", 
        "playerset", "object", "move_catch",
    ];

    public get grammarFileName(): string { return "deal.g4"; }
    public get literalNames(): (string | null)[] { return dealParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return dealParser.symbolicNames; }
    public get ruleNames(): string[] { return dealParser.ruleNames; }
    public get serializedATN(): number[] { return dealParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, dealParser._ATN, dealParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, dealParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 120242212) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 131079) !== 0)) {
                {
                {
                this.state = 84;
                this.stmt();
                }
                }
                this.state = 89;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 90;
            this.match(dealParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 2, dealParser.RULE_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 108;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                {
                this.state = 92;
                this.definition();
                }
                break;
            case 2:
                {
                this.state = 93;
                this.define_function();
                }
                break;
            case 3:
                {
                this.state = 94;
                this.move();
                }
                break;
            case 4:
                {
                this.state = 95;
                this.on_action();
                }
                break;
            case 5:
                {
                this.state = 96;
                this.on_move();
                }
                break;
            case 6:
                {
                this.state = 97;
                this.on_interact();
                }
                break;
            case 7:
                {
                this.state = 98;
                this.for_();
                }
                break;
            case 8:
                {
                this.state = 99;
                this.if_();
                }
                break;
            case 9:
                {
                this.state = 100;
                this.cancel();
                }
                break;
            case 10:
                {
                this.state = 101;
                this.assign();
                }
                break;
            case 11:
                {
                this.state = 102;
                this.function_call();
                }
                break;
            case 12:
                {
                this.state = 103;
                this.updateTurn();
                }
                break;
            case 13:
                {
                this.state = 104;
                this.log();
                }
                break;
            case 14:
                {
                this.state = 105;
                this.modify();
                }
                break;
            case 15:
                {
                this.state = 106;
                this.show();
                }
                break;
            case 16:
                {
                this.state = 107;
                this.config();
                }
                break;
            }
            this.state = 110;
            this.match(dealParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 4, dealParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 120242212) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 131079) !== 0)) {
                {
                {
                this.state = 112;
                this.stmt();
                }
                }
                this.state = 117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public player(): PlayerContext {
        let localContext = new PlayerContext(this.context, this.state);
        this.enterRule(localContext, 6, dealParser.RULE_player);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.match(dealParser.T__1);
            this.state = 123;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 119;
                this.match(dealParser.MOVE_DEST);
                }
                break;
            case 2:
                {
                this.state = 120;
                this.match(dealParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 121;
                this.match(dealParser.INTERACT_CARD);
                }
                break;
            case 4:
                {
                this.state = 122;
                this.term();
                }
                break;
            }
            this.state = 125;
            this.match(dealParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public definition(): DefinitionContext {
        let localContext = new DefinitionContext(this.context, this.state);
        this.enterRule(localContext, 8, dealParser.RULE_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.match(dealParser.T__4);
            this.state = 128;
            localContext._type_ = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 7 || _la === 39)) {
                localContext._type_ = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 129;
            this.match(dealParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public define_function(): Define_functionContext {
        let localContext = new Define_functionContext(this.context, this.state);
        this.enterRule(localContext, 10, dealParser.RULE_define_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            this.match(dealParser.T__4);
            this.state = 132;
            this.match(dealParser.T__7);
            this.state = 133;
            this.match(dealParser.ID);
            this.state = 134;
            this.match(dealParser.T__8);
            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 135;
                this.argdef();
                }
            }

            this.state = 138;
            this.match(dealParser.T__9);
            this.state = 139;
            this.match(dealParser.T__10);
            this.state = 140;
            this.block();
            this.state = 141;
            this.match(dealParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argdef(): ArgdefContext {
        let localContext = new ArgdefContext(this.context, this.state);
        this.enterRule(localContext, 12, dealParser.RULE_argdef);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 143;
            this.match(dealParser.VARTYPE);
            this.state = 144;
            this.match(dealParser.ID);
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 145;
                this.match(dealParser.T__12);
                this.state = 146;
                this.match(dealParser.VARTYPE);
                this.state = 147;
                this.match(dealParser.ID);
                }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public move(): MoveContext {
        let localContext = new MoveContext(this.context, this.state);
        this.enterRule(localContext, 14, dealParser.RULE_move);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.match(dealParser.T__13);
            this.state = 154;
            this.source();
            this.state = 155;
            this.destination();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public source(): SourceContext {
        let localContext = new SourceContext(this.context, this.state);
        this.enterRule(localContext, 16, dealParser.RULE_source);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 160;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                {
                this.state = 157;
                this.match(dealParser.CARD);
                }
                break;
            case 2:
                {
                this.state = 158;
                this.position();
                }
                break;
            case 3:
                {
                this.state = 159;
                this.positionset();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public destination(): DestinationContext {
        let localContext = new DestinationContext(this.context, this.state);
        this.enterRule(localContext, 18, dealParser.RULE_destination);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 162;
            this.position();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public on_action(): On_actionContext {
        let localContext = new On_actionContext(this.context, this.state);
        this.enterRule(localContext, 20, dealParser.RULE_on_action);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(dealParser.T__14);
            this.state = 165;
            this.match(dealParser.ID);
            this.state = 166;
            this.match(dealParser.T__10);
            this.state = 167;
            this.block();
            this.state = 168;
            this.match(dealParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public on_move(): On_moveContext {
        let localContext = new On_moveContext(this.context, this.state);
        this.enterRule(localContext, 22, dealParser.RULE_on_move);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.match(dealParser.T__14);
            this.state = 171;
            this.match(dealParser.T__13);
            this.state = 172;
            this.move_catch();
            this.state = 173;
            this.move_catch();
            this.state = 174;
            this.match(dealParser.T__10);
            this.state = 175;
            this.block();
            this.state = 176;
            this.match(dealParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public on_interact(): On_interactContext {
        let localContext = new On_interactContext(this.context, this.state);
        this.enterRule(localContext, 24, dealParser.RULE_on_interact);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 178;
            this.match(dealParser.T__14);
            this.state = 179;
            this.match(dealParser.T__15);
            this.state = 180;
            this.move_catch();
            this.state = 181;
            this.match(dealParser.T__10);
            this.state = 182;
            this.block();
            this.state = 183;
            this.match(dealParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public for_(): ForContext {
        let localContext = new ForContext(this.context, this.state);
        this.enterRule(localContext, 26, dealParser.RULE_for);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 185;
            this.match(dealParser.T__16);
            this.state = 186;
            this.match(dealParser.ID);
            this.state = 187;
            this.match(dealParser.T__17);
            this.state = 188;
            this.set_();
            this.state = 189;
            this.match(dealParser.T__10);
            this.state = 190;
            this.block();
            this.state = 191;
            this.match(dealParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public if_(): IfContext {
        let localContext = new IfContext(this.context, this.state);
        this.enterRule(localContext, 28, dealParser.RULE_if);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 193;
            this.match(dealParser.T__18);
            this.state = 194;
            this.bexpr();
            this.state = 195;
            this.match(dealParser.T__10);
            this.state = 196;
            localContext._consequent = this.block();
            this.state = 197;
            this.match(dealParser.T__11);
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 198;
                this.match(dealParser.T__19);
                this.state = 199;
                this.match(dealParser.T__10);
                this.state = 200;
                localContext._antecedent = this.block();
                this.state = 201;
                this.match(dealParser.T__11);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cancel(): CancelContext {
        let localContext = new CancelContext(this.context, this.state);
        this.enterRule(localContext, 30, dealParser.RULE_cancel);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.match(dealParser.T__20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assign(): AssignContext {
        let localContext = new AssignContext(this.context, this.state);
        this.enterRule(localContext, 32, dealParser.RULE_assign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.variable();
            this.state = 208;
            this.match(dealParser.T__21);
            this.state = 209;
            this.term();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_call(): Function_callContext {
        let localContext = new Function_callContext(this.context, this.state);
        this.enterRule(localContext, 34, dealParser.RULE_function_call);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.match(dealParser.ID);
            this.state = 212;
            this.args();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateTurn(): UpdateTurnContext {
        let localContext = new UpdateTurnContext(this.context, this.state);
        this.enterRule(localContext, 36, dealParser.RULE_updateTurn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 214;
            this.match(dealParser.T__1);
            this.state = 215;
            this.match(dealParser.T__2);
            this.state = 216;
            this.match(dealParser.T__3);
            this.state = 220;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case dealParser.T__22:
                {
                this.state = 217;
                this.match(dealParser.T__22);
                }
                break;
            case dealParser.T__21:
                {
                this.state = 218;
                this.match(dealParser.T__21);
                this.state = 219;
                this.player();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public log(): LogContext {
        let localContext = new LogContext(this.context, this.state);
        this.enterRule(localContext, 38, dealParser.RULE_log);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 222;
            this.match(dealParser.T__23);
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 223;
                this.term();
                }
                }
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 2 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1048455) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modify(): ModifyContext {
        let localContext = new ModifyContext(this.context, this.state);
        this.enterRule(localContext, 40, dealParser.RULE_modify);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 230;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 228;
                this.position();
                }
                break;
            case 2:
                {
                this.state = 229;
                this.variable();
                }
                break;
            }
            this.state = 232;
            this.match(dealParser.T__2);
            this.state = 233;
            this.function_call();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public show(): ShowContext {
        let localContext = new ShowContext(this.context, this.state);
        this.enterRule(localContext, 42, dealParser.RULE_show);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 235;
            this.match(dealParser.T__24);
            this.state = 239;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                {
                this.state = 236;
                this.position();
                }
                break;
            case 2:
                {
                this.state = 237;
                this.match(dealParser.CARD);
                }
                break;
            case 3:
                {
                this.state = 238;
                this.variable();
                }
                break;
            }
            this.state = 241;
            this.player();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public config(): ConfigContext {
        let localContext = new ConfigContext(this.context, this.state);
        this.enterRule(localContext, 44, dealParser.RULE_config);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(dealParser.T__25);
            this.state = 244;
            this.match(dealParser.ID);
            this.state = 245;
            this.atts();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attribute(): AttributeContext {
        let localContext = new AttributeContext(this.context, this.state);
        this.enterRule(localContext, 46, dealParser.RULE_attribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 250;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                {
                this.state = 247;
                this.match(dealParser.ID);
                }
                break;
            case 2:
                {
                this.state = 248;
                this.match(dealParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 249;
                this.intset();
                }
                break;
            }
            this.state = 256;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case dealParser.ID:
                {
                this.state = 252;
                this.match(dealParser.ID);
                }
                break;
            case dealParser.STRING:
                {
                this.state = 253;
                this.match(dealParser.STRING);
                }
                break;
            case dealParser.NUMBER:
                {
                this.state = 254;
                this.match(dealParser.NUMBER);
                }
                break;
            case dealParser.T__10:
                {
                this.state = 255;
                this.atts();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public atts(): AttsContext {
        let localContext = new AttsContext(this.context, this.state);
        this.enterRule(localContext, 48, dealParser.RULE_atts);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 258;
            this.match(dealParser.T__10);
            this.state = 267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1048455) !== 0)) {
                {
                this.state = 259;
                this.attribute();
                this.state = 264;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 13) {
                    {
                    {
                    this.state = 260;
                    this.match(dealParser.T__12);
                    this.state = 261;
                    this.attribute();
                    }
                    }
                    this.state = 266;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 269;
            this.match(dealParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variable(): VariableContext {
        let localContext = new VariableContext(this.context, this.state);
        this.enterRule(localContext, 50, dealParser.RULE_variable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(dealParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public args(): ArgsContext {
        let localContext = new ArgsContext(this.context, this.state);
        this.enterRule(localContext, 52, dealParser.RULE_args);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 273;
            this.match(dealParser.T__8);
            this.state = 282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1048455) !== 0)) {
                {
                this.state = 274;
                this.arg();
                this.state = 279;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 13) {
                    {
                    {
                    this.state = 275;
                    this.match(dealParser.T__12);
                    this.state = 276;
                    this.arg();
                    }
                    }
                    this.state = 281;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 284;
            this.match(dealParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arg(): ArgContext {
        let localContext = new ArgContext(this.context, this.state);
        this.enterRule(localContext, 54, dealParser.RULE_arg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            this.term();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arearef(): ArearefContext {
        let localContext = new ArearefContext(this.context, this.state);
        this.enterRule(localContext, 56, dealParser.RULE_arearef);
        try {
            this.state = 290;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case dealParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 288;
                this.match(dealParser.ID);
                }
                break;
            case dealParser.T__1:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 289;
                this.player();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public area(): AreaContext {
        let localContext = new AreaContext(this.context, this.state);
        this.enterRule(localContext, 58, dealParser.RULE_area);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.arearef();
            this.state = 293;
            this.match(dealParser.T__26);
            this.state = 294;
            this.match(dealParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stack(): StackContext {
        let localContext = new StackContext(this.context, this.state);
        this.enterRule(localContext, 60, dealParser.RULE_stack);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.arearef();
            this.state = 297;
            this.match(dealParser.T__26);
            this.state = 298;
            this.term();
            this.state = 299;
            this.match(dealParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public position(): PositionContext {
        let localContext = new PositionContext(this.context, this.state);
        this.enterRule(localContext, 62, dealParser.RULE_position);
        try {
            this.state = 311;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case dealParser.T__1:
            case dealParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 301;
                this.arearef();
                this.state = 302;
                this.match(dealParser.T__26);
                this.state = 303;
                this.term();
                this.state = 304;
                this.match(dealParser.T__12);
                this.state = 305;
                this.term();
                this.state = 306;
                this.match(dealParser.T__27);
                }
                break;
            case dealParser.MOVE_SOURCE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 308;
                this.match(dealParser.MOVE_SOURCE);
                }
                break;
            case dealParser.MOVE_DEST:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 309;
                this.match(dealParser.MOVE_DEST);
                }
                break;
            case dealParser.INTERACT_CARD:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 310;
                this.match(dealParser.INTERACT_CARD);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public term(): TermContext {
        let localContext = new TermContext(this.context, this.state);
        this.enterRule(localContext, 64, dealParser.RULE_term);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 322;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 313;
                this.primitives();
                }
                break;
            case 2:
                {
                this.state = 314;
                this.match(dealParser.CARD);
                }
                break;
            case 3:
                {
                this.state = 315;
                this.match(dealParser.STRING);
                }
                break;
            case 4:
                {
                this.state = 316;
                this.variable();
                }
                break;
            case 5:
                {
                this.state = 317;
                this.match(dealParser.NUMBER);
                }
                break;
            case 6:
                {
                this.state = 318;
                this.player();
                }
                break;
            case 7:
                {
                this.state = 319;
                this.area();
                }
                break;
            case 8:
                {
                this.state = 320;
                this.stack();
                }
                break;
            case 9:
                {
                this.state = 321;
                this.position();
                }
                break;
            }
            this.state = 325;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 324;
                this.property();
                }
                break;
            }
            this.state = 329;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0)) {
                {
                this.state = 327;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 328;
                this.term();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 66, dealParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 331;
            this.match(dealParser.T__2);
            this.state = 332;
            this.match(dealParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitives(): PrimitivesContext {
        let localContext = new PrimitivesContext(this.context, this.state);
        this.enterRule(localContext, 68, dealParser.RULE_primitives);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 334;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 511) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bexpr(): BexprContext {
        let localContext = new BexprContext(this.context, this.state);
        this.enterRule(localContext, 70, dealParser.RULE_bexpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 336;
            this.term();
            this.state = 341;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case dealParser.T__28:
            case dealParser.T__29:
            case dealParser.T__30:
            case dealParser.T__31:
            case dealParser.T__32:
            case dealParser.T__33:
                {
                {
                this.state = 337;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 63) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 338;
                this.term();
                }
                }
                break;
            case dealParser.T__34:
            case dealParser.T__35:
                {
                {
                this.state = 339;
                _la = this.tokenStream.LA(1);
                if(!(_la === 35 || _la === 36)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 340;
                this.set_();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public set_(): SetContext {
        let localContext = new SetContext(this.context, this.state);
        this.enterRule(localContext, 72, dealParser.RULE_set);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 346;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                {
                this.state = 343;
                this.intset();
                }
                break;
            case 2:
                {
                this.state = 344;
                this.positionset();
                }
                break;
            case 3:
                {
                this.state = 345;
                this.playerset();
                }
                break;
            }
            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 348;
                this.property();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intset(): IntsetContext {
        let localContext = new IntsetContext(this.context, this.state);
        this.enterRule(localContext, 74, dealParser.RULE_intset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 351;
            this.term();
            this.state = 352;
            this.match(dealParser.T__36);
            this.state = 354;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 353;
                this.term();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public positionset(): PositionsetContext {
        let localContext = new PositionsetContext(this.context, this.state);
        this.enterRule(localContext, 76, dealParser.RULE_positionset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 356;
            this.arearef();
            this.state = 357;
            this.match(dealParser.T__26);
            this.state = 358;
            this.intset();
            this.state = 359;
            this.match(dealParser.T__12);
            this.state = 360;
            this.intset();
            this.state = 361;
            this.match(dealParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public playerset(): PlayersetContext {
        let localContext = new PlayersetContext(this.context, this.state);
        this.enterRule(localContext, 78, dealParser.RULE_playerset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 363;
            this.match(dealParser.T__1);
            this.state = 364;
            this.match(dealParser.TIMES);
            this.state = 365;
            this.match(dealParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public object(): ObjectContext {
        let localContext = new ObjectContext(this.context, this.state);
        this.enterRule(localContext, 80, dealParser.RULE_object);
        try {
            this.state = 379;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 367;
                this.primitives();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 368;
                this.match(dealParser.CARD);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 369;
                this.match(dealParser.STRING);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 370;
                this.variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 371;
                this.match(dealParser.NUMBER);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 372;
                this.player();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 373;
                this.area();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 374;
                this.stack();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 375;
                this.position();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 376;
                this.intset();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 377;
                this.positionset();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 378;
                this.playerset();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public move_catch(): Move_catchContext {
        let localContext = new Move_catchContext(this.context, this.state);
        this.enterRule(localContext, 82, dealParser.RULE_move_catch);
        try {
            this.state = 384;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 381;
                this.match(dealParser.WILDCARD);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 382;
                this.position();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 383;
                this.positionset();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,61,387,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
        109,8,1,1,1,1,1,1,2,5,2,114,8,2,10,2,12,2,117,9,2,1,3,1,3,1,3,1,
        3,1,3,3,3,124,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,
        5,137,8,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,149,8,6,10,
        6,12,6,152,9,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,161,8,8,1,9,1,9,1,
        10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,
        14,204,8,14,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,
        18,1,18,1,18,1,18,1,18,3,18,221,8,18,1,19,1,19,4,19,225,8,19,11,
        19,12,19,226,1,20,1,20,3,20,231,8,20,1,20,1,20,1,20,1,21,1,21,1,
        21,1,21,3,21,240,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,
        23,3,23,251,8,23,1,23,1,23,1,23,1,23,3,23,257,8,23,1,24,1,24,1,24,
        1,24,5,24,263,8,24,10,24,12,24,266,9,24,3,24,268,8,24,1,24,1,24,
        1,25,1,25,1,26,1,26,1,26,1,26,5,26,278,8,26,10,26,12,26,281,9,26,
        3,26,283,8,26,1,26,1,26,1,27,1,27,1,28,1,28,3,28,291,8,28,1,29,1,
        29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,
        31,1,31,1,31,1,31,1,31,3,31,312,8,31,1,32,1,32,1,32,1,32,1,32,1,
        32,1,32,1,32,1,32,3,32,323,8,32,1,32,3,32,326,8,32,1,32,1,32,3,32,
        330,8,32,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,3,35,
        342,8,35,1,36,1,36,1,36,3,36,347,8,36,1,36,3,36,350,8,36,1,37,1,
        37,1,37,3,37,355,8,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,
        39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,
        40,1,40,3,40,380,8,40,1,41,1,41,1,41,3,41,385,8,41,1,41,0,0,42,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
        48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,0,5,2,0,6,
        7,39,39,1,0,43,45,1,0,47,55,1,0,29,34,1,0,35,36,415,0,87,1,0,0,0,
        2,108,1,0,0,0,4,115,1,0,0,0,6,118,1,0,0,0,8,127,1,0,0,0,10,131,1,
        0,0,0,12,143,1,0,0,0,14,153,1,0,0,0,16,160,1,0,0,0,18,162,1,0,0,
        0,20,164,1,0,0,0,22,170,1,0,0,0,24,178,1,0,0,0,26,185,1,0,0,0,28,
        193,1,0,0,0,30,205,1,0,0,0,32,207,1,0,0,0,34,211,1,0,0,0,36,214,
        1,0,0,0,38,222,1,0,0,0,40,230,1,0,0,0,42,235,1,0,0,0,44,243,1,0,
        0,0,46,250,1,0,0,0,48,258,1,0,0,0,50,271,1,0,0,0,52,273,1,0,0,0,
        54,286,1,0,0,0,56,290,1,0,0,0,58,292,1,0,0,0,60,296,1,0,0,0,62,311,
        1,0,0,0,64,322,1,0,0,0,66,331,1,0,0,0,68,334,1,0,0,0,70,336,1,0,
        0,0,72,346,1,0,0,0,74,351,1,0,0,0,76,356,1,0,0,0,78,363,1,0,0,0,
        80,379,1,0,0,0,82,384,1,0,0,0,84,86,3,2,1,0,85,84,1,0,0,0,86,89,
        1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,
        90,91,5,0,0,1,91,1,1,0,0,0,92,109,3,8,4,0,93,109,3,10,5,0,94,109,
        3,14,7,0,95,109,3,20,10,0,96,109,3,22,11,0,97,109,3,24,12,0,98,109,
        3,26,13,0,99,109,3,28,14,0,100,109,3,30,15,0,101,109,3,32,16,0,102,
        109,3,34,17,0,103,109,3,36,18,0,104,109,3,38,19,0,105,109,3,40,20,
        0,106,109,3,42,21,0,107,109,3,44,22,0,108,92,1,0,0,0,108,93,1,0,
        0,0,108,94,1,0,0,0,108,95,1,0,0,0,108,96,1,0,0,0,108,97,1,0,0,0,
        108,98,1,0,0,0,108,99,1,0,0,0,108,100,1,0,0,0,108,101,1,0,0,0,108,
        102,1,0,0,0,108,103,1,0,0,0,108,104,1,0,0,0,108,105,1,0,0,0,108,
        106,1,0,0,0,108,107,1,0,0,0,109,110,1,0,0,0,110,111,5,1,0,0,111,
        3,1,0,0,0,112,114,3,2,1,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,
        1,0,0,0,115,116,1,0,0,0,116,5,1,0,0,0,117,115,1,0,0,0,118,123,5,
        2,0,0,119,124,5,40,0,0,120,124,5,3,0,0,121,124,5,42,0,0,122,124,
        3,64,32,0,123,119,1,0,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,122,
        1,0,0,0,124,125,1,0,0,0,125,126,5,4,0,0,126,7,1,0,0,0,127,128,5,
        5,0,0,128,129,7,0,0,0,129,130,5,57,0,0,130,9,1,0,0,0,131,132,5,5,
        0,0,132,133,5,8,0,0,133,134,5,57,0,0,134,136,5,9,0,0,135,137,3,12,
        6,0,136,135,1,0,0,0,136,137,1,0,0,0,137,138,1,0,0,0,138,139,5,10,
        0,0,139,140,5,11,0,0,140,141,3,4,2,0,141,142,5,12,0,0,142,11,1,0,
        0,0,143,144,5,39,0,0,144,150,5,57,0,0,145,146,5,13,0,0,146,147,5,
        39,0,0,147,149,5,57,0,0,148,145,1,0,0,0,149,152,1,0,0,0,150,148,
        1,0,0,0,150,151,1,0,0,0,151,13,1,0,0,0,152,150,1,0,0,0,153,154,5,
        14,0,0,154,155,3,16,8,0,155,156,3,18,9,0,156,15,1,0,0,0,157,161,
        5,58,0,0,158,161,3,62,31,0,159,161,3,76,38,0,160,157,1,0,0,0,160,
        158,1,0,0,0,160,159,1,0,0,0,161,17,1,0,0,0,162,163,3,62,31,0,163,
        19,1,0,0,0,164,165,5,15,0,0,165,166,5,57,0,0,166,167,5,11,0,0,167,
        168,3,4,2,0,168,169,5,12,0,0,169,21,1,0,0,0,170,171,5,15,0,0,171,
        172,5,14,0,0,172,173,3,82,41,0,173,174,3,82,41,0,174,175,5,11,0,
        0,175,176,3,4,2,0,176,177,5,12,0,0,177,23,1,0,0,0,178,179,5,15,0,
        0,179,180,5,16,0,0,180,181,3,82,41,0,181,182,5,11,0,0,182,183,3,
        4,2,0,183,184,5,12,0,0,184,25,1,0,0,0,185,186,5,17,0,0,186,187,5,
        57,0,0,187,188,5,18,0,0,188,189,3,72,36,0,189,190,5,11,0,0,190,191,
        3,4,2,0,191,192,5,12,0,0,192,27,1,0,0,0,193,194,5,19,0,0,194,195,
        3,70,35,0,195,196,5,11,0,0,196,197,3,4,2,0,197,203,5,12,0,0,198,
        199,5,20,0,0,199,200,5,11,0,0,200,201,3,4,2,0,201,202,5,12,0,0,202,
        204,1,0,0,0,203,198,1,0,0,0,203,204,1,0,0,0,204,29,1,0,0,0,205,206,
        5,21,0,0,206,31,1,0,0,0,207,208,3,50,25,0,208,209,5,22,0,0,209,210,
        3,64,32,0,210,33,1,0,0,0,211,212,5,57,0,0,212,213,3,52,26,0,213,
        35,1,0,0,0,214,215,5,2,0,0,215,216,5,3,0,0,216,220,5,4,0,0,217,221,
        5,23,0,0,218,219,5,22,0,0,219,221,3,6,3,0,220,217,1,0,0,0,220,218,
        1,0,0,0,221,37,1,0,0,0,222,224,5,24,0,0,223,225,3,64,32,0,224,223,
        1,0,0,0,225,226,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,39,1,
        0,0,0,228,231,3,62,31,0,229,231,3,50,25,0,230,228,1,0,0,0,230,229,
        1,0,0,0,231,232,1,0,0,0,232,233,5,3,0,0,233,234,3,34,17,0,234,41,
        1,0,0,0,235,239,5,25,0,0,236,240,3,62,31,0,237,240,5,58,0,0,238,
        240,3,50,25,0,239,236,1,0,0,0,239,237,1,0,0,0,239,238,1,0,0,0,240,
        241,1,0,0,0,241,242,3,6,3,0,242,43,1,0,0,0,243,244,5,26,0,0,244,
        245,5,57,0,0,245,246,3,48,24,0,246,45,1,0,0,0,247,251,5,57,0,0,248,
        251,5,56,0,0,249,251,3,74,37,0,250,247,1,0,0,0,250,248,1,0,0,0,250,
        249,1,0,0,0,251,256,1,0,0,0,252,257,5,57,0,0,253,257,5,59,0,0,254,
        257,5,56,0,0,255,257,3,48,24,0,256,252,1,0,0,0,256,253,1,0,0,0,256,
        254,1,0,0,0,256,255,1,0,0,0,257,47,1,0,0,0,258,267,5,11,0,0,259,
        264,3,46,23,0,260,261,5,13,0,0,261,263,3,46,23,0,262,260,1,0,0,0,
        263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,268,1,0,0,0,
        266,264,1,0,0,0,267,259,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,
        269,270,5,12,0,0,270,49,1,0,0,0,271,272,5,57,0,0,272,51,1,0,0,0,
        273,282,5,9,0,0,274,279,3,54,27,0,275,276,5,13,0,0,276,278,3,54,
        27,0,277,275,1,0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,
        0,0,280,283,1,0,0,0,281,279,1,0,0,0,282,274,1,0,0,0,282,283,1,0,
        0,0,283,284,1,0,0,0,284,285,5,10,0,0,285,53,1,0,0,0,286,287,3,64,
        32,0,287,55,1,0,0,0,288,291,5,57,0,0,289,291,3,6,3,0,290,288,1,0,
        0,0,290,289,1,0,0,0,291,57,1,0,0,0,292,293,3,56,28,0,293,294,5,27,
        0,0,294,295,5,28,0,0,295,59,1,0,0,0,296,297,3,56,28,0,297,298,5,
        27,0,0,298,299,3,64,32,0,299,300,5,28,0,0,300,61,1,0,0,0,301,302,
        3,56,28,0,302,303,5,27,0,0,303,304,3,64,32,0,304,305,5,13,0,0,305,
        306,3,64,32,0,306,307,5,28,0,0,307,312,1,0,0,0,308,312,5,41,0,0,
        309,312,5,40,0,0,310,312,5,42,0,0,311,301,1,0,0,0,311,308,1,0,0,
        0,311,309,1,0,0,0,311,310,1,0,0,0,312,63,1,0,0,0,313,323,3,68,34,
        0,314,323,5,58,0,0,315,323,5,59,0,0,316,323,3,50,25,0,317,323,5,
        56,0,0,318,323,3,6,3,0,319,323,3,58,29,0,320,323,3,60,30,0,321,323,
        3,62,31,0,322,313,1,0,0,0,322,314,1,0,0,0,322,315,1,0,0,0,322,316,
        1,0,0,0,322,317,1,0,0,0,322,318,1,0,0,0,322,319,1,0,0,0,322,320,
        1,0,0,0,322,321,1,0,0,0,323,325,1,0,0,0,324,326,3,66,33,0,325,324,
        1,0,0,0,325,326,1,0,0,0,326,329,1,0,0,0,327,328,7,1,0,0,328,330,
        3,64,32,0,329,327,1,0,0,0,329,330,1,0,0,0,330,65,1,0,0,0,331,332,
        5,3,0,0,332,333,5,57,0,0,333,67,1,0,0,0,334,335,7,2,0,0,335,69,1,
        0,0,0,336,341,3,64,32,0,337,338,7,3,0,0,338,342,3,64,32,0,339,340,
        7,4,0,0,340,342,3,72,36,0,341,337,1,0,0,0,341,339,1,0,0,0,342,71,
        1,0,0,0,343,347,3,74,37,0,344,347,3,76,38,0,345,347,3,78,39,0,346,
        343,1,0,0,0,346,344,1,0,0,0,346,345,1,0,0,0,347,349,1,0,0,0,348,
        350,3,66,33,0,349,348,1,0,0,0,349,350,1,0,0,0,350,73,1,0,0,0,351,
        352,3,64,32,0,352,354,5,37,0,0,353,355,3,64,32,0,354,353,1,0,0,0,
        354,355,1,0,0,0,355,75,1,0,0,0,356,357,3,56,28,0,357,358,5,27,0,
        0,358,359,3,74,37,0,359,360,5,13,0,0,360,361,3,74,37,0,361,362,5,
        28,0,0,362,77,1,0,0,0,363,364,5,2,0,0,364,365,5,45,0,0,365,366,5,
        4,0,0,366,79,1,0,0,0,367,380,3,68,34,0,368,380,5,58,0,0,369,380,
        5,59,0,0,370,380,3,50,25,0,371,380,5,56,0,0,372,380,3,6,3,0,373,
        380,3,58,29,0,374,380,3,60,30,0,375,380,3,62,31,0,376,380,3,74,37,
        0,377,380,3,76,38,0,378,380,3,78,39,0,379,367,1,0,0,0,379,368,1,
        0,0,0,379,369,1,0,0,0,379,370,1,0,0,0,379,371,1,0,0,0,379,372,1,
        0,0,0,379,373,1,0,0,0,379,374,1,0,0,0,379,375,1,0,0,0,379,376,1,
        0,0,0,379,377,1,0,0,0,379,378,1,0,0,0,380,81,1,0,0,0,381,385,5,46,
        0,0,382,385,3,62,31,0,383,385,3,76,38,0,384,381,1,0,0,0,384,382,
        1,0,0,0,384,383,1,0,0,0,385,83,1,0,0,0,29,87,108,115,123,136,150,
        160,203,220,226,230,239,250,256,264,267,279,282,290,311,322,325,
        329,341,346,349,354,379,384
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!dealParser.__ATN) {
            dealParser.__ATN = new antlr.ATNDeserializer().deserialize(dealParser._serializedATN);
        }

        return dealParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(dealParser.literalNames, dealParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return dealParser.vocabulary;
    }

    private static readonly decisionsToDFA = dealParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(dealParser.EOF, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_prog;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public definition(): DefinitionContext | null {
        return this.getRuleContext(0, DefinitionContext);
    }
    public define_function(): Define_functionContext | null {
        return this.getRuleContext(0, Define_functionContext);
    }
    public move(): MoveContext | null {
        return this.getRuleContext(0, MoveContext);
    }
    public on_action(): On_actionContext | null {
        return this.getRuleContext(0, On_actionContext);
    }
    public on_move(): On_moveContext | null {
        return this.getRuleContext(0, On_moveContext);
    }
    public on_interact(): On_interactContext | null {
        return this.getRuleContext(0, On_interactContext);
    }
    public for(): ForContext | null {
        return this.getRuleContext(0, ForContext);
    }
    public if(): IfContext | null {
        return this.getRuleContext(0, IfContext);
    }
    public cancel(): CancelContext | null {
        return this.getRuleContext(0, CancelContext);
    }
    public assign(): AssignContext | null {
        return this.getRuleContext(0, AssignContext);
    }
    public function_call(): Function_callContext | null {
        return this.getRuleContext(0, Function_callContext);
    }
    public updateTurn(): UpdateTurnContext | null {
        return this.getRuleContext(0, UpdateTurnContext);
    }
    public log(): LogContext | null {
        return this.getRuleContext(0, LogContext);
    }
    public modify(): ModifyContext | null {
        return this.getRuleContext(0, ModifyContext);
    }
    public show(): ShowContext | null {
        return this.getRuleContext(0, ShowContext);
    }
    public config(): ConfigContext | null {
        return this.getRuleContext(0, ConfigContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_stmt;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_block;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PlayerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MOVE_DEST(): antlr.TerminalNode | null {
        return this.getToken(dealParser.MOVE_DEST, 0);
    }
    public INTERACT_CARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.INTERACT_CARD, 0);
    }
    public term(): TermContext | null {
        return this.getRuleContext(0, TermContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_player;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterPlayer) {
             listener.enterPlayer(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitPlayer) {
             listener.exitPlayer(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitPlayer) {
            return visitor.visitPlayer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefinitionContext extends antlr.ParserRuleContext {
    public _type_?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public VARTYPE(): antlr.TerminalNode {
        return this.getToken(dealParser.VARTYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_definition;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterDefinition) {
             listener.enterDefinition(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitDefinition) {
             listener.exitDefinition(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitDefinition) {
            return visitor.visitDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Define_functionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public argdef(): ArgdefContext | null {
        return this.getRuleContext(0, ArgdefContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_define_function;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterDefine_function) {
             listener.enterDefine_function(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitDefine_function) {
             listener.exitDefine_function(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitDefine_function) {
            return visitor.visitDefine_function(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgdefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VARTYPE(): antlr.TerminalNode[];
    public VARTYPE(i: number): antlr.TerminalNode | null;
    public VARTYPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(dealParser.VARTYPE);
    	} else {
    		return this.getToken(dealParser.VARTYPE, i);
    	}
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(dealParser.ID);
    	} else {
    		return this.getToken(dealParser.ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_argdef;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterArgdef) {
             listener.enterArgdef(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitArgdef) {
             listener.exitArgdef(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitArgdef) {
            return visitor.visitArgdef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MoveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public source(): SourceContext {
        return this.getRuleContext(0, SourceContext)!;
    }
    public destination(): DestinationContext {
        return this.getRuleContext(0, DestinationContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_move;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterMove) {
             listener.enterMove(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitMove) {
             listener.exitMove(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitMove) {
            return visitor.visitMove(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.CARD, 0);
    }
    public position(): PositionContext | null {
        return this.getRuleContext(0, PositionContext);
    }
    public positionset(): PositionsetContext | null {
        return this.getRuleContext(0, PositionsetContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_source;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterSource) {
             listener.enterSource(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitSource) {
             listener.exitSource(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitSource) {
            return visitor.visitSource(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DestinationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public position(): PositionContext {
        return this.getRuleContext(0, PositionContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_destination;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterDestination) {
             listener.enterDestination(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitDestination) {
             listener.exitDestination(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitDestination) {
            return visitor.visitDestination(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class On_actionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_on_action;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterOn_action) {
             listener.enterOn_action(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitOn_action) {
             listener.exitOn_action(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitOn_action) {
            return visitor.visitOn_action(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class On_moveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public move_catch(): Move_catchContext[];
    public move_catch(i: number): Move_catchContext | null;
    public move_catch(i?: number): Move_catchContext[] | Move_catchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Move_catchContext);
        }

        return this.getRuleContext(i, Move_catchContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_on_move;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterOn_move) {
             listener.enterOn_move(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitOn_move) {
             listener.exitOn_move(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitOn_move) {
            return visitor.visitOn_move(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class On_interactContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public move_catch(): Move_catchContext {
        return this.getRuleContext(0, Move_catchContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_on_interact;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterOn_interact) {
             listener.enterOn_interact(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitOn_interact) {
             listener.exitOn_interact(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitOn_interact) {
            return visitor.visitOn_interact(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public set(): SetContext {
        return this.getRuleContext(0, SetContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_for;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterFor) {
             listener.enterFor(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitFor) {
             listener.exitFor(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitFor) {
            return visitor.visitFor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfContext extends antlr.ParserRuleContext {
    public _consequent?: BlockContext;
    public _antecedent?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public bexpr(): BexprContext {
        return this.getRuleContext(0, BexprContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_if;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterIf) {
             listener.enterIf(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitIf) {
             listener.exitIf(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CancelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_cancel;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterCancel) {
             listener.enterCancel(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitCancel) {
             listener.exitCancel(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitCancel) {
            return visitor.visitCancel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)!;
    }
    public term(): TermContext {
        return this.getRuleContext(0, TermContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_assign;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterAssign) {
             listener.enterAssign(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitAssign) {
             listener.exitAssign(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Function_callContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public args(): ArgsContext {
        return this.getRuleContext(0, ArgsContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_function_call;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterFunction_call) {
             listener.enterFunction_call(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitFunction_call) {
             listener.exitFunction_call(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitFunction_call) {
            return visitor.visitFunction_call(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateTurnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public player(): PlayerContext | null {
        return this.getRuleContext(0, PlayerContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_updateTurn;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterUpdateTurn) {
             listener.enterUpdateTurn(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitUpdateTurn) {
             listener.exitUpdateTurn(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitUpdateTurn) {
            return visitor.visitUpdateTurn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public term(): TermContext[];
    public term(i: number): TermContext | null;
    public term(i?: number): TermContext[] | TermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }

        return this.getRuleContext(i, TermContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_log;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterLog) {
             listener.enterLog(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitLog) {
             listener.exitLog(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitLog) {
            return visitor.visitLog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public function_call(): Function_callContext {
        return this.getRuleContext(0, Function_callContext)!;
    }
    public position(): PositionContext | null {
        return this.getRuleContext(0, PositionContext);
    }
    public variable(): VariableContext | null {
        return this.getRuleContext(0, VariableContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_modify;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterModify) {
             listener.enterModify(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitModify) {
             listener.exitModify(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitModify) {
            return visitor.visitModify(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public player(): PlayerContext {
        return this.getRuleContext(0, PlayerContext)!;
    }
    public position(): PositionContext | null {
        return this.getRuleContext(0, PositionContext);
    }
    public CARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.CARD, 0);
    }
    public variable(): VariableContext | null {
        return this.getRuleContext(0, VariableContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_show;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterShow) {
             listener.enterShow(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitShow) {
             listener.exitShow(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitShow) {
            return visitor.visitShow(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConfigContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public atts(): AttsContext {
        return this.getRuleContext(0, AttsContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_config;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterConfig) {
             listener.enterConfig(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitConfig) {
             listener.exitConfig(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitConfig) {
            return visitor.visitConfig(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(dealParser.ID);
    	} else {
    		return this.getToken(dealParser.ID, i);
    	}
    }
    public NUMBER(): antlr.TerminalNode[];
    public NUMBER(i: number): antlr.TerminalNode | null;
    public NUMBER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(dealParser.NUMBER);
    	} else {
    		return this.getToken(dealParser.NUMBER, i);
    	}
    }
    public intset(): IntsetContext | null {
        return this.getRuleContext(0, IntsetContext);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(dealParser.STRING, 0);
    }
    public atts(): AttsContext | null {
        return this.getRuleContext(0, AttsContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_attribute;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterAttribute) {
             listener.enterAttribute(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitAttribute) {
             listener.exitAttribute(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attribute(): AttributeContext[];
    public attribute(i: number): AttributeContext | null;
    public attribute(i?: number): AttributeContext[] | AttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }

        return this.getRuleContext(i, AttributeContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_atts;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterAtts) {
             listener.enterAtts(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitAtts) {
             listener.exitAtts(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitAtts) {
            return visitor.visitAtts(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_variable;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterVariable) {
             listener.enterVariable(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitVariable) {
             listener.exitVariable(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arg(): ArgContext[];
    public arg(i: number): ArgContext | null;
    public arg(i?: number): ArgContext[] | ArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgContext);
        }

        return this.getRuleContext(i, ArgContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_args;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterArgs) {
             listener.enterArgs(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitArgs) {
             listener.exitArgs(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitArgs) {
            return visitor.visitArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public term(): TermContext {
        return this.getRuleContext(0, TermContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_arg;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterArg) {
             listener.enterArg(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitArg) {
             listener.exitArg(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitArg) {
            return visitor.visitArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArearefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(dealParser.ID, 0);
    }
    public player(): PlayerContext | null {
        return this.getRuleContext(0, PlayerContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_arearef;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterArearef) {
             listener.enterArearef(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitArearef) {
             listener.exitArearef(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitArearef) {
            return visitor.visitArearef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AreaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arearef(): ArearefContext {
        return this.getRuleContext(0, ArearefContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_area;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterArea) {
             listener.enterArea(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitArea) {
             listener.exitArea(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitArea) {
            return visitor.visitArea(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StackContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arearef(): ArearefContext {
        return this.getRuleContext(0, ArearefContext)!;
    }
    public term(): TermContext {
        return this.getRuleContext(0, TermContext)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_stack;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterStack) {
             listener.enterStack(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitStack) {
             listener.exitStack(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitStack) {
            return visitor.visitStack(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PositionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arearef(): ArearefContext | null {
        return this.getRuleContext(0, ArearefContext);
    }
    public term(): TermContext[];
    public term(i: number): TermContext | null;
    public term(i?: number): TermContext[] | TermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }

        return this.getRuleContext(i, TermContext);
    }
    public MOVE_SOURCE(): antlr.TerminalNode | null {
        return this.getToken(dealParser.MOVE_SOURCE, 0);
    }
    public MOVE_DEST(): antlr.TerminalNode | null {
        return this.getToken(dealParser.MOVE_DEST, 0);
    }
    public INTERACT_CARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.INTERACT_CARD, 0);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_position;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterPosition) {
             listener.enterPosition(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitPosition) {
             listener.exitPosition(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TermContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primitives(): PrimitivesContext | null {
        return this.getRuleContext(0, PrimitivesContext);
    }
    public CARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.CARD, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(dealParser.STRING, 0);
    }
    public variable(): VariableContext | null {
        return this.getRuleContext(0, VariableContext);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(dealParser.NUMBER, 0);
    }
    public player(): PlayerContext | null {
        return this.getRuleContext(0, PlayerContext);
    }
    public area(): AreaContext | null {
        return this.getRuleContext(0, AreaContext);
    }
    public stack(): StackContext | null {
        return this.getRuleContext(0, StackContext);
    }
    public position(): PositionContext | null {
        return this.getRuleContext(0, PositionContext);
    }
    public property(): PropertyContext | null {
        return this.getRuleContext(0, PropertyContext);
    }
    public term(): TermContext | null {
        return this.getRuleContext(0, TermContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(dealParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(dealParser.MINUS, 0);
    }
    public TIMES(): antlr.TerminalNode | null {
        return this.getToken(dealParser.TIMES, 0);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_term;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterTerm) {
             listener.enterTerm(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitTerm) {
             listener.exitTerm(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(dealParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_property;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitivesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EMPTY(): antlr.TerminalNode | null {
        return this.getToken(dealParser.EMPTY, 0);
    }
    public SPADES(): antlr.TerminalNode | null {
        return this.getToken(dealParser.SPADES, 0);
    }
    public HEARTS(): antlr.TerminalNode | null {
        return this.getToken(dealParser.HEARTS, 0);
    }
    public CLUBS(): antlr.TerminalNode | null {
        return this.getToken(dealParser.CLUBS, 0);
    }
    public DIAMONDS(): antlr.TerminalNode | null {
        return this.getToken(dealParser.DIAMONDS, 0);
    }
    public JACK(): antlr.TerminalNode | null {
        return this.getToken(dealParser.JACK, 0);
    }
    public QUEEN(): antlr.TerminalNode | null {
        return this.getToken(dealParser.QUEEN, 0);
    }
    public KING(): antlr.TerminalNode | null {
        return this.getToken(dealParser.KING, 0);
    }
    public ACE(): antlr.TerminalNode | null {
        return this.getToken(dealParser.ACE, 0);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_primitives;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterPrimitives) {
             listener.enterPrimitives(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitPrimitives) {
             listener.exitPrimitives(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitPrimitives) {
            return visitor.visitPrimitives(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BexprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public term(): TermContext[];
    public term(i: number): TermContext | null;
    public term(i?: number): TermContext[] | TermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }

        return this.getRuleContext(i, TermContext);
    }
    public set(): SetContext | null {
        return this.getRuleContext(0, SetContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_bexpr;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterBexpr) {
             listener.enterBexpr(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitBexpr) {
             listener.exitBexpr(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitBexpr) {
            return visitor.visitBexpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public intset(): IntsetContext | null {
        return this.getRuleContext(0, IntsetContext);
    }
    public positionset(): PositionsetContext | null {
        return this.getRuleContext(0, PositionsetContext);
    }
    public playerset(): PlayersetContext | null {
        return this.getRuleContext(0, PlayersetContext);
    }
    public property(): PropertyContext | null {
        return this.getRuleContext(0, PropertyContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_set;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterSet) {
             listener.enterSet(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitSet) {
             listener.exitSet(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntsetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public term(): TermContext[];
    public term(i: number): TermContext | null;
    public term(i?: number): TermContext[] | TermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }

        return this.getRuleContext(i, TermContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_intset;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterIntset) {
             listener.enterIntset(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitIntset) {
             listener.exitIntset(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitIntset) {
            return visitor.visitIntset(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PositionsetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arearef(): ArearefContext {
        return this.getRuleContext(0, ArearefContext)!;
    }
    public intset(): IntsetContext[];
    public intset(i: number): IntsetContext | null;
    public intset(i?: number): IntsetContext[] | IntsetContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntsetContext);
        }

        return this.getRuleContext(i, IntsetContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_positionset;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterPositionset) {
             listener.enterPositionset(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitPositionset) {
             listener.exitPositionset(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitPositionset) {
            return visitor.visitPositionset(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PlayersetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIMES(): antlr.TerminalNode {
        return this.getToken(dealParser.TIMES, 0)!;
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_playerset;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterPlayerset) {
             listener.enterPlayerset(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitPlayerset) {
             listener.exitPlayerset(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitPlayerset) {
            return visitor.visitPlayerset(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primitives(): PrimitivesContext | null {
        return this.getRuleContext(0, PrimitivesContext);
    }
    public CARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.CARD, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(dealParser.STRING, 0);
    }
    public variable(): VariableContext | null {
        return this.getRuleContext(0, VariableContext);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(dealParser.NUMBER, 0);
    }
    public player(): PlayerContext | null {
        return this.getRuleContext(0, PlayerContext);
    }
    public area(): AreaContext | null {
        return this.getRuleContext(0, AreaContext);
    }
    public stack(): StackContext | null {
        return this.getRuleContext(0, StackContext);
    }
    public position(): PositionContext | null {
        return this.getRuleContext(0, PositionContext);
    }
    public intset(): IntsetContext | null {
        return this.getRuleContext(0, IntsetContext);
    }
    public positionset(): PositionsetContext | null {
        return this.getRuleContext(0, PositionsetContext);
    }
    public playerset(): PlayersetContext | null {
        return this.getRuleContext(0, PlayersetContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_object;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterObject) {
             listener.enterObject(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitObject) {
             listener.exitObject(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitObject) {
            return visitor.visitObject(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Move_catchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WILDCARD(): antlr.TerminalNode | null {
        return this.getToken(dealParser.WILDCARD, 0);
    }
    public position(): PositionContext | null {
        return this.getRuleContext(0, PositionContext);
    }
    public positionset(): PositionsetContext | null {
        return this.getRuleContext(0, PositionsetContext);
    }
    public override get ruleIndex(): number {
        return dealParser.RULE_move_catch;
    }
    public override enterRule(listener: dealListener): void {
        if(listener.enterMove_catch) {
             listener.enterMove_catch(this);
        }
    }
    public override exitRule(listener: dealListener): void {
        if(listener.exitMove_catch) {
             listener.exitMove_catch(this);
        }
    }
    public override accept<Result>(visitor: dealVisitor<Result>): Result | null {
        if (visitor.visitMove_catch) {
            return visitor.visitMove_catch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
