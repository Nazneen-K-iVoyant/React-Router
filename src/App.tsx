/*
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
// import {createBrowserRouter} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilesPage from './pages/ProfilesPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: 'profiles',
    element: <ProfilesPage />,
    children:[{
      path: '/profiles/:profileId',
      element: <ProfilePage />

    }]
  },

])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
 */




import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </div>
  );
}

export default App;
