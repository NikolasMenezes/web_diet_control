import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

import AuthProvider from "@/providers/auth-provider";
import UserProvider from "@/providers/user-provider";
import ThemeProvider from "@/providers/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";
import { Home } from "@/pages/home";
import { NotFound } from "./pages/not-found";

import "./globals.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <AuthProvider>
        <ThemeProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ThemeProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/", element: <SignIn /> },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
