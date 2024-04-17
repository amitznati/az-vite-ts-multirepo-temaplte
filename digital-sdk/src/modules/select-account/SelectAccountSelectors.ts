import { createSelector } from "reselect";
import config from "./SelectAccountConfig";

const sliceSelector = (state: any) => state[config.sliceName];

export const getDataSelector = createSelector(sliceSelector, (slice) => {
  return slice.data;
});

const SelectAccountSelectors = {
  getDataSelector,
};

export default SelectAccountSelectors;
