import {getStoreInstance} from 'sdk/src';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import Router from "./Router.tsx";

const { store, persistor } = getStoreInstance();


function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
