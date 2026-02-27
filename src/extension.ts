// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { dealLexer } from './language/dealLexer';
import { dealParser } from './language/dealParser';
import { VariableAnalysis } from './provider/variableAnalysis';
import { dealListener } from './language/dealListener';
import { DealInlayHintsProvider } from './provider/inlayHintsProvider';
import { TokenProvider } from './provider/tokenProvider';
import { CompletionProvider } from './provider/completionProvider';
import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4ng';
import { SyntaxErrorListener } from './listeners/syntaxErrorListener';

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

  	const lexer = new dealLexer(CharStream.fromString(document.getText()));
  	const tokens = new CommonTokenStream(lexer);
  	const parser = new dealParser(tokens);

	collection.clear();

	const diagnostics: vscode.Diagnostic[] = [];

	parser.removeErrorListeners();
	parser.addErrorListener(new SyntaxErrorListener(diagnostics));

	const tree = parser.prog(); // entry rule
	const listener : dealListener = new VariableAnalysis(outputChannel, diagnostics);
	ParseTreeWalker.DEFAULT.walk(listener, tree);

	collection.set(document.uri, diagnostics);
	
}