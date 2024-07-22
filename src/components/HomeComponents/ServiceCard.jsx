"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Emergency Services",
    description:
      "24/7 emergency care with state-of-the-art facilities and expert staff.",
    image:
      "https://www.bayfronthealth.com/-/media/images/bayfront-health/services/emergency-service_trauma-care-768x520.jpg",
  },
  {
    title: "Outpatient Services",
    description:
      "Comprehensive outpatient services for routine check-ups and treatments.",
    image:
      "https://cdn.prod.website-files.com/5babc11099f97ea5dbcf24d5/65b92f084421ec9889900fc9_653ffcd1ddb831e06826a439_outpatient-surgery-center.jpeg",
  },
  {
    title: "Surgical Services",
    description:
      "Advanced surgical care with modern technology and experienced surgeons.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2VCEXaNlbccuWT8TqMXQd-d4vAyJrbOv2w&s",
  },
  {
    title: "Diagnostic Imaging",
    description:
      "High-quality diagnostic imaging services for accurate and timely diagnosis.",
    image:
      "https://www.shutterstock.com/image-photo/multicultural-doctor-pushing-buttons-ct-600nw-2322882423.jpg",
  },
];

function ServiceCard({ title, description, images }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{backgroundImage:`url(${images})`}}
      className="bg-white bg-opacity-50 h-[300px] p-6 shadow-lg flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center rounded-lg"
    >
      <h3 className="text-2xl text-blue-700 font-bold mb-4">{title}</h3>
      <p className="text-blue-700">{description}</p>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="mt-20 w-[95%] mx-auto">
      <div className=" mb-10">
        <h2 className="text-4xl font-bold">Our Key Services</h2>
        <p className="text-xl text-gray-600 mt-4">
          We offer a wide range of medical services to cater to your health
          needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            images={service.image}
          />
        ))}
      </div>
    </section>
  );
}
