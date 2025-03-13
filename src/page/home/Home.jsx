
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";




const Home = () => {
    // const{signInWithGoogle,user}=useAuth()
    // const handlegoolegsignup=()=>{
    //     signInWithGoogle()
    
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