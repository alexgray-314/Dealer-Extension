// Generated from c:/Users/alexj/University/dealer/antlr/deal.g4 by ANTLR 4.13.1
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
		T__31=32, T__32=33, COMMENT=34, SPACES=35, NEWLINE=36, NUMBER=37, ID=38, 
		CARD=39;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_player = 2, RULE_assign = 3, RULE_definition = 4, 
		RULE_move = 5, RULE_on_action = 6, RULE_on_move = 7, RULE_for = 8, RULE_if = 9, 
		RULE_arearef = 10, RULE_position = 11, RULE_term = 12, RULE_bexpr = 13, 
		RULE_aexpr = 14, RULE_set = 15, RULE_intset = 16, RULE_positionset = 17, 
		RULE_playerset = 18, RULE_move_catch = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "player", "assign", "definition", "move", "on_action", 
			"on_move", "for", "if", "arearef", "position", "term", "bexpr", "aexpr", 
			"set", "intset", "positionset", "playerset", "move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'cancel'", "';'", "'<'", "'/'", "'.'", "'@'", "'>'", "'='", "'define'", 
			"'area'", "'action'", "'int'", "'string'", "'move'", "'on'", "'{'", "'}'", 
			"'for'", "'in'", "'if'", "'else'", "'['", "','", "']'", "'=='", "'!='", 
			"'<<'", "'<='", "'>='", "'>>'", "':'", "'*'", "'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "COMMENT", 
			"SPACES", "NEWLINE", "NUMBER", "ID", "CARD"
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
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
				{
				{
				setState(40);
				stmt();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(46);
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
		public MoveContext move() {
			return getRuleContext(MoveContext.class,0);
		}
		public On_actionContext on_action() {
			return getRuleContext(On_actionContext.class,0);
		}
		public On_moveContext on_move() {
			return getRuleContext(On_moveContext.class,0);
		}
		public ForContext for_() {
			return getRuleContext(ForContext.class,0);
		}
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
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
			setState(56);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(48);
				definition();
				}
				break;
			case 2:
				{
				setState(49);
				move();
				}
				break;
			case 3:
				{
				setState(50);
				on_action();
				}
				break;
			case 4:
				{
				setState(51);
				on_move();
				}
				break;
			case 5:
				{
				setState(52);
				for_();
				}
				break;
			case 6:
				{
				setState(53);
				if_();
				}
				break;
			case 7:
				{
				setState(54);
				assign();
				}
				break;
			case 8:
				{
				setState(55);
				match(T__0);
				}
				break;
			}
			setState(58);
			match(T__1);
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
		enterRule(_localctx, 4, RULE_player);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(T__2);
			setState(65);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				{
				setState(61);
				match(T__3);
				}
				break;
			case T__4:
				{
				setState(62);
				match(T__4);
				}
				break;
			case T__5:
				{
				setState(63);
				match(T__5);
				}
				break;
			case NUMBER:
			case ID:
				{
				setState(64);
				aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(67);
			match(T__6);
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
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
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
		enterRule(_localctx, 6, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(ID);
			setState(70);
			match(T__7);
			setState(71);
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
	public static class DefinitionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
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
			setState(73);
			match(T__8);
			setState(74);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 15360L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(75);
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
	public static class MoveContext extends ParserRuleContext {
		public List<PositionContext> position() {
			return getRuleContexts(PositionContext.class);
		}
		public PositionContext position(int i) {
			return getRuleContext(PositionContext.class,i);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public MoveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_move; }
	}

	public final MoveContext move() throws RecognitionException {
		MoveContext _localctx = new MoveContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(T__13);
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CARD:
				{
				setState(78);
				match(CARD);
				}
				break;
			case T__2:
			case ID:
				{
				setState(79);
				position();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(82);
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
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public On_actionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_action; }
	}

	public final On_actionContext on_action() throws RecognitionException {
		On_actionContext _localctx = new On_actionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_on_action);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(T__14);
			setState(85);
			match(ID);
			setState(86);
			match(T__15);
			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
				{
				{
				setState(87);
				stmt();
				}
				}
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(93);
			match(T__16);
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
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public On_moveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_move; }
	}

	public final On_moveContext on_move() throws RecognitionException {
		On_moveContext _localctx = new On_moveContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_on_move);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(T__14);
			setState(96);
			match(T__13);
			setState(97);
			move_catch();
			setState(98);
			move_catch();
			setState(99);
			match(T__15);
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
				{
				{
				setState(100);
				stmt();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(106);
			match(T__16);
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
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for; }
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_for);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(T__17);
			setState(109);
			match(ID);
			setState(110);
			match(T__18);
			setState(111);
			set();
			setState(112);
			match(T__15);
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
				{
				{
				setState(113);
				stmt();
				}
				}
				setState(118);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(119);
			match(T__16);
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
		public BexprContext bexpr() {
			return getRuleContext(BexprContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public IfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if; }
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_if);
		int _la;
		try {
			setState(152);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(121);
				match(T__19);
				setState(122);
				bexpr();
				setState(123);
				match(T__15);
				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
					{
					{
					setState(124);
					stmt();
					}
					}
					setState(129);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(130);
				match(T__16);
				setState(131);
				match(T__20);
				setState(132);
				match(T__15);
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
					{
					{
					setState(133);
					stmt();
					}
					}
					setState(138);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(139);
				match(T__16);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(141);
				match(T__19);
				setState(142);
				bexpr();
				setState(143);
				match(T__15);
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274879267330L) != 0)) {
					{
					{
					setState(144);
					stmt();
					}
					}
					setState(149);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(150);
				match(T__16);
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
		enterRule(_localctx, 20, RULE_arearef);
		try {
			setState(156);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				match(ID);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
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
		public PositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_position; }
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_position);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			arearef();
			setState(159);
			match(T__21);
			setState(160);
			aexpr();
			setState(161);
			match(T__22);
			setState(162);
			aexpr();
			setState(163);
			match(T__23);
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
		public AexprContext aexpr() {
			return getRuleContext(AexprContext.class,0);
		}
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_term);
		try {
			setState(168);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(165);
				aexpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(166);
				player();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(167);
				position();
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
	public static class BexprContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public BexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexpr; }
	}

	public final BexprContext bexpr() throws RecognitionException {
		BexprContext _localctx = new BexprContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			term();
			setState(171);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2113929216L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(172);
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
	public static class AexprContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public AexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aexpr; }
	}

	public final AexprContext aexpr() throws RecognitionException {
		AexprContext _localctx = new AexprContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_aexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			_la = _input.LA(1);
			if ( !(_la==NUMBER || _la==ID) ) {
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
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_set);
		try {
			setState(179);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(176);
				intset();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(177);
				positionset();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(178);
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
		enterRule(_localctx, 32, RULE_intset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			aexpr();
			setState(182);
			match(T__30);
			setState(183);
			aexpr();
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
		public List<AexprContext> aexpr() {
			return getRuleContexts(AexprContext.class);
		}
		public AexprContext aexpr(int i) {
			return getRuleContext(AexprContext.class,i);
		}
		public PositionsetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_positionset; }
	}

	public final PositionsetContext positionset() throws RecognitionException {
		PositionsetContext _localctx = new PositionsetContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			arearef();
			setState(186);
			match(T__21);
			setState(187);
			aexpr();
			setState(188);
			match(T__30);
			setState(189);
			aexpr();
			setState(190);
			match(T__22);
			setState(191);
			aexpr();
			setState(192);
			match(T__30);
			setState(193);
			aexpr();
			setState(194);
			match(T__23);
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
		public PlayersetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_playerset; }
	}

	public final PlayersetContext playerset() throws RecognitionException {
		PlayersetContext _localctx = new PlayersetContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(T__2);
			setState(197);
			match(T__31);
			setState(198);
			match(T__6);
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
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public Move_catchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_move_catch; }
	}

	public final Move_catchContext move_catch() throws RecognitionException {
		Move_catchContext _localctx = new Move_catchContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_move_catch);
		try {
			setState(202);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__32:
				enterOuterAlt(_localctx, 1);
				{
				setState(200);
				match(T__32);
				}
				break;
			case T__2:
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(201);
				position();
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

	public static final String _serializedATN =
		"\u0004\u0001\'\u00cd\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0001\u0000\u0005\u0000*\b\u0000\n\u0000\f\u0000"+
		"-\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"9\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002B\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"Q\b\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0005\u0006Y\b\u0006\n\u0006\f\u0006\\\t\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007f\b\u0007\n\u0007\f\u0007i\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\bs"+
		"\b\b\n\b\f\bv\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0005"+
		"\t~\b\t\n\t\f\t\u0081\t\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u0087"+
		"\b\t\n\t\f\t\u008a\t\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t"+
		"\u0005\t\u0092\b\t\n\t\f\t\u0095\t\t\u0001\t\u0001\t\u0003\t\u0099\b\t"+
		"\u0001\n\u0001\n\u0003\n\u009d\b\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0003\f\u00a9\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00b4\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0003\u0013\u00cb\b\u0013\u0001\u0013\u0000"+
		"\u0000\u0014\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&\u0000\u0003\u0001\u0000\n\r\u0001\u0000"+
		"\u0019\u001e\u0001\u0000%&\u00d1\u0000+\u0001\u0000\u0000\u0000\u0002"+
		"8\u0001\u0000\u0000\u0000\u0004<\u0001\u0000\u0000\u0000\u0006E\u0001"+
		"\u0000\u0000\u0000\bI\u0001\u0000\u0000\u0000\nM\u0001\u0000\u0000\u0000"+
		"\fT\u0001\u0000\u0000\u0000\u000e_\u0001\u0000\u0000\u0000\u0010l\u0001"+
		"\u0000\u0000\u0000\u0012\u0098\u0001\u0000\u0000\u0000\u0014\u009c\u0001"+
		"\u0000\u0000\u0000\u0016\u009e\u0001\u0000\u0000\u0000\u0018\u00a8\u0001"+
		"\u0000\u0000\u0000\u001a\u00aa\u0001\u0000\u0000\u0000\u001c\u00ae\u0001"+
		"\u0000\u0000\u0000\u001e\u00b3\u0001\u0000\u0000\u0000 \u00b5\u0001\u0000"+
		"\u0000\u0000\"\u00b9\u0001\u0000\u0000\u0000$\u00c4\u0001\u0000\u0000"+
		"\u0000&\u00ca\u0001\u0000\u0000\u0000(*\u0003\u0002\u0001\u0000)(\u0001"+
		"\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000"+
		"+,\u0001\u0000\u0000\u0000,.\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000"+
		"\u0000./\u0005\u0000\u0000\u0001/\u0001\u0001\u0000\u0000\u000009\u0003"+
		"\b\u0004\u000019\u0003\n\u0005\u000029\u0003\f\u0006\u000039\u0003\u000e"+
		"\u0007\u000049\u0003\u0010\b\u000059\u0003\u0012\t\u000069\u0003\u0006"+
		"\u0003\u000079\u0005\u0001\u0000\u000080\u0001\u0000\u0000\u000081\u0001"+
		"\u0000\u0000\u000082\u0001\u0000\u0000\u000083\u0001\u0000\u0000\u0000"+
		"84\u0001\u0000\u0000\u000085\u0001\u0000\u0000\u000086\u0001\u0000\u0000"+
		"\u000087\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:;\u0005\u0002"+
		"\u0000\u0000;\u0003\u0001\u0000\u0000\u0000<A\u0005\u0003\u0000\u0000"+
		"=B\u0005\u0004\u0000\u0000>B\u0005\u0005\u0000\u0000?B\u0005\u0006\u0000"+
		"\u0000@B\u0003\u001c\u000e\u0000A=\u0001\u0000\u0000\u0000A>\u0001\u0000"+
		"\u0000\u0000A?\u0001\u0000\u0000\u0000A@\u0001\u0000\u0000\u0000BC\u0001"+
		"\u0000\u0000\u0000CD\u0005\u0007\u0000\u0000D\u0005\u0001\u0000\u0000"+
		"\u0000EF\u0005&\u0000\u0000FG\u0005\b\u0000\u0000GH\u0003\u0018\f\u0000"+
		"H\u0007\u0001\u0000\u0000\u0000IJ\u0005\t\u0000\u0000JK\u0007\u0000\u0000"+
		"\u0000KL\u0005&\u0000\u0000L\t\u0001\u0000\u0000\u0000MP\u0005\u000e\u0000"+
		"\u0000NQ\u0005\'\u0000\u0000OQ\u0003\u0016\u000b\u0000PN\u0001\u0000\u0000"+
		"\u0000PO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000RS\u0003\u0016"+
		"\u000b\u0000S\u000b\u0001\u0000\u0000\u0000TU\u0005\u000f\u0000\u0000"+
		"UV\u0005&\u0000\u0000VZ\u0005\u0010\u0000\u0000WY\u0003\u0002\u0001\u0000"+
		"XW\u0001\u0000\u0000\u0000Y\\\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000"+
		"\u0000Z[\u0001\u0000\u0000\u0000[]\u0001\u0000\u0000\u0000\\Z\u0001\u0000"+
		"\u0000\u0000]^\u0005\u0011\u0000\u0000^\r\u0001\u0000\u0000\u0000_`\u0005"+
		"\u000f\u0000\u0000`a\u0005\u000e\u0000\u0000ab\u0003&\u0013\u0000bc\u0003"+
		"&\u0013\u0000cg\u0005\u0010\u0000\u0000df\u0003\u0002\u0001\u0000ed\u0001"+
		"\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000"+
		"gh\u0001\u0000\u0000\u0000hj\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000"+
		"\u0000jk\u0005\u0011\u0000\u0000k\u000f\u0001\u0000\u0000\u0000lm\u0005"+
		"\u0012\u0000\u0000mn\u0005&\u0000\u0000no\u0005\u0013\u0000\u0000op\u0003"+
		"\u001e\u000f\u0000pt\u0005\u0010\u0000\u0000qs\u0003\u0002\u0001\u0000"+
		"rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000"+
		"\u0000tu\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001\u0000"+
		"\u0000\u0000wx\u0005\u0011\u0000\u0000x\u0011\u0001\u0000\u0000\u0000"+
		"yz\u0005\u0014\u0000\u0000z{\u0003\u001a\r\u0000{\u007f\u0005\u0010\u0000"+
		"\u0000|~\u0003\u0002\u0001\u0000}|\u0001\u0000\u0000\u0000~\u0081\u0001"+
		"\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000"+
		"\u0000\u0000\u0080\u0082\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0005\u0011\u0000\u0000\u0083\u0084\u0005\u0015"+
		"\u0000\u0000\u0084\u0088\u0005\u0010\u0000\u0000\u0085\u0087\u0003\u0002"+
		"\u0001\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0087\u008a\u0001\u0000"+
		"\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000"+
		"\u0000\u0000\u0089\u008b\u0001\u0000\u0000\u0000\u008a\u0088\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0005\u0011\u0000\u0000\u008c\u0099\u0001\u0000"+
		"\u0000\u0000\u008d\u008e\u0005\u0014\u0000\u0000\u008e\u008f\u0003\u001a"+
		"\r\u0000\u008f\u0093\u0005\u0010\u0000\u0000\u0090\u0092\u0003\u0002\u0001"+
		"\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0092\u0095\u0001\u0000\u0000"+
		"\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000"+
		"\u0000\u0094\u0096\u0001\u0000\u0000\u0000\u0095\u0093\u0001\u0000\u0000"+
		"\u0000\u0096\u0097\u0005\u0011\u0000\u0000\u0097\u0099\u0001\u0000\u0000"+
		"\u0000\u0098y\u0001\u0000\u0000\u0000\u0098\u008d\u0001\u0000\u0000\u0000"+
		"\u0099\u0013\u0001\u0000\u0000\u0000\u009a\u009d\u0005&\u0000\u0000\u009b"+
		"\u009d\u0003\u0004\u0002\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c"+
		"\u009b\u0001\u0000\u0000\u0000\u009d\u0015\u0001\u0000\u0000\u0000\u009e"+
		"\u009f\u0003\u0014\n\u0000\u009f\u00a0\u0005\u0016\u0000\u0000\u00a0\u00a1"+
		"\u0003\u001c\u000e\u0000\u00a1\u00a2\u0005\u0017\u0000\u0000\u00a2\u00a3"+
		"\u0003\u001c\u000e\u0000\u00a3\u00a4\u0005\u0018\u0000\u0000\u00a4\u0017"+
		"\u0001\u0000\u0000\u0000\u00a5\u00a9\u0003\u001c\u000e\u0000\u00a6\u00a9"+
		"\u0003\u0004\u0002\u0000\u00a7\u00a9\u0003\u0016\u000b\u0000\u00a8\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a7"+
		"\u0001\u0000\u0000\u0000\u00a9\u0019\u0001\u0000\u0000\u0000\u00aa\u00ab"+
		"\u0003\u0018\f\u0000\u00ab\u00ac\u0007\u0001\u0000\u0000\u00ac\u00ad\u0003"+
		"\u0018\f\u0000\u00ad\u001b\u0001\u0000\u0000\u0000\u00ae\u00af\u0007\u0002"+
		"\u0000\u0000\u00af\u001d\u0001\u0000\u0000\u0000\u00b0\u00b4\u0003 \u0010"+
		"\u0000\u00b1\u00b4\u0003\"\u0011\u0000\u00b2\u00b4\u0003$\u0012\u0000"+
		"\u00b3\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000"+
		"\u00b3\u00b2\u0001\u0000\u0000\u0000\u00b4\u001f\u0001\u0000\u0000\u0000"+
		"\u00b5\u00b6\u0003\u001c\u000e\u0000\u00b6\u00b7\u0005\u001f\u0000\u0000"+
		"\u00b7\u00b8\u0003\u001c\u000e\u0000\u00b8!\u0001\u0000\u0000\u0000\u00b9"+
		"\u00ba\u0003\u0014\n\u0000\u00ba\u00bb\u0005\u0016\u0000\u0000\u00bb\u00bc"+
		"\u0003\u001c\u000e\u0000\u00bc\u00bd\u0005\u001f\u0000\u0000\u00bd\u00be"+
		"\u0003\u001c\u000e\u0000\u00be\u00bf\u0005\u0017\u0000\u0000\u00bf\u00c0"+
		"\u0003\u001c\u000e\u0000\u00c0\u00c1\u0005\u001f\u0000\u0000\u00c1\u00c2"+
		"\u0003\u001c\u000e\u0000\u00c2\u00c3\u0005\u0018\u0000\u0000\u00c3#\u0001"+
		"\u0000\u0000\u0000\u00c4\u00c5\u0005\u0003\u0000\u0000\u00c5\u00c6\u0005"+
		" \u0000\u0000\u00c6\u00c7\u0005\u0007\u0000\u0000\u00c7%\u0001\u0000\u0000"+
		"\u0000\u00c8\u00cb\u0005!\u0000\u0000\u00c9\u00cb\u0003\u0016\u000b\u0000"+
		"\u00ca\u00c8\u0001\u0000\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000\u0000"+
		"\u00cb\'\u0001\u0000\u0000\u0000\u000f+8APZgt\u007f\u0088\u0093\u0098"+
		"\u009c\u00a8\u00b3\u00ca";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}