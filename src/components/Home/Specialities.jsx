"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Specialities() {
  const [show, setShow] = useState(0);
  const itemsPerPage = 5;
  const containerRef = useRef(null);

  // Pagination next handle
  const handleNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.querySelector(".card")?.offsetWidth || 0;
      const containerWidth = container.clientWidth;
      const maxScrollLeft = container.scrollWidth - containerWidth;
      const newScrollLeft = container.scrollLeft + itemWidth;

      if (newScrollLeft <= maxScrollLeft) {
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          left: maxScrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  // Handle previous pagination
  const handlePrevious = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.querySelector(".card")?.offsetWidth || 0;
      const newScrollLeft = container.scrollLeft - itemWidth;

      if (newScrollLeft >= 0) {
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full p-10"
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="w-full flex items-center"
        >
          <h1 className=" text-5xl font-bold ">Specialities</h1>
          <span className="text-5xl -mt-12 -ml-2 text-sky-500 font-bold ">
            +
          </span>
          <span className="text-4xl -mt-12 -ml-2 opacity-25 text-sky-500 font-bold ">
            +
          </span>
        </motion.div>

        {/* paginations button */}
        <div className="flex items-center gap-5">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border border-gray-200 hover:bg-teal-500"
          >
            <IoIosArrowBack className="text-5xl hover:text-white text-sky-500" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center hover:text-white transition-all duration-200 rounded-full border border-gray-200 hover:bg-teal-500"
          >
            <IoIosArrowForward className="text-5xl hover:text-white text-sky-500" />
          </button>
        </div>
      </div>

      {/* data displaying */}
      <div className="relative mt-16 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="flex gap-5"
          ref={containerRef}
        >
          {specialitiesData
            .slice(show, show + itemsPerPage)
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="card card-compact bg-base-100 w-96 shadow-xl"
              >
                <figure>
                  <img src={item.image} alt={item.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Specialities list
const specialitiesData = [
  {
    name: "Cardiology",
    image: "https://example.com/images/cardiology.jpg",
    description:
      "Cardiology focuses on diagnosing and treating heart diseases and conditions.",
  },
  {
    name: "Neurology",
    image: "https://example.com/images/neurology.jpg",
    description:
      "Neurology deals with disorders of the nervous system, including the brain and spinal cord.",
  },
  {
    name: "Pediatrics",
    image: "https://example.com/images/pediatrics.jpg",
    description:
      "Pediatrics specializes in the medical care of infants, children, and adolescents.",
  },
  {
    name: "Orthopedics",
    image: "https://example.com/images/orthopedics.jpg",
    description:
      "Orthopedics is concerned with conditions involving the musculoskeletal system, including bones and joints.",
  },
  {
    name: "Oncology",
    image: "https://example.com/images/oncology.jpg",
    description: "Oncology focuses on diagnosing and treating cancer.",
  },
  {
    name: "Dermatology",
    image: "https://example.com/images/dermatology.jpg",
    description:
      "Dermatology deals with conditions related to the skin, hair, and nails.",
  },
  {
    name: "Gynecology",
    image: "https://example.com/images/gynecology.jpg",
    description:
      "Gynecology specializes in the health of the female reproductive system.",
  },
  {
    name: "Ophthalmology",
    image: "https://example.com/images/ophthalmology.jpg",
    description:
      "Ophthalmology focuses on the diagnosis and treatment of eye conditions and diseases.",
  },
  {
    name: "Radiology",
    image: "https://example.com/images/radiology.jpg",
    description:
      "Radiology uses medical imaging to diagnose and treat diseases within the body.",
  },
  {
    name: "General Surgery",
    image: "https://example.com/images/general_surgery.jpg",
    description:
      "General Surgery involves performing surgical procedures on various parts of the body.",
  },
  {
    name: "Endocrinology",
    image: "https://example.com/images/endocrinology.jpg",
    description:
      "Endocrinology deals with disorders of the endocrine system, including hormone-related issues.",
  },
  {
    name: "Gastroenterology",
    image: "https://example.com/images/gastroenterology.jpg",
    description:
      "Gastroenterology focuses on the digestive system and its disorders.",
  },
  {
    name: "Hematology",
    image: "https://example.com/images/hematology.jpg",
    description: "Hematology is concerned with blood disorders and diseases.",
  },
  {
    name: "Infectious Disease",
    image: "https://example.com/images/infectious_disease.jpg",
    description:
      "Infectious Disease specialists treat and manage infections caused by bacteria, viruses, and other pathogens.",
  },
  {
    name: "Nephrology",
    image: "https://example.com/images/nephrology.jpg",
    description: "Nephrology focuses on kidney health and diseases.",
  },
  {
    name: "Pulmonology",
    image: "https://example.com/images/pulmonology.jpg",
    description:
      "Pulmonology deals with respiratory system diseases, including lungs and airways.",
  },
  {
    name: "Rheumatology",
    image: "https://example.com/images/rheumatology.jpg",
    description:
      "Rheumatology focuses on autoimmune and inflammatory conditions affecting the joints and connective tissues.",
  },
  {
    name: "Urology",
    image: "https://example.com/images/urology.jpg",
    description:
      "Urology deals with disorders of the urinary tract and male reproductive system.",
  },
  {
    name: "Anesthesiology",
    image: "https://example.com/images/anesthesiology.jpg",
    description:
      "Anesthesiology involves administering anesthesia and managing pain during and after surgery.",
  },
  {
    name: "Emergency Medicine",
    image: "https://example.com/images/emergency_medicine.jpg",
    description:
      "Emergency Medicine provides urgent care for acute illnesses and injuries.",
  },
  {
    name: "Plastic Surgery",
    image: "https://example.com/images/plastic_surgery.jpg",
    description:
      "Plastic Surgery involves reconstructive and cosmetic procedures to repair or enhance physical appearance.",
  },
  {
    name: "Vascular Surgery",
    image: "https://example.com/images/vascular_surgery.jpg",
    description:
      "Vascular Surgery focuses on diseases and conditions of the blood vessels.",
  },
];
