"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeNav() {
  const router = useRouter();
  const { user } = useAuth();
  const [dashPath, setDashPath] = useState("/Dashboard");
  useEffect(() => {
    if(user?.profession === "Patient"){
      setDashPath("/Dashboard/patient-dashboard");
    }

    if(user?.profession === "Doctor"){
      setDashPath("/Dashboard/doctor-dashboard");
    }

  },[user]);

  return (
    <div className="navbar bg-base-100 lg:w-[987] w-[95%] border-b mx-auto lg:mt-5 py-5 ">
      <div className="flex-1 ">
        <a className="  text-4xl font-bold  ">CareLife</a>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                onClick={() => router.push(dashPath)}
                className="w-10 rounded-full hover:cursor-pointer "
              >
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link href="/login"
            className=" rounded-md px-4 py-3 border text-accent text-xl hover:bg-accent transition-all duration-200 active:bg-opacity-70 hover:text-white font-[500] active:scale-95 "
            >LogIn</Link >
          </>
        )}
      </div>
    </div>
  );
}
