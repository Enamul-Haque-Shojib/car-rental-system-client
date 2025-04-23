import Loader from "@/component/shared/Loader";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    if(loading) return <Loader></Loader>
    if(user) return children
    
    if(!user) return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;