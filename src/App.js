import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Data, { loader as datasLoader } from "./pages/Data";
import RootLayout from "./Layouts/RootLayout";
import DataDetail, { loader as dataLoader } from "./pages/DataDetail";
import DataLayout from "./Layouts/DataLayout";
import About from "./pages/About";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<DataLayout />}>
        <Route index element={<Data />} loader={datasLoader} />
        <Route path=":id" element={<DataDetail />} loader={dataLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
