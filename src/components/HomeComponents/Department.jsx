"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const departments = [
  {
    title: "Cardiology",
    description:
      "Providing comprehensive cardiac care with advanced diagnostic and therapeutic services.",
  },
  {
    title: "Neurology",
    description:
      "Offering specialized care for neurological disorders with state-of-the-art facilities.",
  },
  {
    title: "Pediatrics",
    description:
      "Dedicated to the health and well-being of children from infancy through adolescence.",
  },
  {
    title: "Orthopedics",
    description:
      "Expert care for musculoskeletal conditions, including joint replacement and sports injuries.",
  },
  // Add more departments as needed
];

function DepartmentCard({ title, description }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      tabIndex={0}
      className="collapse collapse-plus bg-base-100 shadow-lg h-[105px]  "
    >
      <div className=" mb-4 collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default function DepartmentsSection() {
  return (
    <section className="mt-20 w-[95%] flex gap-5 mx-auto">
      <div className=" bg-center bg-no-repeat mt-5 bg-cover lg:h-[500px] bg-[url('https://media.istockphoto.com/id/1148334988/photo/doctor-and-female-patient-sitting-at-the-desk-and-talking-in-clinic-near-window-medicine-and.jpg?s=2048x2048&w=is&k=20&c=2w505gexS7SC5IeNjOIUIphK9GGXC_17ALSaknPX9fU=')] text-center mb-10 flex items-center justify-center flex-col ">
        <h2 className="text-4xl text-slate-700 font-bold">Our Departments</h2>
        <p className="text-xl text-slate-800 mt-4">
          We have a wide range of specialized departments to cater to your
          healthcare needs.
        </p>
      </div>
      <div className=" flex flex-col mt-8 gap-5 ">
        {departments.map((department, index) => (
          <DepartmentCard
            key={index}
            title={department.title}
            description={department.description}
          />
        ))}
      </div>
    </section>
  );
}
