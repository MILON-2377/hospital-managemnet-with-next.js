import React from "react";

export default function Services() {
  return (
    <div>
      {/* medical section */}
      <div className="flex items-center justify-between gap-5 p-10">
        <section className="flex flex-col h-[500px] justify-center gap-7  w-[800px] ">
          <h1 className="text-5xl text-black font-sans font-bold ">
            Welcome to Our Medical Department
          </h1>
          <p className="text-xl font-sans ">
            Welcome to our Medical Department. At IHC, we are committed to
            providing nationally acclaimed medical care to everyone, regardless
            of age, gender, tribal affiliations, religion, sexual orientation,
            race, or ethnicity. Our holistic approach to healthcare is designed
            for the entire family, with a strong emphasis on preventive care.
            Our professionally trained medical staff is here to assist you with
            enrollment and referrals to critical services, including health
            insurance, nutrition counseling, social services, behavioral health,
            and more. For more information, please call the Eligibility Phone
            Line at 408-960-0657.
          </p>
        </section>

        {/* images section */}
        <section>
          <img
            className="w-[500px] h-[350px] object-cover "
            src="https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922-645x645.jpeg"
            alt=""
          />
        </section>
      </div>

      {/* dental section */}
      <div className="flex flex-row-reverse items-center  gap-20 w-[90%] mx-auto bg-yellow-800 bg-opacity-5 px-20 h-[1000px] -rotate-12 mt-20 ">
        {/* description section */}
        <section className="flex flex-col rotate-12 h-[500px] justify-center gap-7  w-[800px] ">
          <h1 className="text-5xl text-black font-sans font-bold ">
            Dental Department
          </h1>
          <p className="text-xl font-sans ">
            Welcome to our Dental Department. Our highly trained team is made up
            of friendly and knowledgeable professionals who will work with you
            on all aspects of your dental needs, from scheduling your
            appointments to helping you through all your dental treatments.
          </p>

          {/* list section */}
          <ul className="flex flex-col gap-2 bg-gray-200 p-5 ">
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Examinations
            </li>
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Cleanings
            </li>
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Fluoride Treatments
            </li>
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Restorative Dentistry
            </li>
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Oral Surgery
            </li>
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Endodontic Care
            </li>
            <li className="px-3 hover:bg-gray-50 text-xl font-serif hover:text-blue-600 py-1 bg-base-100 rounded-md">
              Periodontic Care
            </li>
          </ul>
        </section>

        {/* images section */}
        <section className="rotate-12 -mt-20">
          <img
            className="w-[500px] h-[500px] object-cover "
            src="https://www.seniorliving.org/app/uploads/2013/10/low-cost-dental-care.png"
            alt=""
          />
        </section>
      </div>

      {/* counseling section */}
      <div className="mt-40 flex items-center justify-between gap-10 bg-gray-50 p-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-5xl text-black mb-8 font-sans font-bold ">
            Counseling and Behavioral Health Department
          </h1>
          {counselingData.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="collapse collapse-arrow hover:text-blue-600 hover:bg-yellow-100  bg-base-200 "
            >
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content">
                <p>{item.description} </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[600px] mt-24 rounded-full h-[500px] ">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://img.freepik.com/free-vector/hand-drawn-life-coaching-illustration_23-2150279251.jpg"
            alt=""
          />
        </div>
      </div>

      {/* footer section */}
      <footer className="bg-white mt-20 border-t text-slate-700 px-7 py-10">
        <div className="container mx-auto flex flex-wrap justify-between items-start">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p>
              <strong>Address:</strong> 123 Hospital St, City, Country
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> info@hospital.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Hospital Name. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// counseling data
const counselingData = [
  {
    title: "Health Resource Services",
    description:
      "Offering a variety of health resources to support physical, mental, and emotional well-being.",
  },
  {
    title: "Counseling Services in San Jose",
    description:
      "Providing professional counseling services to individuals, families, and groups in the San Jose area.",
  },
  {
    title: "Adult Behavioral Health Program",
    description:
      "Specialized programs to address the behavioral health needs of adults, promoting mental wellness and recovery.",
  },
  {
    title: "Child and Adolescent Counseling",
    description:
      "Focused on the unique needs of children and adolescents, helping them navigate emotional and behavioral challenges.",
  },
  {
    title: "Family Therapy",
    description:
      "Strengthening family relationships and dynamics through therapeutic interventions and support.",
  },
  {
    title: "Substance Abuse Counseling",
    description:
      "Providing support and treatment for individuals struggling with substance abuse and addiction.",
  },

  {
    title: "Trauma-Informed Care",
    description:
      "Specialized care for individuals who have experienced trauma, focusing on healing and recovery.",
  },
];
