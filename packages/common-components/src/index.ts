import * as hooks from "./hooks";
import * as ControlComponents from './control-components';
import * as BusinessComponents from './business-components';
import * as MUI from '@mui/material';

export {
  hooks,
  ControlComponents,
  BusinessComponents,
  MUI
}
declare global {
  interface Window { amdocs: {[key: string]: any; }}
}

window.amdocs = {
  ...window.amdocs,
  ["digital-common-components"]: {
    hooks,
    ControlComponents,
    BusinessComponents,
    MUI
  }
};
