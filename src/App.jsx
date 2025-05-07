import HomePage from "./pages/home/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListsPage from "./pages/list/lists";
import { MainLayout, RequireAuth } from "./layout/layout";
import ListDetails from "./pages/list-detail/details";
import Profile from "./pages/profile-page/profile";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import ProfileUpdatePage from "./pages/profile-update/profile-update";

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

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
