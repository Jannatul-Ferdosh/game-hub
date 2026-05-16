import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import GameDetailsPage from "./components/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      {path: "/games/:slug", element: <GameDetailsPage/>}
    ],
  },
]);

export default router;
