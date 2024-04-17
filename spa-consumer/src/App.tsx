import SelectedAccountWidget from 'digital-select-account';
import {getStoreInstance} from 'digital-sdk';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

const {connectedWidget: SelectAccount} = SelectedAccountWidget;
const { store, persistor } = getStoreInstance();

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SelectAccount />
      </PersistGate>
    </Provider>
  )
}

export default App
