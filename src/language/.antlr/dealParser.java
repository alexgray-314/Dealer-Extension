// Generated from c:/Users/alexj/University/dealer/src/language/deal.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class dealParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, COMMENT=38, 
		VARTYPE=39, MOVE_DEST=40, MOVE_SOURCE=41, INTERACT_CARD=42, PLUS=43, MINUS=44, 
		TIMES=45, WILDCARD=46, EMPTY=47, SPADES=48, HEARTS=49, CLUBS=50, DIAMONDS=51, 
		JACK=52, QUEEN=53, KING=54, ACE=55, NUMBER=56, ID=57, CARD=58, JOKER=59, 
		STRING=60, SPACES=61, NEWLINE=62;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_block = 2, RULE_player = 3, RULE_definition = 4, 
		RULE_define_function = 5, RULE_argdef = 6, RULE_move = 7, RULE_source = 8, 
		RULE_destination = 9, RULE_on_action = 10, RULE_on_move = 11, RULE_on_interact = 12, 
		RULE_for = 13, RULE_if = 14, RULE_cancel = 15, RULE_assign = 16, RULE_function_call = 17, 
		RULE_updateTurn = 18, RULE_log = 19, RULE_modify = 20, RULE_show = 21, 
		RULE_config = 22, RULE_attribute = 23, RULE_atts = 24, RULE_variable = 25, 
		RULE_action_ref = 26, RULE_args = 27, RULE_arg = 28, RULE_arearef = 29, 
		RULE_area = 30, RULE_stack = 31, RULE_position = 32, RULE_term = 33, RULE_property = 34, 
		RULE_primitives = 35, RULE_suits = 36, RULE_picture_cards = 37, RULE_bexpr = 38, 
		RULE_set = 39, RULE_intset = 40, RULE_positionset = 41, RULE_playerset = 42, 
		RULE_object = 43, RULE_move_catch = 44;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "block", "player", "definition", "define_function", "argdef", 
			"move", "source", "destination", "on_action", "on_move", "on_interact", 
			"for", "if", "cancel", "assign", "function_call", "updateTurn", "log", 
			"modify", "show", "config", "attribute", "atts", "variable", "action_ref", 
			"args", "arg", "arearef", "area", "stack", "position", "term", "property", 
			"primitives", "suits", "picture_cards", "bexpr", "set", "intset", "positionset", 
			"playerset", "object", "move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'define'", "';'", "'on'", "'<'", "'.'", "'>'", "'area'", "'action'", 
			"'function'", "'('", "')'", "'{'", "'}'", "','", "'move'", "'interact'", 
			"'for'", "'in'", "'if'", "'else'", "'cancel'", "'='", "'++'", "'log'", 
			"'show'", "'$'", "'['", "']'", "'=='", "'!='", "'<='", "'>='", "'=?'", 
			"'!?'", "'||'", "'&&'", "':'", null, null, "'dest'", "'source'", "'@'", 
			"'+'", "'-'", "'*'", "'?'", "'empty'", "'spades'", "'hearts'", "'clubs'", 
			"'diamonds'", "'jack'", "'queen'", "'king'", "'ace'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "COMMENT", "VARTYPE", "MOVE_DEST", "MOVE_SOURCE", "INTERACT_CARD", 
			"PLUS", "MINUS", "TIMES", "WILDCARD", "EMPTY", "SPADES", "HEARTS", "CLUBS", 
			"DIAMONDS", "JACK", "QUEEN", "KING", "ACE", "NUMBER", "ID", "CARD", "JOKER", 
			"STRING", "SPACES", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "deal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public dealParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(dealParser.EOF, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144122884777476122L) != 0)) {
				{
				{
				setState(90);
				stmt();
				}
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(96);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StmtContext extends ParserRuleContext {
		public Define_functionContext define_function() {
			return getRuleContext(Define_functionContext.class,0);
		}
		public DefinitionContext definition() {
			return getRuleContext(DefinitionContext.class,0);
		}
		public MoveContext move() {
			return getRuleContext(MoveContext.class,0);
		}
		public On_actionContext on_action() {
			return getRuleContext(On_actionContext.class,0);
		}
		public On_moveContext on_move() {
			return getRuleContext(On_moveContext.class,0);
		}
		public On_interactContext on_interact() {
			return getRuleContext(On_interactContext.class,0);
		}
		public ForContext for_() {
			return getRuleContext(ForContext.class,0);
		}
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public CancelContext cancel() {
			return getRuleContext(CancelContext.class,0);
		}
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public UpdateTurnContext updateTurn() {
			return getRuleContext(UpdateTurnContext.class,0);
		}
		public LogContext log() {
			return getRuleContext(LogContext.class,0);
		}
		public ModifyContext modify() {
			return getRuleContext(ModifyContext.class,0);
		}
		public ShowContext show() {
			return getRuleContext(ShowContext.class,0);
		}
		public ConfigContext config() {
			return getRuleContext(ConfigContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(138);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(98);
				match(T__0);
				setState(103);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__6:
				case T__7:
				case VARTYPE:
					{
					{
					setState(99);
					definition();
					setState(100);
					match(T__1);
					}
					}
					break;
				case T__8:
					{
					setState(102);
					define_function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(105);
				move();
				setState(106);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(108);
				match(T__2);
				setState(112);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(109);
					on_action();
					}
					break;
				case T__14:
					{
					setState(110);
					on_move();
					}
					break;
				case T__15:
					{
					setState(111);
					on_interact();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(114);
				for_();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(115);
				if_();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(116);
				cancel();
				setState(117);
				match(T__1);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(119);
				assign();
				setState(120);
				match(T__1);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(122);
				function_call();
				setState(123);
				match(T__1);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(125);
				updateTurn();
				setState(126);
				match(T__1);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(128);
				log();
				setState(129);
				match(T__1);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(131);
				modify();
				setState(132);
				match(T__1);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(134);
				show();
				setState(135);
				match(T__1);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(137);
				config();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144122884777476122L) != 0)) {
				{
				{
				setState(140);
				stmt();
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PlayerContext extends ParserRuleContext {
		public TerminalNode INTERACT_CARD() { return getToken(dealParser.INTERACT_CARD, 0); }
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public PlayerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_player; }
	}

	public final PlayerContext player() throws RecognitionException {
		PlayerContext _localctx = new PlayerContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_player);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(T__3);
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(147);
				match(T__4);
				}
				break;
			case 2:
				{
				setState(148);
				match(INTERACT_CARD);
				}
				break;
			case 3:
				{
				setState(149);
				term();
				}
				break;
			}
			setState(152);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefinitionContext extends ParserRuleContext {
		public Token type;
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public TerminalNode VARTYPE() { return getToken(dealParser.VARTYPE, 0); }
		public DefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_definition; }
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_definition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			((DefinitionContext)_localctx).type = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 549755814272L) != 0)) ) {
				((DefinitionContext)_localctx).type = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(155);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Define_functionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ArgdefContext argdef() {
			return getRuleContext(ArgdefContext.class,0);
		}
		public Define_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define_function; }
	}

	public final Define_functionContext define_function() throws RecognitionException {
		Define_functionContext _localctx = new Define_functionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_define_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(T__8);
			setState(158);
			match(ID);
			setState(159);
			match(T__9);
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARTYPE) {
				{
				setState(160);
				argdef();
				}
			}

			setState(163);
			match(T__10);
			setState(164);
			match(T__11);
			setState(165);
			block();
			setState(166);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgdefContext extends ParserRuleContext {
		public List<TerminalNode> VARTYPE() { return getTokens(dealParser.VARTYPE); }
		public TerminalNode VARTYPE(int i) {
			return getToken(dealParser.VARTYPE, i);
		}
		public List<TerminalNode> ID() { return getTokens(dealParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(dealParser.ID, i);
		}
		public ArgdefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argdef; }
	}

	public final ArgdefContext argdef() throws RecognitionException {
		ArgdefContext _localctx = new ArgdefContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_argdef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(VARTYPE);
			setState(169);
			match(ID);
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__13) {
				{
				{
				setState(170);
				match(T__13);
				setState(171);
				match(VARTYPE);
				setState(172);
				match(ID);
				}
				}
				setState(177);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MoveContext extends ParserRuleContext {
		public SourceContext source() {
			return getRuleContext(SourceContext.class,0);
		}
		public DestinationContext destination() {
			return getRuleContext(DestinationContext.class,0);
		}
		public MoveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_move; }
	}

	public final MoveContext move() throws RecognitionException {
		MoveContext _localctx = new MoveContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(T__14);
			setState(179);
			source();
			setState(180);
			destination();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SourceContext extends ParserRuleContext {
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public SourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_source; }
	}

	public final SourceContext source() throws RecognitionException {
		SourceContext _localctx = new SourceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_source);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(182);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(183);
				position();
				}
				break;
			case 3:
				{
				setState(184);
				positionset();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DestinationContext extends ParserRuleContext {
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public DestinationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_destination; }
	}

	public final DestinationContext destination() throws RecognitionException {
		DestinationContext _localctx = new DestinationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_destination);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			position();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class On_actionContext extends ParserRuleContext {
		public Action_refContext action_ref() {
			return getRuleContext(Action_refContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_actionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_action; }
	}

	public final On_actionContext on_action() throws RecognitionException {
		On_actionContext _localctx = new On_actionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_on_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			action_ref();
			setState(190);
			match(T__11);
			setState(191);
			block();
			setState(192);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class On_moveContext extends ParserRuleContext {
		public List<Move_catchContext> move_catch() {
			return getRuleContexts(Move_catchContext.class);
		}
		public Move_catchContext move_catch(int i) {
			return getRuleContext(Move_catchContext.class,i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_moveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_move; }
	}

	public final On_moveContext on_move() throws RecognitionException {
		On_moveContext _localctx = new On_moveContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_on_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(T__14);
			setState(195);
			move_catch();
			setState(196);
			move_catch();
			setState(197);
			match(T__11);
			setState(198);
			block();
			setState(199);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class On_interactContext extends ParserRuleContext {
		public Move_catchContext move_catch() {
			return getRuleContext(Move_catchContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_interactContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_interact; }
	}

	public final On_interactContext on_interact() throws RecognitionException {
		On_interactContext _localctx = new On_interactContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_on_interact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(T__15);
			setState(202);
			move_catch();
			setState(203);
			match(T__11);
			setState(204);
			block();
			setState(205);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for; }
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_for);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(T__16);
			setState(208);
			match(ID);
			setState(209);
			match(T__17);
			setState(210);
			set();
			setState(211);
			match(T__11);
			setState(212);
			block();
			setState(213);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfContext extends ParserRuleContext {
		public BlockContext consequent;
		public BlockContext antecedent;
		public BexprContext bexpr() {
			return getRuleContext(BexprContext.class,0);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public IfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if; }
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_if);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(T__18);
			setState(216);
			bexpr();
			setState(217);
			match(T__11);
			setState(218);
			((IfContext)_localctx).consequent = block();
			setState(219);
			match(T__12);
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19) {
				{
				setState(220);
				match(T__19);
				setState(221);
				match(T__11);
				setState(222);
				((IfContext)_localctx).antecedent = block();
				setState(223);
				match(T__12);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CancelContext extends ParserRuleContext {
		public CancelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cancel; }
	}

	public final CancelContext cancel() throws RecognitionException {
		CancelContext _localctx = new CancelContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_cancel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			match(T__20);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			variable();
			setState(230);
			match(T__21);
			setState(231);
			term();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_callContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public ArgsContext args() {
			return getRuleContext(ArgsContext.class,0);
		}
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_function_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(ID);
			setState(234);
			args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UpdateTurnContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public UpdateTurnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateTurn; }
	}

	public final UpdateTurnContext updateTurn() throws RecognitionException {
		UpdateTurnContext _localctx = new UpdateTurnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_updateTurn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(T__3);
			setState(237);
			match(T__4);
			setState(238);
			match(T__5);
			setState(242);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				{
				setState(239);
				match(T__22);
				}
				break;
			case T__21:
				{
				setState(240);
				match(T__21);
				setState(241);
				term();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public LogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_log; }
	}

	public final LogContext log() throws RecognitionException {
		LogContext _localctx = new LogContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_log);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(T__23);
			setState(246); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(245);
				term();
				}
				}
				setState(248); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1729249216003309584L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModifyContext extends ParserRuleContext {
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ModifyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modify; }
	}

	public final ModifyContext modify() throws RecognitionException {
		ModifyContext _localctx = new ModifyContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_modify);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(250);
				position();
				}
				break;
			case 2:
				{
				setState(251);
				variable();
				}
				break;
			}
			setState(254);
			match(T__4);
			setState(255);
			function_call();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ShowContext extends ParserRuleContext {
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ShowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_show; }
	}

	public final ShowContext show() throws RecognitionException {
		ShowContext _localctx = new ShowContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_show);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			match(T__24);
			setState(261);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(258);
				position();
				}
				break;
			case 2:
				{
				setState(259);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(260);
				variable();
				}
				break;
			}
			setState(263);
			player();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConfigContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public AttsContext atts() {
			return getRuleContext(AttsContext.class,0);
		}
		public ConfigContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_config; }
	}

	public final ConfigContext config() throws RecognitionException {
		ConfigContext _localctx = new ConfigContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_config);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(T__25);
			setState(266);
			match(ID);
			setState(267);
			atts();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttributeContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(dealParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(dealParser.ID, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(dealParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(dealParser.NUMBER, i);
		}
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public AttsContext atts() {
			return getRuleContext(AttsContext.class,0);
		}
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(269);
				match(ID);
				}
				break;
			case 2:
				{
				setState(270);
				match(NUMBER);
				}
				break;
			case 3:
				{
				setState(271);
				intset();
				}
				break;
			}
			setState(278);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(274);
				match(ID);
				}
				break;
			case STRING:
				{
				setState(275);
				match(STRING);
				}
				break;
			case NUMBER:
				{
				setState(276);
				match(NUMBER);
				}
				break;
			case T__11:
				{
				setState(277);
				atts();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttsContext extends ParserRuleContext {
		public List<AttributeContext> attribute() {
			return getRuleContexts(AttributeContext.class);
		}
		public AttributeContext attribute(int i) {
			return getRuleContext(AttributeContext.class,i);
		}
		public AttsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atts; }
	}

	public final AttsContext atts() throws RecognitionException {
		AttsContext _localctx = new AttsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_atts);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(T__11);
			setState(289);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1729249216003309584L) != 0)) {
				{
				setState(281);
				attribute();
				setState(286);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(282);
					match(T__13);
					setState(283);
					attribute();
					}
					}
					setState(288);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(291);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Action_refContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public Action_refContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action_ref; }
	}

	public final Action_refContext action_ref() throws RecognitionException {
		Action_refContext _localctx = new Action_refContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_action_ref);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgsContext extends ParserRuleContext {
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public ArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args; }
	}

	public final ArgsContext args() throws RecognitionException {
		ArgsContext _localctx = new ArgsContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(T__9);
			setState(306);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1729249216003309584L) != 0)) {
				{
				setState(298);
				arg();
				setState(303);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(299);
					match(T__13);
					setState(300);
					arg();
					}
					}
					setState(305);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(308);
			match(T__10);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			term();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArearefContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public ArearefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arearef; }
	}

	public final ArearefContext arearef() throws RecognitionException {
		ArearefContext _localctx = new ArearefContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_arearef);
		try {
			setState(314);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(312);
				match(ID);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(313);
				player();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AreaContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public AreaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_area; }
	}

	public final AreaContext area() throws RecognitionException {
		AreaContext _localctx = new AreaContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_area);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			arearef();
			setState(317);
			match(T__26);
			setState(318);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StackContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public StackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stack; }
	}

	public final StackContext stack() throws RecognitionException {
		StackContext _localctx = new StackContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_stack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			arearef();
			setState(321);
			match(T__26);
			setState(322);
			term();
			setState(323);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PositionContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public TerminalNode MOVE_SOURCE() { return getToken(dealParser.MOVE_SOURCE, 0); }
		public TerminalNode MOVE_DEST() { return getToken(dealParser.MOVE_DEST, 0); }
		public TerminalNode INTERACT_CARD() { return getToken(dealParser.INTERACT_CARD, 0); }
		public PositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_position; }
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_position);
		try {
			setState(335);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(325);
				arearef();
				setState(326);
				match(T__26);
				setState(327);
				term();
				setState(328);
				match(T__13);
				setState(329);
				term();
				setState(330);
				match(T__27);
				}
				break;
			case MOVE_SOURCE:
				enterOuterAlt(_localctx, 2);
				{
				setState(332);
				match(MOVE_SOURCE);
				}
				break;
			case MOVE_DEST:
				enterOuterAlt(_localctx, 3);
				{
				setState(333);
				match(MOVE_DEST);
				}
				break;
			case INTERACT_CARD:
				enterOuterAlt(_localctx, 4);
				{
				setState(334);
				match(INTERACT_CARD);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermContext extends ParserRuleContext {
		public Token op;
		public PrimitivesContext primitives() {
			return getRuleContext(PrimitivesContext.class,0);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public AreaContext area() {
			return getRuleContext(AreaContext.class,0);
		}
		public StackContext stack() {
			return getRuleContext(StackContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(dealParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(dealParser.MINUS, 0); }
		public TerminalNode TIMES() { return getToken(dealParser.TIMES, 0); }
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(337);
				primitives();
				}
				break;
			case 2:
				{
				setState(338);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(339);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(340);
				variable();
				}
				break;
			case 5:
				{
				setState(341);
				match(NUMBER);
				}
				break;
			case 6:
				{
				setState(342);
				player();
				}
				break;
			case 7:
				{
				setState(343);
				area();
				}
				break;
			case 8:
				{
				setState(344);
				stack();
				}
				break;
			case 9:
				{
				setState(345);
				position();
				}
				break;
			}
			setState(349);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(348);
				property();
				}
				break;
			}
			setState(353);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 61572651155456L) != 0)) {
				{
				setState(351);
				((TermContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 61572651155456L) != 0)) ) {
					((TermContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(352);
				term();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(T__4);
			setState(356);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitivesContext extends ParserRuleContext {
		public TerminalNode EMPTY() { return getToken(dealParser.EMPTY, 0); }
		public SuitsContext suits() {
			return getRuleContext(SuitsContext.class,0);
		}
		public Picture_cardsContext picture_cards() {
			return getRuleContext(Picture_cardsContext.class,0);
		}
		public PrimitivesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitives; }
	}

	public final PrimitivesContext primitives() throws RecognitionException {
		PrimitivesContext _localctx = new PrimitivesContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_primitives);
		try {
			setState(361);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY:
				enterOuterAlt(_localctx, 1);
				{
				setState(358);
				match(EMPTY);
				}
				break;
			case SPADES:
			case HEARTS:
			case CLUBS:
			case DIAMONDS:
				enterOuterAlt(_localctx, 2);
				{
				setState(359);
				suits();
				}
				break;
			case JACK:
			case QUEEN:
			case KING:
			case ACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(360);
				picture_cards();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SuitsContext extends ParserRuleContext {
		public TerminalNode SPADES() { return getToken(dealParser.SPADES, 0); }
		public TerminalNode HEARTS() { return getToken(dealParser.HEARTS, 0); }
		public TerminalNode CLUBS() { return getToken(dealParser.CLUBS, 0); }
		public TerminalNode DIAMONDS() { return getToken(dealParser.DIAMONDS, 0); }
		public SuitsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_suits; }
	}

	public final SuitsContext suits() throws RecognitionException {
		SuitsContext _localctx = new SuitsContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_suits);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4222124650659840L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Picture_cardsContext extends ParserRuleContext {
		public TerminalNode JACK() { return getToken(dealParser.JACK, 0); }
		public TerminalNode QUEEN() { return getToken(dealParser.QUEEN, 0); }
		public TerminalNode KING() { return getToken(dealParser.KING, 0); }
		public TerminalNode ACE() { return getToken(dealParser.ACE, 0); }
		public Picture_cardsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_picture_cards; }
	}

	public final Picture_cardsContext picture_cards() throws RecognitionException {
		Picture_cardsContext _localctx = new Picture_cardsContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_picture_cards);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 67553994410557440L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BexprContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public BexprContext bexpr() {
			return getRuleContext(BexprContext.class,0);
		}
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public BexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexpr; }
	}

	public final BexprContext bexpr() throws RecognitionException {
		BexprContext _localctx = new BexprContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			term();
			setState(372);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case T__5:
			case T__28:
			case T__29:
			case T__30:
			case T__31:
				{
				{
				setState(368);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8053063760L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(369);
				term();
				}
				}
				break;
			case T__32:
			case T__33:
				{
				{
				setState(370);
				_la = _input.LA(1);
				if ( !(_la==T__32 || _la==T__33) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(371);
				set();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(376);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__34 || _la==T__35) {
				{
				setState(374);
				_la = _input.LA(1);
				if ( !(_la==T__34 || _la==T__35) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(375);
				bexpr();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SetContext extends ParserRuleContext {
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public PlayersetContext playerset() {
			return getRuleContext(PlayersetContext.class,0);
		}
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(381);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(378);
				positionset();
				}
				break;
			case 2:
				{
				setState(379);
				playerset();
				}
				break;
			case 3:
				{
				setState(380);
				intset();
				}
				break;
			}
			setState(384);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(383);
				property();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntsetContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public IntsetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intset; }
	}

	public final IntsetContext intset() throws RecognitionException {
		IntsetContext _localctx = new IntsetContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_intset);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386);
			term();
			setState(391);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__36) {
				{
				setState(387);
				match(T__36);
				setState(389);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
				case 1:
					{
					setState(388);
					term();
					}
					break;
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PositionsetContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public List<IntsetContext> intset() {
			return getRuleContexts(IntsetContext.class);
		}
		public IntsetContext intset(int i) {
			return getRuleContext(IntsetContext.class,i);
		}
		public PositionsetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_positionset; }
	}

	public final PositionsetContext positionset() throws RecognitionException {
		PositionsetContext _localctx = new PositionsetContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(393);
			arearef();
			setState(394);
			match(T__26);
			setState(395);
			intset();
			setState(396);
			match(T__13);
			setState(397);
			intset();
			setState(398);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PlayersetContext extends ParserRuleContext {
		public TerminalNode TIMES() { return getToken(dealParser.TIMES, 0); }
		public PlayersetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_playerset; }
	}

	public final PlayersetContext playerset() throws RecognitionException {
		PlayersetContext _localctx = new PlayersetContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			match(T__3);
			setState(401);
			match(TIMES);
			setState(402);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectContext extends ParserRuleContext {
		public PrimitivesContext primitives() {
			return getRuleContext(PrimitivesContext.class,0);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public AreaContext area() {
			return getRuleContext(AreaContext.class,0);
		}
		public StackContext stack() {
			return getRuleContext(StackContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public PlayersetContext playerset() {
			return getRuleContext(PlayersetContext.class,0);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_object);
		try {
			setState(416);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(404);
				primitives();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(405);
				match(CARD);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(406);
				match(STRING);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(407);
				variable();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(408);
				match(NUMBER);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(409);
				player();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(410);
				area();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(411);
				stack();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(412);
				position();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(413);
				intset();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(414);
				positionset();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(415);
				playerset();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Move_catchContext extends ParserRuleContext {
		public TerminalNode WILDCARD() { return getToken(dealParser.WILDCARD, 0); }
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public Move_catchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_move_catch; }
	}

	public final Move_catchContext move_catch() throws RecognitionException {
		Move_catchContext _localctx = new Move_catchContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_move_catch);
		try {
			setState(421);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(418);
				match(WILDCARD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(419);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(420);
				positionset();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001>\u01a8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0001"+
		"\u0000\u0005\u0000\\\b\u0000\n\u0000\f\u0000_\t\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001h\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001q\b\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u008b"+
		"\b\u0001\u0001\u0002\u0005\u0002\u008e\b\u0002\n\u0002\f\u0002\u0091\t"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u0097"+
		"\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00a2\b\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006\u00ae\b\u0006\n"+
		"\u0006\f\u0006\u00b1\t\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0003\b\u00ba\b\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003"+
		"\u000e\u00e2\b\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u00f3"+
		"\b\u0012\u0001\u0013\u0001\u0013\u0004\u0013\u00f7\b\u0013\u000b\u0013"+
		"\f\u0013\u00f8\u0001\u0014\u0001\u0014\u0003\u0014\u00fd\b\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0003\u0015\u0106\b\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0003"+
		"\u0017\u0111\b\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0003"+
		"\u0017\u0117\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0005"+
		"\u0018\u011d\b\u0018\n\u0018\f\u0018\u0120\t\u0018\u0003\u0018\u0122\b"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0005\u001b\u012e"+
		"\b\u001b\n\u001b\f\u001b\u0131\t\u001b\u0003\u001b\u0133\b\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0003"+
		"\u001d\u013b\b\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0003 \u0150\b \u0001"+
		"!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0003!\u015b"+
		"\b!\u0001!\u0003!\u015e\b!\u0001!\u0001!\u0003!\u0162\b!\u0001\"\u0001"+
		"\"\u0001\"\u0001#\u0001#\u0001#\u0003#\u016a\b#\u0001$\u0001$\u0001%\u0001"+
		"%\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u0175\b&\u0001&\u0001&\u0003"+
		"&\u0179\b&\u0001\'\u0001\'\u0001\'\u0003\'\u017e\b\'\u0001\'\u0003\'\u0181"+
		"\b\'\u0001(\u0001(\u0001(\u0003(\u0186\b(\u0003(\u0188\b(\u0001)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0001*\u0001*\u0001*\u0001*\u0001"+
		"+\u0001+\u0001+\u0001+\u0001+\u0001+\u0001+\u0001+\u0001+\u0001+\u0001"+
		"+\u0001+\u0003+\u01a1\b+\u0001,\u0001,\u0001,\u0003,\u01a6\b,\u0001,\u0000"+
		"\u0000-\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVX\u0000\u0007\u0002\u0000"+
		"\u0007\b\'\'\u0001\u0000+-\u0001\u000003\u0001\u000047\u0003\u0000\u0004"+
		"\u0004\u0006\u0006\u001d \u0001\u0000!\"\u0001\u0000#$\u01c4\u0000]\u0001"+
		"\u0000\u0000\u0000\u0002\u008a\u0001\u0000\u0000\u0000\u0004\u008f\u0001"+
		"\u0000\u0000\u0000\u0006\u0092\u0001\u0000\u0000\u0000\b\u009a\u0001\u0000"+
		"\u0000\u0000\n\u009d\u0001\u0000\u0000\u0000\f\u00a8\u0001\u0000\u0000"+
		"\u0000\u000e\u00b2\u0001\u0000\u0000\u0000\u0010\u00b9\u0001\u0000\u0000"+
		"\u0000\u0012\u00bb\u0001\u0000\u0000\u0000\u0014\u00bd\u0001\u0000\u0000"+
		"\u0000\u0016\u00c2\u0001\u0000\u0000\u0000\u0018\u00c9\u0001\u0000\u0000"+
		"\u0000\u001a\u00cf\u0001\u0000\u0000\u0000\u001c\u00d7\u0001\u0000\u0000"+
		"\u0000\u001e\u00e3\u0001\u0000\u0000\u0000 \u00e5\u0001\u0000\u0000\u0000"+
		"\"\u00e9\u0001\u0000\u0000\u0000$\u00ec\u0001\u0000\u0000\u0000&\u00f4"+
		"\u0001\u0000\u0000\u0000(\u00fc\u0001\u0000\u0000\u0000*\u0101\u0001\u0000"+
		"\u0000\u0000,\u0109\u0001\u0000\u0000\u0000.\u0110\u0001\u0000\u0000\u0000"+
		"0\u0118\u0001\u0000\u0000\u00002\u0125\u0001\u0000\u0000\u00004\u0127"+
		"\u0001\u0000\u0000\u00006\u0129\u0001\u0000\u0000\u00008\u0136\u0001\u0000"+
		"\u0000\u0000:\u013a\u0001\u0000\u0000\u0000<\u013c\u0001\u0000\u0000\u0000"+
		">\u0140\u0001\u0000\u0000\u0000@\u014f\u0001\u0000\u0000\u0000B\u015a"+
		"\u0001\u0000\u0000\u0000D\u0163\u0001\u0000\u0000\u0000F\u0169\u0001\u0000"+
		"\u0000\u0000H\u016b\u0001\u0000\u0000\u0000J\u016d\u0001\u0000\u0000\u0000"+
		"L\u016f\u0001\u0000\u0000\u0000N\u017d\u0001\u0000\u0000\u0000P\u0182"+
		"\u0001\u0000\u0000\u0000R\u0189\u0001\u0000\u0000\u0000T\u0190\u0001\u0000"+
		"\u0000\u0000V\u01a0\u0001\u0000\u0000\u0000X\u01a5\u0001\u0000\u0000\u0000"+
		"Z\\\u0003\u0002\u0001\u0000[Z\u0001\u0000\u0000\u0000\\_\u0001\u0000\u0000"+
		"\u0000][\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^`\u0001\u0000"+
		"\u0000\u0000_]\u0001\u0000\u0000\u0000`a\u0005\u0000\u0000\u0001a\u0001"+
		"\u0001\u0000\u0000\u0000bg\u0005\u0001\u0000\u0000cd\u0003\b\u0004\u0000"+
		"de\u0005\u0002\u0000\u0000eh\u0001\u0000\u0000\u0000fh\u0003\n\u0005\u0000"+
		"gc\u0001\u0000\u0000\u0000gf\u0001\u0000\u0000\u0000h\u008b\u0001\u0000"+
		"\u0000\u0000ij\u0003\u000e\u0007\u0000jk\u0005\u0002\u0000\u0000k\u008b"+
		"\u0001\u0000\u0000\u0000lp\u0005\u0003\u0000\u0000mq\u0003\u0014\n\u0000"+
		"nq\u0003\u0016\u000b\u0000oq\u0003\u0018\f\u0000pm\u0001\u0000\u0000\u0000"+
		"pn\u0001\u0000\u0000\u0000po\u0001\u0000\u0000\u0000q\u008b\u0001\u0000"+
		"\u0000\u0000r\u008b\u0003\u001a\r\u0000s\u008b\u0003\u001c\u000e\u0000"+
		"tu\u0003\u001e\u000f\u0000uv\u0005\u0002\u0000\u0000v\u008b\u0001\u0000"+
		"\u0000\u0000wx\u0003 \u0010\u0000xy\u0005\u0002\u0000\u0000y\u008b\u0001"+
		"\u0000\u0000\u0000z{\u0003\"\u0011\u0000{|\u0005\u0002\u0000\u0000|\u008b"+
		"\u0001\u0000\u0000\u0000}~\u0003$\u0012\u0000~\u007f\u0005\u0002\u0000"+
		"\u0000\u007f\u008b\u0001\u0000\u0000\u0000\u0080\u0081\u0003&\u0013\u0000"+
		"\u0081\u0082\u0005\u0002\u0000\u0000\u0082\u008b\u0001\u0000\u0000\u0000"+
		"\u0083\u0084\u0003(\u0014\u0000\u0084\u0085\u0005\u0002\u0000\u0000\u0085"+
		"\u008b\u0001\u0000\u0000\u0000\u0086\u0087\u0003*\u0015\u0000\u0087\u0088"+
		"\u0005\u0002\u0000\u0000\u0088\u008b\u0001\u0000\u0000\u0000\u0089\u008b"+
		"\u0003,\u0016\u0000\u008ab\u0001\u0000\u0000\u0000\u008ai\u0001\u0000"+
		"\u0000\u0000\u008al\u0001\u0000\u0000\u0000\u008ar\u0001\u0000\u0000\u0000"+
		"\u008as\u0001\u0000\u0000\u0000\u008at\u0001\u0000\u0000\u0000\u008aw"+
		"\u0001\u0000\u0000\u0000\u008az\u0001\u0000\u0000\u0000\u008a}\u0001\u0000"+
		"\u0000\u0000\u008a\u0080\u0001\u0000\u0000\u0000\u008a\u0083\u0001\u0000"+
		"\u0000\u0000\u008a\u0086\u0001\u0000\u0000\u0000\u008a\u0089\u0001\u0000"+
		"\u0000\u0000\u008b\u0003\u0001\u0000\u0000\u0000\u008c\u008e\u0003\u0002"+
		"\u0001\u0000\u008d\u008c\u0001\u0000\u0000\u0000\u008e\u0091\u0001\u0000"+
		"\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000"+
		"\u0000\u0000\u0090\u0005\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000"+
		"\u0000\u0000\u0092\u0096\u0005\u0004\u0000\u0000\u0093\u0097\u0005\u0005"+
		"\u0000\u0000\u0094\u0097\u0005*\u0000\u0000\u0095\u0097\u0003B!\u0000"+
		"\u0096\u0093\u0001\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000\u0000"+
		"\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000"+
		"\u0098\u0099\u0005\u0006\u0000\u0000\u0099\u0007\u0001\u0000\u0000\u0000"+
		"\u009a\u009b\u0007\u0000\u0000\u0000\u009b\u009c\u00059\u0000\u0000\u009c"+
		"\t\u0001\u0000\u0000\u0000\u009d\u009e\u0005\t\u0000\u0000\u009e\u009f"+
		"\u00059\u0000\u0000\u009f\u00a1\u0005\n\u0000\u0000\u00a0\u00a2\u0003"+
		"\f\u0006\u0000\u00a1\u00a0\u0001\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005\u000b"+
		"\u0000\u0000\u00a4\u00a5\u0005\f\u0000\u0000\u00a5\u00a6\u0003\u0004\u0002"+
		"\u0000\u00a6\u00a7\u0005\r\u0000\u0000\u00a7\u000b\u0001\u0000\u0000\u0000"+
		"\u00a8\u00a9\u0005\'\u0000\u0000\u00a9\u00af\u00059\u0000\u0000\u00aa"+
		"\u00ab\u0005\u000e\u0000\u0000\u00ab\u00ac\u0005\'\u0000\u0000\u00ac\u00ae"+
		"\u00059\u0000\u0000\u00ad\u00aa\u0001\u0000\u0000\u0000\u00ae\u00b1\u0001"+
		"\u0000\u0000\u0000\u00af\u00ad\u0001\u0000\u0000\u0000\u00af\u00b0\u0001"+
		"\u0000\u0000\u0000\u00b0\r\u0001\u0000\u0000\u0000\u00b1\u00af\u0001\u0000"+
		"\u0000\u0000\u00b2\u00b3\u0005\u000f\u0000\u0000\u00b3\u00b4\u0003\u0010"+
		"\b\u0000\u00b4\u00b5\u0003\u0012\t\u0000\u00b5\u000f\u0001\u0000\u0000"+
		"\u0000\u00b6\u00ba\u0005:\u0000\u0000\u00b7\u00ba\u0003@ \u0000\u00b8"+
		"\u00ba\u0003R)\u0000\u00b9\u00b6\u0001\u0000\u0000\u0000\u00b9\u00b7\u0001"+
		"\u0000\u0000\u0000\u00b9\u00b8\u0001\u0000\u0000\u0000\u00ba\u0011\u0001"+
		"\u0000\u0000\u0000\u00bb\u00bc\u0003@ \u0000\u00bc\u0013\u0001\u0000\u0000"+
		"\u0000\u00bd\u00be\u00034\u001a\u0000\u00be\u00bf\u0005\f\u0000\u0000"+
		"\u00bf\u00c0\u0003\u0004\u0002\u0000\u00c0\u00c1\u0005\r\u0000\u0000\u00c1"+
		"\u0015\u0001\u0000\u0000\u0000\u00c2\u00c3\u0005\u000f\u0000\u0000\u00c3"+
		"\u00c4\u0003X,\u0000\u00c4\u00c5\u0003X,\u0000\u00c5\u00c6\u0005\f\u0000"+
		"\u0000\u00c6\u00c7\u0003\u0004\u0002\u0000\u00c7\u00c8\u0005\r\u0000\u0000"+
		"\u00c8\u0017\u0001\u0000\u0000\u0000\u00c9\u00ca\u0005\u0010\u0000\u0000"+
		"\u00ca\u00cb\u0003X,\u0000\u00cb\u00cc\u0005\f\u0000\u0000\u00cc\u00cd"+
		"\u0003\u0004\u0002\u0000\u00cd\u00ce\u0005\r\u0000\u0000\u00ce\u0019\u0001"+
		"\u0000\u0000\u0000\u00cf\u00d0\u0005\u0011\u0000\u0000\u00d0\u00d1\u0005"+
		"9\u0000\u0000\u00d1\u00d2\u0005\u0012\u0000\u0000\u00d2\u00d3\u0003N\'"+
		"\u0000\u00d3\u00d4\u0005\f\u0000\u0000\u00d4\u00d5\u0003\u0004\u0002\u0000"+
		"\u00d5\u00d6\u0005\r\u0000\u0000\u00d6\u001b\u0001\u0000\u0000\u0000\u00d7"+
		"\u00d8\u0005\u0013\u0000\u0000\u00d8\u00d9\u0003L&\u0000\u00d9\u00da\u0005"+
		"\f\u0000\u0000\u00da\u00db\u0003\u0004\u0002\u0000\u00db\u00e1\u0005\r"+
		"\u0000\u0000\u00dc\u00dd\u0005\u0014\u0000\u0000\u00dd\u00de\u0005\f\u0000"+
		"\u0000\u00de\u00df\u0003\u0004\u0002\u0000\u00df\u00e0\u0005\r\u0000\u0000"+
		"\u00e0\u00e2\u0001\u0000\u0000\u0000\u00e1\u00dc\u0001\u0000\u0000\u0000"+
		"\u00e1\u00e2\u0001\u0000\u0000\u0000\u00e2\u001d\u0001\u0000\u0000\u0000"+
		"\u00e3\u00e4\u0005\u0015\u0000\u0000\u00e4\u001f\u0001\u0000\u0000\u0000"+
		"\u00e5\u00e6\u00032\u0019\u0000\u00e6\u00e7\u0005\u0016\u0000\u0000\u00e7"+
		"\u00e8\u0003B!\u0000\u00e8!\u0001\u0000\u0000\u0000\u00e9\u00ea\u0005"+
		"9\u0000\u0000\u00ea\u00eb\u00036\u001b\u0000\u00eb#\u0001\u0000\u0000"+
		"\u0000\u00ec\u00ed\u0005\u0004\u0000\u0000\u00ed\u00ee\u0005\u0005\u0000"+
		"\u0000\u00ee\u00f2\u0005\u0006\u0000\u0000\u00ef\u00f3\u0005\u0017\u0000"+
		"\u0000\u00f0\u00f1\u0005\u0016\u0000\u0000\u00f1\u00f3\u0003B!\u0000\u00f2"+
		"\u00ef\u0001\u0000\u0000\u0000\u00f2\u00f0\u0001\u0000\u0000\u0000\u00f3"+
		"%\u0001\u0000\u0000\u0000\u00f4\u00f6\u0005\u0018\u0000\u0000\u00f5\u00f7"+
		"\u0003B!\u0000\u00f6\u00f5\u0001\u0000\u0000\u0000\u00f7\u00f8\u0001\u0000"+
		"\u0000\u0000\u00f8\u00f6\u0001\u0000\u0000\u0000\u00f8\u00f9\u0001\u0000"+
		"\u0000\u0000\u00f9\'\u0001\u0000\u0000\u0000\u00fa\u00fd\u0003@ \u0000"+
		"\u00fb\u00fd\u00032\u0019\u0000\u00fc\u00fa\u0001\u0000\u0000\u0000\u00fc"+
		"\u00fb\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe"+
		"\u00ff\u0005\u0005\u0000\u0000\u00ff\u0100\u0003\"\u0011\u0000\u0100)"+
		"\u0001\u0000\u0000\u0000\u0101\u0105\u0005\u0019\u0000\u0000\u0102\u0106"+
		"\u0003@ \u0000\u0103\u0106\u0005:\u0000\u0000\u0104\u0106\u00032\u0019"+
		"\u0000\u0105\u0102\u0001\u0000\u0000\u0000\u0105\u0103\u0001\u0000\u0000"+
		"\u0000\u0105\u0104\u0001\u0000\u0000\u0000\u0106\u0107\u0001\u0000\u0000"+
		"\u0000\u0107\u0108\u0003\u0006\u0003\u0000\u0108+\u0001\u0000\u0000\u0000"+
		"\u0109\u010a\u0005\u001a\u0000\u0000\u010a\u010b\u00059\u0000\u0000\u010b"+
		"\u010c\u00030\u0018\u0000\u010c-\u0001\u0000\u0000\u0000\u010d\u0111\u0005"+
		"9\u0000\u0000\u010e\u0111\u00058\u0000\u0000\u010f\u0111\u0003P(\u0000"+
		"\u0110\u010d\u0001\u0000\u0000\u0000\u0110\u010e\u0001\u0000\u0000\u0000"+
		"\u0110\u010f\u0001\u0000\u0000\u0000\u0111\u0116\u0001\u0000\u0000\u0000"+
		"\u0112\u0117\u00059\u0000\u0000\u0113\u0117\u0005<\u0000\u0000\u0114\u0117"+
		"\u00058\u0000\u0000\u0115\u0117\u00030\u0018\u0000\u0116\u0112\u0001\u0000"+
		"\u0000\u0000\u0116\u0113\u0001\u0000\u0000\u0000\u0116\u0114\u0001\u0000"+
		"\u0000\u0000\u0116\u0115\u0001\u0000\u0000\u0000\u0117/\u0001\u0000\u0000"+
		"\u0000\u0118\u0121\u0005\f\u0000\u0000\u0119\u011e\u0003.\u0017\u0000"+
		"\u011a\u011b\u0005\u000e\u0000\u0000\u011b\u011d\u0003.\u0017\u0000\u011c"+
		"\u011a\u0001\u0000\u0000\u0000\u011d\u0120\u0001\u0000\u0000\u0000\u011e"+
		"\u011c\u0001\u0000\u0000\u0000\u011e\u011f\u0001\u0000\u0000\u0000\u011f"+
		"\u0122\u0001\u0000\u0000\u0000\u0120\u011e\u0001\u0000\u0000\u0000\u0121"+
		"\u0119\u0001\u0000\u0000\u0000\u0121\u0122\u0001\u0000\u0000\u0000\u0122"+
		"\u0123\u0001\u0000\u0000\u0000\u0123\u0124\u0005\r\u0000\u0000\u01241"+
		"\u0001\u0000\u0000\u0000\u0125\u0126\u00059\u0000\u0000\u01263\u0001\u0000"+
		"\u0000\u0000\u0127\u0128\u00059\u0000\u0000\u01285\u0001\u0000\u0000\u0000"+
		"\u0129\u0132\u0005\n\u0000\u0000\u012a\u012f\u00038\u001c\u0000\u012b"+
		"\u012c\u0005\u000e\u0000\u0000\u012c\u012e\u00038\u001c\u0000\u012d\u012b"+
		"\u0001\u0000\u0000\u0000\u012e\u0131\u0001\u0000\u0000\u0000\u012f\u012d"+
		"\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000\u0000\u0000\u0130\u0133"+
		"\u0001\u0000\u0000\u0000\u0131\u012f\u0001\u0000\u0000\u0000\u0132\u012a"+
		"\u0001\u0000\u0000\u0000\u0132\u0133\u0001\u0000\u0000\u0000\u0133\u0134"+
		"\u0001\u0000\u0000\u0000\u0134\u0135\u0005\u000b\u0000\u0000\u01357\u0001"+
		"\u0000\u0000\u0000\u0136\u0137\u0003B!\u0000\u01379\u0001\u0000\u0000"+
		"\u0000\u0138\u013b\u00059\u0000\u0000\u0139\u013b\u0003\u0006\u0003\u0000"+
		"\u013a\u0138\u0001\u0000\u0000\u0000\u013a\u0139\u0001\u0000\u0000\u0000"+
		"\u013b;\u0001\u0000\u0000\u0000\u013c\u013d\u0003:\u001d\u0000\u013d\u013e"+
		"\u0005\u001b\u0000\u0000\u013e\u013f\u0005\u001c\u0000\u0000\u013f=\u0001"+
		"\u0000\u0000\u0000\u0140\u0141\u0003:\u001d\u0000\u0141\u0142\u0005\u001b"+
		"\u0000\u0000\u0142\u0143\u0003B!\u0000\u0143\u0144\u0005\u001c\u0000\u0000"+
		"\u0144?\u0001\u0000\u0000\u0000\u0145\u0146\u0003:\u001d\u0000\u0146\u0147"+
		"\u0005\u001b\u0000\u0000\u0147\u0148\u0003B!\u0000\u0148\u0149\u0005\u000e"+
		"\u0000\u0000\u0149\u014a\u0003B!\u0000\u014a\u014b\u0005\u001c\u0000\u0000"+
		"\u014b\u0150\u0001\u0000\u0000\u0000\u014c\u0150\u0005)\u0000\u0000\u014d"+
		"\u0150\u0005(\u0000\u0000\u014e\u0150\u0005*\u0000\u0000\u014f\u0145\u0001"+
		"\u0000\u0000\u0000\u014f\u014c\u0001\u0000\u0000\u0000\u014f\u014d\u0001"+
		"\u0000\u0000\u0000\u014f\u014e\u0001\u0000\u0000\u0000\u0150A\u0001\u0000"+
		"\u0000\u0000\u0151\u015b\u0003F#\u0000\u0152\u015b\u0005:\u0000\u0000"+
		"\u0153\u015b\u0005<\u0000\u0000\u0154\u015b\u00032\u0019\u0000\u0155\u015b"+
		"\u00058\u0000\u0000\u0156\u015b\u0003\u0006\u0003\u0000\u0157\u015b\u0003"+
		"<\u001e\u0000\u0158\u015b\u0003>\u001f\u0000\u0159\u015b\u0003@ \u0000"+
		"\u015a\u0151\u0001\u0000\u0000\u0000\u015a\u0152\u0001\u0000\u0000\u0000"+
		"\u015a\u0153\u0001\u0000\u0000\u0000\u015a\u0154\u0001\u0000\u0000\u0000"+
		"\u015a\u0155\u0001\u0000\u0000\u0000\u015a\u0156\u0001\u0000\u0000\u0000"+
		"\u015a\u0157\u0001\u0000\u0000\u0000\u015a\u0158\u0001\u0000\u0000\u0000"+
		"\u015a\u0159\u0001\u0000\u0000\u0000\u015b\u015d\u0001\u0000\u0000\u0000"+
		"\u015c\u015e\u0003D\"\u0000\u015d\u015c\u0001\u0000\u0000\u0000\u015d"+
		"\u015e\u0001\u0000\u0000\u0000\u015e\u0161\u0001\u0000\u0000\u0000\u015f"+
		"\u0160\u0007\u0001\u0000\u0000\u0160\u0162\u0003B!\u0000\u0161\u015f\u0001"+
		"\u0000\u0000\u0000\u0161\u0162\u0001\u0000\u0000\u0000\u0162C\u0001\u0000"+
		"\u0000\u0000\u0163\u0164\u0005\u0005\u0000\u0000\u0164\u0165\u00059\u0000"+
		"\u0000\u0165E\u0001\u0000\u0000\u0000\u0166\u016a\u0005/\u0000\u0000\u0167"+
		"\u016a\u0003H$\u0000\u0168\u016a\u0003J%\u0000\u0169\u0166\u0001\u0000"+
		"\u0000\u0000\u0169\u0167\u0001\u0000\u0000\u0000\u0169\u0168\u0001\u0000"+
		"\u0000\u0000\u016aG\u0001\u0000\u0000\u0000\u016b\u016c\u0007\u0002\u0000"+
		"\u0000\u016cI\u0001\u0000\u0000\u0000\u016d\u016e\u0007\u0003\u0000\u0000"+
		"\u016eK\u0001\u0000\u0000\u0000\u016f\u0174\u0003B!\u0000\u0170\u0171"+
		"\u0007\u0004\u0000\u0000\u0171\u0175\u0003B!\u0000\u0172\u0173\u0007\u0005"+
		"\u0000\u0000\u0173\u0175\u0003N\'\u0000\u0174\u0170\u0001\u0000\u0000"+
		"\u0000\u0174\u0172\u0001\u0000\u0000\u0000\u0175\u0178\u0001\u0000\u0000"+
		"\u0000\u0176\u0177\u0007\u0006\u0000\u0000\u0177\u0179\u0003L&\u0000\u0178"+
		"\u0176\u0001\u0000\u0000\u0000\u0178\u0179\u0001\u0000\u0000\u0000\u0179"+
		"M\u0001\u0000\u0000\u0000\u017a\u017e\u0003R)\u0000\u017b\u017e\u0003"+
		"T*\u0000\u017c\u017e\u0003P(\u0000\u017d\u017a\u0001\u0000\u0000\u0000"+
		"\u017d\u017b\u0001\u0000\u0000\u0000\u017d\u017c\u0001\u0000\u0000\u0000"+
		"\u017e\u0180\u0001\u0000\u0000\u0000\u017f\u0181\u0003D\"\u0000\u0180"+
		"\u017f\u0001\u0000\u0000\u0000\u0180\u0181\u0001\u0000\u0000\u0000\u0181"+
		"O\u0001\u0000\u0000\u0000\u0182\u0187\u0003B!\u0000\u0183\u0185\u0005"+
		"%\u0000\u0000\u0184\u0186\u0003B!\u0000\u0185\u0184\u0001\u0000\u0000"+
		"\u0000\u0185\u0186\u0001\u0000\u0000\u0000\u0186\u0188\u0001\u0000\u0000"+
		"\u0000\u0187\u0183\u0001\u0000\u0000\u0000\u0187\u0188\u0001\u0000\u0000"+
		"\u0000\u0188Q\u0001\u0000\u0000\u0000\u0189\u018a\u0003:\u001d\u0000\u018a"+
		"\u018b\u0005\u001b\u0000\u0000\u018b\u018c\u0003P(\u0000\u018c\u018d\u0005"+
		"\u000e\u0000\u0000\u018d\u018e\u0003P(\u0000\u018e\u018f\u0005\u001c\u0000"+
		"\u0000\u018fS\u0001\u0000\u0000\u0000\u0190\u0191\u0005\u0004\u0000\u0000"+
		"\u0191\u0192\u0005-\u0000\u0000\u0192\u0193\u0005\u0006\u0000\u0000\u0193"+
		"U\u0001\u0000\u0000\u0000\u0194\u01a1\u0003F#\u0000\u0195\u01a1\u0005"+
		":\u0000\u0000\u0196\u01a1\u0005<\u0000\u0000\u0197\u01a1\u00032\u0019"+
		"\u0000\u0198\u01a1\u00058\u0000\u0000\u0199\u01a1\u0003\u0006\u0003\u0000"+
		"\u019a\u01a1\u0003<\u001e\u0000\u019b\u01a1\u0003>\u001f\u0000\u019c\u01a1"+
		"\u0003@ \u0000\u019d\u01a1\u0003P(\u0000\u019e\u01a1\u0003R)\u0000\u019f"+
		"\u01a1\u0003T*\u0000\u01a0\u0194\u0001\u0000\u0000\u0000\u01a0\u0195\u0001"+
		"\u0000\u0000\u0000\u01a0\u0196\u0001\u0000\u0000\u0000\u01a0\u0197\u0001"+
		"\u0000\u0000\u0000\u01a0\u0198\u0001\u0000\u0000\u0000\u01a0\u0199\u0001"+
		"\u0000\u0000\u0000\u01a0\u019a\u0001\u0000\u0000\u0000\u01a0\u019b\u0001"+
		"\u0000\u0000\u0000\u01a0\u019c\u0001\u0000\u0000\u0000\u01a0\u019d\u0001"+
		"\u0000\u0000\u0000\u01a0\u019e\u0001\u0000\u0000\u0000\u01a0\u019f\u0001"+
		"\u0000\u0000\u0000\u01a1W\u0001\u0000\u0000\u0000\u01a2\u01a6\u0005.\u0000"+
		"\u0000\u01a3\u01a6\u0003@ \u0000\u01a4\u01a6\u0003R)\u0000\u01a5\u01a2"+
		"\u0001\u0000\u0000\u0000\u01a5\u01a3\u0001\u0000\u0000\u0000\u01a5\u01a4"+
		"\u0001\u0000\u0000\u0000\u01a6Y\u0001\u0000\u0000\u0000\"]gp\u008a\u008f"+
		"\u0096\u00a1\u00af\u00b9\u00e1\u00f2\u00f8\u00fc\u0105\u0110\u0116\u011e"+
		"\u0121\u012f\u0132\u013a\u014f\u015a\u015d\u0161\u0169\u0174\u0178\u017d"+
		"\u0180\u0185\u0187\u01a0\u01a5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}