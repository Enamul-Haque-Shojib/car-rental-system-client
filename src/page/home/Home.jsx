
import { FeaturedCar } from "@/component/featured/featuredCar";
import TopThreeCars from "@/component/topThreeCars/TopThreeCars";
import ScrollReveal from "@/components/Gsap-animation/ScrollReveal";
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";
import FAQ from "./FAQ";
import ChatBotToggle from "@/component/AI-assitent/ChatBotToggle";




const Home = () => {



    return (
        <div>

            <Slider></Slider>
            <StatsCar></StatsCar>
            <Categories></Categories>
            <FeaturedCar/>
            <TopThreeCars></TopThreeCars>
            <ScrollReveal direction='up'>
            <Feedback></Feedback>
            </ScrollReveal>
            <FAQ></FAQ>
            
            {/* <ChatBotToggle></ChatBotToggle> */}
            
            </div>
           
    );
};

export default Home;
