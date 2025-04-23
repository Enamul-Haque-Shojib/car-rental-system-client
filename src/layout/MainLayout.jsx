import { Outlet } from "react-router";
import Navbar from "../component/shared/Navbar/Navbar";
import Footer from "../component/shared/Footer/Footer";
import CustomerChat from "@/page/chat/CustomerChat";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import ChatBotToggle from "@/component/AI-assitent/ChatBotToggle";

const MainLayout = () => {
    const {role} = useAuth();
    const [chatOpen, setChatOpen] = useState(false);
    return (
        <div>
            <Navbar></Navbar>
            <main className="min-h-screen ">
                <Outlet></Outlet>

          
             { role!=='admin' && <ChatBotToggle></ChatBotToggle> }

             { role!=='admin' && <>{chatOpen && <CustomerChat/>}
             <button
                className="fixed bottom-8 right-6 z-10 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                onClick={() => setChatOpen(!chatOpen)}
            >
                💬
            </button> 
             </>  }
            
            </main>
             

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;