import React from "react";

export default function News() {
  return (
    <div>
      <header class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
          <h1 class="text-3xl font-bold">Latest News</h1>
          <p class="mt-2 text-lg">
            Stay updated with the latest hospital updates and health news.
          </p>
        </div>
      </header>

      <section class="my-8">
        <div class="container mx-auto px-4">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576089275776-b6cd5deabdad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured News"
              class="w-full h-64  object-cover"
            />
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-2">
                New Pediatric Unit Opens at CareLife Hospital
              </h2>
              <p class="text-gray-600 mb-4">
                CareLife Hospital is excited to announce the grand opening of its new
                pediatric unit, designed to provide specialized care for
                children.
              </p>
              <a href="#" class="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="my-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNGBw-GEDGDb2VZ7N5pko47CDycAX2cD-mA9WNPWRe31y3TDGFy_dlohxr-OwCS67CGM&usqp=CAU"
                alt="News"
                class="w-full h-32 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  Hospital Expands Mental Health Services
                </h3>
                <p class="text-gray-600 mb-4">
                  The hospital has expanded its mental health services to better
                  support our community,s needs.
                </p>
                <a href="#" class="text-blue-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-4">
          New Pediatric Unit Opens at CareLife Hospital
        </h1>
        <p class="text-gray-600 mb-4">July 22, 2024 | Jane Doe</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4bdBjZWyuPfLz2tbjGkl37eXvty3_gcmaA&s"
          alt="New Pediatric Unit"
          class="w-full h-64 object-cover mb-4"
        />
        <p class="text-gray-800 mb-4">
          The new pediatric unit at XYZ Hospital officially opened its doors
          this week, marking a significant milestone in enhancing child
          healthcare services in our community.
        </p>
        <p class="text-gray-800 mb-4">
          The new unit features state-of-the-art technology and child-friendly
          environments designed to make treatment as comfortable as possible.
          Services include specialized treatments, a dedicated play area, and
          family support resources.
        </p>
        <blockquote class="border-l-4 border-blue-500 pl-4 mb-4">
          <p class="italic">
            This new unit represents our commitment to providing the highest
            quality of care for our youngest patients, said Dr. Alice Johnson,
            Chief Pediatrician.
          </p>
        </blockquote>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Facility"
          class="w-full h-64 object-cover mb-4"
        />
        <p class="text-gray-800 mb-4">
          For more details, please contact our media relations team at
          carelifehospital.com or call 408-555-1234.
        </p>
        <div class="flex space-x-4 mb-8">
          <a href="#" class="text-blue-600 hover:underline">
            Share on Facebook
          </a>
          <a href="#" class="text-blue-600 hover:underline">
            Share on Twitter
          </a>
          <a href="#" class="text-blue-600 hover:underline">
            Share on LinkedIn
          </a>
        </div>
        <div class="border-t pt-4">
          <h2 class="text-xl font-semibold mb-4">Related Articles</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              <a href="#" class="text-blue-600 hover:underline">
                New Treatment Options for Pediatric Patients
              </a>
            </li>
            <li>
              <a href="#" class="text-blue-600 hover:underline">
                Upcoming Health Fair at CareLife Hospital
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
