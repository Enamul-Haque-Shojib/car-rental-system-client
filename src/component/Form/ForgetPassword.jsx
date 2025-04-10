
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useAuth from '@/hooks/useAuth';
import { Label } from '@radix-ui/react-dropdown-menu';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
const ForgetPassword = () => {
    const {sendPasswordReset}=useAuth()
    const navigte=useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const { email} = data;
        try {
            await sendPasswordReset(email)
            toast.success("check your Email")
            navigte('/login')
          } catch (error) {
            console.log(error)
          }
    }
    
    return (
        <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Reset Password by Email</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col pb-2 gap-6">
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
                
                  
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    reset password 
                  </Button>
                  </div>
                 
                </form>
          </CardContent>
        </Card>
      </div>
    </div>
    );
};

export default ForgetPassword;