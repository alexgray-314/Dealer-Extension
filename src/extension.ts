// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStreams } from 'antlr4ts/CharStreams';
import * as vscode from 'vscode';
import { dealLexer } from './language/dealLexer';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import { dealParser } from './language/dealParser';
import { VariableAnalysis } from './diagnostics/variableAnalysis';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { dealListener } from './language/dealListener';
import { DealInlayHintsProvider } from './provider/inlayHintsProvider';
import { TokenProvider } from './provider/tokenProvider';
import { CompletionProvider } from './provider/completionProvider';
import { TypeSafety } from './diagnostics/typeSafety';
import { TypeChecker } from './helper/typecheck';
import { InfiniteLoop } from './diagnostics/infiniteloop';
import { IDRecord } from './helper/idRecord';
import { SynchronisedListener } from './util/synchronisedListener';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const outputChannel : vscode.OutputChannel = vscode.window.createOutputChannel("Listener");

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const visitCommand = vscode.commands.registerCommand('dealer.load', () => {
		console.log("hello world");
	});

	context.subscriptions.push(visitCommand);

	new TokenProvider(context);
	new CompletionProvider(context);

	// INLAY HINTS
	// const provider: vscode.InlayHintsProvider = new DealInlayHintsProvider();

	// context.subscriptions.push(
	// 	vscode.languages.registerInlayHintsProvider(
	// 		{ language: "deal" },
	// 		provider
	// 	)
	// );

	const diagnosticCollection = vscode.languages.createDiagnosticCollection('deal');
	vscode.workspace.onDidChangeTextDocument(e => {
     	runParser(e.document, diagnosticCollection, outputChannel);
    });
	vscode.workspace.textDocuments.forEach((doc) => {
		runParser(doc, diagnosticCollection, outputChannel);
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}

function runParser(
	document: vscode.TextDocument,
	collection: vscode.DiagnosticCollection,
	outputChannel : vscode.OutputChannel
) {

	if (document.languageId !== 'deal') {
        return;
    }

  	const lexer = new dealLexer(CharStreams.fromString(document.getText()));
  	const tokens = new CommonTokenStream(lexer);
  	const parser = new dealParser(tokens);

	collection.clear();

	const diagnostics: vscode.Diagnostic[] = [];

	parser.removeErrorListeners();
	parser.addErrorListener({
		syntaxError(
		recognizer,
		offendingSymbol,
		line,
		charPositionInLine,
		msg
		) {

			const length : number = Math.max((((offendingSymbol?.text)??"").length), 1);

			const range = new vscode.Range(
				line - 1,
				charPositionInLine,
				line - 1,
				charPositionInLine + length
			);

			diagnostics.push(
				new vscode.Diagnostic(
					range,
					msg,
					vscode.DiagnosticSeverity.Error
				)
			);

		}
	});

	const tree = parser.prog(); // entry rule

	// Keep track of types for declared ids
	// Including nested function definitions and for loops
	const ids : Map<string,string> = new Map<string,string>();
	const idTracker : dealListener = new IDRecord(ids);
	
	const varAnalysis : dealListener = new VariableAnalysis(diagnostics, ids);
	const typeSafety : dealListener = new TypeSafety(diagnostics, ids);
	const infiniteLoops : dealListener = new InfiniteLoop(diagnostics);

	const synListener : dealListener = new SynchronisedListener(idTracker, varAnalysis, typeSafety, infiniteLoops);
	ParseTreeWalker.DEFAULT.walk(synListener, tree);

	collection.set(document.uri, diagnostics);
	
}