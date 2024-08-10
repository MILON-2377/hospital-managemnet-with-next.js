"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import imga1 from "../../../public/patien-form-page1.jpg";
import Image from "next/image";
import PersonalInfo from "@/components/patientInfoForm/PersonalInfo";

export default function PatientForm() {
  const { user } = useAuth();

  return (
    <div className=" w-full bg-white flex justify-between ">
      {/* image section */}
      <div className="w-full hidden lg:block h-screen ">
        <Image className="w-full h-full object-cover" src={imga1} alt="img" />
      </div>
      <div className="flex-1 h-screen ">
        <PersonalInfo />
      </div>
    </div>
  );
}
