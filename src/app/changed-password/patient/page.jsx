"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChangePatientPassword() {
  const [password, setPassword] = useState("");
  const [conFirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfrimPass, setShowConfrimPass] = useState(false);
  const { userPasswordUpdate, userLoggedOut } = useAuth();
  const router = useRouter();

  //   handle update password
  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== conFirmPass)
      return toast("New password and confirm password does not matched!");
    document.getElementById("my_modal_1").showModal();

    userPasswordUpdate(conFirmPass)
      .then(() => {
        e.target.reset();
        userLoggedOut();
        router.push("/login");
        document.getElementById("my_modal_1").close();
      })
      .catch((error) => {
        document.getElementById("my_modal_1").close();
        toast(error.message);
      });
  };

  return (
    <div className=" p-5 mt-5 w-full ">
      <p className=" text-2xl font-bold ">Change Password</p>

      <div className=" mt-8 mb-5 border-t "></div>

      <div className=" p-5 rounded-md bg-white shadow-md mt-2 ">
        <form onSubmit={onSubmit}>
          <div className=" w-full ">
            <label className="  w-full sm:w-[50%] lg::w-[40%] flex mt-8 flex-col gap-2 relative ">
              <span className=" text-[16px] font-[500] ">New password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="New password"
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
          </div>

          <div className=" w-full ">
            <label className=" w-full sm:w-[50%] lg::w-[40%] flex mt-8 flex-col gap-2 relative ">
              <span className=" text-[16px] font-[500] ">Confirm password</span>
              <input
                onChange={(e) => setConfirmPass(e.target.value)}
                type={showConfrimPass ? "text" : "password"}
                placeholder="Confirm password"
                className=" px-4 py-2 rounded-md focus:outline-none border bg-transparent placeholder:text-[14px]  "
              />
              <span
                onClick={() => setShowConfrimPass(!showConfrimPass)}
                className=" absolute right-5 top-[44px] hover:cursor-pointer "
              >
                {showConfrimPass ? (
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
          </div>

          <div className=" flex items-center justify-end gap-5 mt-10 ">
            <button className="btn">Cancel</button>
            <button className=" btn btn-accent text-white ">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* modal container */}
      <div>
        {/* document.getElementById("my_modal_1").showModal()} */}

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
