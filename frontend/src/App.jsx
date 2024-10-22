import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Expenses from './pages/Expenses';

function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
      { index: true, element: <Dashboard /> },
      { path: 'income', element: <Income /> },
      { path: 'expenses', element: <Expenses /> },
    ]
  }
])

  return <RouterProvider router={router}/>
}

export default App
