"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import useAxiosPublicApi from "@/models/Hooks/useAxiosPublicApi";
import { useForm } from "react-hook-form";

const LoginPage = () => {

  const {register, handleSubmit, } = useForm();
  
  // secure axios api
  const axiosSecureApi = useAxiosPublicApi();

  const {name} = useAuth();

  const onSubmit = async(data) => {
    console.log(data);

    // const res = await axiosSecureApi.post("/users/signup", data);
    // console.log(res.data);

  }

  return (
    <div className="  bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-screen  flex flex-col justify-between items-center lg:flex-row px-12 ">
      <div>
        <h1 className="text-white px-10 font-sans text-xl font-semibold ">
          Welcome to our hospital management system! Please log in to access
          your personalized dashboard, where you can manage appointments, view
          patient records, and streamline your administrative tasks. Enter your
          credentials below to ensure secure access to your account. If you
          encounter any issues, our support team is here to help. Your privacy
          and security are our top priorities, and we are committed to providing
          a seamless experience. Thank you for being a valued member of our
          community!
        </h1>
      </div>
      <div className=" h-[500px]  px-7 py-16 shadow-2xl rounded-lg bg-blue-400 bg-opacity-45 ">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-white text-2xl font-bold text-center  ">Social login section</h1>
          <button className="px-4 rounded-3xl border border-white text-white font-semibold py-1 ">
            Google
          </button>
          <button className="px-4 rounded-3xl border border-white text-white font-semibold py-1 ">
            Facebook
          </button>
        </div>

        {/* divider */}
        <div className="divider divider-secondary text-white ">OR</div>

        {/* form section */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-[400px] flex flex-col gap-6">
          <label className="flex flex-col gap-1">
            <span className="text-gray-200 font-sans text-xl  ">Email</span>
            <input
              type="text"
              {...register("email",{required:true, message:"email is required"})}
              placeholder="Enter your email"
              className="px-4 py-1 palceholder-gray-400 focus:outline-none text-white bg-transparent border border-white rounded-3xl  "
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-gray-200 font-sans text-xl  ">Password</span>
            <input
              type="password"
              {...register("password",{required:true, message:"password is required"})}
              placeholder="Enter your password"
              className="px-4 py-1 focus:outline-none text-white bg-transparent border border-white rounded-3xl  "
            />
          </label>
          <button className="px-4 w-full py-1 focus:outline-none text-white bg-transparent border border-white rounded-3xl  ">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
