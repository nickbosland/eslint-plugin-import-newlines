/* eslint-env mocha */
const { RuleTester } = require('eslint');
const rule = require('../lib/imports-multiline');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
});

ruleTester.run('imports-multiline', rule, {
  valid: [
    {
      code: "import { a, b, c, d } from './test'",
    },
    {
      code: "import { a, b, c, d } from './test'",
      options: [6],
    },
    {
      code: "import {\na,\nb,\nc\n} from './test'",
      options: [2],
    },
    {
      code: "import test from './test'",
    },
    {
      code: "import test, { a } from './test'",
    },
    {
      code: "import * as test from './test'",
    },
    {
      code: "import './test.css'",
    },
  ],

  invalid: [
    {
      code: "import {\na,\nb\n} from './test'",
      output: "import { a, b } from './test'",
      options: [4],
      errors: [{ messageId: 'mustNotSplit' }],
    },
    {
      code: "import test, {\na as apple,\nb as banana\n} from './test'",
      output: "import test, { a as apple, b as banana } from './test'",
      options: [2],
      errors: [{ messageId: 'mustNotSplit' }],
    },
    {
      code: "import test, {\na,\nb\n} from './test'",
      output: "import test, { a, b } from './test'",
      errors: [{ messageId: 'mustNotSplit' }],
    },
    {
      code: "import { a, b, c, d } from './test'",
      output: "import {\na,\nb,\nc,\nd\n} from './test'",
      options: [1],
      errors: [{ messageId: 'mustSplit' }],
    },
    {
      code: "import test, { a, b } from './test'",
      output: "import test, {\na,\nb\n} from './test'",
      options: [1],
      errors: [{ messageId: 'mustSplit' }],
    },
    {
      code: "import test, { a, b as banana } from './test'",
      output: "import test, {\na,\nb as banana\n} from './test'",
      options: [1],
      errors: [{ messageId: 'mustSplit' }],
    },
    {
      code: "import { \na,\n\nb,\n\n\nc,\n\n\nd,\n\n\n\ne\n} from './test'",
      output: "import {\na,\nb,\nc,\nd,\ne\n} from './test'",
      options: [4],
      errors: [{ messageId: 'noBlankBetween' }],
    },
    {
      code: "import { a,\n\n\nb } from './test'",
      output: "import {\na,\nb\n} from './test'",
      options: [1],
      errors: [{ messageId: 'noBlankBetween' }],
    },
    {
      code: "import {\n\na,\nb\n\n\n} from './test'",
      output: "import {\na,\nb\n} from './test'",
      options: [1],
      errors: [{ messageId: 'limitLineCount' }],
    },
    {
      code: "import {\na, b, c\n} from './test'",
      output: "import {\na,\nb,\nc\n} from './test'",
      options: [1],
      errors: [{ messageId: 'limitLineCount' }],
    },
  ],
});
