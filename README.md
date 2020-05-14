# @zsoltszavo/eslint-plugin-import-lines

Plugin for import multilines waring.

Currently having only one rule, the imports-multiline which will throw error in case of more than 5 imports in a line,
and if its multiline already it will throw error if there is not only one in a line

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@zsoltszavo/eslint-plugin-import-lines`:

```
$ npm install @zsoltszavo/eslint-plugin-import-lines --save-dev
```

## Usage

Add `@zsoltszavo/import-lines` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "plugins": [
        "@zsoltszavo/import-lines"
    ]
}
```

Then add the rule in the rules section.

```json
{
    "rules": {
        "@zsoltszavo/import-lines/imports-multiline": "error"
    }
}
```