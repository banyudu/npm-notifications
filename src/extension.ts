// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import npmLatestVersions from 'npm-latest-versions'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate (context: vscode.ExtensionContext): void {
  // nothing
}

// this method is called when your extension is deactivated
export function deactivate (): void {
  // nothing
}

;
setInterval(async () => {
  const moduleName = 'express'
  const versions = await npmLatestVersions({
    module: moduleName,
    since: new Date('2019/01/01')
  })
  const message = Object.keys(versions).map(tag => `${moduleName}@${versions[tag].version}`).join('\n')
  vscode.window.showInformationMessage(message)
}, 3 * 1000)
