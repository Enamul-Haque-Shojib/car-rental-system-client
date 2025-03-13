import { Outlet } from "react-router";
import Navbar from "../component/shared/Navbar/Navbar";
import Footer from "../component/shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="min-h-screen">
            <Outlet></Outlet>
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;