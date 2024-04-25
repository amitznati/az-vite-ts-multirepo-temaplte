import {getStoreInstance} from 'sdk/src';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import MainLoader from "./MainLoader";
import Router from "./Router.tsx";
// import 'digital-style/dist/styles.css';

const { store, persistor } = getStoreInstance();


function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
        <MainLoader />
      </PersistGate>
    </Provider>
  )
}

export default App
