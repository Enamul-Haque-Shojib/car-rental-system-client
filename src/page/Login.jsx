import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link,useLocation, useNavigate } from "react-router";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
 
  const forms = location.state?.from?.pathname 
  console.log(typeof(forms))
  console.log()
 
  const { login ,signInWithGoogle,} = useAuth();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { email, password } = data;

    try {
      await login(email, password);
      // Redirect to the desired page after successful login
      
      navigate(location.state?.from?.pathname || '/', { replace: true });
      toast.success("Login successful");
      setError(null); // Reset error state on success
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    }
  }; 
  const handlegoogle = async () => {
    try {
      console.log(forms,"forms route")
      const { user } = await signInWithGoogle() 
       
        if (user) {
          // navigate("/dashboard", { replace: true });
            toast.success("Login successful");
            // navigate("/dashboard", { replace: true });
            
           navigate(location.state?.from?.pathname || '/', { replace: true });
           
           
           
        } else {
            toast.error("Google sign-in failed. Please try again.");
        }
    } catch (error) {
        console.error("Google sign-in error:", error);
        toast.error("An error occurred during Google sign-in.");
    }
}


  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to={"/forget"}
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    > Forgot your password? 
                      
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={() => setError(null)} // Clear error on input
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full" onClick={handlegoogle}>
                    Login with Google
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
