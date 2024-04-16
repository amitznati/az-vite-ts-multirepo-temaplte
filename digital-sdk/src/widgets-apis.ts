import { WidgetType } from './types';
import baseReducer, {config as baseReducerConfig} from './baseReducer'
export default [
  {
    reducer: baseReducer,
    config: baseReducerConfig
  },
] as WidgetType[];
