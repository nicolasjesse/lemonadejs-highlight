const vscode = require('vscode');
const Completion = require('./completion');
const Highlight = require('./highlight');
const Hover = require('./hover');

function activate(context) {
	vscode.languages.registerCompletionItemProvider(['typescript', 'javascript'], new Completion(), '<');
    vscode.languages.registerDocumentHighlightProvider(['typescript', 'javascript'], new Highlight());
    vscode.languages.registerHoverProvider(['typescript', 'javascript'], new Hover());
}

function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;