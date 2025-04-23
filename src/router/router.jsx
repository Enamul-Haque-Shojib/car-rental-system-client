import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Register from "@/page/Register";
import Login from "@/page/Login";
import About from "@/page/about/About";
import ManageAllCars from "@/page/AllCars/ManageAllCars";
import DetailsCar from "@/page/AllCars/DetailsCar";
import AdminChat from "@/page/chat/AdminChat";
import PrivateRoute from "./PrivateRoute";
import AddCar from "@/page/addCar/AddCar";
import ForgetPassword from "@/component/Form/ForgetPassword";
import ErrorPage from "@/component/shared/ErrorPage";
import DashboardLayout from "@/layout/DashboardLayout";
import AddCarrDashboard from "@/page/dashboard/carManagement/AddCarrDashboard";
import UpdateCarDashboard from "@/page/dashboard/carManagement/UpdateCarDashboard";
import AllReviewDashboard from "@/page/dashboard/carManagement/AllReviewDashboard";
import AllCarsDashboard from "@/page/dashboard/carManagement/AllCarsDashboard";
import AllMyBooked from "@/page/dashboard/bookingManagement/AllMyBooked";
import AllUserBooked from "@/page/dashboard/bookingManagement/AllUserBooked";
import AllMyPayment from "@/page/dashboard/paymentManagement/AllMyPayment";
import AllUserPayment from "@/page/dashboard/paymentManagement/AllUserPayment";
import AllUserDashboard from "@/page/dashboard/userManagement/AllUserDashboard";
import Profile from "@/page/dashboard/profileManagement/Profile";
import Dashboard from "@/page/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            { path: 'about', element: <About /> },
            { path: 'allCars/:slug', element: <ManageAllCars /> },
            { path: 'detailsCar/:id', element: <DetailsCar /> },
            { path: 'adminChat', element: <AdminChat /> },
            { path: 'addCar', element: <PrivateRoute><AddCar /></PrivateRoute> },
            { path: 'forget', element: <ForgetPassword /> },
            { path: '*', element: <ErrorPage /> },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: 'add_car', element: <AddCarrDashboard /> },
            { path: 'edit_car/:id', element: <UpdateCarDashboard /> },
            { path: 'review_car/:id', element: <AllReviewDashboard /> },
            { path: 'all_cars', element: <AllCarsDashboard /> },
            { path: 'all_my_booked', element: <AllMyBooked /> },
            { path: 'all_user_booked', element: <AllUserBooked /> },
            { path: 'all_my_payment', element: <AllMyPayment /> },
            { path: 'all_user_payment', element: <AllUserPayment /> },
            { path: 'all_users', element: <AllUserDashboard /> },
            { path: 'profile', element: <Profile /> },
            { index: true, element: <Dashboard /> },
        ],
    },
]);

export default router;