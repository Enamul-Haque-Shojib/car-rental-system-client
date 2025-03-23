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

import AddCar from './page/addCar/AddCar';

import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './page/dashboard/Dashboard'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import AddCarrDashboard from './page/dashboard/carManagement/AddCarrDashboard'
import AllCarsDashboard from './page/dashboard/carManagement/AllCarsDashboard'
import AllBookedDashboard from './page/dashboard/bookingManagement/allBookedDashboard'
import AllUserDashboard from './page/dashboard/userManagement/AllUserDashboard'
import Profile from './page/dashboard/profileManagement/Profile'
import UpdateCarDashboard from './page/dashboard/carManagement/updateCarDashboard'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
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

            <Route path='addCar' element={<AddCar />} />

          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path='add_car' element={<AddCarrDashboard></AddCarrDashboard>} />
          <Route path='edit_car/:id' element={<UpdateCarDashboard></UpdateCarDashboard>} />
          <Route path='all_cars' element={<AllCarsDashboard></AllCarsDashboard>} />
          <Route path='all_booked' element={<AllBookedDashboard></AllBookedDashboard>} />
          <Route path='all_users' element={<AllUserDashboard></AllUserDashboard>} />
          <Route path='profile' element={<Profile></Profile>} />
          <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>


      <Toaster position='top-center' reverseOrder={false} />
    </AuthProvider>
    </Provider>
  </StrictMode>,
)
