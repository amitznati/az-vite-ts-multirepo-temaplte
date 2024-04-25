import { getStoreInstance, getInstance } from './instanceHandler';
import BaseApi from './BaseApi';
import SimpleServices from './services/SimpleServices';
export {
  getStoreInstance,
  getInstance,
  BaseApi,
  SimpleServices
};

declare global {
  interface Window { amdocs: {[key: string]: any; }}
}

window.amdocs = {
  ...window.amdocs,
  ["digital-sdk"] : {
    getStoreInstance,
    getInstance,
    BaseApi,
    SimpleServices
  }
};