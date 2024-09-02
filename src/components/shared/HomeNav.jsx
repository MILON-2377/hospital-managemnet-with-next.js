"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeNav() {
  const {push} = useRouter();
  const { user } = useAuth();
  const [dashPath, setDashPath] = useState("/Dashboard");
  useEffect(() => {
    if (user?.profession === "Patient") {
      setDashPath("/Dashboard/patient-dashboard");
    }

    if (user?.profession === "Doctor") {
      setDashPath("/Dashboard/doctor-dashboard");
    }
  }, [user]);

  return (
    <div className="navbar bg-base-100 lg:w-[987] w-[95%] border-b mx-auto lg:mt-5 py-5 ">
      <div className="flex-1 ">
        <a className=" text-2xl sm:text-4xl font-bold  ">CareLife</a>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                onClick={() => push(dashPath)}
                className={`w-10 h-10 relative overflow-hidden rounded-full hover:cursor-pointer `}
              >
                <Image
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photo ||
                    "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?t=st=1725311726~exp=1725315326~hmac=c7c2a4c57288ab2caa621947741747fcf34e34d10919eb073c9532babaf0fc05&w=360"
                  }
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className=" rounded-md px-4 py-2 sm:py-3 border text-accent text-xl hover:bg-accent transition-all duration-200 active:bg-opacity-70 hover:text-white font-[500] active:scale-95 "
            >
              LogIn
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
