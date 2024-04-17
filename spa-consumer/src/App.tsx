import SelectAccount from 'digital-select-account';
import {getStoreInstance} from 'digital-sdk';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import MainLoader from "./MainLoader";

const { store, persistor } = getStoreInstance();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="select-account">Select Account</Link>
      </div>
    ),
  },
  {path: "select-account", element: <SelectAccount />},
]);

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <MainLoader />
      </PersistGate>
    </Provider>
  )
}

export default App
