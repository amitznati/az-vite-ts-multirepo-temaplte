import {BusinessComponents} from 'common-components/src';
import 'spa-consumer/src/styles/styles.scss';

const {MUIThemeProvider} = BusinessComponents;

/* snipped for brevity */

export const withMuiTheme = (Story: any) => (
  <MUIThemeProvider>
      <Story />
  </MUIThemeProvider>
);

export const decorators = [withMuiTheme];
