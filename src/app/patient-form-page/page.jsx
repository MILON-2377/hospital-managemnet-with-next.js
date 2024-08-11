"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import imga1 from "../../../public/patien-form-page1.jpg";
import Image from "next/image";
import PersonalInfo from "@/components/patientInfoForm/PersonalInfo";
import { useState } from "react";

export default function PatientForm() {
  const { user } = useAuth();
  const [isNextClick, setIsNextClick] = useState("personalInfo");

  // handle Next info component displaying
  const handleCompoDisplay = () => {
    if (isNextClick === "personalInfo") return setIsNextClick("medicalInfo");
    if (isNextClick === "medicalInfo") return setIsNextClick("identificationInfo");
  };

  return (
    <div className=" w-full bg-white flex justify-between ">
      {/* image section */}
      <div className="w-full hidden lg:block h-screen ">
        <Image className="w-full h-full object-cover" src={imga1} alt="img" />
      </div>
      <div className="flex-1 h-screen ">
        <div className={ isNextClick === "medicalInfo" ? "hidden" : "w-full h-full"}>
          <PersonalInfo />
        </div>
        <div className={isNextClick === "indetificationInfo" ? "hidden" : ""}>
            hello
        </div>
      </div>
    </div>
  );
}
