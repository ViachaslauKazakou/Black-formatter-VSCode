import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentFormattingEditProvider('python', {
    provideDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
      return new Promise((resolve, reject) => {
        const blackPath = vscode.workspace.getConfiguration().get('blackFormatter.path', 'black');

        const filePath = document.fileName;

        cp.execFile(blackPath, ['--quiet', filePath], (err, stdout, stderr) => {
          if (err) {
            vscode.window.showErrorMessage(`Black format error: ${stderr}`);
            return reject([]);
          }

          // после форматирования нужно обновить документ
          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          );
          resolve([vscode.TextEdit.replace(fullRange, document.getText())]);
        });
      });
    }
  });
}

export function deactivate() {}

