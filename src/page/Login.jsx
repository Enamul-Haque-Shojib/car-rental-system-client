;
import loginPic from "../assets/images/loginPic.png"
import { useState } from "react";
import { Link } from "react-router";


const Login = () => {

    const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries());

        const { email, password } = data


        //   rest of the code will be here

    }

    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-12 md:px-10 pb-14 sm:pb-16">

            <h2 className="text-xl md:text-2xl font-bold text-Pink text-center mb-4 font-charm"  >- Welcome Back -</h2>
            <div className="md:flex items-center gap-16 lg:gap-20 md:mr-10 mt-6 md:mt-12 ">

                {/* register lottieAnimation */}
                <div className='hidden md:block max-w-lg'>
                    <img src="https://carwow-uk-wp-2.imgix.net/2023-Koenigsegg-Jesko-Absolut-front.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600" className="" alt="" />
                </div>


                {/* register form */}
                <div className="card bg-base-100  w-80 rounded-lg md:w-[340px] shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body pb-1 ">
                            <h3 className="text-center text-2xl font-charm md:text-3xl">Login</h3>
                        <div className="form-control ">
                            <label className='mb-0.5 block' >
                                Email
                            </label>
                            <input name="email" type="email" placeholder="email" className="input h-11 w-64 md:w-72 input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className='mb-0.5 block'>
                                Password
                            </label>
                            <input onKeyDown={() => setError(null)} name="password" type="password" placeholder="password" className="input h-11 w-64 md:w-72 input-bordered dark:text-black" required />
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                        </div>
                       


                        <div className="form-control w-full mx-auto mt-2">
                            <button type="submit" className="btn bg-primaryColor text-white w-full">Register</button>
                        </div>
                        <p className="text-center font-semibold my-0.5 text-sm ">OR</p>
                    </form>
                    <div className="w-64 md:w-72 mx-auto mb-3">
                        <button className="btn bg-primaryColor text-white w-full">Continue with Google</button>
                    </div>
                    <p className="text-center pl-8 pb-4 text-sm ">Don’t Have An Account ? <Link className="text-[#EA1A66] font-bold underline" to="/register">Register</Link></p>

                </div>
            </div>

        </div>
    )
}

export default Login
