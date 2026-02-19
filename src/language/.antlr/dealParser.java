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
		MOVE_DEST=39, MOVE_SOURCE=40, EMPTY=41, PLUS=42, MINUS=43, TIMES=44, WILDCARD=45, 
		NUMBER=46, ID=47, CARD=48, STRING=49, SPACES=50, NEWLINE=51;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_block = 2, RULE_player = 3, RULE_definition = 4, 
		RULE_move = 5, RULE_source = 6, RULE_destination = 7, RULE_on_action = 8, 
		RULE_on_move = 9, RULE_for = 10, RULE_if = 11, RULE_cancel = 12, RULE_assign = 13, 
		RULE_function_call = 14, RULE_updateTurn = 15, RULE_log = 16, RULE_modify = 17, 
		RULE_variable = 18, RULE_args = 19, RULE_arg = 20, RULE_arearef = 21, 
		RULE_area = 22, RULE_stack = 23, RULE_position = 24, RULE_term = 25, RULE_property = 26, 
		RULE_bexpr = 27, RULE_aexpr = 28, RULE_set = 29, RULE_intset = 30, RULE_positionset = 31, 
		RULE_playerset = 32, RULE_move_catch = 33;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "block", "player", "definition", "move", "source", "destination", 
			"on_action", "on_move", "for", "if", "cancel", "assign", "function_call", 
			"updateTurn", "log", "modify", "variable", "args", "arg", "arearef", 
			"area", "stack", "position", "term", "property", "bexpr", "aexpr", "set", 
			"intset", "positionset", "playerset", "move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'<'", "'.'", "'@'", "'>'", "'define'", "'area'", "'action'", 
			"'int'", "'card'", "'move'", "'on'", "'{'", "'}'", "'for'", "'in'", "'if'", 
			"'else'", "'cancel'", "'='", "'++'", "'log'", "'..'", "'('", "','", "')'", 
			"':'", "'['", "']'", "'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", 
			"'=?'", "'!?'", null, "'/'", "'\\'", "'empty'", "'+'", "'-'", "'*'", 
			"'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "COMMENT", "MOVE_DEST", "MOVE_SOURCE", "EMPTY", "PLUS", "MINUS", 
			"TIMES", "WILDCARD", "NUMBER", "ID", "CARD", "STRING", "SPACES", "NEWLINE"
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
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 142386760685636L) != 0)) {
				{
				{
				setState(68);
				stmt();
				}
				}
				setState(73);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(74);
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
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(76);
				definition();
				}
				break;
			case 2:
				{
				setState(77);
				move();
				}
				break;
			case 3:
				{
				setState(78);
				on_action();
				}
				break;
			case 4:
				{
				setState(79);
				on_move();
				}
				break;
			case 5:
				{
				setState(80);
				for_();
				}
				break;
			case 6:
				{
				setState(81);
				if_();
				}
				break;
			case 7:
				{
				setState(82);
				cancel();
				}
				break;
			case 8:
				{
				setState(83);
				assign();
				}
				break;
			case 9:
				{
				setState(84);
				function_call();
				}
				break;
			case 10:
				{
				setState(85);
				updateTurn();
				}
				break;
			case 11:
				{
				setState(86);
				log();
				}
				break;
			case 12:
				{
				setState(87);
				modify();
				}
				break;
			}
			setState(90);
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
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 142386760685636L) != 0)) {
				{
				{
				setState(92);
				stmt();
				}
				}
				setState(97);
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
			setState(98);
			match(T__1);
			setState(103);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MOVE_DEST:
				{
				setState(99);
				match(MOVE_DEST);
				}
				break;
			case T__2:
				{
				setState(100);
				match(T__2);
				}
				break;
			case T__3:
				{
				setState(101);
				match(T__3);
				}
				break;
			case NUMBER:
			case ID:
				{
				setState(102);
				aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(105);
			match(T__4);
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
			setState(107);
			match(T__5);
			setState(108);
			((DefinitionContext)_localctx).type = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1920L) != 0)) ) {
				((DefinitionContext)_localctx).type = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(109);
			match(ID);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__23) {
				{
				setState(110);
				args();
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
		enterRule(_localctx, 10, RULE_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(T__10);
			setState(114);
			source();
			setState(115);
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
		enterRule(_localctx, 12, RULE_source);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(117);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(118);
				position();
				}
				break;
			case 3:
				{
				setState(119);
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
		enterRule(_localctx, 14, RULE_destination);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
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
		enterRule(_localctx, 16, RULE_on_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(T__11);
			setState(125);
			match(ID);
			setState(126);
			match(T__12);
			setState(127);
			block();
			setState(128);
			match(T__13);
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
		enterRule(_localctx, 18, RULE_on_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(T__11);
			setState(131);
			match(T__10);
			setState(132);
			move_catch();
			setState(133);
			move_catch();
			setState(134);
			match(T__12);
			setState(135);
			block();
			setState(136);
			match(T__13);
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
		enterRule(_localctx, 20, RULE_for);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(T__14);
			setState(139);
			match(ID);
			setState(140);
			match(T__15);
			setState(141);
			set();
			setState(142);
			match(T__12);
			setState(143);
			block();
			setState(144);
			match(T__13);
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
		enterRule(_localctx, 22, RULE_if);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(T__16);
			setState(147);
			bexpr();
			setState(148);
			match(T__12);
			setState(149);
			((IfContext)_localctx).consequent = block();
			setState(150);
			match(T__13);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__17) {
				{
				setState(151);
				match(T__17);
				setState(152);
				match(T__12);
				setState(153);
				((IfContext)_localctx).antecedent = block();
				setState(154);
				match(T__13);
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
		enterRule(_localctx, 24, RULE_cancel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			match(T__18);
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
		enterRule(_localctx, 26, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			variable();
			setState(161);
			match(T__19);
			setState(162);
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
		enterRule(_localctx, 28, RULE_function_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(ID);
			setState(165);
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
		enterRule(_localctx, 30, RULE_updateTurn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(T__1);
			setState(168);
			match(T__2);
			setState(169);
			match(T__4);
			setState(173);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__20:
				{
				setState(170);
				match(T__20);
				}
				break;
			case T__19:
				{
				setState(171);
				match(T__19);
				setState(172);
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
		enterRule(_localctx, 32, RULE_log);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			match(T__21);
			setState(177); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(176);
				term();
				}
				}
				setState(179); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1059379453362180L) != 0) );
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
		enterRule(_localctx, 34, RULE_modify);
		try {
			setState(189);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(181);
				position();
				setState(182);
				match(T__22);
				setState(183);
				function_call();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(185);
				variable();
				setState(186);
				match(T__22);
				setState(187);
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
	public static class VariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
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
		enterRule(_localctx, 38, RULE_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(T__23);
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(194);
				arg();
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__24) {
					{
					{
					setState(195);
					match(T__24);
					setState(196);
					arg();
					}
					}
					setState(201);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(204);
			match(T__25);
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
		enterRule(_localctx, 40, RULE_arg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(ID);
			setState(207);
			match(T__26);
			setState(208);
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
		enterRule(_localctx, 42, RULE_arearef);
		try {
			setState(212);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(210);
				match(ID);
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(211);
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
		enterRule(_localctx, 44, RULE_area);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			arearef();
			setState(215);
			match(T__27);
			setState(216);
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
		enterRule(_localctx, 46, RULE_stack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			arearef();
			setState(219);
			match(T__27);
			setState(220);
			aexpr();
			setState(221);
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
		public PositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_position; }
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_position);
		try {
			setState(232);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				arearef();
				setState(224);
				match(T__27);
				setState(225);
				aexpr();
				setState(226);
				match(T__24);
				setState(227);
				aexpr();
				setState(228);
				match(T__28);
				}
				break;
			case MOVE_SOURCE:
				enterOuterAlt(_localctx, 2);
				{
				setState(230);
				match(MOVE_SOURCE);
				}
				break;
			case MOVE_DEST:
				enterOuterAlt(_localctx, 3);
				{
				setState(231);
				match(MOVE_DEST);
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
		enterRule(_localctx, 50, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(234);
				match(EMPTY);
				}
				break;
			case 2:
				{
				setState(235);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(236);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(237);
				variable();
				}
				break;
			case 5:
				{
				setState(238);
				aexpr();
				}
				break;
			case 6:
				{
				setState(239);
				player();
				}
				break;
			case 7:
				{
				setState(240);
				area();
				}
				break;
			case 8:
				{
				setState(241);
				stack();
				}
				break;
			case 9:
				{
				setState(242);
				position();
				}
				break;
			}
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(245);
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
		enterRule(_localctx, 52, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(T__2);
			setState(249);
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
		enterRule(_localctx, 54, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			term();
			setState(256);
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
				setState(252);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 67645734912L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(253);
				term();
				}
				}
				break;
			case T__35:
			case T__36:
				{
				{
				setState(254);
				_la = _input.LA(1);
				if ( !(_la==T__35 || _la==T__36) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(255);
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
		enterRule(_localctx, 56, RULE_aexpr);
		int _la;
		try {
			int _alt;
			setState(267);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(258);
				match(NUMBER);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(259);
				variable();
				setState(264);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(260);
						((AexprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 30786325577728L) != 0)) ) {
							((AexprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(261);
						aexpr();
						}
						} 
					}
					setState(266);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				}
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
		enterRule(_localctx, 58, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(269);
				intset();
				}
				break;
			case 2:
				{
				setState(270);
				positionset();
				}
				break;
			case 3:
				{
				setState(271);
				playerset();
				}
				break;
			}
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(274);
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
		enterRule(_localctx, 60, RULE_intset);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(277);
			aexpr();
			setState(278);
			match(T__26);
			setState(280);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NUMBER || _la==ID) {
				{
				setState(279);
				aexpr();
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
		enterRule(_localctx, 62, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			arearef();
			setState(283);
			match(T__27);
			setState(284);
			intset();
			setState(285);
			match(T__24);
			setState(286);
			intset();
			setState(287);
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
		enterRule(_localctx, 64, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(T__1);
			setState(290);
			match(TIMES);
			setState(291);
			match(T__4);
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
		enterRule(_localctx, 66, RULE_move_catch);
		try {
			setState(296);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(293);
				match(WILDCARD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(294);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(295);
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
		"\u0004\u00013\u012b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0001\u0000\u0005"+
		"\u0000F\b\u0000\n\u0000\f\u0000I\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001Y\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002^\b\u0002"+
		"\n\u0002\f\u0002a\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003h\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004p\b\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0003\u0006y\b\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b"+
		"\u009d\b\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0003\u000f\u00ae\b\u000f\u0001\u0010\u0001\u0010"+
		"\u0004\u0010\u00b2\b\u0010\u000b\u0010\f\u0010\u00b3\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0003\u0011\u00be\b\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u00c6\b\u0013\n\u0013\f\u0013"+
		"\u00c9\t\u0013\u0003\u0013\u00cb\b\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0003"+
		"\u0015\u00d5\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0003\u0018\u00e9\b\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0003\u0019\u00f4\b\u0019\u0001\u0019\u0003\u0019\u00f7\b\u0019"+
		"\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0003\u001b\u0101\b\u001b\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0005\u001c\u0107\b\u001c\n\u001c\f\u001c\u010a"+
		"\t\u001c\u0003\u001c\u010c\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0003\u001d\u0111\b\u001d\u0001\u001d\u0003\u001d\u0114\b\u001d\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u0119\b\u001e\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		" \u0001 \u0001 \u0001 \u0001!\u0001!\u0001!\u0003!\u0129\b!\u0001!\u0000"+
		"\u0000\"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<>@B\u0000\u0005\u0001\u0000\u0007\n"+
		"\u0002\u0000..11\u0001\u0000\u001e#\u0001\u0000$%\u0001\u0000*,\u0136"+
		"\u0000G\u0001\u0000\u0000\u0000\u0002X\u0001\u0000\u0000\u0000\u0004_"+
		"\u0001\u0000\u0000\u0000\u0006b\u0001\u0000\u0000\u0000\bk\u0001\u0000"+
		"\u0000\u0000\nq\u0001\u0000\u0000\u0000\fx\u0001\u0000\u0000\u0000\u000e"+
		"z\u0001\u0000\u0000\u0000\u0010|\u0001\u0000\u0000\u0000\u0012\u0082\u0001"+
		"\u0000\u0000\u0000\u0014\u008a\u0001\u0000\u0000\u0000\u0016\u0092\u0001"+
		"\u0000\u0000\u0000\u0018\u009e\u0001\u0000\u0000\u0000\u001a\u00a0\u0001"+
		"\u0000\u0000\u0000\u001c\u00a4\u0001\u0000\u0000\u0000\u001e\u00a7\u0001"+
		"\u0000\u0000\u0000 \u00af\u0001\u0000\u0000\u0000\"\u00bd\u0001\u0000"+
		"\u0000\u0000$\u00bf\u0001\u0000\u0000\u0000&\u00c1\u0001\u0000\u0000\u0000"+
		"(\u00ce\u0001\u0000\u0000\u0000*\u00d4\u0001\u0000\u0000\u0000,\u00d6"+
		"\u0001\u0000\u0000\u0000.\u00da\u0001\u0000\u0000\u00000\u00e8\u0001\u0000"+
		"\u0000\u00002\u00f3\u0001\u0000\u0000\u00004\u00f8\u0001\u0000\u0000\u0000"+
		"6\u00fb\u0001\u0000\u0000\u00008\u010b\u0001\u0000\u0000\u0000:\u0110"+
		"\u0001\u0000\u0000\u0000<\u0115\u0001\u0000\u0000\u0000>\u011a\u0001\u0000"+
		"\u0000\u0000@\u0121\u0001\u0000\u0000\u0000B\u0128\u0001\u0000\u0000\u0000"+
		"DF\u0003\u0002\u0001\u0000ED\u0001\u0000\u0000\u0000FI\u0001\u0000\u0000"+
		"\u0000GE\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HJ\u0001\u0000"+
		"\u0000\u0000IG\u0001\u0000\u0000\u0000JK\u0005\u0000\u0000\u0001K\u0001"+
		"\u0001\u0000\u0000\u0000LY\u0003\b\u0004\u0000MY\u0003\n\u0005\u0000N"+
		"Y\u0003\u0010\b\u0000OY\u0003\u0012\t\u0000PY\u0003\u0014\n\u0000QY\u0003"+
		"\u0016\u000b\u0000RY\u0003\u0018\f\u0000SY\u0003\u001a\r\u0000TY\u0003"+
		"\u001c\u000e\u0000UY\u0003\u001e\u000f\u0000VY\u0003 \u0010\u0000WY\u0003"+
		"\"\u0011\u0000XL\u0001\u0000\u0000\u0000XM\u0001\u0000\u0000\u0000XN\u0001"+
		"\u0000\u0000\u0000XO\u0001\u0000\u0000\u0000XP\u0001\u0000\u0000\u0000"+
		"XQ\u0001\u0000\u0000\u0000XR\u0001\u0000\u0000\u0000XS\u0001\u0000\u0000"+
		"\u0000XT\u0001\u0000\u0000\u0000XU\u0001\u0000\u0000\u0000XV\u0001\u0000"+
		"\u0000\u0000XW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z[\u0005"+
		"\u0001\u0000\u0000[\u0003\u0001\u0000\u0000\u0000\\^\u0003\u0002\u0001"+
		"\u0000]\\\u0001\u0000\u0000\u0000^a\u0001\u0000\u0000\u0000_]\u0001\u0000"+
		"\u0000\u0000_`\u0001\u0000\u0000\u0000`\u0005\u0001\u0000\u0000\u0000"+
		"a_\u0001\u0000\u0000\u0000bg\u0005\u0002\u0000\u0000ch\u0005\'\u0000\u0000"+
		"dh\u0005\u0003\u0000\u0000eh\u0005\u0004\u0000\u0000fh\u00038\u001c\u0000"+
		"gc\u0001\u0000\u0000\u0000gd\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000"+
		"\u0000gf\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ij\u0005\u0005"+
		"\u0000\u0000j\u0007\u0001\u0000\u0000\u0000kl\u0005\u0006\u0000\u0000"+
		"lm\u0007\u0000\u0000\u0000mo\u0005/\u0000\u0000np\u0003&\u0013\u0000o"+
		"n\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000p\t\u0001\u0000\u0000"+
		"\u0000qr\u0005\u000b\u0000\u0000rs\u0003\f\u0006\u0000st\u0003\u000e\u0007"+
		"\u0000t\u000b\u0001\u0000\u0000\u0000uy\u00050\u0000\u0000vy\u00030\u0018"+
		"\u0000wy\u0003>\u001f\u0000xu\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000"+
		"\u0000xw\u0001\u0000\u0000\u0000y\r\u0001\u0000\u0000\u0000z{\u00030\u0018"+
		"\u0000{\u000f\u0001\u0000\u0000\u0000|}\u0005\f\u0000\u0000}~\u0005/\u0000"+
		"\u0000~\u007f\u0005\r\u0000\u0000\u007f\u0080\u0003\u0004\u0002\u0000"+
		"\u0080\u0081\u0005\u000e\u0000\u0000\u0081\u0011\u0001\u0000\u0000\u0000"+
		"\u0082\u0083\u0005\f\u0000\u0000\u0083\u0084\u0005\u000b\u0000\u0000\u0084"+
		"\u0085\u0003B!\u0000\u0085\u0086\u0003B!\u0000\u0086\u0087\u0005\r\u0000"+
		"\u0000\u0087\u0088\u0003\u0004\u0002\u0000\u0088\u0089\u0005\u000e\u0000"+
		"\u0000\u0089\u0013\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u000f\u0000"+
		"\u0000\u008b\u008c\u0005/\u0000\u0000\u008c\u008d\u0005\u0010\u0000\u0000"+
		"\u008d\u008e\u0003:\u001d\u0000\u008e\u008f\u0005\r\u0000\u0000\u008f"+
		"\u0090\u0003\u0004\u0002\u0000\u0090\u0091\u0005\u000e\u0000\u0000\u0091"+
		"\u0015\u0001\u0000\u0000\u0000\u0092\u0093\u0005\u0011\u0000\u0000\u0093"+
		"\u0094\u00036\u001b\u0000\u0094\u0095\u0005\r\u0000\u0000\u0095\u0096"+
		"\u0003\u0004\u0002\u0000\u0096\u009c\u0005\u000e\u0000\u0000\u0097\u0098"+
		"\u0005\u0012\u0000\u0000\u0098\u0099\u0005\r\u0000\u0000\u0099\u009a\u0003"+
		"\u0004\u0002\u0000\u009a\u009b\u0005\u000e\u0000\u0000\u009b\u009d\u0001"+
		"\u0000\u0000\u0000\u009c\u0097\u0001\u0000\u0000\u0000\u009c\u009d\u0001"+
		"\u0000\u0000\u0000\u009d\u0017\u0001\u0000\u0000\u0000\u009e\u009f\u0005"+
		"\u0013\u0000\u0000\u009f\u0019\u0001\u0000\u0000\u0000\u00a0\u00a1\u0003"+
		"$\u0012\u0000\u00a1\u00a2\u0005\u0014\u0000\u0000\u00a2\u00a3\u00032\u0019"+
		"\u0000\u00a3\u001b\u0001\u0000\u0000\u0000\u00a4\u00a5\u0005/\u0000\u0000"+
		"\u00a5\u00a6\u0003&\u0013\u0000\u00a6\u001d\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a8\u0005\u0002\u0000\u0000\u00a8\u00a9\u0005\u0003\u0000\u0000\u00a9"+
		"\u00ad\u0005\u0005\u0000\u0000\u00aa\u00ae\u0005\u0015\u0000\u0000\u00ab"+
		"\u00ac\u0005\u0014\u0000\u0000\u00ac\u00ae\u0003\u0006\u0003\u0000\u00ad"+
		"\u00aa\u0001\u0000\u0000\u0000\u00ad\u00ab\u0001\u0000\u0000\u0000\u00ae"+
		"\u001f\u0001\u0000\u0000\u0000\u00af\u00b1\u0005\u0016\u0000\u0000\u00b0"+
		"\u00b2\u00032\u0019\u0000\u00b1\u00b0\u0001\u0000\u0000\u0000\u00b2\u00b3"+
		"\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b4"+
		"\u0001\u0000\u0000\u0000\u00b4!\u0001\u0000\u0000\u0000\u00b5\u00b6\u0003"+
		"0\u0018\u0000\u00b6\u00b7\u0005\u0017\u0000\u0000\u00b7\u00b8\u0003\u001c"+
		"\u000e\u0000\u00b8\u00be\u0001\u0000\u0000\u0000\u00b9\u00ba\u0003$\u0012"+
		"\u0000\u00ba\u00bb\u0005\u0017\u0000\u0000\u00bb\u00bc\u0003\u001c\u000e"+
		"\u0000\u00bc\u00be\u0001\u0000\u0000\u0000\u00bd\u00b5\u0001\u0000\u0000"+
		"\u0000\u00bd\u00b9\u0001\u0000\u0000\u0000\u00be#\u0001\u0000\u0000\u0000"+
		"\u00bf\u00c0\u0005/\u0000\u0000\u00c0%\u0001\u0000\u0000\u0000\u00c1\u00ca"+
		"\u0005\u0018\u0000\u0000\u00c2\u00c7\u0003(\u0014\u0000\u00c3\u00c4\u0005"+
		"\u0019\u0000\u0000\u00c4\u00c6\u0003(\u0014\u0000\u00c5\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c9\u0001\u0000\u0000\u0000\u00c7\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000\u00c8\u00cb\u0001\u0000"+
		"\u0000\u0000\u00c9\u00c7\u0001\u0000\u0000\u0000\u00ca\u00c2\u0001\u0000"+
		"\u0000\u0000\u00ca\u00cb\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0005\u001a\u0000\u0000\u00cd\'\u0001\u0000\u0000"+
		"\u0000\u00ce\u00cf\u0005/\u0000\u0000\u00cf\u00d0\u0005\u001b\u0000\u0000"+
		"\u00d0\u00d1\u0007\u0001\u0000\u0000\u00d1)\u0001\u0000\u0000\u0000\u00d2"+
		"\u00d5\u0005/\u0000\u0000\u00d3\u00d5\u0003\u0006\u0003\u0000\u00d4\u00d2"+
		"\u0001\u0000\u0000\u0000\u00d4\u00d3\u0001\u0000\u0000\u0000\u00d5+\u0001"+
		"\u0000\u0000\u0000\u00d6\u00d7\u0003*\u0015\u0000\u00d7\u00d8\u0005\u001c"+
		"\u0000\u0000\u00d8\u00d9\u0005\u001d\u0000\u0000\u00d9-\u0001\u0000\u0000"+
		"\u0000\u00da\u00db\u0003*\u0015\u0000\u00db\u00dc\u0005\u001c\u0000\u0000"+
		"\u00dc\u00dd\u00038\u001c\u0000\u00dd\u00de\u0005\u001d\u0000\u0000\u00de"+
		"/\u0001\u0000\u0000\u0000\u00df\u00e0\u0003*\u0015\u0000\u00e0\u00e1\u0005"+
		"\u001c\u0000\u0000\u00e1\u00e2\u00038\u001c\u0000\u00e2\u00e3\u0005\u0019"+
		"\u0000\u0000\u00e3\u00e4\u00038\u001c\u0000\u00e4\u00e5\u0005\u001d\u0000"+
		"\u0000\u00e5\u00e9\u0001\u0000\u0000\u0000\u00e6\u00e9\u0005(\u0000\u0000"+
		"\u00e7\u00e9\u0005\'\u0000\u0000\u00e8\u00df\u0001\u0000\u0000\u0000\u00e8"+
		"\u00e6\u0001\u0000\u0000\u0000\u00e8\u00e7\u0001\u0000\u0000\u0000\u00e9"+
		"1\u0001\u0000\u0000\u0000\u00ea\u00f4\u0005)\u0000\u0000\u00eb\u00f4\u0005"+
		"0\u0000\u0000\u00ec\u00f4\u00051\u0000\u0000\u00ed\u00f4\u0003$\u0012"+
		"\u0000\u00ee\u00f4\u00038\u001c\u0000\u00ef\u00f4\u0003\u0006\u0003\u0000"+
		"\u00f0\u00f4\u0003,\u0016\u0000\u00f1\u00f4\u0003.\u0017\u0000\u00f2\u00f4"+
		"\u00030\u0018\u0000\u00f3\u00ea\u0001\u0000\u0000\u0000\u00f3\u00eb\u0001"+
		"\u0000\u0000\u0000\u00f3\u00ec\u0001\u0000\u0000\u0000\u00f3\u00ed\u0001"+
		"\u0000\u0000\u0000\u00f3\u00ee\u0001\u0000\u0000\u0000\u00f3\u00ef\u0001"+
		"\u0000\u0000\u0000\u00f3\u00f0\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001"+
		"\u0000\u0000\u0000\u00f3\u00f2\u0001\u0000\u0000\u0000\u00f4\u00f6\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f7\u00034\u001a\u0000\u00f6\u00f5\u0001\u0000"+
		"\u0000\u0000\u00f6\u00f7\u0001\u0000\u0000\u0000\u00f73\u0001\u0000\u0000"+
		"\u0000\u00f8\u00f9\u0005\u0003\u0000\u0000\u00f9\u00fa\u0005/\u0000\u0000"+
		"\u00fa5\u0001\u0000\u0000\u0000\u00fb\u0100\u00032\u0019\u0000\u00fc\u00fd"+
		"\u0007\u0002\u0000\u0000\u00fd\u0101\u00032\u0019\u0000\u00fe\u00ff\u0007"+
		"\u0003\u0000\u0000\u00ff\u0101\u0003:\u001d\u0000\u0100\u00fc\u0001\u0000"+
		"\u0000\u0000\u0100\u00fe\u0001\u0000\u0000\u0000\u01017\u0001\u0000\u0000"+
		"\u0000\u0102\u010c\u0005.\u0000\u0000\u0103\u0108\u0003$\u0012\u0000\u0104"+
		"\u0105\u0007\u0004\u0000\u0000\u0105\u0107\u00038\u001c\u0000\u0106\u0104"+
		"\u0001\u0000\u0000\u0000\u0107\u010a\u0001\u0000\u0000\u0000\u0108\u0106"+
		"\u0001\u0000\u0000\u0000\u0108\u0109\u0001\u0000\u0000\u0000\u0109\u010c"+
		"\u0001\u0000\u0000\u0000\u010a\u0108\u0001\u0000\u0000\u0000\u010b\u0102"+
		"\u0001\u0000\u0000\u0000\u010b\u0103\u0001\u0000\u0000\u0000\u010c9\u0001"+
		"\u0000\u0000\u0000\u010d\u0111\u0003<\u001e\u0000\u010e\u0111\u0003>\u001f"+
		"\u0000\u010f\u0111\u0003@ \u0000\u0110\u010d\u0001\u0000\u0000\u0000\u0110"+
		"\u010e\u0001\u0000\u0000\u0000\u0110\u010f\u0001\u0000\u0000\u0000\u0111"+
		"\u0113\u0001\u0000\u0000\u0000\u0112\u0114\u00034\u001a\u0000\u0113\u0112"+
		"\u0001\u0000\u0000\u0000\u0113\u0114\u0001\u0000\u0000\u0000\u0114;\u0001"+
		"\u0000\u0000\u0000\u0115\u0116\u00038\u001c\u0000\u0116\u0118\u0005\u001b"+
		"\u0000\u0000\u0117\u0119\u00038\u001c\u0000\u0118\u0117\u0001\u0000\u0000"+
		"\u0000\u0118\u0119\u0001\u0000\u0000\u0000\u0119=\u0001\u0000\u0000\u0000"+
		"\u011a\u011b\u0003*\u0015\u0000\u011b\u011c\u0005\u001c\u0000\u0000\u011c"+
		"\u011d\u0003<\u001e\u0000\u011d\u011e\u0005\u0019\u0000\u0000\u011e\u011f"+
		"\u0003<\u001e\u0000\u011f\u0120\u0005\u001d\u0000\u0000\u0120?\u0001\u0000"+
		"\u0000\u0000\u0121\u0122\u0005\u0002\u0000\u0000\u0122\u0123\u0005,\u0000"+
		"\u0000\u0123\u0124\u0005\u0005\u0000\u0000\u0124A\u0001\u0000\u0000\u0000"+
		"\u0125\u0129\u0005-\u0000\u0000\u0126\u0129\u00030\u0018\u0000\u0127\u0129"+
		"\u0003>\u001f\u0000\u0128\u0125\u0001\u0000\u0000\u0000\u0128\u0126\u0001"+
		"\u0000\u0000\u0000\u0128\u0127\u0001\u0000\u0000\u0000\u0129C\u0001\u0000"+
		"\u0000\u0000\u0017GX_gox\u009c\u00ad\u00b3\u00bd\u00c7\u00ca\u00d4\u00e8"+
		"\u00f3\u00f6\u0100\u0108\u010b\u0110\u0113\u0118\u0128";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}