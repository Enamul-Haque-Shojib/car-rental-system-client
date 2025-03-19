import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://server-seven-chi-78.vercel.app',
    
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;