"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Emergency Services",
    description:
      "24/7 emergency care with state-of-the-art facilities and expert staff.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIWILBB2H1ahq57kME1hyOD_NA3C_PJ_dnA&s",
  },
  {
    title: "Outpatient Services",
    description:
      "Comprehensive outpatient services for routine check-ups and treatments.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAMn5qi1X36dkBmyyJXlSwX5CtDGS_765JQ&s",
  },
  {
    title: "Surgical Services",
    description:
      "Advanced surgical care with modern technology and experienced surgeons.",
    image: "Surgical Services",
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
      className="bg-white h-[300px] p-6 shadow-lg bg-cover bg-no-repeat bg-center rounded-lg"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
