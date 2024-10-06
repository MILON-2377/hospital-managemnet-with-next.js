"use client";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

export default function GoogleSignUp({ UserRegistation }) {
  const { user } = useAuth();
  const [profession, setProfession] = useState(false);
  const [profe, setProfe] = useState("");
  const [inputName, setInputName] = useState("");

  const hanldeNext = () => {
    const email = user?.email;
    UserRegistation(inputName, email, profe);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className=" flex flex-col gap-1 w-full ">
        <span className="text-gray-600">Full Name</span>
        <label className=" flex items-center ">
          <p
            className={` ${
              profe.length > 0 && "border-green-500"
            } px-3 py-2   border border-gray-200 rounded-md border-r-0 rounded-r-none `}
          >
            <LuUser className="text-gray-300 text-2xl" />
          </p>
          <input
            onChange={(e) => setInputName(e.target.value)}
            className=" w-full transition-all focus:border-green-500  py-2 text-gray-600 focus:bg-transparent border border-l-0 rounded-l-none  border-gray-200 rounded-md focus:outline-none bg-transparent "
            type="text"
            placeholder="Ex: Milon Miah"
          />
        </label>
      </div>
      {/* profession */}
      <div className="flex flex-col gap-1 relative w-full ">
        <span className="text-gray-600">Profession</span>

        <span className=" absolute top-10 z-10 px-3  ">
          <FaUserDoctor className="text-gray-300 text-xl" />
        </span>
        <div className=" w-full dropdown">
          <input
            onClick={() => setProfession(false)}
            tabIndex={0}
            role="button"
            value={profe.length > 0 ? `${profe}` : ""}
            readOnly
            placeholder="Ex: Doctor"
            className="  border w-full border-gray-200 px-12 py-2 rounded-md "
          />

          <ul
            tabIndex={0}
            className={`${
              profession ? " hidden  " : ""
            } w-full dropdown-content menu bg-base-100 rounded-md z-[1] shadow p-2 `}
          >
            <li
              onClick={() => {
                setProfe("Patient");
                setProfession(true);
              }}
            >
              <a>Patient</a>
            </li>
            <li
              onClick={() => {
                setProfe("Doctor");
                setProfession(true);
              }}
            >
              <a>Doctor</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          onClick={hanldeNext}
          className=" btn bg-green-500 hover:bg-green-400 text-white w-[30%] float-right "
        >
          Next
        </button>
      </div>
    </div>
  );
}
