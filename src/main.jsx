import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import Home from './page/home/Home.jsx'
import AuthProvider from './Provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider>
     */} <BrowserRouter>
      <Routes>
        <AuthProvider>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

          </Route>
        </AuthProvider>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
