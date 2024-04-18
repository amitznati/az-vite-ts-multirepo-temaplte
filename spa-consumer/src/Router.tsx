import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import SelectAccount from 'digital-select-account';

export default function Router () {
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

  return RouterProvider({router});
}