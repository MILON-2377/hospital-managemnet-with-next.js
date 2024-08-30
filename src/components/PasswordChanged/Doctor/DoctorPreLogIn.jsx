"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

export default function DoctorPreLogIn({ logIn }) {
  const [showPass, setShowPass] = useState(false);
  const { userLogIn, user, userLoggedOut } = useAuth();

  //   handle update password
  const onSubmit = async (e) => {
    e.preventDefault();
    userLoggedOut();
    const pass = e.target.pass.value;
    const email = user?.email;
    document.getElementById("my_modal_1").showModal();

    userLogIn(email, pass)
      .then(() => {
        e.target.reset();
        logIn(true);
        document.getElementById("my_modal_1").close();
      })
      .catch((error) => {
        document.getElementById("my_modal_1").close();
        toast(error.message);
      });
  };

  return (
    <div className=" w-full border rounded-md  p-5 ">
      <form onSubmit={onSubmit}>
        <label className="  w-full sm:w-[50%] lg::w-[40%] flex mt-8 flex-col gap-2 relative ">
          <span className=" text-[16px] font-[500] ">Old password</span>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Old password"
            name="pass"
            className=" px-4 py-2 rounded-md focus:outline-none border bg-transparent placeholder:text-[14px]  "
          />
          <span
            onClick={() => {
              setShowPass(!showPass);
            }}
            className=" absolute right-5 top-[44px] hover:cursor-pointer "
          >
            {showPass ? (
              <>
                <FaEye className=" text-xl text-gray-500 " />
              </>
            ) : (
              <>
                {" "}
                <FaEyeSlash className="text-xl text-gray-500" />
              </>
            )}
          </span>
        </label>

        {/* btn */}
        <button className=" btn btn-accent text-white mt-10 w-32 ">Next</button>
      </form>

      {/* modal container */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className=" p-5 rounded-md bg-accent text-white flex flex-col items-center justify-center gap-3">
            <span>Updating your password, please wait...</span>
            <p className=" w-full text-center ">
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
            </p>
          </div>
        </dialog>
      </div>

      {/* toastify container */}
      <ToastContainer />
    </div>
  );
}
