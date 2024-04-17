import { WidgetType } from './types';
import baseReducer, {config as baseReducerConfig} from './baseReducer';
import {widget as SelectAccount} from './modules/select-account';
import BaseApi from "./BaseApi.ts";
export default [
  {
    reducer: baseReducer,
    config: baseReducerConfig,
    api: BaseApi
  },
  SelectAccount,

] as WidgetType[];
