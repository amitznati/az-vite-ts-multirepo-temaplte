const initialState: { spinnerOn: Array<any>; spinnerOptions: any, persistData: any } = {
  spinnerOn: [],
  spinnerOptions: null,
  persistData: {}
};
const types = {
  REQUEST: '_REQUEST',
  SUCCESS: '_SUCCESS',
  FAILURE: '_FAILURE'
};
const reducer = (state = initialState, action: any) => {
  let newState = { ...state };
  const type = action && action.type;
  const payload = (action && action.payload) || {};
  if (type) {
    if (type.endsWith(types.REQUEST)) {
      newState = {
        ...state,
        spinnerOn: [
          ...state.spinnerOn,
          type.slice(0, type.indexOf(types.REQUEST))
        ]
      };
    } else if (type.endsWith(types.FAILURE) || type.endsWith(types.SUCCESS)) {
      const typeName = type.slice(0, type.length - 8);
      newState = {
        ...state,
        spinnerOn: [...state.spinnerOn.filter((s) => s !== typeName)]
      };
    } else if (type === 'SPINNER_ACTION') {
      let spinnerOn = [...state.spinnerOn];
      if (payload.isOn) {
        spinnerOn.push(payload.spinnerId);
      } else {
        spinnerOn = spinnerOn.filter((s) => s !== payload.spinnerId);
      }
      newState = {
        ...state,
        spinnerOn: [...spinnerOn],
        spinnerOptions: { ...state.spinnerOptions, ...payload.options }
      };
    }
  }
  return newState;
};
export const config = {
  sliceName: "general",
  apiName: "",
  persist: {
    whitelist: ["persistData"],
  },
};

export default reducer;
