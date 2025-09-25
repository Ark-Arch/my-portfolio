"use client"
import {useState, useEffect} from "react";

import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Photo from "@/components/Photo";

const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  // "AWS Cloud Consultant",
  // "Solutions Architect",
  // "Software Developer",
  // "Technical Business Analyst",
  "Systems Engineer",
]

const Home = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0) // current role index
  const [subIndex, setSubIndex] = useState(0) // current letter index
  const [deleting, setDeleting] = useState(false) // typing or deleting
  const [blink, setBlink] = useState(true)

  // typing + deleting effect
  useEffect(() => {
    if (index === roles.length) return

    if (!deleting && subIndex < roles[index].length) {
      // typing forward
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[index][subIndex])
        setSubIndex(subIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (deleting && subIndex > 0) {
      // deleting backward
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1))
        setSubIndex(subIndex - 1)
      }, 20)
      return () => clearTimeout(timeout)
    } else if (!deleting && subIndex === roles[index].length) {
      // pause before deleting
      const timeout = setTimeout(() => setDeleting(true), 1500)
      return () => clearTimeout(timeout)
    } else if (deleting && subIndex === 0) {
      // move to next word
      setDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
    }
  }, [subIndex, deleting, index])

  // blinking cursor
  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(timeout)
  }, [])  

  return (
    <>
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-2">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{text}</span>
            <span className={`ml-1 ${blink ? "opacity-100" : "opacity-0"} text-red-500`}>
              |
            </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br/> <span className="text-accent">David Agbemuko</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I think out Systems from end to end, ensuring I am able to provide its smooth development and operation across its entire lifecyle.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start">
              <a href="/assets/david_agbemuko_cv_v2.pdf" download>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 text-accent hover:text-white">
                <span>Download CV</span>
                <FiDownload/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-8">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>  
            </div>          
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
    <section id="adr-section" className="w-full py-12">
      <div className="flex justify-center items-center">
        <img 
          src="/assets/image_v2.png" 
          alt="wave" 
          className="w-full max-w-5xl mx-auto"
        />
      </div>
    </section>
    </>
  );
};

export default Home;
