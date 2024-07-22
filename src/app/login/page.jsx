"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import useAxiosPublicApi from "@/models/Hooks/useAxiosPublicApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { userLogIn, googleLogIn } = useAuth();
  const router = useRouter();

  // secure axios api
  const axiosSecureApi = useAxiosPublicApi();

  // social login handle
  const logInWithGoogle = () => {
    googleLogIn()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async ({ email, password }) => {
    // console.log(data);

    userLogIn(email, password)
      .then((res) => {
        // console.log(res);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });

    // const res = await axiosSecureApi.get()
  };

  return (
    <div className=" mt-20  bg-gradient-to-r from-sky-300 to-emerald-300 w-full h-screen  flex flex-col justify-between items-center lg:flex-row ">
      <div className="  w-full h-screen rounded-r-full lg:border-l-0  lg:border-t-0 lg:border-b-0 lg:border-4 ">
        <img
          className="w-full h-full object-cover rounded-r-full "
          src="https://media.istockphoto.com/id/1683786187/photo/concept-of-cyber-security-information-security-and-encryption-secure-access-to-users-personal.webp?s=2048x2048&w=is&k=20&c=Kt-wtB1CMBgW3Bfv5WZXmh9Gyx3RqruOiPu-xsjiO70="
          alt=""
        />
      </div>

      {/* login section */}
      <div className=" h-[550px] mr-5 -mt-5 lg:border-2 rounded-t-full lg:border-b-0 lg:border-r-0 lg:border-l-0 border-white bg  px-7 py-5 ">
        {/* login image */}
        <div className=" w-full">
          <img
            src="https://i.ibb.co/DVrQfXc/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image-1786166-removebg-p.png"
            className="w-20 mx-auto h-20 object-cover rounded-full bg-transparent "
          />
        </div>

        {/* social login section */}
        <div className="flex px-5 lg:px-0 flex-col gap-4 ">
          <h1 className="text-white text-2xl font-bold text-center  ">
            Social login section
          </h1>
          <button
            onClick={logInWithGoogle}
            className="px-4 hover:bg-emerald-400 transition-all duration-700 rounded-3xl border border-white text-white font-semibold py-1 "
          >
            Google
          </button>
          <button className="px-4 rounded-3xl hover:bg-emerald-400 transition-all duration-700 border border-white text-white font-semibold py-1 ">
            Facebook
          </button>
        </div>

        {/* divider */}
        <div className="divider text-white">OR</div>

        {/* form section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px]  flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1">
            <span className="text-gray-200 font-sans text-xl  ">Email</span>
            <input
              type="text"
              {...register("email", {
                required: true,
                message: "email is required",
              })}
              placeholder="Enter your email"
              className="px-4 py-1 palceholder-gray-400 focus:outline-none text-white bg-transparent border border-white rounded-3xl  "
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-gray-200 font-sans text-xl  ">Password</span>
            <input
              type="password"
              {...register("password", {
                required: true,
                message: "password is required",
              })}
              placeholder="Enter your password"
              className="px-4 py-1 focus:outline-none text-white bg-transparent border border-white rounded-3xl  "
            />
          </label>

          <button className="px-4 hover:bg-black hover:bg-opacity-55 transition-all duration-700 mt-5 w-full py-1 focus:outline-none text-white bg-transparent border border-white rounded-3xl  ">
            LogIn
          </button>

          {/* forgot password section */}
          <label className="flex gap-5 ">
            <span className="text-blue-500 underline transition-all duration-700 hover:text-white cursor-pointer ">
              Forgot password
            </span>
            <span className="text-blue-500">
              Do not have an account?{" "}
              <a className="text-white underline" href="/signup">
                Signup
              </a>{" "}
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
