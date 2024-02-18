import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import SignIn from './pages/SignIn.tsx'
import Home from './pages/Home.tsx'
import AuthProvider from './providers/AuthProvider.tsx'
import UserProvider from './providers/UserProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/signin', element: <SignIn /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
