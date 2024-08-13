"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useRouter } from "next/navigation";
import img from "../../../public/assets/dashboard.jpg";
import Image from "next/image";

export default function Navbar() {
  const { user, userLoggedOut } = useAuth();
  const router = useRouter();
  return (
    <div className=" w-80 max-h-screen bg-gray-200 ">
      {/* profile section */}
      <div>
        <div className="relative  ">
          <div className=" w-full h-[200px] bg-blue-200 ">
            <Image src={img}
            className="w-full h-full object-cover "
            alt="dashboard image" />
          </div>

          {/* profile image */}
          <div className=" absolute top-32 w-24 h-24 rounded-full bg-green-200 border border-white "></div>
        </div>
      </div>
    </div>
  );
}
