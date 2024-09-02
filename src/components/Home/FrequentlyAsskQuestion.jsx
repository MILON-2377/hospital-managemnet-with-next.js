"ues client";
import { motion } from "framer-motion";
import img from "../../../public/assets/askquestion.jpg";
import Image from "next/image";

export default function FrequentlyAsskQuestion() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{once:true}}
      className=" mt-16 lg:p-10 sm:w-full"
    >
      <div className=" ml-5 lg:ml-0 ">
        <p className="text-[18px] text-green-500 ">Get your answer</p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="w-full flex mt-3 items-center "
        >
          <h1 className=" text-3xl sm:text-4xl font-bold ">Frequently Ask Question</h1>
          <span className="text-5xl -mt-12 -ml-2 text-sky-500 font-bold ">
            +
          </span>
          <span className="text-4xl -mt-12 -ml-2 opacity-25 text-sky-500 font-bold ">
            +
          </span>
        </motion.div>
      </div>

      <div className=" flex items-center justify-between gap-5 ">
        {/* image */}
        <div className=" hidden lg:block flex-1 h-full mt-10 relative ">
          <Image
            src={img}
            alt="ask question image"
            className="w-full h-full object-cover rounded-md "
          />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              y: [0, 15, 0],
              opacity: [1, 1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className=" absolute p-4 flex items-center gap-2 top-32 right-10 rounded-md bg-white "
          >
            <p className=" text-2xl text-blue-500 ">Total patients</p>
            <p className="text-2xl text-yellow-500 ">4k</p>
          </motion.div>
        </div>

        {/* question answer section */}
        <div className=" lg:w-[50%] mt-10  w-[95%] lg:-mt-10 mx-auto h-full ">
          <motion.div className=" flex flex-col gap-5 ">
            {questionsAnsData.map((item, index) => (
              <motion.div
                key={index}

                initial={{opacity:0, y:-50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2}}
                viewport={{once:true}}
                tabIndex={0}
                className="collapse collapse-plus rounded-md bg-gray-50 border border-gray-200"
              >
                <div className="collapse-title text-xl font-medium">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ask question and aswer data
const questionsAnsData = [
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      "To book an appointment, search for a doctor based on your needs, choose a preferred time slot, and confirm your booking through our platform.",
  },
  {
    question: "Can I request a specific doctor when booking my appointment?",
    answer:
      "Yes, you can search for and select a specific doctor based on their specialization, location, or availability.",
  },
  {
    question:
      "What should I do if I need to cancel or reschedule my appointment?",
    answer:
      "If you need to cancel or reschedule your appointment, you can do so through our platform by accessing your appointment details and selecting the appropriate option.",
  },
  {
    question: "What if I'm running late for my appointment?",
    answer:
      "If you're running late, please notify the clinic or doctor as soon as possible. Depending on their policy, they may still be able to see you or help you reschedule.",
  },
  {
    question: "Can I book appointments for family members or dependents?",
    answer:
      "Yes, you can book appointments for your family members or dependents through your account by selecting their details during the booking process.",
  },
];
