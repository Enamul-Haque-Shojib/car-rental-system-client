import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://car-rental-system-server-rho.vercel.app',
    
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;