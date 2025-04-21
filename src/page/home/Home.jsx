
import { FeaturedCar } from "@/component/featured/featuredCar";
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";
import TopThreeCars from "@/component/topThreeCars/TopThreeCars";
import FAQ from "./FAQ";




const Home = () => {



    return (
        <div>

            <Slider></Slider>
            <StatsCar></StatsCar>
            <Categories></Categories>
            <FeaturedCar/>
            <TopThreeCars></TopThreeCars>
            <FAQ></FAQ>
            <Feedback></Feedback>
            

           
        </div>
    );
};

export default Home;
