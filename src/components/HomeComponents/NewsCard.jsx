"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

// Sample data for news and updates
const news = [
  {
    title: "New Advanced Cardiac Center Opens",
    date: "July 10, 2024",
    description: "We are excited to announce the opening of our new Advanced Cardiac Center, equipped with the latest technology and staffed by experienced cardiologists.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Community Health Fair",
    date: "August 15, 2024",
    description: "Join us for a day of free health screenings, wellness workshops, and fun activities for the whole family at our annual Community Health Fair.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "COVID-19 Vaccination Drive",
    date: "September 5, 2024",
    description: "We are organizing a COVID-19 vaccination drive to ensure the safety and well-being of our community. Vaccinations will be available for all age groups.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "New Pediatric Wing Inauguration",
    date: "October 20, 2024",
    description: "Our new Pediatric Wing is now open, offering specialized care for children in a child-friendly environment with expert pediatricians.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more news items as needed
];

function NewsCard({ title, date, description, imageUrl }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white p-6 shadow-lg rounded-lg"
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{date}</p>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

export default function NewsUpdatesSection() {
  return (
    <section className="mt-20 w-[95%] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">News & Updates</h2>
        <p className="text-xl text-gray-600 mt-4">Stay updated with our latest news, events, and announcements.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            date={item.date}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
