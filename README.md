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

The is plugin has two optional arguments, `maxItems` (default: `4`) and `maxLineLength` (default: `Infinity`). The latter can be especially useful when used with the `max-len` rule to avoid lines becoming too long after the automatic fixes are applied.

You can configure them like so: 

* To specify **6** as the maximum number of items before the plugin requires breaking up the `import` to multiple lines:

  ```json
  {
      "rules": {
          "@zsoltszavo/import-lines/imports-multiline": [
              "error",
              6
          ]
      }
  }
  ```

* To specify the maximum number of items as **4** and the length of the line before splitting is required as **120**:

  ```json
  {
      "rules": {
          "@zsoltszavo/import-lines/imports-multiline": [
              "error",
              4,
              120
          ]
      }
  }
  ```
  
  This argument ensures that you are notified if the line length exceeds the configured maximum, and the plugin will automatically fix the error by splitting the import to multiple lines.
  
  In addition, if there are less than 4 items, but they would exceed the maximum length if put on the same line, the automatic fix for that will not be applied.

### Testing

Tests can be run via `npm run test`, make sure these pass after every change. Be sure to add tests for new features.
