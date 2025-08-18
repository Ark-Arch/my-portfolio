"use client"
import { useState, useEffect } from "react"

const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Solutions Architect",
  "Software Developer",
  "Technical Business Analyst",
  "Systems Engineer",
]

export default function TypingTitle() {
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
      }, 120)
      return () => clearTimeout(timeout)
    } else if (deleting && subIndex > 0) {
      // deleting backward
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1))
        setSubIndex(subIndex - 1)
      }, 80)
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
    <div className="text-xl font-mono flex">
      <span>{text}</span>
      <span className={`ml-1 ${blink ? "opacity-100" : "opacity-0"} text-red-500`}>
        |
      </span>
    </div>
  )
}
