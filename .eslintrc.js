module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "google"],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["vue"],
  rules: {
    strict: "off",
    "no-unused-vars": "warn",
    "no-unused-components": "off",
    "vue/no-unused-components": "warn",
    camelcase: "off",
    "max-len": "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "quote-props": ["error", "as-needed"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "object-curly-spacing": ["error", "always"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": "off",
    "prefer-const": "off",
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "operator-linebreak": [
      "warn",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "valid-jsdoc": "warn",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
};
