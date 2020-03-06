module.exports = {
  plugins: ["import"],
  rules: {
    // Enforce named exports over default exports
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",

    // No parameter reassignment, we should not allow function params to be reassigned
    "no-param-reassign": [2, { props: false }]
  }
};
