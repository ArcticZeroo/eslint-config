module.exports = {
   env: {
      es6: true,
      node: true,
      mocha: true
   },
   globals: {
      frozor: true
   },
   extends: "eslint:recommended",
   rules: {
      "indent": [
         "error", 4, { "SwitchCase": 1 }
      ],
      "linebreak-style": [
         "error",
         "windows"
      ],
      "quotes": [
         "error",
         "single"
      ],
      "semi": [
         "error",
         "always"
      ],
      "object-curly-spacing": [
         "error",
         "always"
      ],
      "arrow-spacing": [
         "error",
         {
            "before": true,
            "after": true
         }
      ],
      "accessor-pairs": "error",
      "array-callback-return": "error",
      "no-else-return": "error",
      "no-empty-function": [
         "warn",
         {
            "allow": [
               "constructors"
            ]
         }
      ],
      "no-implicit-coercion": [
         "error",
         {
            "allow": ["!!"]
         }
      ],
      "no-return-await": "error",
      "no-self-assign": "error",
      "no-throw-literal": "error",
      "require-await": "warn",
      "yoda": [
         "error",
         "never",
         {
            "exceptRange": true
         }
      ],
      "no-shadow": [
         "error"
      ],
      "global-require": "warn",
      "handle-callback-err": [
         "error"
      ],
      "one-var": [
         "error",
         {
            "initialized": "never",
            "uninitialized": "consecutive"
         }
      ],
      "generator-star-spacing": [
         "error",
         {
            "before": true,
            "after": false
         }
      ],
      "no-var": [
         "error"
      ],
      "object-shorthand": [
         "error",
         "always",
         {
            "avoidQuotes": true
         }
      ],
      "prefer-rest-params": [
         "error"
      ],
      "prefer-template": [
         "error"
      ],
      "prefer-const": [
         "error",
         {
            "destructuring": "all"
         }
      ],
      "no-undef": "warn",
      "space-before-blocks": ["error", "always"],
      "keyword-spacing": [
         "error"
      ],
      "comma-spacing": ["error"],
      "space-infix-ops": "error",
      "template-curly-spacing": [
         "error",
         "never"
      ],
      "arrow-parens": [
         "error",
         "as-needed"
      ],
      "no-multi-spaces": [
         "error",
         {
            "ignoreEOLComments": true
         }
      ],
      "prefer-destructuring": [
         "error",
         {
            "array": true,
            "object": true
         }
      ]
   },
   parserOptions: {
      ecmaVersion: 13
   }
};