import ReactDOM from "react-dom/client";
import { App } from "./app";

import AuthProvider from "@/providers/auth-provider";
import UserProvider from "@/providers/user-provider";
import ThemeProvider from "@/providers/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";
import { Home } from "@/pages/home";
import { NotFound } from "./pages/not-found";

import "./globals.css";
import { Toaster } from "./components/ui/toaster";

const queryClient = new QueryClient();

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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Toaster />
  </QueryClientProvider>
);
