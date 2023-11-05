import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserAccountPlans from './pages/UserAccountPlans';
import './assets/styles/App.css';
import SignUp from './pages/SignUp';
import UserAccountContacts from './pages/UserAccountContacts';
import UserAccountFAQ from './pages/UserAccountFAQ';
import UserAccountProfile from './pages/UserAccountProfile';

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
      path: '/account/plans',
      element: <UserAccountPlans />,
    },
    {
      path: '/account/contacts',
      element: <UserAccountContacts />,
    },
    {
      path: '/account/faq',
      element: <UserAccountFAQ />,
    },
    {
      path: '/account/profile',
      element: <UserAccountProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
