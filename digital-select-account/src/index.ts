import SelectAccountApi from "./api/SelectAccountApi";
import SelectAccountReducer from "./api/SelectAccountReducer";
import SelectAccountConfig from "./api/SelectAccountConfig";
import SelectAccountComponent from "./widget/SelectAccount.component";
import SelectAccountConnectedWidget from "./widget/SelectAccount.connect";

export const widget = {
  api: SelectAccountApi,
  reducer: SelectAccountReducer,
  config: SelectAccountConfig,
  component: SelectAccountComponent,
  connectedWidget: SelectAccountConnectedWidget
};

export default widget;
