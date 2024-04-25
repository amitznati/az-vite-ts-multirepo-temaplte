import type { Preview } from "@storybook/react";
import { withMuiTheme } from "./with-mui-theme.tsx";
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  decorators:[
    withMuiTheme
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: (a: any, b: any) => {
        return a.title === b.title
            ? 0
            : a.id.localeCompare(b.id, { numeric: true });
      },
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;