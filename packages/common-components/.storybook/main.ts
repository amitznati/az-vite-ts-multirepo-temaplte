import commonConfigs from "../../../.storybook/main";

const config: any = {
  ...commonConfigs,
  stories: ["../src/**/*..mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
};

export default config;
