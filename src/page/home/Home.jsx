import { Button } from "@/components/ui/button"
import useAuth from "@/hooks/useAuth";
const Home = () => {
    const{signInWithGoogle,user}=useAuth()
    const handlegoolegsignup=()=>{
        signInWithGoogle()
    }
    return (
        <div>
            <h1 className="text-2xl text-red-500">home page </h1>
            <h1>user name : {user?.displayName}</h1>
            <Button>Button shadcn </Button>
            <Button onClick={handlegoolegsignup} >google signup test</Button>
        </div>
    );
};

export default Home;