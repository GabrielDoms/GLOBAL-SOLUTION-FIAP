import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LandingLayout } from "./components/LandingLayout";
import { Home } from "./pages/pagina1";
import { Login } from "./pages/home";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";

const authenticatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const unauthenticatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
]);

export function Router() {
  const { token } = useAuth();

  if (!token) return <RouterProvider router={unauthenticatedRoutes} />;

  return <RouterProvider router={authenticatedRoutes} />;
}
