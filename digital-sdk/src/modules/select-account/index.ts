import SelectAccountApi, {SelectAccountApiType as ISelectAccountApiType} from "./SelectAccountApi.ts";
import reducer from "./SelectAccountReducer.ts";
import config from "./SelectAccountConfig.ts";

export type SelectAccountApiType = ISelectAccountApiType;

export const widget = {
  api: SelectAccountApi,
  reducer,
  config,
};