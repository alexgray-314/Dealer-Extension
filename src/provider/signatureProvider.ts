import * as vscode from 'vscode';

export class SignatureProvider implements vscode.SignatureHelpProvider {

    constructor(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.languages.registerSignatureHelpProvider(
                'deal', 
                this, 
                '(', 
                ','
            )
        );
    }

    provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {
        const signatureHelp = new vscode.SignatureHelp();

        const signature = new vscode.SignatureInformation(
            "add(a: number, b: number): number",
            "Adds two numbers together"
        );

        signature.parameters = [
            new vscode.ParameterInformation("a", "First number"),
            new vscode.ParameterInformation("b", "Second number")
        ];

        signatureHelp.signatures = [signature];
        signatureHelp.activeSignature = 0;
        signatureHelp.activeParameter = 0;

        return signatureHelp;
    }

    
}