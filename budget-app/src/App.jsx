import {
  createBrowserRouter,
  createContext,
  RouterContextProvider,
  RouterProvider,
} from "react-router";

// PAGES
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/", // PATH TELLS YOU WHERE TO LOOK AT
    element: <Dashboard />, // ELEMENT THAT YOU WANT TO SHOW AT THE GIVEN PATH
    loader: dashboardLoader,
    errorElement: <Error />, // ERROR ELEMENT IF PARTICULAR PATH NOT FOUND - SIMILAR TO FALLBACK ROUTE
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
