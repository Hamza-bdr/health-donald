import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import hooksPlugin from "eslint-plugin-react-hooks";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";

const compat = new FlatCompat();

const eslintConfig = [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // Tailwind
  ...tailwind.configs["flat/recommended"],
  // React
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  // NextJS
  {
    ignores: [".next/"],
  },
  ...fixupConfigRules(
    compat.extends("plugin:@next/next/core-web-vitals, plugin:@next/typescript")
  ),
  // Rules configS
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/no-unescaped-entities": 0,
      "react/prop-types": 0,
    },
  },
  // Ignore files
  {
    ignores: ["tailwind.config.ts", "next.config.ts", "*.ts"],
  },
];

export default eslintConfig;
