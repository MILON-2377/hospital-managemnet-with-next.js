"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef, useState, useEffect } from "react";

export default function Specialities() {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Smooth scroll to the next set of items
  const handleNext = () => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 2; 
    const totalWidth = container.scrollWidth;
    const currentScroll = container.scrollLeft;

    if (currentScroll + scrollAmount >= totalWidth) {
      setIsScrolling(true);
      container.scrollLeft = 0;
    } else {
      setIsScrolling(true);
      container.scrollLeft += scrollAmount;
    }
  };

  // Smooth scroll to the previous set of items
  const handlePrevious = () => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 2;
    const currentScroll = container.scrollLeft;

    if (currentScroll <= 0) {
      setIsScrolling(true);
      container.scrollLeft = container.scrollWidth;
    } else {
      setIsScrolling(true);
      container.scrollLeft -= scrollAmount;
    }
  };

  useEffect(() => {
    if (isScrolling) {
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); 
    }
  }, [isScrolling]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className=" w-[95%] mx-auto mt-20 lg:w-full lg:p-10"
    >
      {/* header */}
      <div className=" w-full flex items-center justify-between">
        <div className="w-full flex items-center">
          <h1 className=" text-3xl sm:text-4xl font-bold">Specialities</h1>
          <span className=" text-3xl sm:text-5xl -mt-12 -ml-2 text-sky-500 font-bold">+</span>
          <span className=" text-3xl sm:text-4xl -mt-12 -ml-2 opacity-25 text-sky-500 font-bold">+</span>
        </div>

        {/* pagination buttons */}
        <div className=" w-full flex items-center justify-end gap-5">
          <button
            onClick={handlePrevious}
            className=" sm:w-12 w-8 h-8 sm:h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border hover:bg-teal-500"
          >
            <IoIosArrowBack className=" text-3xl sm:text-5xl hover:text-white text-sky-500" />
          </button>
          <button
            onClick={handleNext}
            className=" sm:w-12 w-8 h-8 sm:h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border hover:bg-teal-500"
          >
            <IoIosArrowForward className=" text-3xl sm:text-5xl hover:text-white text-sky-500" />
          </button>
        </div>
      </div>

      {/* data displaying */}
      <div
        className="flex flex-row gap-5 mt-10 w-full overflow-hidden scroll-smooth lg:p-5 "
        ref={containerRef}
        style={{ scrollbarWidth: "none" }} 
      >
        {specialitiesData.map((item, index) => (
          <motion.div
            key={index}
            className="card card-compact border rounded-md lg:shadow-md bg-base-100 w-[98%] mx-auto sm:w-[350px] flex-shrink-0"
            whileTap={{ scale: 0.95 }}
            animate={{
              x: isScrolling ? 0 : undefined,
              transition: { duration: 2 },
            }}
          >
            <figure>
              <img src={item.image} alt={item.name} className=" h-[200px] w-full object-cover " />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">See Details</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}



// Specialities list
const specialitiesData = [
  {
    name: "Cardiology",
    image: "https://currexhospital.com/wp-content/uploads/2023/09/cardiology.jpg",
    description:
      "Cardiology focuses on diagnosing and treating heart diseases and conditions.",
  },
  {
    name: "Neurology",
    image: "https://medschool.cuanschutz.edu/images/librariesprovider61/default-album/n_fellowship.jpg?sfvrsn=be7c74b9_4",
    description:
      "Neurology deals with disorders of the nervous system, including the brain and spinal cord.",
  },
  {
    name: "Pediatrics",
    image: "https://blog.boardvitals.com/wp-content/uploads/2022/09/pediatrician-vs-pdp.png",
    description:
      "Pediatrics specializes in the medical care of infants, children, and adolescents.",
  },
  {
    name: "Orthopedics",
    image: "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/202/2022/10/istockphoto-1370095638-612x612-1.jpg",
    description:
      "Orthopedics is concerned with conditions involving the musculoskeletal system, including bones and joints.",
  },
  {
    name: "Oncology",
    image: "https://content.yourcareer.gov.au/sites/default/files/2022-12/253314-medicaloncologist.jpg",
    description: "Oncology focuses on diagnosing and treating cancer.",
  },
  {
    name: "Dermatology",
    image: "https://aptinjectiontraining.com/wp-content/uploads/2022/06/Featured.jpg",
    description:
      "Dermatology deals with conditions related to the skin, hair, and nails.",
  },
  {
    name: "Gynecology",
    image: "https://miraclehealthsystems.com/article/images/gynecologistsinglepage.webp",
    description:
      "Gynecology specializes in the health of the female reproductive system.",
  },
  {
    name: "Ophthalmology",
    image: "https://www.pennmedicine.org/global-medicine/-/media/images/medical%20and%20research%20images/surgery/ophthalmology_doctors_performing_surgery.ashx",
    description:
      "Ophthalmology focuses on the diagnosis and treatment of eye conditions and diseases.",
  },
  {
    name: "Radiology",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI8z81ul1DnWJ2l5M4o9WJU7z8SW4yGP_8g&s",
    description:
      "Radiology uses medical imaging to diagnose and treat diseases within the body.",
  },
  {
    name: "General Surgery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYtV_JJvqjXO2lZz6zxShg5JbaCnBS5cinw&s",
    description:
      "General Surgery involves performing surgical procedures on various parts of the body.",
  },
  {
    name: "Endocrinology",
    image: "https://cdn.prod.website-files.com/5e0143c66e14efc18c6f469d/5e0a8787a0b208a9e42144ef_Endocrinology.jpeg.png",
    description:
      "Endocrinology deals with disorders of the endocrine system, including hormone-related issues.",
  },
  {
    name: "Gastroenterology",
    image: "https://www.rhazesglobal.com/Frontend/Uploads/procedures/6c5c4397-0ac8-4969-b9c7-9ad41cba7860.jpg",
    description:
      "Gastroenterology focuses on the digestive system and its disorders.",
  },
  {
    name: "Hematology",
    image: "https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/8FD56903-689D-45EF-BE649E55BD8A39DB/EB9D8DAB-2481-4C87-951C5A3D60CCAC7F/WebsiteJpg_XL-FRHEM_Main%20Visual_Red_Website.jpg",
    description: "Hematology is concerned with blood disorders and diseases.",
  },
  {
    name: "Infectious Disease",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3KRLI3IfqUsTytLL9Y0RzW5OZ34M-O7AXQ&s",
    description:
      "Infectious Disease specialists treat and manage infections caused by bacteria, viruses, and other pathogens.",
  },
  {
    name: "Nephrology",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOofGKTHOsENo8_hWvvUWE4ilYMFs9MhnPA&s",
    description: "Nephrology focuses on kidney health and diseases.",
  },
  {
    name: "Pulmonology",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwns--fzuGR2ThRw5yAU8xSJrZ2qLjcBleA&s",
    description:
      "Pulmonology deals with respiratory system diseases, including lungs and airways.",
  },
  {
    name: "Rheumatology",
    image: "https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/02/what-is-a-rheumatologist.webp?w=1024",
    description:
      "Rheumatology focuses on autoimmune and inflammatory conditions affecting the joints and connective tissues.",
  },
  {
    name: "Urology",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHYxSvrpyt8uN1FCJxYK6cM-FnIvadsJ98w&s",
    description:
      "Urology deals with disorders of the urinary tract and male reproductive system.",
  },
  {
    name: "Anesthesiology",
    image: "https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_default_md/public/2022-03/Anesthesiology.jpg?itok=aWsjdeCg",
    description:
      "Anesthesiology involves administering anesthesia and managing pain during and after surgery.",
  },
 
];
