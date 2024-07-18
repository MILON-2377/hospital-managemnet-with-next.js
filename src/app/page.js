"use client";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import AboutSection from "@/components/HomeComponents/AboutSection";
import DepartmentsSection from "@/components/HomeComponents/Department";
import DoctorsSection from "@/components/HomeComponents/Doctors";
import NewsUpdatesSection from "@/components/HomeComponents/NewsCard";
import PatientQuotesSection from "@/components/HomeComponents/PatientsQutes";
import ServicesSection from "@/components/HomeComponents/ServiceCard";
import Loader from "@/components/Navbar/Loader/Loader";
import { useEffect, useState } from "react";

export default function MyHome() {
  const { user, loading } = useAuth();
  const [currentImage, setCurrentImage] = useState(0);

  // banner background images hanlde
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((preIndex) => (preIndex + 1) % Images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader></Loader>;
  return (
    <div className="w-full ">
      {/* banner section */}
      <section>
        <div className="h-[80vh] w-full bg-green-300 ">
          <img
            src={Images[currentImage]}
            className="w-full h-full object-cover transition-all  "
          />
        </div>
      </section>

      {/* about section */}
      <AboutSection></AboutSection>

      {/* services section */}
      <div className=" flex gap-5 ">
        <div className="w-[60%] px-5 ">
          <ServicesSection></ServicesSection>
        </div>

        <div className="flex-1 mt-24 mr-5 h-[400px] ">
          <img className="w-full h-full object-cover " src="https://media.istockphoto.com/id/810809002/vector/medical-healthcare-activities-cliparts.jpg?s=612x612&w=0&k=20&c=-9YtvSEoIRWIQqO5IAFejOV4qd3xwjfDbMFExvc8CcM=" />
        </div>
      </div>

      {/*  */}
      {/* <div className=" w-full relative ">
        <img className="w-full sticky top-5 -z-30 h-[400px] object-cover " src="https://media.istockphoto.com/id/1312765142/photo/businessman-hold-virtual-medical-network-connection-icons-covid-19-pandemic-develop-people.jpg?s=2048x2048&w=is&k=20&c=TYz3Pioyd5CG2GsCwRcDYxYYpalN1yRp6l6eENJXyMk=" />
      </div> */}

      {/* Department section */}
      <DepartmentsSection></DepartmentsSection>

      {/* Doctors sections */}
      <DoctorsSection></DoctorsSection>

      {/* PatientQuotesSection  */}
      <PatientQuotesSection></PatientQuotesSection>

      {/* News Section */}
      <NewsUpdatesSection></NewsUpdatesSection>
    </div>
  );
}

// images for banner section
const Images = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1663076060366-4bff98d11954?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664302333192-b6df2f5c37bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvc3BpdGFsfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1442374578/photo/doctors-and-nurses-working-at-the-hospital.webp?b=1&s=170667a&w=0&k=20&c=4je5V-nhBfmT-xHiRiVexGVarY9ihY128jh7plYOc7E=",
  "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
];
