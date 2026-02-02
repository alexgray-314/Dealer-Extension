// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStreams } from 'antlr4ts/CharStreams';
import * as vscode from 'vscode';
import { dealLexer } from './parser/dealLexer';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import { dealParser } from './parser/dealParser';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "dealer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('dealer.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Dealer!');
	});

	context.subscriptions.push(disposable);
	const diagnosticCollection = vscode.languages.createDiagnosticCollection('deal');
	vscode.workspace.onDidChangeTextDocument(e => {
      runParser(e.document, diagnosticCollection);
    });
}

// This method is called when your extension is deactivated
export function deactivate() {}

function runParser(
	document: vscode.TextDocument,
	collection: vscode.DiagnosticCollection
) {
  	const lexer = new dealLexer(CharStreams.fromString(document.getText()));
  	const tokens = new CommonTokenStream(lexer);
  	const parser = new dealParser(tokens);

	collection.clear();

	let diagnostics: vscode.Diagnostic[] = [];

	parser.removeErrorListeners();
	parser.addErrorListener({
		syntaxError(
		recognizer,
		offendingSymbol,
		line,
		charPositionInLine,
		msg
		) {
		const range = new vscode.Range(
			line - 1,
			charPositionInLine,
			line - 1,
			charPositionInLine + 1
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

	parser.prog(); // entry rule
	

	collection.set(document.uri, diagnostics);
	
}