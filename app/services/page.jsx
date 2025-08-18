"use client";

import {BsArrowDownRight} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";
import {FaRegHandPointRight} from "react-icons/fa";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Cloud and DevOps Solutions",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati praesentium dignissimos, "
  },
  {
    num: "02",
    title: "Backend Development and API Integration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati praesentium dignissimos, "
  },
  {
    num: "03",
    title: "Business and Technical Analysis",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati praesentium dignissimos, "
  },
  {
    num: "04",
    title: "System Design and Architecture",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati praesentium dignissimos, "
  }
]



const Services = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.2, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
            <div key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline 
                text-transparent group-hover:text-outline-hover
                transition-all duration-500"
                >
                  {service.num}</div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
            )
          })

          }
          
        </motion.div>
      </div>
    </section>
  )
}

export default Services