import * as hooks from "./hooks";
import * as ControlComponents from './control-components';

export {
  hooks,
  ControlComponents
}
declare global {
  interface Window { amdocs: {[key: string]: any; }}
}

window.amdocs = {
  ...window.amdocs,
  ["digital-common-components"]: {
    hooks,
    ControlComponents
  }
};
