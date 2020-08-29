# eslint-plugin-import-newlines  [![Build Status](https://travis-ci.com/SeinopSys/eslint-plugin-import-newlines.svg?branch=master)](https://travis-ci.com/SeinopSys/eslint-plugin-import-newlines)

ESLint plugin for enforcing newlines in ES6 import statements past a certain number of items.

There is only one rule in this plugin which will report when there are more than 4 values in a line by default, and if there are less it will report when the import is not on a single line.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-newlines`:

```
$ npm install eslint-plugin-import-newlines --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-newlines` globally.

## Usage

Add `import-newlines` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "plugins": [
        "import-newlines"
    ]
}
```

Then add the rule in the rules section.

```json
{
    "rules": {
        "import-newlines/enforce": "error"
    }
}
```

The is plugin has two optional arguments, `maxItems` (default: `4`) and `maxLineLength` (default: `Infinity`). The latter can be especially useful when used with the `max-len` rule to avoid lines becoming too long after the automatic fixes are applied.

You can configure them like so:

* To specify **6** as the maximum number of items before the plugin requires breaking up the `import` to multiple lines:

  ```json
  {
      "rules": {
          "import-newlines/enforce": [
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
          "import-newlines/enforce": [
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
