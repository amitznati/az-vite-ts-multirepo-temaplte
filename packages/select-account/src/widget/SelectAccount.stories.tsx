import { StoryFn as Story, Meta } from "@storybook/react";

import SelectAccount from './SelectAccount.component';
import {SelectAccountPropsType} from '../SelectAccount.types.ts';
export default {
  title: "Pages/SelectAccount",
  component: SelectAccount,
} as Meta;

export const Default: Story<SelectAccountPropsType> = (args) => {
  return <SelectAccount {...args}>Button</SelectAccount>;
};