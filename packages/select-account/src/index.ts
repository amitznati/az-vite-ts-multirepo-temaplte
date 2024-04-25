import {default as SelectAccount} from "./widget/SelectAccount.connect";

export default SelectAccount;
declare global {
  interface Window { amdocs: {[key: string]: any; }}
}

window.amdocs = {
  ...window.amdocs,
  ["digital-select-account"]: SelectAccount
};