import {BusinessComponents} from 'common-components';

const {PageContainer} = BusinessComponents;

/* snipped for brevity */

export const withMuiTheme = (Story: any) => (
  <PageContainer>
      <Story />
  </PageContainer>
);

export const decorators = [withMuiTheme];
