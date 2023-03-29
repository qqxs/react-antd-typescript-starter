import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Auth from '@/components/Auth/auth';

import Layout from '@/components/Layout';
// page
// import Home from '@/page/home/home'
const Home = React.lazy(async () => await import('@/pages/home/home'));
const Login = React.lazy(async () => await import('@/pages/login/login'));
const Register = React.lazy(async () => await import('@/pages/register/register'));
const Hello = React.lazy(async () => await import('@/pages/hello'));
const Error404 = React.lazy(async () => await import('@/pages/error/404'));

// ------------------ auth page ---------------------------
const Profile = React.lazy(async () => await import('@/pages/profile/profile'));
// ------------------ end auth page -----------------------
// end page

export const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/hello',
          element: <Hello />,
        },
        // auth router
        {
          path: '/',
          element: <Auth />,
          children: [
            {
              path: '/profile',
              element: <Profile />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ],
  {
    basename: '/',
  },
);
