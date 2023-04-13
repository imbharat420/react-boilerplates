import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./Layout/RootLayout";

/**
 * !Routes
 */
import DataLayout from "./Layout/DataLayout";
import Data, { loader as deferredBlogPostsLoader } from "./pages/Data";
import DataDetail, {
  loader as deferredBlogPostLoader,
} from "./pages/DataDetail";

// basic
import Home from "./pages/Home";
import About from "./pages/About";
import Publish, { action as newPostAction } from "./pages/Publish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/publish",
        element: <Publish />,
        action: newPostAction,
      },
      {
        path: "/data",
        element: <DataLayout />,
        children: [
          {
            index: true,
            element: <Data />,
            loader: deferredBlogPostsLoader,
          },
          {
            path: ":id",
            element: <DataDetail />,
            loader: deferredBlogPostLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
