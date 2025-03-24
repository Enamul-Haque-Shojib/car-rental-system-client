import axios from "axios";

const axiosPublic=axios.create({
<<<<<<< HEAD
    baseURL:'https://server-seven-chi-78.vercel.app',
=======
    baseURL:'http://localhost:5000',
>>>>>>> development
    
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;