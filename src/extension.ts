// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStreams } from 'antlr4ts/CharStreams';
import * as vscode from 'vscode';
import { dealLexer } from './parser/dealLexer';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import { dealParser } from './parser/dealParser';
import { DebugOutputVisitor } from './debugOutputVisitor';
import { BasicListener } from './basicListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { dealListener } from './parser/dealListener';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const outputChannel : vscode.OutputChannel = vscode.window.createOutputChannel("Listener");

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const visitCommand = vscode.commands.registerCommand('dealer.visit', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document : vscode.TextDocument = editor.document;
			const lexer = new dealLexer(CharStreams.fromString(document.getText()));
			const tokens = new CommonTokenStream(lexer);
			const parser = new dealParser(tokens);
			const tree = parser.prog();
			const visitor : DebugOutputVisitor = new DebugOutputVisitor();
			visitor.visit(tree);
		}
		
	});

	context.subscriptions.push(visitCommand);
	const diagnosticCollection = vscode.languages.createDiagnosticCollection('deal');
	vscode.workspace.onDidChangeTextDocument(e => {
     	runParser(e.document, diagnosticCollection, outputChannel);
    });
}

// This method is called when your extension is deactivated
export function deactivate() {}

function runParser(
	document: vscode.TextDocument,
	collection: vscode.DiagnosticCollection,
	outputChannel : vscode.OutputChannel
) {
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
	const listener : dealListener = new BasicListener(outputChannel, diagnostics);
	ParseTreeWalker.DEFAULT.walk(listener, tree);

	collection.set(document.uri, diagnostics);
	
}