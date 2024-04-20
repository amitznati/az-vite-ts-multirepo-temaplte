import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import SelectAccount from 'digital-select-account';
import {BusinessComponents} from 'digital-common-components';

const {PageContainer} = BusinessComponents;

export default function Router () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageContainer>
          <h1>Hello World</h1>
          <Link to="select-account">Select Account</Link>
        </PageContainer>
      ),
    },
    {path: "select-account", element: <SelectAccount />},
  ]);

  return RouterProvider({router});
}