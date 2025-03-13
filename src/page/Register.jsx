
import Lottie from 'lottie-react';
import lottieAnimation from "../assets/lottieAnimation/registerLottie.json"
import { useState } from "react";
import { Link } from "react-router";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const Register = () => {
    const [error, setError] = useState(null)
    const [files, setFiles] = useState([]);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries());
        data.file=files[0].file
        const { email, password, photo, name } = data

       

        if (!passwordRegex.test(password)) {

            return setError("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
        }

            //   rest of the code will be here

    }
   

   
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-12  pb-14 sm:pb-16 md:px-10">

            <h2 className="text-xl md:text-2xl font-bold text-[#EA1A66] mb-3 w-64 text-center font-charm ">Create Your Account & Get Started Today!</h2>
            <div className="md:flex items-center gap-16 lg:gap-28 md:mr-10 mt-3 md:mt-8">

                {/* register lottieAnimation */}
                <div className='hidden md:block min-w-80 max-w-md'>
                    <Lottie animationData={lottieAnimation} loop={false} />
                </div>


                {/* register form */}
                <div className="card bg-base-100  w-80 rounded-lg md:w-[340px] shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body pb-1 ">


                        <div className="form-control ">
                            <label className='mb-0.5 block'>
                                Name
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input h-11 w-64 md:w-72 input-bordered " required />
                        </div>
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
                        <div className="form-control ">
                            <label className='mb-0.5 block' >
                                Upload Photo
                            </label>
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={false}
                                name="file"
                                labelIdle='Click to choose file'
                                
                            />
                        </div>


                        <div className="form-control w-full mx-auto mt-2">
                            <button type="submit" className="btn bg-primaryColor text-white w-full">Register</button>
                        </div>
                        <p className="text-center font-semibold my-0.5 text-sm ">OR</p>
                    </form>
                    <div className="w-64 md:w-72 mx-auto mb-3">
                        <button className="btn bg-primaryColor text-white w-full">Continue with Google</button>
                    </div>
                    <p className="text-center mb-4 ">Already have an account? <Link to="/login" className="text-[#EA1A66] font-bold underline">Login</Link></p>

                </div>
            </div>

        </div>
    )
}

export default Register
