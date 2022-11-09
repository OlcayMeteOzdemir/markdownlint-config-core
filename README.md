# markdownlint-config-core

Custom MarkdownLint settings as an extensible shared config.

## Installation

If using npm version 5+:

```bash
npx install-peerdeps --dev @meteozdemir/markdownlint-config-core
```

If using npm version version < 5:

```bash
npm install -g install-peerdeps
install-peerdeps --dev @meteozdemir/markdownlint-config-core
```

If want to install manually without install-peerdeps CLI:

```bash
npm i -D @meteozdemir/markdownlint-config-core markdownlint-cli
```

## Usage

A `.markdownlint.json` file will be automatically created in the root of your project with:

```json
{
    "extends": "@meteozdemir/markdownlint-config-core"
}
```

If the file is not created automatically by any reason, simply create a `.markdownlint.json` file in the root of project and copy code above.

## Rule Override

Add any rule you want to override to `.markdownlint.json` file.

```json
{
    "extends": "@meteozdemir/markdownlint-config-core",
    // ...
    "heading-increment": false,
    "list-indent": false
}
```
