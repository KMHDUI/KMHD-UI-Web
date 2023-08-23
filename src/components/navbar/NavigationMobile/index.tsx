import Link from "next/link";
import styles from '../navigation/styles.module.scss'

import {   motion} from "framer-motion";


const navItems = [
    {
        title: "Home",
        href: '/'
    },
    {
        title: "About",
        href: '/about'
    },
    {
        title: "Blog",
        href: '/'
    },
    {
        title: "Contact",
        href: '/'
    },
]

type NavigationMobileTypes = {
    active: boolean
  }

export default function NavigationMobile(props: NavigationMobileTypes) {
    return (
        <> 
            <motion.div 
                className="grid grid-cols-2"
                initial = {props.active ? "isOpen" : "isClose"}
                animate = {props.active ? "isOpen" : "isClose"}
                variants={{
                    isOpen :{
                        
                        animationDuration: "6"
                    },
                    isClose: {
                        transform: "translateY(-100%)",
                    },
                }}
                // animate
                >
                    {navItems.map((items, index) => (
                        <motion.div
                        initial = {props.active ? "isOpen" : "isClose"}
                        animate = {props.active ? "isOpen" : "isClose"}

                        // variants= {variantsLink}
                        >
                            <Link href={items.href} key={index} className="text-[#294390] text-lg md: text-xl flex justify-center py-10">{items.title}</Link>
                        </motion.div>
                    ))}
            </motion.div> 
        </>
    )
  }
  const variantsLink = {
    isOpen: {
      transition: { staggerChildren: 2, delayChildren: 2 }
    },
    isClose: {
      transition: { staggerChildren: 3, staggerDirection: -1 }
    }
  };