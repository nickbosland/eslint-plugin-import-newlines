# @zsoltszavo/eslint-plugin-import-lines

Plugin for linting imports that must be broken into multiple lines above a certain number of items.

There is only one rule at the moment &ndash; `imports-multiline` &ndash; which will report when there are more than 5 values in a line by default, and if there are less it will report when the import is not on a single line.

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

Optionally, specify the maximum number of items before the plugin requires breaking up the `import` to multiple lines:

```json
{
    "rules": {
        "@zsoltszavo/import-lines/imports-multiline": ["error", 6]
    }
}
```

### Testing

Tests can be run via `npm run test`, make sure these pass after every change. Be sure to add tests for new features.
