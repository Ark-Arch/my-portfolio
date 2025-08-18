import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaMedium} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, link: ""},
    {icon: <FaLinkedinIn/>, link: ""},
    {icon: <FaYoutube/>, link: ""},
    {icon: <FaTwitter/>, link: ""},
    {icon: <FaMedium/>, link: ""}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return (
                <Link key={index} href={social.link} target="_blank" className={iconStyles}>
                    {social.icon}
                </Link>
            )
        })

        }
    </div>
  )
}

export default Socials