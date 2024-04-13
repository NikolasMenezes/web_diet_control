import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

import AuthProvider from "@/providers/auth-provider.tsx";
import UserProvider from "@/providers/user-provider.tsx";
import ThemeProvider from "@/providers/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SignUp } from "@/pages/sign-up.tsx";
import { SignIn } from "@/pages/sign-in.tsx";
import { Home } from "@/pages/home.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
