import BaseApi from '../../BaseApi';
import selectors from "./SelectAccountSelectors";

export interface SelectAccountApiType {
  updateData: (data: any) => void
  getDataSelector: () => any
}

export const ActionTypes = {
  SelectAccount_UPDATE_DATA: "SelectAccount_UPDATE_DATA",
};
export default class SelectAccountApi extends BaseApi implements SelectAccountApiType {
  updateData = (data: any) => {
    this.dispatchStoreAction(ActionTypes.SelectAccount_UPDATE_DATA, data);
  };

  getDataSelector = () => {
    return selectors.getDataSelector(this.store.getState());
  };
}
