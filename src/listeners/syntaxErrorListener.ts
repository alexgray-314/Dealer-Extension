import { ANTLRErrorListener, ATNConfigSet, ATNSimulator, BitSet, DFA, Parser, RecognitionException, Recognizer, Token } from "antlr4ng";
import * as vscode from "vscode";

export class SyntaxErrorListener implements ANTLRErrorListener {
    
    diagnostics: vscode.Diagnostic[];

    constructor(diagnostics: vscode.Diagnostic[]) {
        this.diagnostics = diagnostics;
    }
    
    syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, charPositionInLine: number, msg: string, e: RecognitionException | null): void {
        const length : number = Math.max((((offendingSymbol?.text)??"").length), 1);

        const range = new vscode.Range(
            line - 1,
            charPositionInLine,
            line - 1,
            charPositionInLine + length
        );

        this.diagnostics.push(
            new vscode.Diagnostic(
                range,
                msg,
                vscode.DiagnosticSeverity.Error
            )
        );
    }
    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
        
    }
    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
        
    }
    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
        
    }
    
}