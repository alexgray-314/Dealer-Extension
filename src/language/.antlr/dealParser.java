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
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		COMMENT=39, VARTYPE=40, MOVE_DEST=41, MOVE_SOURCE=42, INTERACT_CARD=43, 
		EMPTY=44, PLUS=45, MINUS=46, TIMES=47, WILDCARD=48, NUMBER=49, ID=50, 
		CARD=51, STRING=52, SPACES=53, NEWLINE=54;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_block = 2, RULE_player = 3, RULE_definition = 4, 
		RULE_define_function = 5, RULE_argdef = 6, RULE_move = 7, RULE_source = 8, 
		RULE_destination = 9, RULE_on_action = 10, RULE_on_move = 11, RULE_on_interact = 12, 
		RULE_for = 13, RULE_if = 14, RULE_cancel = 15, RULE_assign = 16, RULE_function_call = 17, 
		RULE_updateTurn = 18, RULE_log = 19, RULE_modify = 20, RULE_show = 21, 
		RULE_config = 22, RULE_attribute = 23, RULE_atts = 24, RULE_variable = 25, 
		RULE_args = 26, RULE_arg = 27, RULE_arearef = 28, RULE_area = 29, RULE_stack = 30, 
		RULE_position = 31, RULE_term = 32, RULE_property = 33, RULE_bexpr = 34, 
		RULE_aexpr = 35, RULE_set = 36, RULE_intset = 37, RULE_positionset = 38, 
		RULE_playerset = 39, RULE_move_catch = 40;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "block", "player", "definition", "define_function", "argdef", 
			"move", "source", "destination", "on_action", "on_move", "on_interact", 
			"for", "if", "cancel", "assign", "function_call", "updateTurn", "log", 
			"modify", "show", "config", "attribute", "atts", "variable", "args", 
			"arg", "arearef", "area", "stack", "position", "term", "property", "bexpr", 
			"aexpr", "set", "intset", "positionset", "playerset", "move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'<'", "'.'", "'>'", "'define'", "'area'", "'action'", "'function'", 
			"'('", "')'", "'{'", "'}'", "','", "'move'", "'on'", "'interact'", "'for'", 
			"'in'", "'if'", "'else'", "'cancel'", "'='", "'++'", "'log'", "'..'", 
			"'show'", "'$'", "'['", "']'", "'=='", "'!='", "'<<'", "'<='", "'>='", 
			"'>>'", "'=?'", "'!?'", "':'", null, null, "'/'", "'\\'", "'@'", "'empty'", 
			"'+'", "'-'", "'*'", "'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "COMMENT", "VARTYPE", "MOVE_DEST", "MOVE_SOURCE", "INTERACT_CARD", 
			"EMPTY", "PLUS", "MINUS", "TIMES", "WILDCARD", "NUMBER", "ID", "CARD", 
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
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1141293290536996L) != 0)) {
				{
				{
				setState(82);
				stmt();
				}
				}
				setState(87);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(88);
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
		public DefinitionContext definition() {
			return getRuleContext(DefinitionContext.class,0);
		}
		public Define_functionContext define_function() {
			return getRuleContext(Define_functionContext.class,0);
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
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(90);
				definition();
				}
				break;
			case 2:
				{
				setState(91);
				define_function();
				}
				break;
			case 3:
				{
				setState(92);
				move();
				}
				break;
			case 4:
				{
				setState(93);
				on_action();
				}
				break;
			case 5:
				{
				setState(94);
				on_move();
				}
				break;
			case 6:
				{
				setState(95);
				on_interact();
				}
				break;
			case 7:
				{
				setState(96);
				for_();
				}
				break;
			case 8:
				{
				setState(97);
				if_();
				}
				break;
			case 9:
				{
				setState(98);
				cancel();
				}
				break;
			case 10:
				{
				setState(99);
				assign();
				}
				break;
			case 11:
				{
				setState(100);
				function_call();
				}
				break;
			case 12:
				{
				setState(101);
				updateTurn();
				}
				break;
			case 13:
				{
				setState(102);
				log();
				}
				break;
			case 14:
				{
				setState(103);
				modify();
				}
				break;
			case 15:
				{
				setState(104);
				show();
				}
				break;
			case 16:
				{
				setState(105);
				config();
				}
				break;
			}
			setState(108);
			match(T__0);
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
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1141293290536996L) != 0)) {
				{
				{
				setState(110);
				stmt();
				}
				}
				setState(115);
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
		public TerminalNode MOVE_DEST() { return getToken(dealParser.MOVE_DEST, 0); }
		public TerminalNode INTERACT_CARD() { return getToken(dealParser.INTERACT_CARD, 0); }
		public AexprContext aexpr() {
			return getRuleContext(AexprContext.class,0);
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
			setState(116);
			match(T__1);
			setState(121);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MOVE_DEST:
				{
				setState(117);
				match(MOVE_DEST);
				}
				break;
			case T__2:
				{
				setState(118);
				match(T__2);
				}
				break;
			case INTERACT_CARD:
				{
				setState(119);
				match(INTERACT_CARD);
				}
				break;
			case NUMBER:
			case ID:
				{
				setState(120);
				aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(123);
			match(T__3);
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
			setState(125);
			match(T__4);
			setState(126);
			((DefinitionContext)_localctx).type = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1099511627968L) != 0)) ) {
				((DefinitionContext)_localctx).type = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(127);
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
			setState(129);
			match(T__4);
			setState(130);
			match(T__7);
			setState(131);
			match(ID);
			setState(132);
			match(T__8);
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARTYPE) {
				{
				setState(133);
				argdef();
				}
			}

			setState(136);
			match(T__9);
			setState(137);
			match(T__10);
			setState(138);
			block();
			setState(139);
			match(T__11);
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
			setState(141);
			match(VARTYPE);
			setState(142);
			match(ID);
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__12) {
				{
				{
				setState(143);
				match(T__12);
				setState(144);
				match(VARTYPE);
				setState(145);
				match(ID);
				}
				}
				setState(150);
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
			setState(151);
			match(T__13);
			setState(152);
			source();
			setState(153);
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
			setState(158);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(155);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(156);
				position();
				}
				break;
			case 3:
				{
				setState(157);
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
			setState(160);
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
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
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
			setState(162);
			match(T__14);
			setState(163);
			match(ID);
			setState(164);
			match(T__10);
			setState(165);
			block();
			setState(166);
			match(T__11);
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
			setState(168);
			match(T__14);
			setState(169);
			match(T__13);
			setState(170);
			move_catch();
			setState(171);
			move_catch();
			setState(172);
			match(T__10);
			setState(173);
			block();
			setState(174);
			match(T__11);
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
			setState(176);
			match(T__14);
			setState(177);
			match(T__15);
			setState(178);
			move_catch();
			setState(179);
			match(T__10);
			setState(180);
			block();
			setState(181);
			match(T__11);
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
			setState(183);
			match(T__16);
			setState(184);
			match(ID);
			setState(185);
			match(T__17);
			setState(186);
			set();
			setState(187);
			match(T__10);
			setState(188);
			block();
			setState(189);
			match(T__11);
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
			setState(191);
			match(T__18);
			setState(192);
			bexpr();
			setState(193);
			match(T__10);
			setState(194);
			((IfContext)_localctx).consequent = block();
			setState(195);
			match(T__11);
			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19) {
				{
				setState(196);
				match(T__19);
				setState(197);
				match(T__10);
				setState(198);
				((IfContext)_localctx).antecedent = block();
				setState(199);
				match(T__11);
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
			setState(203);
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
			setState(205);
			variable();
			setState(206);
			match(T__21);
			setState(207);
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
			setState(209);
			match(ID);
			setState(210);
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
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
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
			setState(212);
			match(T__1);
			setState(213);
			match(T__2);
			setState(214);
			match(T__3);
			setState(218);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				{
				setState(215);
				match(T__22);
				}
				break;
			case T__21:
				{
				setState(216);
				match(T__21);
				setState(217);
				player();
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
			setState(220);
			match(T__23);
			setState(222); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(221);
				term();
				}
				}
				setState(224); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 8477234650152964L) != 0) );
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
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
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
			setState(234);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(226);
				position();
				setState(227);
				match(T__24);
				setState(228);
				function_call();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(230);
				variable();
				setState(231);
				match(T__24);
				setState(232);
				function_call();
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
			setState(236);
			match(T__25);
			setState(240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(237);
				position();
				}
				break;
			case 2:
				{
				setState(238);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(239);
				variable();
				}
				break;
			}
			setState(242);
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
			setState(244);
			match(T__26);
			setState(245);
			match(ID);
			setState(246);
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
			setState(251);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(248);
				match(ID);
				}
				break;
			case 2:
				{
				setState(249);
				match(NUMBER);
				}
				break;
			case 3:
				{
				setState(250);
				intset();
				}
				break;
			}
			setState(257);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(253);
				match(ID);
				}
				break;
			case STRING:
				{
				setState(254);
				match(STRING);
				}
				break;
			case NUMBER:
				{
				setState(255);
				match(NUMBER);
				}
				break;
			case T__10:
				{
				setState(256);
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
			setState(259);
			match(T__10);
			setState(268);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NUMBER || _la==ID) {
				{
				setState(260);
				attribute();
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__12) {
					{
					{
					setState(261);
					match(T__12);
					setState(262);
					attribute();
					}
					}
					setState(267);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(270);
			match(T__11);
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
			setState(272);
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
		enterRule(_localctx, 52, RULE_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(T__8);
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8477234650152964L) != 0)) {
				{
				setState(275);
				arg();
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__12) {
					{
					{
					setState(276);
					match(T__12);
					setState(277);
					arg();
					}
					}
					setState(282);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(285);
			match(T__9);
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
		enterRule(_localctx, 54, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
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
		enterRule(_localctx, 56, RULE_arearef);
		try {
			setState(291);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(289);
				match(ID);
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
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
		enterRule(_localctx, 58, RULE_area);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			arearef();
			setState(294);
			match(T__27);
			setState(295);
			match(T__28);
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
		public AexprContext aexpr() {
			return getRuleContext(AexprContext.class,0);
		}
		public StackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stack; }
	}

	public final StackContext stack() throws RecognitionException {
		StackContext _localctx = new StackContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_stack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			arearef();
			setState(298);
			match(T__27);
			setState(299);
			aexpr();
			setState(300);
			match(T__28);
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
		public List<AexprContext> aexpr() {
			return getRuleContexts(AexprContext.class);
		}
		public AexprContext aexpr(int i) {
			return getRuleContext(AexprContext.class,i);
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
		enterRule(_localctx, 62, RULE_position);
		try {
			setState(312);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(302);
				arearef();
				setState(303);
				match(T__27);
				setState(304);
				aexpr();
				setState(305);
				match(T__12);
				setState(306);
				aexpr();
				setState(307);
				match(T__28);
				}
				break;
			case MOVE_SOURCE:
				enterOuterAlt(_localctx, 2);
				{
				setState(309);
				match(MOVE_SOURCE);
				}
				break;
			case MOVE_DEST:
				enterOuterAlt(_localctx, 3);
				{
				setState(310);
				match(MOVE_DEST);
				}
				break;
			case INTERACT_CARD:
				enterOuterAlt(_localctx, 4);
				{
				setState(311);
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
		public TerminalNode EMPTY() { return getToken(dealParser.EMPTY, 0); }
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public AexprContext aexpr() {
			return getRuleContext(AexprContext.class,0);
		}
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
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(314);
				match(EMPTY);
				}
				break;
			case 2:
				{
				setState(315);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(316);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(317);
				variable();
				}
				break;
			case 5:
				{
				setState(318);
				aexpr();
				}
				break;
			case 6:
				{
				setState(319);
				player();
				}
				break;
			case 7:
				{
				setState(320);
				area();
				}
				break;
			case 8:
				{
				setState(321);
				stack();
				}
				break;
			case 9:
				{
				setState(322);
				position();
				}
				break;
			}
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(325);
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
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(T__2);
			setState(329);
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
	public static class BexprContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
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
		enterRule(_localctx, 68, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			term();
			setState(336);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__29:
			case T__30:
			case T__31:
			case T__32:
			case T__33:
			case T__34:
				{
				{
				setState(332);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 67645734912L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(333);
				term();
				}
				}
				break;
			case T__35:
			case T__36:
				{
				{
				setState(334);
				_la = _input.LA(1);
				if ( !(_la==T__35 || _la==T__36) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(335);
				set();
				}
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
	public static class AexprContext extends ParserRuleContext {
		public Token op;
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public List<AexprContext> aexpr() {
			return getRuleContexts(AexprContext.class);
		}
		public AexprContext aexpr(int i) {
			return getRuleContext(AexprContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(dealParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(dealParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(dealParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(dealParser.MINUS, i);
		}
		public List<TerminalNode> TIMES() { return getTokens(dealParser.TIMES); }
		public TerminalNode TIMES(int i) {
			return getToken(dealParser.TIMES, i);
		}
		public AexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aexpr; }
	}

	public final AexprContext aexpr() throws RecognitionException {
		AexprContext _localctx = new AexprContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_aexpr);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(340);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				{
				setState(338);
				match(NUMBER);
				}
				break;
			case ID:
				{
				setState(339);
				variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(346);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(342);
					((AexprContext)_localctx).op = _input.LT(1);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 246290604621824L) != 0)) ) {
						((AexprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(343);
					aexpr();
					}
					} 
				}
				setState(348);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
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
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public PlayersetContext playerset() {
			return getRuleContext(PlayersetContext.class,0);
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
		enterRule(_localctx, 72, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(349);
				intset();
				}
				break;
			case 2:
				{
				setState(350);
				positionset();
				}
				break;
			case 3:
				{
				setState(351);
				playerset();
				}
				break;
			}
			setState(355);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(354);
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
		public List<AexprContext> aexpr() {
			return getRuleContexts(AexprContext.class);
		}
		public AexprContext aexpr(int i) {
			return getRuleContext(AexprContext.class,i);
		}
		public IntsetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intset; }
	}

	public final IntsetContext intset() throws RecognitionException {
		IntsetContext _localctx = new IntsetContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_intset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			aexpr();
			setState(358);
			match(T__37);
			setState(360);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(359);
				aexpr();
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
		enterRule(_localctx, 76, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			arearef();
			setState(363);
			match(T__27);
			setState(364);
			intset();
			setState(365);
			match(T__12);
			setState(366);
			intset();
			setState(367);
			match(T__28);
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
		enterRule(_localctx, 78, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			match(T__1);
			setState(370);
			match(TIMES);
			setState(371);
			match(T__3);
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
		enterRule(_localctx, 80, RULE_move_catch);
		try {
			setState(376);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(373);
				match(WILDCARD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(374);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(375);
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
		"\u0004\u00016\u017b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"(\u0007(\u0001\u0000\u0005\u0000T\b\u0000\n\u0000\f\u0000W\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001k\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002p\b\u0002"+
		"\n\u0002\f\u0002s\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003z\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0003\u0005\u0087\b\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0005\u0006\u0093\b\u0006\n\u0006\f\u0006\u0096"+
		"\t\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0003\b\u009f\b\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003"+
		"\u000e\u00ca\b\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u00db"+
		"\b\u0012\u0001\u0013\u0001\u0013\u0004\u0013\u00df\b\u0013\u000b\u0013"+
		"\f\u0013\u00e0\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u00eb\b\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0003\u0015\u00f1\b\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0003\u0017\u00fc\b\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0003\u0017\u0102\b\u0017\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0005\u0018\u0108\b\u0018\n\u0018\f\u0018\u010b"+
		"\t\u0018\u0003\u0018\u010d\b\u0018\u0001\u0018\u0001\u0018\u0001\u0019"+
		"\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0005\u001a"+
		"\u0117\b\u001a\n\u001a\f\u001a\u011a\t\u001a\u0003\u001a\u011c\b\u001a"+
		"\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c"+
		"\u0003\u001c\u0124\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001f"+
		"\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u0139\b\u001f\u0001 "+
		"\u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0003 \u0144"+
		"\b \u0001 \u0003 \u0147\b \u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001"+
		"\"\u0001\"\u0001\"\u0003\"\u0151\b\"\u0001#\u0001#\u0003#\u0155\b#\u0001"+
		"#\u0001#\u0005#\u0159\b#\n#\f#\u015c\t#\u0001$\u0001$\u0001$\u0003$\u0161"+
		"\b$\u0001$\u0003$\u0164\b$\u0001%\u0001%\u0001%\u0003%\u0169\b%\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001\'\u0001\'\u0001\'\u0001"+
		"\'\u0001(\u0001(\u0001(\u0003(\u0179\b(\u0001(\u0000\u0000)\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e"+
		" \"$&(*,.02468:<>@BDFHJLNP\u0000\u0004\u0002\u0000\u0006\u0007((\u0001"+
		"\u0000\u001e#\u0001\u0000$%\u0001\u0000-/\u018e\u0000U\u0001\u0000\u0000"+
		"\u0000\u0002j\u0001\u0000\u0000\u0000\u0004q\u0001\u0000\u0000\u0000\u0006"+
		"t\u0001\u0000\u0000\u0000\b}\u0001\u0000\u0000\u0000\n\u0081\u0001\u0000"+
		"\u0000\u0000\f\u008d\u0001\u0000\u0000\u0000\u000e\u0097\u0001\u0000\u0000"+
		"\u0000\u0010\u009e\u0001\u0000\u0000\u0000\u0012\u00a0\u0001\u0000\u0000"+
		"\u0000\u0014\u00a2\u0001\u0000\u0000\u0000\u0016\u00a8\u0001\u0000\u0000"+
		"\u0000\u0018\u00b0\u0001\u0000\u0000\u0000\u001a\u00b7\u0001\u0000\u0000"+
		"\u0000\u001c\u00bf\u0001\u0000\u0000\u0000\u001e\u00cb\u0001\u0000\u0000"+
		"\u0000 \u00cd\u0001\u0000\u0000\u0000\"\u00d1\u0001\u0000\u0000\u0000"+
		"$\u00d4\u0001\u0000\u0000\u0000&\u00dc\u0001\u0000\u0000\u0000(\u00ea"+
		"\u0001\u0000\u0000\u0000*\u00ec\u0001\u0000\u0000\u0000,\u00f4\u0001\u0000"+
		"\u0000\u0000.\u00fb\u0001\u0000\u0000\u00000\u0103\u0001\u0000\u0000\u0000"+
		"2\u0110\u0001\u0000\u0000\u00004\u0112\u0001\u0000\u0000\u00006\u011f"+
		"\u0001\u0000\u0000\u00008\u0123\u0001\u0000\u0000\u0000:\u0125\u0001\u0000"+
		"\u0000\u0000<\u0129\u0001\u0000\u0000\u0000>\u0138\u0001\u0000\u0000\u0000"+
		"@\u0143\u0001\u0000\u0000\u0000B\u0148\u0001\u0000\u0000\u0000D\u014b"+
		"\u0001\u0000\u0000\u0000F\u0154\u0001\u0000\u0000\u0000H\u0160\u0001\u0000"+
		"\u0000\u0000J\u0165\u0001\u0000\u0000\u0000L\u016a\u0001\u0000\u0000\u0000"+
		"N\u0171\u0001\u0000\u0000\u0000P\u0178\u0001\u0000\u0000\u0000RT\u0003"+
		"\u0002\u0001\u0000SR\u0001\u0000\u0000\u0000TW\u0001\u0000\u0000\u0000"+
		"US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000VX\u0001\u0000\u0000"+
		"\u0000WU\u0001\u0000\u0000\u0000XY\u0005\u0000\u0000\u0001Y\u0001\u0001"+
		"\u0000\u0000\u0000Zk\u0003\b\u0004\u0000[k\u0003\n\u0005\u0000\\k\u0003"+
		"\u000e\u0007\u0000]k\u0003\u0014\n\u0000^k\u0003\u0016\u000b\u0000_k\u0003"+
		"\u0018\f\u0000`k\u0003\u001a\r\u0000ak\u0003\u001c\u000e\u0000bk\u0003"+
		"\u001e\u000f\u0000ck\u0003 \u0010\u0000dk\u0003\"\u0011\u0000ek\u0003"+
		"$\u0012\u0000fk\u0003&\u0013\u0000gk\u0003(\u0014\u0000hk\u0003*\u0015"+
		"\u0000ik\u0003,\u0016\u0000jZ\u0001\u0000\u0000\u0000j[\u0001\u0000\u0000"+
		"\u0000j\\\u0001\u0000\u0000\u0000j]\u0001\u0000\u0000\u0000j^\u0001\u0000"+
		"\u0000\u0000j_\u0001\u0000\u0000\u0000j`\u0001\u0000\u0000\u0000ja\u0001"+
		"\u0000\u0000\u0000jb\u0001\u0000\u0000\u0000jc\u0001\u0000\u0000\u0000"+
		"jd\u0001\u0000\u0000\u0000je\u0001\u0000\u0000\u0000jf\u0001\u0000\u0000"+
		"\u0000jg\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000ji\u0001\u0000"+
		"\u0000\u0000kl\u0001\u0000\u0000\u0000lm\u0005\u0001\u0000\u0000m\u0003"+
		"\u0001\u0000\u0000\u0000np\u0003\u0002\u0001\u0000on\u0001\u0000\u0000"+
		"\u0000ps\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000"+
		"\u0000\u0000r\u0005\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000"+
		"ty\u0005\u0002\u0000\u0000uz\u0005)\u0000\u0000vz\u0005\u0003\u0000\u0000"+
		"wz\u0005+\u0000\u0000xz\u0003F#\u0000yu\u0001\u0000\u0000\u0000yv\u0001"+
		"\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yx\u0001\u0000\u0000\u0000"+
		"z{\u0001\u0000\u0000\u0000{|\u0005\u0004\u0000\u0000|\u0007\u0001\u0000"+
		"\u0000\u0000}~\u0005\u0005\u0000\u0000~\u007f\u0007\u0000\u0000\u0000"+
		"\u007f\u0080\u00052\u0000\u0000\u0080\t\u0001\u0000\u0000\u0000\u0081"+
		"\u0082\u0005\u0005\u0000\u0000\u0082\u0083\u0005\b\u0000\u0000\u0083\u0084"+
		"\u00052\u0000\u0000\u0084\u0086\u0005\t\u0000\u0000\u0085\u0087\u0003"+
		"\f\u0006\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0086\u0087\u0001\u0000"+
		"\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0089\u0005\n\u0000"+
		"\u0000\u0089\u008a\u0005\u000b\u0000\u0000\u008a\u008b\u0003\u0004\u0002"+
		"\u0000\u008b\u008c\u0005\f\u0000\u0000\u008c\u000b\u0001\u0000\u0000\u0000"+
		"\u008d\u008e\u0005(\u0000\u0000\u008e\u0094\u00052\u0000\u0000\u008f\u0090"+
		"\u0005\r\u0000\u0000\u0090\u0091\u0005(\u0000\u0000\u0091\u0093\u0005"+
		"2\u0000\u0000\u0092\u008f\u0001\u0000\u0000\u0000\u0093\u0096\u0001\u0000"+
		"\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000\u0094\u0095\u0001\u0000"+
		"\u0000\u0000\u0095\r\u0001\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000"+
		"\u0000\u0097\u0098\u0005\u000e\u0000\u0000\u0098\u0099\u0003\u0010\b\u0000"+
		"\u0099\u009a\u0003\u0012\t\u0000\u009a\u000f\u0001\u0000\u0000\u0000\u009b"+
		"\u009f\u00053\u0000\u0000\u009c\u009f\u0003>\u001f\u0000\u009d\u009f\u0003"+
		"L&\u0000\u009e\u009b\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000"+
		"\u0000\u009e\u009d\u0001\u0000\u0000\u0000\u009f\u0011\u0001\u0000\u0000"+
		"\u0000\u00a0\u00a1\u0003>\u001f\u0000\u00a1\u0013\u0001\u0000\u0000\u0000"+
		"\u00a2\u00a3\u0005\u000f\u0000\u0000\u00a3\u00a4\u00052\u0000\u0000\u00a4"+
		"\u00a5\u0005\u000b\u0000\u0000\u00a5\u00a6\u0003\u0004\u0002\u0000\u00a6"+
		"\u00a7\u0005\f\u0000\u0000\u00a7\u0015\u0001\u0000\u0000\u0000\u00a8\u00a9"+
		"\u0005\u000f\u0000\u0000\u00a9\u00aa\u0005\u000e\u0000\u0000\u00aa\u00ab"+
		"\u0003P(\u0000\u00ab\u00ac\u0003P(\u0000\u00ac\u00ad\u0005\u000b\u0000"+
		"\u0000\u00ad\u00ae\u0003\u0004\u0002\u0000\u00ae\u00af\u0005\f\u0000\u0000"+
		"\u00af\u0017\u0001\u0000\u0000\u0000\u00b0\u00b1\u0005\u000f\u0000\u0000"+
		"\u00b1\u00b2\u0005\u0010\u0000\u0000\u00b2\u00b3\u0003P(\u0000\u00b3\u00b4"+
		"\u0005\u000b\u0000\u0000\u00b4\u00b5\u0003\u0004\u0002\u0000\u00b5\u00b6"+
		"\u0005\f\u0000\u0000\u00b6\u0019\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005"+
		"\u0011\u0000\u0000\u00b8\u00b9\u00052\u0000\u0000\u00b9\u00ba\u0005\u0012"+
		"\u0000\u0000\u00ba\u00bb\u0003H$\u0000\u00bb\u00bc\u0005\u000b\u0000\u0000"+
		"\u00bc\u00bd\u0003\u0004\u0002\u0000\u00bd\u00be\u0005\f\u0000\u0000\u00be"+
		"\u001b\u0001\u0000\u0000\u0000\u00bf\u00c0\u0005\u0013\u0000\u0000\u00c0"+
		"\u00c1\u0003D\"\u0000\u00c1\u00c2\u0005\u000b\u0000\u0000\u00c2\u00c3"+
		"\u0003\u0004\u0002\u0000\u00c3\u00c9\u0005\f\u0000\u0000\u00c4\u00c5\u0005"+
		"\u0014\u0000\u0000\u00c5\u00c6\u0005\u000b\u0000\u0000\u00c6\u00c7\u0003"+
		"\u0004\u0002\u0000\u00c7\u00c8\u0005\f\u0000\u0000\u00c8\u00ca\u0001\u0000"+
		"\u0000\u0000\u00c9\u00c4\u0001\u0000\u0000\u0000\u00c9\u00ca\u0001\u0000"+
		"\u0000\u0000\u00ca\u001d\u0001\u0000\u0000\u0000\u00cb\u00cc\u0005\u0015"+
		"\u0000\u0000\u00cc\u001f\u0001\u0000\u0000\u0000\u00cd\u00ce\u00032\u0019"+
		"\u0000\u00ce\u00cf\u0005\u0016\u0000\u0000\u00cf\u00d0\u0003@ \u0000\u00d0"+
		"!\u0001\u0000\u0000\u0000\u00d1\u00d2\u00052\u0000\u0000\u00d2\u00d3\u0003"+
		"4\u001a\u0000\u00d3#\u0001\u0000\u0000\u0000\u00d4\u00d5\u0005\u0002\u0000"+
		"\u0000\u00d5\u00d6\u0005\u0003\u0000\u0000\u00d6\u00da\u0005\u0004\u0000"+
		"\u0000\u00d7\u00db\u0005\u0017\u0000\u0000\u00d8\u00d9\u0005\u0016\u0000"+
		"\u0000\u00d9\u00db\u0003\u0006\u0003\u0000\u00da\u00d7\u0001\u0000\u0000"+
		"\u0000\u00da\u00d8\u0001\u0000\u0000\u0000\u00db%\u0001\u0000\u0000\u0000"+
		"\u00dc\u00de\u0005\u0018\u0000\u0000\u00dd\u00df\u0003@ \u0000\u00de\u00dd"+
		"\u0001\u0000\u0000\u0000\u00df\u00e0\u0001\u0000\u0000\u0000\u00e0\u00de"+
		"\u0001\u0000\u0000\u0000\u00e0\u00e1\u0001\u0000\u0000\u0000\u00e1\'\u0001"+
		"\u0000\u0000\u0000\u00e2\u00e3\u0003>\u001f\u0000\u00e3\u00e4\u0005\u0019"+
		"\u0000\u0000\u00e4\u00e5\u0003\"\u0011\u0000\u00e5\u00eb\u0001\u0000\u0000"+
		"\u0000\u00e6\u00e7\u00032\u0019\u0000\u00e7\u00e8\u0005\u0019\u0000\u0000"+
		"\u00e8\u00e9\u0003\"\u0011\u0000\u00e9\u00eb\u0001\u0000\u0000\u0000\u00ea"+
		"\u00e2\u0001\u0000\u0000\u0000\u00ea\u00e6\u0001\u0000\u0000\u0000\u00eb"+
		")\u0001\u0000\u0000\u0000\u00ec\u00f0\u0005\u001a\u0000\u0000\u00ed\u00f1"+
		"\u0003>\u001f\u0000\u00ee\u00f1\u00053\u0000\u0000\u00ef\u00f1\u00032"+
		"\u0019\u0000\u00f0\u00ed\u0001\u0000\u0000\u0000\u00f0\u00ee\u0001\u0000"+
		"\u0000\u0000\u00f0\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001\u0000"+
		"\u0000\u0000\u00f2\u00f3\u0003\u0006\u0003\u0000\u00f3+\u0001\u0000\u0000"+
		"\u0000\u00f4\u00f5\u0005\u001b\u0000\u0000\u00f5\u00f6\u00052\u0000\u0000"+
		"\u00f6\u00f7\u00030\u0018\u0000\u00f7-\u0001\u0000\u0000\u0000\u00f8\u00fc"+
		"\u00052\u0000\u0000\u00f9\u00fc\u00051\u0000\u0000\u00fa\u00fc\u0003J"+
		"%\u0000\u00fb\u00f8\u0001\u0000\u0000\u0000\u00fb\u00f9\u0001\u0000\u0000"+
		"\u0000\u00fb\u00fa\u0001\u0000\u0000\u0000\u00fc\u0101\u0001\u0000\u0000"+
		"\u0000\u00fd\u0102\u00052\u0000\u0000\u00fe\u0102\u00054\u0000\u0000\u00ff"+
		"\u0102\u00051\u0000\u0000\u0100\u0102\u00030\u0018\u0000\u0101\u00fd\u0001"+
		"\u0000\u0000\u0000\u0101\u00fe\u0001\u0000\u0000\u0000\u0101\u00ff\u0001"+
		"\u0000\u0000\u0000\u0101\u0100\u0001\u0000\u0000\u0000\u0102/\u0001\u0000"+
		"\u0000\u0000\u0103\u010c\u0005\u000b\u0000\u0000\u0104\u0109\u0003.\u0017"+
		"\u0000\u0105\u0106\u0005\r\u0000\u0000\u0106\u0108\u0003.\u0017\u0000"+
		"\u0107\u0105\u0001\u0000\u0000\u0000\u0108\u010b\u0001\u0000\u0000\u0000"+
		"\u0109\u0107\u0001\u0000\u0000\u0000\u0109\u010a\u0001\u0000\u0000\u0000"+
		"\u010a\u010d\u0001\u0000\u0000\u0000\u010b\u0109\u0001\u0000\u0000\u0000"+
		"\u010c\u0104\u0001\u0000\u0000\u0000\u010c\u010d\u0001\u0000\u0000\u0000"+
		"\u010d\u010e\u0001\u0000\u0000\u0000\u010e\u010f\u0005\f\u0000\u0000\u010f"+
		"1\u0001\u0000\u0000\u0000\u0110\u0111\u00052\u0000\u0000\u01113\u0001"+
		"\u0000\u0000\u0000\u0112\u011b\u0005\t\u0000\u0000\u0113\u0118\u00036"+
		"\u001b\u0000\u0114\u0115\u0005\r\u0000\u0000\u0115\u0117\u00036\u001b"+
		"\u0000\u0116\u0114\u0001\u0000\u0000\u0000\u0117\u011a\u0001\u0000\u0000"+
		"\u0000\u0118\u0116\u0001\u0000\u0000\u0000\u0118\u0119\u0001\u0000\u0000"+
		"\u0000\u0119\u011c\u0001\u0000\u0000\u0000\u011a\u0118\u0001\u0000\u0000"+
		"\u0000\u011b\u0113\u0001\u0000\u0000\u0000\u011b\u011c\u0001\u0000\u0000"+
		"\u0000\u011c\u011d\u0001\u0000\u0000\u0000\u011d\u011e\u0005\n\u0000\u0000"+
		"\u011e5\u0001\u0000\u0000\u0000\u011f\u0120\u0003@ \u0000\u01207\u0001"+
		"\u0000\u0000\u0000\u0121\u0124\u00052\u0000\u0000\u0122\u0124\u0003\u0006"+
		"\u0003\u0000\u0123\u0121\u0001\u0000\u0000\u0000\u0123\u0122\u0001\u0000"+
		"\u0000\u0000\u01249\u0001\u0000\u0000\u0000\u0125\u0126\u00038\u001c\u0000"+
		"\u0126\u0127\u0005\u001c\u0000\u0000\u0127\u0128\u0005\u001d\u0000\u0000"+
		"\u0128;\u0001\u0000\u0000\u0000\u0129\u012a\u00038\u001c\u0000\u012a\u012b"+
		"\u0005\u001c\u0000\u0000\u012b\u012c\u0003F#\u0000\u012c\u012d\u0005\u001d"+
		"\u0000\u0000\u012d=\u0001\u0000\u0000\u0000\u012e\u012f\u00038\u001c\u0000"+
		"\u012f\u0130\u0005\u001c\u0000\u0000\u0130\u0131\u0003F#\u0000\u0131\u0132"+
		"\u0005\r\u0000\u0000\u0132\u0133\u0003F#\u0000\u0133\u0134\u0005\u001d"+
		"\u0000\u0000\u0134\u0139\u0001\u0000\u0000\u0000\u0135\u0139\u0005*\u0000"+
		"\u0000\u0136\u0139\u0005)\u0000\u0000\u0137\u0139\u0005+\u0000\u0000\u0138"+
		"\u012e\u0001\u0000\u0000\u0000\u0138\u0135\u0001\u0000\u0000\u0000\u0138"+
		"\u0136\u0001\u0000\u0000\u0000\u0138\u0137\u0001\u0000\u0000\u0000\u0139"+
		"?\u0001\u0000\u0000\u0000\u013a\u0144\u0005,\u0000\u0000\u013b\u0144\u0005"+
		"3\u0000\u0000\u013c\u0144\u00054\u0000\u0000\u013d\u0144\u00032\u0019"+
		"\u0000\u013e\u0144\u0003F#\u0000\u013f\u0144\u0003\u0006\u0003\u0000\u0140"+
		"\u0144\u0003:\u001d\u0000\u0141\u0144\u0003<\u001e\u0000\u0142\u0144\u0003"+
		">\u001f\u0000\u0143\u013a\u0001\u0000\u0000\u0000\u0143\u013b\u0001\u0000"+
		"\u0000\u0000\u0143\u013c\u0001\u0000\u0000\u0000\u0143\u013d\u0001\u0000"+
		"\u0000\u0000\u0143\u013e\u0001\u0000\u0000\u0000\u0143\u013f\u0001\u0000"+
		"\u0000\u0000\u0143\u0140\u0001\u0000\u0000\u0000\u0143\u0141\u0001\u0000"+
		"\u0000\u0000\u0143\u0142\u0001\u0000\u0000\u0000\u0144\u0146\u0001\u0000"+
		"\u0000\u0000\u0145\u0147\u0003B!\u0000\u0146\u0145\u0001\u0000\u0000\u0000"+
		"\u0146\u0147\u0001\u0000\u0000\u0000\u0147A\u0001\u0000\u0000\u0000\u0148"+
		"\u0149\u0005\u0003\u0000\u0000\u0149\u014a\u00052\u0000\u0000\u014aC\u0001"+
		"\u0000\u0000\u0000\u014b\u0150\u0003@ \u0000\u014c\u014d\u0007\u0001\u0000"+
		"\u0000\u014d\u0151\u0003@ \u0000\u014e\u014f\u0007\u0002\u0000\u0000\u014f"+
		"\u0151\u0003H$\u0000\u0150\u014c\u0001\u0000\u0000\u0000\u0150\u014e\u0001"+
		"\u0000\u0000\u0000\u0151E\u0001\u0000\u0000\u0000\u0152\u0155\u00051\u0000"+
		"\u0000\u0153\u0155\u00032\u0019\u0000\u0154\u0152\u0001\u0000\u0000\u0000"+
		"\u0154\u0153\u0001\u0000\u0000\u0000\u0155\u015a\u0001\u0000\u0000\u0000"+
		"\u0156\u0157\u0007\u0003\u0000\u0000\u0157\u0159\u0003F#\u0000\u0158\u0156"+
		"\u0001\u0000\u0000\u0000\u0159\u015c\u0001\u0000\u0000\u0000\u015a\u0158"+
		"\u0001\u0000\u0000\u0000\u015a\u015b\u0001\u0000\u0000\u0000\u015bG\u0001"+
		"\u0000\u0000\u0000\u015c\u015a\u0001\u0000\u0000\u0000\u015d\u0161\u0003"+
		"J%\u0000\u015e\u0161\u0003L&\u0000\u015f\u0161\u0003N\'\u0000\u0160\u015d"+
		"\u0001\u0000\u0000\u0000\u0160\u015e\u0001\u0000\u0000\u0000\u0160\u015f"+
		"\u0001\u0000\u0000\u0000\u0161\u0163\u0001\u0000\u0000\u0000\u0162\u0164"+
		"\u0003B!\u0000\u0163\u0162\u0001\u0000\u0000\u0000\u0163\u0164\u0001\u0000"+
		"\u0000\u0000\u0164I\u0001\u0000\u0000\u0000\u0165\u0166\u0003F#\u0000"+
		"\u0166\u0168\u0005&\u0000\u0000\u0167\u0169\u0003F#\u0000\u0168\u0167"+
		"\u0001\u0000\u0000\u0000\u0168\u0169\u0001\u0000\u0000\u0000\u0169K\u0001"+
		"\u0000\u0000\u0000\u016a\u016b\u00038\u001c\u0000\u016b\u016c\u0005\u001c"+
		"\u0000\u0000\u016c\u016d\u0003J%\u0000\u016d\u016e\u0005\r\u0000\u0000"+
		"\u016e\u016f\u0003J%\u0000\u016f\u0170\u0005\u001d\u0000\u0000\u0170M"+
		"\u0001\u0000\u0000\u0000\u0171\u0172\u0005\u0002\u0000\u0000\u0172\u0173"+
		"\u0005/\u0000\u0000\u0173\u0174\u0005\u0004\u0000\u0000\u0174O\u0001\u0000"+
		"\u0000\u0000\u0175\u0179\u00050\u0000\u0000\u0176\u0179\u0003>\u001f\u0000"+
		"\u0177\u0179\u0003L&\u0000\u0178\u0175\u0001\u0000\u0000\u0000\u0178\u0176"+
		"\u0001\u0000\u0000\u0000\u0178\u0177\u0001\u0000\u0000\u0000\u0179Q\u0001"+
		"\u0000\u0000\u0000\u001dUjqy\u0086\u0094\u009e\u00c9\u00da\u00e0\u00ea"+
		"\u00f0\u00fb\u0101\u0109\u010c\u0118\u011b\u0123\u0138\u0143\u0146\u0150"+
		"\u0154\u015a\u0160\u0163\u0168\u0178";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}