"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import logo from "../../../public/logo1.png";
import Image from "next/image";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <div className="navbar bg-white border-b border-b-gray-200 ">
      <div className="navbar-start">
        <div>
            <Image src={logo} width={100} height={80} alt="logo"/>
        </div>
        {/* <a className=" lg:ml-8 font-bold text-cyan-500 text-3xl">CareLife</a> */}
      </div>

      <div className="navbar-end">
        {user ? (
          <></>
        ) : (
          <>
            <button className="btn btn-accent">LogIn</button>
          </>
        )}
      </div>
    </div>
  );
}
