import commonConfigs from "../../.storybook/main";
// import path from "path";

const packagesPath = __dirname.replace(/\\/g, '/' ).replace('spa-consumer/.storybook', 'packages');
console.log({dirName: __dirname, packagesPath});

const config: any = {
  ...commonConfigs,
  stories: [`${packagesPath}/**/src/**/*.stories.@(js|jsx|ts|tsx)`],
};

export default config;
