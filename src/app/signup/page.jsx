"use client";
import Button from "@/ButtonComponents/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

export default function LogIn() {
  const [showPass, setShowPass] = useState(false);
  const signUpBtn = Button("Sign Up");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // sign up validation errors handleing
  useEffect(() => {}, [errors]);

  return (
    <div className=" w-full h-full">
      <div className="flex flex-col lg:flex-row my-auto  w-[95%] h-[95vh] ">
        <div className=" lg:w-[70vw] hidden lg:flex items-center justify-center ">
          <div className=" lg:h-[500px] lg:w-[400px] ">
            <img
              className="w-ful h-full object-cover "
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" lg:w-[600px] w-[95%] mx-auto   my-auto rounded-xl p-7 bg-base-100 shadow-2xl ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-4 w-full h-full  "
          >
            
                <label className="flex flex-col gap-1">
                  <span className="font-sans text-gray-600 ">Full Name</span>
                  <input
                    className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                    type="text"
                    {...register("userName", {
                      required: "name filed is requird",
                    })}
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="font-sans text-gray-600">Gender</span>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="select select-accent focus:outline-none w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="font-sans text-gray-600 ">
                    Date of birth
                  </span>
                  <input
                    className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                    type="date"
                    {...register("DateOfBirth", {
                      required: "date of birth is required",
                    })}
                  />
                </label>
              

                <label className="flex flex-col gap-1">
                  <span className="font-sans text-gray-600">Profession</span>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="select select-accent focus:outline-none w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your profession
                    </option>
                    <option value="male">Doctor</option>
                    <option value="female">Patient</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="font-sans text-gray-600 ">Email</span>
                  <input
                    className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                    type="text"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: true,
                      message: "Email is required!",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address!!",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </label>
                <label className="flex relative flex-col gap-1">
                  <span className="font-sans text-gray-600 ">Password</span>
                  <input
                    className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="Enter a strong password"
                    {...register("password", {
                      required: "password is required",
                      message: "Password is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @, #, $, etc.).",
                      },
                      minLength: 8,
                    })}
                  />

                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="text-2xl cursor-pointer absolute top-11 right-3 "
                  >
                    {showPass ? (
                      <>
                        <IoEye />
                      </>
                    ) : (
                      <>
                        <IoMdEyeOff />
                      </>
                    )}
                  </span>
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </label>
              
           

            {/* sing up btn */}
            <button className="px-3 py-2 rounded-md hover:bg-opacity-75 transition-all duration-700 bg-black text-white ">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
