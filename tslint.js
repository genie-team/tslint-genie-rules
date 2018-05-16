const path = require("path");

module.exports = {
  "extends": ["tslint-eslint-rules"],
  "rulesDirectory": path.join(path.dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
  "rules": {
    "align": true,
    "await-promise": true,
    "ban-comma-operator": true,
    "class-name": true,
    "comment-format": {"options": ["check-space"]},
    "encoding": true,
    "eofline": true,
		"indent": [true, "tabs", 2],
    "jsdoc-format": [true, "check-multiline-start"],
    "linebreak-style": [true, "LF"],
		"new-parens": true,
		"no-consecutive-blank-lines": [true, 1],
		"no-constant-condition": true,
		"no-control-regex": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-duplicate-switch-case": true,
    "no-duplicate-variable": true,
		"no-empty": true,
		"no-empty-character-class": true,
    "no-eval": true,
		"no-extra-boolean-cast": true,
		"no-extra-semi": true,
		"no-import-side-effect": [true, {"ignore-module": "(\\.html|\\.css)$"}],
    "no-inferrable-types": true,
    "no-internal-module": true,
    "no-misused-new": true,
    "no-non-null-assertion": true,
    "no-sparse-arrays": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unsafe-finally": true,
		"no-unused-variable": [true, {"ignore-pattern": "^_"}],
    "no-var-keyword": true,
    "no-var-requires": true,
    "one-line": {
      "options": [
        "check-catch",
        "check-else",
        "check-open-brace",
        "check-whitespace"
      ]
    },
    "ordered-imports": {
      "options": {
        "import-sources-order": "any",
        "named-imports-order": "lowercase-last"
      }
    },
    "prefer-conditional-expression": true,
    "prefer-const": true,
    "quotemark": {"options": ["single", "jsx-double"]},
    "radix": true,
    "semicolon": {"options": ["always"]},
    "triple-equals": {"options": ["allow-null-check"]},
    "typedef-whitespace": {
      "options": {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    },
    "use-isnan": true,
    "variable-name": {"options": ["ban-keywords"]},
    "whitespace": {
      "options": [
        "check-branch",
        "check-decl",
        "check-operator",
        "check-separator",
        "check-type"
      ]
		},
  }
}
