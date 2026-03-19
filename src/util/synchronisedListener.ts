import { ParserRuleContext } from "antlr4ts";
import { ErrorNode, ParseTreeListener, TerminalNode } from "antlr4ts/tree";
import { dealListener } from "../language/dealListener";
import { AssignContext, BexprContext, Define_functionContext, DefinitionContext, ForContext, SetContext, TermContext, VariableContext } from "../language/dealParser";

// Runs multiple listeners at the same time to allow for id checking within scope
export class SynchronisedListener implements dealListener {
  private listeners: dealListener[];

  constructor(...listeners: dealListener[]) {
    this.listeners = listeners;
  }

  enterAssign (ctx: AssignContext) {
    this.listeners.forEach(l => l.enterAssign?.(ctx));
  }

  enterDefinition (ctx: DefinitionContext) {
    this.listeners.forEach(l => l.enterDefinition?.(ctx));
  }

  enterBexpr (ctx: BexprContext) {
    this.listeners.forEach(l => l.enterBexpr?.(ctx));
  }

  enterSet (ctx: SetContext) {
    this.listeners.forEach(l => l.enterSet?.(ctx));
  }

  enterTerm (ctx: TermContext) {
    this.listeners.forEach(l => l.enterTerm?.(ctx));
  }

  enterVariable (ctx: VariableContext) {
    this.listeners.forEach(l => l.enterVariable?.(ctx));
  }

  enterFor (ctx: ForContext) {
    this.listeners.forEach(l => l.enterFor?.(ctx));
  }

  exitFor (ctx: ForContext) {
    this.listeners.forEach(l => l.exitFor?.(ctx));
  }

  enterDefine_function (ctx: Define_functionContext) {
    this.listeners.forEach(l => l.enterDefine_function?.(ctx));
  }

  exitDefine_function (ctx: Define_functionContext) {
    this.listeners.forEach(l => l.exitDefine_function?.(ctx));
  }

  
  // Boilerplate stuff for good practice
  visitTerminal(node: TerminalNode) {
    this.listeners.forEach(l => l.visitTerminal?.(node));
  }

  visitErrorNode(node: ErrorNode) {
    this.listeners.forEach(l => l.visitErrorNode?.(node));
  }

  enterEveryRule(ctx: ParserRuleContext) {
    this.listeners.forEach(l => l.enterEveryRule?.(ctx));
  }

  exitEveryRule(ctx: ParserRuleContext) {
    this.listeners.forEach(l => l.exitEveryRule?.(ctx));
  }
}