
import useAuth from "@/hooks/useAuth";
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";




const Home = () => {
<<<<<<< HEAD
    // const{signInWithGoogle,user}=useAuth()
    // const handlegoolegsignup=()=>{
    //     signInWithGoogle()
    
=======
    const{signInWithGoogle,user}=useAuth()
    // const handlegoolegsignup=()=>{
    //     signInWithGoogle()
    // }
>>>>>>> 6431074c445766ef8d68306a3c2692ca21d318d1
    return (
        <div>

            <Slider></Slider>
            <StatsCar></StatsCar>
            <Categories></Categories>
            <Feedback></Feedback>
            

           <h1>hello</h1>
        </div>
    );
};

export default Home;