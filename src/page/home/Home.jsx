
import { FeaturedCar } from "@/component/featured/featuredCar";
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";
import TopThreeCars from "@/component/topThreeCars/TopThreeCars";
import ChatAI from "@/component/AI-assitent/ChatAI";
import ChatBotToggle from "@/component/AI-assitent/ChatBotToggle";




const Home = () => {



    return (
        <div>

            <Slider></Slider>
            <StatsCar></StatsCar>
            <Categories></Categories>
            <FeaturedCar/>
            <TopThreeCars></TopThreeCars>
            <Feedback></Feedback>
            <ChatBotToggle></ChatBotToggle>
            

           
        </div>
    );
};

export default Home;
