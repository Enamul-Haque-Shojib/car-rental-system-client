import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import Home from './page/home/Home.jsx'
import Register from './page/Register.jsx'
import Login from './page/Login.jsx'

import 'swiper/css';
import 'swiper/css/navigation';

import AuthProvider from './Provider/AuthProvider'
import About from './page/about/About'
import { Toaster } from 'react-hot-toast'
import AllCars from './page/AllCars/AllCars'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* <RouterProvider router={router}></RouterProvider>

     */} <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About></About>} />
            <Route path='allCars' element={<AllCars />} />

          </Route>
        </Routes>
      </BrowserRouter>


      <Toaster position='top-center' reverseOrder={false} />
    </AuthProvider>

  </StrictMode>,
)
