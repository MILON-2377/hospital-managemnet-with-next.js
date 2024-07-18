"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

// Sample data for patient quotes
const quotes = [
  {
    name: "Alice Johnson",
    quote: "The care and attention I received at CareLife were exceptional. The staff made me feel comfortable and supported throughout my treatment.",
  },
  {
    name: "Mark Thompson",
    quote: "I am extremely grateful for the wonderful care provided by the doctors and nurses at CareLife. They truly go above and beyond.",
  },
  {
    name: "Sophia Lee",
    quote: "The medical team at CareLife is top-notch. They ensured I received the best possible care, and I couldn't be happier with the outcome.",
  },
  {
    name: "James Brown",
    quote: "From the moment I walked in, I felt at ease. The staff at CareLife are incredibly professional and caring.",
  },
  // Add more quotes as needed
];

function QuoteCard({ name, quote }) {
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
      <p className="text-xl italic mb-4">{`"${quote}"`}</p>
      <h3 className="text-lg font-semibold">{`- ${name}`}</h3>
    </motion.div>
  );
}

export default function PatientQuotesSection() {
  return (
    <section className="mt-20 w-[95%] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">What Our Patients Say</h2>
        <p className="text-xl text-gray-600 mt-4">Here are some of the positive experiences shared by our patients.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} name={quote.name} quote={quote.quote} />
        ))}
      </div>
    </section>
  );
}
