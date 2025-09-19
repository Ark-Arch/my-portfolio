"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Services from "@/app/services/page"
import Resume from "@/app/resume/page"
import Work from "@/app/work/page"
import Contact from "@/app/contact/page"

const links = [
  { href: "/", label: "home" },
  // { href: "/services", label: "services" },
  // { href: "/resume", label: "resume" },
  // { href: "/work", label: "work" },
  // { href: "/contact", label: "contact" },
  { href: "http://34.243.75.152:5000/", label: "legacy_resume"}
]

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.href} key={index} className={`${link.href === pathname && 
                    "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                    {link.label}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav