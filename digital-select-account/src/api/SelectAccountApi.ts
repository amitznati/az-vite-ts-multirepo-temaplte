import {BaseApi} from 'digital-sdk';
import selectors from "./SelectAccountSelectors";

export const ActionTypes = {
  SelectAccount_UPDATE_DATA: "SelectAccount_UPDATE_DATA",
};
export default class SelectAccountApi extends BaseApi {
  updateData = (data: any) => {
    this.dispatchStoreAction(ActionTypes.SelectAccount_UPDATE_DATA, data);
  };

  getDataSelector = () => {
    return selectors.getDataSelector(this.store.getState());
  };
}
