import { WidgetType } from './types';
import baseReducer, {config as baseReducerConfig} from './baseReducer';
import {widget as SelectAccount} from './modules/select-account';
export default [
  {
    reducer: baseReducer,
    config: baseReducerConfig
  },
  SelectAccount,

] as WidgetType[];
