import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { ApisType, WidgetType } from './types';
import widgets from './widgets-apis';
import sessionStorage from "redux-persist/es/storage/session";

const storage = sessionStorage;

const reducerMap: any = {};
const persistSlices: string[] = [];
(widgets as Array<WidgetType>).forEach((widget) => {
  if (widget.config.persist) {
    reducerMap[widget.config.sliceName] = persistReducer(
      {
        key: widget.config.sliceName,
        version: 1,
        storage,
        ...widget.config.persist
      },
      widget.reducer
    );
    persistSlices.push(widget.config.sliceName);
  } else {
    reducerMap[widget.config.sliceName] = widget.reducer;
  }
});

const createStoreInstance = () => {
  const reducers = combineReducers(reducerMap);
  const resettableRootReducer = (
    state:
      | { [x: string]: unknown }
      | Partial<{ [x: string]: unknown }>
      | undefined,
    action: { type: any }
  ) => {
    if (action.type === '@@RESET_STORE') {
      Promise.all(
        persistSlices.map(async (slice) => {
          return storage.removeItem(`persist:${slice}`);
        })
      );
      return reducers(undefined, action);
    }
    return reducers(state, action);
  };

  const store = configureStore({
    reducer: resettableRootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

const createInstance = () => {
  const apis: any = {};
  widgets.forEach((widget) => {
    const api: any = widget.api;
    apis[widget.config.apiName] = new api(getStoreInstance(), apis);
  });

  window.azAPIs = apis;
  return apis as ApisType;
};

let storeInstance: any;
export const getStoreInstance = () => {
  if (!storeInstance) {
    storeInstance = createStoreInstance();
  }
  return storeInstance;
};

let instance: ApisType;
export const getInstance = (): ApisType => {
  if (!instance) {
    instance = createInstance();
  }
  return instance as ApisType;
};
