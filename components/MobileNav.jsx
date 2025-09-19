"use client"

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries} from "react-icons/ci"

const links = [
  { href: "/", label: "home" },
  // { href: "/services", label: "services" },
  // { href: "/resume", label: "resume" },
  // { href: "/work", label: "work" },
  // { href: "/contact", label: "contact" },
  { href: "http://34.243.75.152:5000/", label: "legacy_resume"}
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle className="hidden">Mobile Navigation bar</SheetTitle>
            <SheetDescription className="hidden">
              This is a mobile navigation menu. Click on the links to navigate.
            </SheetDescription>
          </SheetHeader>
            <div className="mt-32 mb-48 text-center text-2xl">
              <Link href='/'>
                <h1 className="text-4xl font-semibold">
                  David<span className="text-accent">.</span>
                </h1>              
              </Link>
            </div>
            <nav className="flex flex-col justify-center  items-center gap-8">
              {links.map((link, index) => {
                return (
                  <Link href={link.href} key={index} className={`${link.href === pathname && 
                      "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                    {link.label}
                  </Link>
                )              
              })
              }
            </nav>
        </SheetContent>
    </Sheet>
  )
}
export default MobileNav