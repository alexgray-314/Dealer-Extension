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
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, COMMENT=37, SPACES=38, 
		NEWLINE=39, NUMBER=40, ID=41, CARD=42, STRING=43;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_player = 2, RULE_assign = 3, RULE_definition = 4, 
		RULE_move = 5, RULE_on_action = 6, RULE_on_move = 7, RULE_for = 8, RULE_if = 9, 
		RULE_args = 10, RULE_arg = 11, RULE_arearef = 12, RULE_position = 13, 
		RULE_term = 14, RULE_property = 15, RULE_bexpr = 16, RULE_aexpr = 17, 
		RULE_set = 18, RULE_intset = 19, RULE_positionset = 20, RULE_playerset = 21, 
		RULE_move_catch = 22;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "player", "assign", "definition", "move", "on_action", 
			"on_move", "for", "if", "args", "arg", "arearef", "position", "term", 
			"property", "bexpr", "aexpr", "set", "intset", "positionset", "playerset", 
			"move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'cancel'", "';'", "'<'", "'/'", "'.'", "'@'", "'>'", "'='", "'define'", 
			"'area'", "'action'", "'int'", "'card'", "'move'", "'on'", "'{'", "'}'", 
			"'for'", "'in'", "'if'", "'else'", "'('", "','", "')'", "':'", "'['", 
			"']'", "'\\'", "'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", "'*'", 
			"'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "COMMENT", "SPACES", "NEWLINE", "NUMBER", "ID", "CARD", "STRING"
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
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
				{
				{
				setState(46);
				stmt();
				}
				}
				setState(51);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(52);
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
			setState(62);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(54);
				definition();
				}
				break;
			case 2:
				{
				setState(55);
				move();
				}
				break;
			case 3:
				{
				setState(56);
				on_action();
				}
				break;
			case 4:
				{
				setState(57);
				on_move();
				}
				break;
			case 5:
				{
				setState(58);
				for_();
				}
				break;
			case 6:
				{
				setState(59);
				if_();
				}
				break;
			case 7:
				{
				setState(60);
				assign();
				}
				break;
			case 8:
				{
				setState(61);
				match(T__0);
				}
				break;
			}
			setState(64);
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
			setState(66);
			match(T__2);
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				{
				setState(67);
				match(T__3);
				}
				break;
			case T__4:
				{
				setState(68);
				match(T__4);
				}
				break;
			case T__5:
				{
				setState(69);
				match(T__5);
				}
				break;
			case NUMBER:
			case ID:
				{
				setState(70);
				aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(73);
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
			setState(75);
			match(ID);
			setState(76);
			match(T__7);
			setState(77);
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
		public ArgsContext args() {
			return getRuleContext(ArgsContext.class,0);
		}
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
			setState(79);
			match(T__8);
			setState(80);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 15360L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(81);
			match(ID);
			setState(82);
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
	public static class MoveContext extends ParserRuleContext {
		public List<PositionContext> position() {
			return getRuleContexts(PositionContext.class);
		}
		public PositionContext position(int i) {
			return getRuleContext(PositionContext.class,i);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
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
			setState(84);
			match(T__13);
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(85);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(86);
				position();
				}
				break;
			case 3:
				{
				setState(87);
				positionset();
				}
				break;
			}
			setState(90);
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
			setState(92);
			match(T__14);
			setState(93);
			match(ID);
			setState(94);
			match(T__15);
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
				{
				{
				setState(95);
				stmt();
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
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
			setState(103);
			match(T__14);
			setState(104);
			match(T__13);
			setState(105);
			move_catch();
			setState(106);
			move_catch();
			setState(107);
			match(T__15);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
				{
				{
				setState(108);
				stmt();
				}
				}
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(114);
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
			setState(116);
			match(T__17);
			setState(117);
			match(ID);
			setState(118);
			match(T__18);
			setState(119);
			set();
			setState(120);
			match(T__15);
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
				{
				{
				setState(121);
				stmt();
				}
				}
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(127);
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
			setState(160);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(129);
				match(T__19);
				setState(130);
				bexpr();
				setState(131);
				match(T__15);
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
					{
					{
					setState(132);
					stmt();
					}
					}
					setState(137);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(138);
				match(T__16);
				setState(139);
				match(T__20);
				setState(140);
				match(T__15);
				setState(144);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
					{
					{
					setState(141);
					stmt();
					}
					}
					setState(146);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(147);
				match(T__16);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(149);
				match(T__19);
				setState(150);
				bexpr();
				setState(151);
				match(T__15);
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2199024615938L) != 0)) {
					{
					{
					setState(152);
					stmt();
					}
					}
					setState(157);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(158);
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
		enterRule(_localctx, 20, RULE_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(162);
				match(T__21);
				setState(171);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID) {
					{
					setState(163);
					arg();
					setState(168);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__22) {
						{
						{
						setState(164);
						match(T__22);
						setState(165);
						arg();
						}
						}
						setState(170);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(173);
				match(T__23);
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
	public static class ArgContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_arg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(ID);
			setState(177);
			match(T__24);
			setState(178);
			_la = _input.LA(1);
			if ( !(_la==NUMBER || _la==STRING) ) {
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
		enterRule(_localctx, 24, RULE_arearef);
		try {
			setState(182);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(180);
				match(ID);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(181);
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
		enterRule(_localctx, 26, RULE_position);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			arearef();
			setState(185);
			match(T__25);
			setState(186);
			aexpr();
			setState(187);
			match(T__22);
			setState(188);
			aexpr();
			setState(189);
			match(T__26);
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
		enterRule(_localctx, 28, RULE_term);
		try {
			setState(197);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(191);
				aexpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(192);
				player();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(193);
				position();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(194);
				match(T__27);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(195);
				match(T__3);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(196);
				property();
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
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(199);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(200);
				player();
				}
				break;
			case 3:
				{
				setState(201);
				position();
				}
				break;
			}
			setState(204);
			match(T__4);
			setState(205);
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
		public BexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexpr; }
	}

	public final BexprContext bexpr() throws RecognitionException {
		BexprContext _localctx = new BexprContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			term();
			setState(208);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 33822867456L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(209);
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
		enterRule(_localctx, 34, RULE_aexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
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
		enterRule(_localctx, 36, RULE_set);
		try {
			setState(216);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(213);
				intset();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(214);
				positionset();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(215);
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
		enterRule(_localctx, 38, RULE_intset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			aexpr();
			setState(219);
			match(T__24);
			setState(220);
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
		enterRule(_localctx, 40, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			arearef();
			setState(223);
			match(T__25);
			setState(224);
			aexpr();
			setState(225);
			match(T__24);
			setState(226);
			aexpr();
			setState(227);
			match(T__22);
			setState(228);
			aexpr();
			setState(229);
			match(T__24);
			setState(230);
			aexpr();
			setState(231);
			match(T__26);
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
		enterRule(_localctx, 42, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(T__2);
			setState(234);
			match(T__34);
			setState(235);
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
		enterRule(_localctx, 44, RULE_move_catch);
		try {
			setState(240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(237);
				match(T__35);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(238);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(239);
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
		"\u0004\u0001+\u00f3\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0001\u0000\u0005\u00000\b\u0000\n\u0000\f\u0000"+
		"3\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"?\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002H\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005Y\b\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006a\b\u0006\n\u0006\f\u0006"+
		"d\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007n\b\u0007\n\u0007\f\u0007"+
		"q\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0005\b{\b\b\n\b\f\b~\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0005\t\u0086\b\t\n\t\f\t\u0089\t\t\u0001\t\u0001\t\u0001\t"+
		"\u0001\t\u0005\t\u008f\b\t\n\t\f\t\u0092\t\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0005\t\u009a\b\t\n\t\f\t\u009d\t\t\u0001\t\u0001\t"+
		"\u0003\t\u00a1\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u00a7\b\n\n"+
		"\n\f\n\u00aa\t\n\u0003\n\u00ac\b\n\u0001\n\u0003\n\u00af\b\n\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0003\f\u00b7\b\f"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00c6"+
		"\b\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00cb\b\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0003\u0012\u00d9\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0003\u0016\u00f1\b\u0016\u0001\u0016\u0000\u0000\u0017\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,\u0000\u0004\u0001\u0000\n\r\u0002\u0000((++\u0001\u0000\u001d\""+
		"\u0001\u0000()\u00fe\u00001\u0001\u0000\u0000\u0000\u0002>\u0001\u0000"+
		"\u0000\u0000\u0004B\u0001\u0000\u0000\u0000\u0006K\u0001\u0000\u0000\u0000"+
		"\bO\u0001\u0000\u0000\u0000\nT\u0001\u0000\u0000\u0000\f\\\u0001\u0000"+
		"\u0000\u0000\u000eg\u0001\u0000\u0000\u0000\u0010t\u0001\u0000\u0000\u0000"+
		"\u0012\u00a0\u0001\u0000\u0000\u0000\u0014\u00ae\u0001\u0000\u0000\u0000"+
		"\u0016\u00b0\u0001\u0000\u0000\u0000\u0018\u00b6\u0001\u0000\u0000\u0000"+
		"\u001a\u00b8\u0001\u0000\u0000\u0000\u001c\u00c5\u0001\u0000\u0000\u0000"+
		"\u001e\u00ca\u0001\u0000\u0000\u0000 \u00cf\u0001\u0000\u0000\u0000\""+
		"\u00d3\u0001\u0000\u0000\u0000$\u00d8\u0001\u0000\u0000\u0000&\u00da\u0001"+
		"\u0000\u0000\u0000(\u00de\u0001\u0000\u0000\u0000*\u00e9\u0001\u0000\u0000"+
		"\u0000,\u00f0\u0001\u0000\u0000\u0000.0\u0003\u0002\u0001\u0000/.\u0001"+
		"\u0000\u0000\u000003\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u0000"+
		"12\u0001\u0000\u0000\u000024\u0001\u0000\u0000\u000031\u0001\u0000\u0000"+
		"\u000045\u0005\u0000\u0000\u00015\u0001\u0001\u0000\u0000\u00006?\u0003"+
		"\b\u0004\u00007?\u0003\n\u0005\u00008?\u0003\f\u0006\u00009?\u0003\u000e"+
		"\u0007\u0000:?\u0003\u0010\b\u0000;?\u0003\u0012\t\u0000<?\u0003\u0006"+
		"\u0003\u0000=?\u0005\u0001\u0000\u0000>6\u0001\u0000\u0000\u0000>7\u0001"+
		"\u0000\u0000\u0000>8\u0001\u0000\u0000\u0000>9\u0001\u0000\u0000\u0000"+
		">:\u0001\u0000\u0000\u0000>;\u0001\u0000\u0000\u0000><\u0001\u0000\u0000"+
		"\u0000>=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@A\u0005\u0002"+
		"\u0000\u0000A\u0003\u0001\u0000\u0000\u0000BG\u0005\u0003\u0000\u0000"+
		"CH\u0005\u0004\u0000\u0000DH\u0005\u0005\u0000\u0000EH\u0005\u0006\u0000"+
		"\u0000FH\u0003\"\u0011\u0000GC\u0001\u0000\u0000\u0000GD\u0001\u0000\u0000"+
		"\u0000GE\u0001\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000HI\u0001\u0000"+
		"\u0000\u0000IJ\u0005\u0007\u0000\u0000J\u0005\u0001\u0000\u0000\u0000"+
		"KL\u0005)\u0000\u0000LM\u0005\b\u0000\u0000MN\u0003\u001c\u000e\u0000"+
		"N\u0007\u0001\u0000\u0000\u0000OP\u0005\t\u0000\u0000PQ\u0007\u0000\u0000"+
		"\u0000QR\u0005)\u0000\u0000RS\u0003\u0014\n\u0000S\t\u0001\u0000\u0000"+
		"\u0000TX\u0005\u000e\u0000\u0000UY\u0005*\u0000\u0000VY\u0003\u001a\r"+
		"\u0000WY\u0003(\u0014\u0000XU\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000"+
		"\u0000XW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z[\u0003\u001a"+
		"\r\u0000[\u000b\u0001\u0000\u0000\u0000\\]\u0005\u000f\u0000\u0000]^\u0005"+
		")\u0000\u0000^b\u0005\u0010\u0000\u0000_a\u0003\u0002\u0001\u0000`_\u0001"+
		"\u0000\u0000\u0000ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000"+
		"bc\u0001\u0000\u0000\u0000ce\u0001\u0000\u0000\u0000db\u0001\u0000\u0000"+
		"\u0000ef\u0005\u0011\u0000\u0000f\r\u0001\u0000\u0000\u0000gh\u0005\u000f"+
		"\u0000\u0000hi\u0005\u000e\u0000\u0000ij\u0003,\u0016\u0000jk\u0003,\u0016"+
		"\u0000ko\u0005\u0010\u0000\u0000ln\u0003\u0002\u0001\u0000ml\u0001\u0000"+
		"\u0000\u0000nq\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000op\u0001"+
		"\u0000\u0000\u0000pr\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000"+
		"rs\u0005\u0011\u0000\u0000s\u000f\u0001\u0000\u0000\u0000tu\u0005\u0012"+
		"\u0000\u0000uv\u0005)\u0000\u0000vw\u0005\u0013\u0000\u0000wx\u0003$\u0012"+
		"\u0000x|\u0005\u0010\u0000\u0000y{\u0003\u0002\u0001\u0000zy\u0001\u0000"+
		"\u0000\u0000{~\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000|}\u0001"+
		"\u0000\u0000\u0000}\u007f\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000"+
		"\u0000\u007f\u0080\u0005\u0011\u0000\u0000\u0080\u0011\u0001\u0000\u0000"+
		"\u0000\u0081\u0082\u0005\u0014\u0000\u0000\u0082\u0083\u0003 \u0010\u0000"+
		"\u0083\u0087\u0005\u0010\u0000\u0000\u0084\u0086\u0003\u0002\u0001\u0000"+
		"\u0085\u0084\u0001\u0000\u0000\u0000\u0086\u0089\u0001\u0000\u0000\u0000"+
		"\u0087\u0085\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000"+
		"\u0088\u008a\u0001\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000"+
		"\u008a\u008b\u0005\u0011\u0000\u0000\u008b\u008c\u0005\u0015\u0000\u0000"+
		"\u008c\u0090\u0005\u0010\u0000\u0000\u008d\u008f\u0003\u0002\u0001\u0000"+
		"\u008e\u008d\u0001\u0000\u0000\u0000\u008f\u0092\u0001\u0000\u0000\u0000"+
		"\u0090\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000"+
		"\u0091\u0093\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000"+
		"\u0093\u0094\u0005\u0011\u0000\u0000\u0094\u00a1\u0001\u0000\u0000\u0000"+
		"\u0095\u0096\u0005\u0014\u0000\u0000\u0096\u0097\u0003 \u0010\u0000\u0097"+
		"\u009b\u0005\u0010\u0000\u0000\u0098\u009a\u0003\u0002\u0001\u0000\u0099"+
		"\u0098\u0001\u0000\u0000\u0000\u009a\u009d\u0001\u0000\u0000\u0000\u009b"+
		"\u0099\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c"+
		"\u009e\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009e"+
		"\u009f\u0005\u0011\u0000\u0000\u009f\u00a1\u0001\u0000\u0000\u0000\u00a0"+
		"\u0081\u0001\u0000\u0000\u0000\u00a0\u0095\u0001\u0000\u0000\u0000\u00a1"+
		"\u0013\u0001\u0000\u0000\u0000\u00a2\u00ab\u0005\u0016\u0000\u0000\u00a3"+
		"\u00a8\u0003\u0016\u000b\u0000\u00a4\u00a5\u0005\u0017\u0000\u0000\u00a5"+
		"\u00a7\u0003\u0016\u000b\u0000\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a7"+
		"\u00aa\u0001\u0000\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8"+
		"\u00a9\u0001\u0000\u0000\u0000\u00a9\u00ac\u0001\u0000\u0000\u0000\u00aa"+
		"\u00a8\u0001\u0000\u0000\u0000\u00ab\u00a3\u0001\u0000\u0000\u0000\u00ab"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad"+
		"\u00af\u0005\u0018\u0000\u0000\u00ae\u00a2\u0001\u0000\u0000\u0000\u00ae"+
		"\u00af\u0001\u0000\u0000\u0000\u00af\u0015\u0001\u0000\u0000\u0000\u00b0"+
		"\u00b1\u0005)\u0000\u0000\u00b1\u00b2\u0005\u0019\u0000\u0000\u00b2\u00b3"+
		"\u0007\u0001\u0000\u0000\u00b3\u0017\u0001\u0000\u0000\u0000\u00b4\u00b7"+
		"\u0005)\u0000\u0000\u00b5\u00b7\u0003\u0004\u0002\u0000\u00b6\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b6\u00b5\u0001\u0000\u0000\u0000\u00b7\u0019\u0001"+
		"\u0000\u0000\u0000\u00b8\u00b9\u0003\u0018\f\u0000\u00b9\u00ba\u0005\u001a"+
		"\u0000\u0000\u00ba\u00bb\u0003\"\u0011\u0000\u00bb\u00bc\u0005\u0017\u0000"+
		"\u0000\u00bc\u00bd\u0003\"\u0011\u0000\u00bd\u00be\u0005\u001b\u0000\u0000"+
		"\u00be\u001b\u0001\u0000\u0000\u0000\u00bf\u00c6\u0003\"\u0011\u0000\u00c0"+
		"\u00c6\u0003\u0004\u0002\u0000\u00c1\u00c6\u0003\u001a\r\u0000\u00c2\u00c6"+
		"\u0005\u001c\u0000\u0000\u00c3\u00c6\u0005\u0004\u0000\u0000\u00c4\u00c6"+
		"\u0003\u001e\u000f\u0000\u00c5\u00bf\u0001\u0000\u0000\u0000\u00c5\u00c0"+
		"\u0001\u0000\u0000\u0000\u00c5\u00c1\u0001\u0000\u0000\u0000\u00c5\u00c2"+
		"\u0001\u0000\u0000\u0000\u00c5\u00c3\u0001\u0000\u0000\u0000\u00c5\u00c4"+
		"\u0001\u0000\u0000\u0000\u00c6\u001d\u0001\u0000\u0000\u0000\u00c7\u00cb"+
		"\u0005*\u0000\u0000\u00c8\u00cb\u0003\u0004\u0002\u0000\u00c9\u00cb\u0003"+
		"\u001a\r\u0000\u00ca\u00c7\u0001\u0000\u0000\u0000\u00ca\u00c8\u0001\u0000"+
		"\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0005\u0005\u0000\u0000\u00cd\u00ce\u0005)\u0000"+
		"\u0000\u00ce\u001f\u0001\u0000\u0000\u0000\u00cf\u00d0\u0003\u001c\u000e"+
		"\u0000\u00d0\u00d1\u0007\u0002\u0000\u0000\u00d1\u00d2\u0003\u001c\u000e"+
		"\u0000\u00d2!\u0001\u0000\u0000\u0000\u00d3\u00d4\u0007\u0003\u0000\u0000"+
		"\u00d4#\u0001\u0000\u0000\u0000\u00d5\u00d9\u0003&\u0013\u0000\u00d6\u00d9"+
		"\u0003(\u0014\u0000\u00d7\u00d9\u0003*\u0015\u0000\u00d8\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d8\u00d7\u0001\u0000"+
		"\u0000\u0000\u00d9%\u0001\u0000\u0000\u0000\u00da\u00db\u0003\"\u0011"+
		"\u0000\u00db\u00dc\u0005\u0019\u0000\u0000\u00dc\u00dd\u0003\"\u0011\u0000"+
		"\u00dd\'\u0001\u0000\u0000\u0000\u00de\u00df\u0003\u0018\f\u0000\u00df"+
		"\u00e0\u0005\u001a\u0000\u0000\u00e0\u00e1\u0003\"\u0011\u0000\u00e1\u00e2"+
		"\u0005\u0019\u0000\u0000\u00e2\u00e3\u0003\"\u0011\u0000\u00e3\u00e4\u0005"+
		"\u0017\u0000\u0000\u00e4\u00e5\u0003\"\u0011\u0000\u00e5\u00e6\u0005\u0019"+
		"\u0000\u0000\u00e6\u00e7\u0003\"\u0011\u0000\u00e7\u00e8\u0005\u001b\u0000"+
		"\u0000\u00e8)\u0001\u0000\u0000\u0000\u00e9\u00ea\u0005\u0003\u0000\u0000"+
		"\u00ea\u00eb\u0005#\u0000\u0000\u00eb\u00ec\u0005\u0007\u0000\u0000\u00ec"+
		"+\u0001\u0000\u0000\u0000\u00ed\u00f1\u0005$\u0000\u0000\u00ee\u00f1\u0003"+
		"\u001a\r\u0000\u00ef\u00f1\u0003(\u0014\u0000\u00f0\u00ed\u0001\u0000"+
		"\u0000\u0000\u00f0\u00ee\u0001\u0000\u0000\u0000\u00f0\u00ef\u0001\u0000"+
		"\u0000\u0000\u00f1-\u0001\u0000\u0000\u0000\u00131>GXbo|\u0087\u0090\u009b"+
		"\u00a0\u00a8\u00ab\u00ae\u00b6\u00c5\u00ca\u00d8\u00f0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}