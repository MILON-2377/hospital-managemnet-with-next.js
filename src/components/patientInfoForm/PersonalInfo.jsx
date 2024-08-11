"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { patientPersonInfoAdd } from "@/redux/reducers/AddPatientInfo/AddPatientInfo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [selectDate, setSelectDate] = useState(new Date());
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  //   handle form
  const onSubmit = (data) => {
    console.log(data);
    // dispatch(patientPersonInfoAdd(data));
  };

  //   handle form errors
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        if (error?.message) {
            console.log(error.message);
          toast.warn(error.message, {
            autoClose: 5000,
          });
        }
      });
    }
  }, [errors]);

  return (
    <div className=" w-full lg:h-screen p-10 ">
      <h1 className="text-2xl font-bold text-black mt-5 ">
        Personal information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10 ">
        <label className=" w-full flex flex-col gap-2">
          <span className="text-xl text-gray-500 ">Full name</span>
          <input
            className="px-4 w-full py-2 text-xl placeholder:text-gray-500 text-gray-600 focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
            placeholder="ex: milon miah"
            type="text"
            {...register("fullName", {
              required: "full name is required!",
            })}
          />
        </label>

        <div className=" w-full flex justify-between mt-5 gap-6 ">
          <div className=" w-full flex flex-col gap-5 ">
            {/* email address */}
            <div className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">Email address</span>
              <label
                className={` px-3 flex items-center text-xl gap-4 border border-gray-200 rounded-md `}
              >
                <span>
                  <MdOutlineMailOutline className=" text-2xl text-gray-400 " />
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 text-xl focus:border-none border-none placeholder:text-gray-500 text-gray-600  focus:outline-none border border-gray-500 rounded-md bg-transparent "
                  placeholder="milon.miah@qq.com"
                  type="email"
                  {...register("email", {
                    required: "email is required!",
                  })}
                />
              </label>
            </div>

            {/* date of birth */}
            <div className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">Date of birth</span>
              <label
                className={`px-3 flex items-center gap-4 border border-gray-200 rounded-md `}
              >
                <span>
                  <FaCalendarAlt className=" text-xl text-gray-400 " />
                </span>
                <DatePicker
                  selected={selectDate}
                  onChange={(date) => setSelectDate(date)}
                  className="px-2 py-3 focus:outline-none border-none "
                  placeholderText="Select you date of birth"
                />
              </label>
            </div>

            {/* address */}
            <label className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">Address</span>
              <input
                className="px-4 py-2 text-xl text-gray-600 placeholder:text-gray-500  focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
                placeholder="Ex: 1302 Kolabagan, Dhaka "
                type="text"
                {...register("address", {
                  required: "address is required",
                })}
              />
            </label>

            {/* emergency contract */}
            <label className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">
                Emergency contact name
              </span>
              <input
                className="px-4 py-2 text-xl placeholder:text-gray-500 text-gray-600 focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
                placeholder="Guardian's name "
                type="text"
                {...register("emergency_contact_name", {
                  required: "emergency contact name is required",
                })}
              />
            </label>
          </div>

          <div className=" w-full flex flex-col gap-5">
            {/* emergency contact number */}
            <div className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">
                Emergency phone number
              </span>
              <label
                className={` px-3 flex items-center gap-4 border border-gray-200 rounded-md `}
              >
                <span>
                  <IoCallOutline className=" text-2xl text-gray-400 " />
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 focus:border-none text-xl border-none placeholder:text-gray-500 text-gray-600  focus:outline-none border border-gray-200 rounded-md bg-transparent "
                  placeholder="+86 131850-84669"
                  type="text"
                  {...register("emergency_contact_phone", {
                    required: "Emergency phone number is required",
                  })}
                />
              </label>
            </div>

            {/* gender */}
            <div className="flex flex-col gap-2">
              <span className="text-xl text-gray-600">Gender</span>
              <div className="flex items-center justify-between sm:gap-2 lg:gap-5">
                <label className="label flex items-center sm:gap-2 px-2 cursor-pointer border border-gray-200 border-dashed rounded-md">
                  <span className="text-xl text-gray-500">Male</span>
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    className="radio border border-gray-500 checked:bg-accent"
                  />
                </label>
                <label className="label flex items-center sm:gap-2 px-2 cursor-pointer border border-gray-200 border-dashed rounded-md">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    className="radio border border-gray-500 checked:bg-accent"
                  />
                  <span className="text-xl text-gray-500">Female</span>
                </label>
                <label className="label flex items-center sm:gap-2 px-2 cursor-pointer border border-gray-200 border-dashed rounded-md">
                  <input
                    type="radio"
                    value="other"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    className="radio border border-gray-500 checked:bg-accent"
                  />
                  <span className="text-xl text-gray-500">Other</span>
                </label>
              </div>
            </div>

            {/* occupation */}
            <label className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">Occupation</span>
              <input
                className="px-4 py-2 text-xl text-gray-600 placeholder:text-gray-500  focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
                placeholder="Software Engineer"
                type="text"
                {...register("occupation", {
                  required: "occupation is required",
                })}
              />
            </label>

            {/* phone number */}
            <div className="flex flex-col gap-2">
              <span className="text-xl text-gray-600 ">Phone number</span>
              <label
                className={` px-3 flex items-center gap-4 border border-gray-200 rounded-md `}
              >
                <span>
                  <IoCallOutline className=" text-2xl text-gray-400 " />
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 focus:border-none text-xl border-none placeholder:text-gray-500 text-gray-600  focus:outline-none border border-gray-200 rounded-md bg-transparent "
                  placeholder="+86 131850-84887"
                  type="text"
                  {...register("phoneNumber", {
                    required: "phone number is required",
                  })}
                />
              </label>
            </div>
          </div>
        </div>

        {/* button section */}
        <div className="mb-5">
          <button className=" w-[200px] float-right  mt-10 btn btn-accent text-white ">
            <span className="text-xl">Next</span>
            <FaArrowRightLong className="text-xl ml-3" />
          </button>
        </div>
      </form>

      {/* toastify container section */}
      <ToastContainer />
    </div>
  );
}
