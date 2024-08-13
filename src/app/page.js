"use client";
import Banner from "@/components/Home/Banner";
import BestDoctors from "@/components/Home/BestDoctors";
import Features from "@/components/Home/Features";
import FourSteps from "@/components/Home/FourSteps";
import FrequentlyAsskQuestion from "@/components/Home/FrequentlyAsskQuestion";
import Priceing from "@/components/Home/Priceing";
import Specialities from "@/components/Home/Specialities";
import WhatOurPatientSays from "@/components/Home/WhatOurPatientSays";

export default function Home() {
  return (
    <div>
      {/* banner section */}
      <Banner />

      {/* features section */}
      <Features />

      {/* speacialities */}
      <Specialities />

      {/* best doctors section */}
      <BestDoctors />

      {/* pricing section */}
      <Priceing />

      {/* four steps section */}
      <FourSteps />

      {/* frequently ask question section */}
      <FrequentlyAsskQuestion />

      {/* what our patients says section */}
      <WhatOurPatientSays />
    </div>
  )
}
