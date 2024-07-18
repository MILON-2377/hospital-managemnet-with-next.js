"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

// Sample data for doctors
const doctors = [
  {
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    imageUrl: "https://unsplash.com/photos/a-female-muslim-doctor-with-hijab-over-white-background-studio-BK25mS15dhk",
  },
  {
    name: "Dr. Jane Smith",
    specialization: "Neurologist",
    imageUrl: "https://unsplash.com/photos/young-and-confident-doctor-is-using-tablet-pc-for-his-work-g-ojEhoaqFM",
  },
  {
    name: "Dr. Michael Brown",
    specialization: "Pediatrician",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRvY3RvcnMlMjBwcm9maWxlfGVufDB8fDB8fHww",
  },
  {
    name: "Dr. Emily Davis",
    specialization: "Orthopedic Surgeon",
    imageUrl: "https://plus.unsplash.com/premium_photo-1673953510186-580f42dd1492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGRvY3RvcnMlMjBwcm9maWxlfGVufDB8fDB8fHww",
  },
  // Add more doctors as needed
];

function DoctorCard({ name, specialization, imageUrl }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white p-6 shadow-lg rounded-lg text-center"
    >
      <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{specialization}</p>
    </motion.div>
  );
}

export default function DoctorsSection() {
  return (
    <section className="mt-20 w-[95%] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Meet Our Prominent Doctors</h2>
        <p className="text-xl text-gray-600 mt-4">Our team of dedicated professionals are here to provide the best care possible.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} name={doctor.name} specialization={doctor.specialization} imageUrl={doctor.imageUrl} />
        ))}
      </div>
    </section>
  );
}
