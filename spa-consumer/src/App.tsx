import {getStoreInstance} from 'digital-sdk';
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
        <div style={{background: '#F5F5F5', minHeight: '100vh'}}>
          <Router />
          <MainLoader />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
