import { StoryFn as Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from ".";

export default {
  title: "Core/Actions/Button",
  component: Button,
  argTypes: {
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const BrandColors: Story<ButtonProps> = (args) => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
      <Button {...args} variant="text">
        Link
      </Button>
      <Button {...args} variant="contained">
        contained
      </Button>
    </div>
  );
};
BrandColors.args = {};

