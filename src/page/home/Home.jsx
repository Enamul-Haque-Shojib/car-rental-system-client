
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";




const Home = () => {
    
    return (
        <div>

            <Slider></Slider>
            <StatsCar></StatsCar>
            <Categories></Categories>
            <Feedback></Feedback>
            

           
        </div>
    );
};

export default Home;