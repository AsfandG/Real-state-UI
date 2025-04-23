import HomePage from "./pages/home/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListsPage from "./pages/list/lists";
import MainLayout from "./layout/layout";
import ListDetails from "./pages/list-detail/details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListsPage />,
        },
        {
          path: "/:id",
          element: <ListDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
