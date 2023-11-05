import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserAccount from './pages/UserAccount';
import './assets/styles/App.css';
import SignUp from './pages/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/account',
      element: <UserAccount />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
