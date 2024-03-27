import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'

import './App.css';
import './index.css'
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage/dist/fuselage.css';

import AppProvider from './providers/AppProvider.tsx'
import RouteExample from './RouteExample.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/route-example',
    element: <RouteExample />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
