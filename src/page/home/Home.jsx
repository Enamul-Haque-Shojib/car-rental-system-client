
import { FeaturedCar } from "@/component/featured/featuredCar";
import TopThreeCars from "@/component/topThreeCars/TopThreeCars";
import ScrollReveal from "@/components/Gsap-animation/ScrollReveal";
import Categories from "../../component/categories/Categories";
import Feedback from "../../component/feedback/Feedback";
import Slider from "../../component/slider/Slider";
import StatsCar from "../../component/stats/StatsCar";
<<<<<<< HEAD
=======
import TopThreeCars from "@/component/topThreeCars/TopThreeCars";
import FAQ from "./FAQ";
import ChatBotToggle from "@/component/AI-assitent/ChatBotToggle";
>>>>>>> development




const Home = () => {



    return (
        <div>

            <Slider></Slider>
            <StatsCar></StatsCar>
            <Categories></Categories>
            <FeaturedCar/>
            <TopThreeCars></TopThreeCars>
<<<<<<< HEAD
            <ScrollReveal direction='up'>
            <Feedback></Feedback>
            </ScrollReveal>
=======
            <FAQ></FAQ>
            <Feedback></Feedback>
            {/* <ChatBotToggle></ChatBotToggle> */}
>>>>>>> development
            
            </div>
           
    );
};

export default Home;
