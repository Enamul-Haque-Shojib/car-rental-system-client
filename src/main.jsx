import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'

import 'swiper/css'
import 'swiper/css/navigation'

import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider'



import { Provider } from 'react-redux'
import AddCarrDashboard from './page/dashboard/carManagement/AddCarrDashboard'
import AllCarsDashboard from './page/dashboard/carManagement/AllCarsDashboard'

import AllUserDashboard from './page/dashboard/userManagement/AllUserDashboard'
import Profile from './page/dashboard/profileManagement/Profile'
import UpdateCarDashboard from './page/dashboard/carManagement/updateCarDashboard'
import DetailsCar from './page/AllCars/detailsCar'
import AllMyBooked from './page/dashboard/bookingManagement/AllMyBooked'
import AllUserBooked from './page/dashboard/bookingManagement/AllUserBooked'
import AllReviewDashboard from './page/dashboard/carManagement/AllReviewDashboard'
import ManageAllCars from './page/AllCars/ManageAllCars'
import AllMyPayment from './page/dashboard/paymentManagement/AllMyPayment'
import AllUserPayment from './page/dashboard/paymentManagement/AllUserPayment'
import PrivateRoute from './router/privateRoute'
import ErrorPage from './component/shared/ErrorPage'
import ForgetPassword from './component/Form/ForgetPassword'
import { ThemeProvider } from './Provider/Theme.provider'
import { store } from './redux/store'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
    <AuthProvider>
      {/* <RouterProvider router={router}></RouterProvider>

     */} <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainLayout />}  >
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About></About>} />
            <Route path='allCars' element={<ManageAllCars />} />
           
            <Route path='detailsCar/:id' element={<DetailsCar></DetailsCar>} />
            
            
            <Route path='addCar' element={<PrivateRoute><AddCar /></PrivateRoute>} />
            <Route path='forget' element={<ForgetPassword />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
          <Route path='add_car' element={<AddCarrDashboard></AddCarrDashboard>} />
          <Route path='edit_car/:id' element={<UpdateCarDashboard></UpdateCarDashboard>} />
          <Route path='review_car/:id' element={<AllReviewDashboard></AllReviewDashboard>} />
          <Route path='all_cars' element={<AllCarsDashboard></AllCarsDashboard>} />
          <Route path='all_my_booked' element={<AllMyBooked></AllMyBooked>} />
          <Route path='all_user_booked' element={<AllUserBooked></AllUserBooked>} />
          <Route path='all_my_payment' element={<AllMyPayment></AllMyPayment>} />
          <Route path='all_user_payment' element={<AllUserPayment></AllUserPayment>} />
          <Route path='all_users' element={<AllUserDashboard></AllUserDashboard>} />
          <Route path='profile' element={<Profile></Profile>} />
          <Route path='adminchat' element={<AdminChat />} />
          <Route index element={<Dashboard />} />
          </Route>
          
        </Routes>
      </BrowserRouter>


      <Toaster position='top-center' reverseOrder={false} />
    </AuthProvider>
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
