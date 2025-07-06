# 🐍 Black Formatter for VSCode

A simple Visual Studio Code extension that formats Python code using [`black`](https://github.com/psf/black) — *the uncompromising code formatter*.

## ✨ Features

- Formats Python files using `black`
- Integrates with VSCode's formatting system (`Shift + Alt + F`)
- Supports `editor.formatOnSave`
- Works with global or virtualenv `black`

## 🚀 Getting Started

### 1. Install the Extension

Install from `.vsix` (if local build):

```bash
code --install-extension black-formatter-0.0.1.vsix
## Requirements

Make sure you have black installed:

```bash
pip install black

## Extension Settings

In your VSCode settings.json:

{
  "editor.formatOnSave": true
}

## Configuration

{
  "blackFormatter.path": "black"
}

Set the path to your black executable, e.g.:

- "blackFormatter.path": "black" (default)

- "blackFormatter.path": "/usr/local/bin/black"

- "blackFormatter.path": "${workspaceFolder}/venv/bin/black"

## Usage

- Open a Python file

- Press Shift + Alt + F (Format Document)

- Or save the file if formatOnSave is enabled

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

🧑‍💻 License
MIT
