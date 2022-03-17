// eslint-disable-next-line import/no-extraneous-dependencies
const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");

const config = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-order"],
  ignoreFiles: ["build/**/*.css"],
  rules: {
    "order/order": ["custom-properties", "declarations"],

    "order/properties-order": [sortOrderSmacss({ emptyLineBefore: "always" })],

    "max-nesting-depth": 3,

    "custom-property-pattern": [
      "^[a-z]+([a-z0-9-]*[a-z0-9])?$",
      {
        message: "Custom property names must be camelCase",
      },
    ],

    "no-descending-specificity": [
      true,
      {
        ignore: ["selectors-within-list"],
      },
    ],

    "selector-class-pattern": [
      "^[a-z]+([a-z0-9-_]*[a-z0-9])?$",
      {
        message: "Class names must be kebab-case",
      },
    ],

    "scss/at-mixin-pattern": [
      "(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])",
      {
        message: "Mixin names must be camelCase",
      },
    ],
  },
};

module.exports = config;
