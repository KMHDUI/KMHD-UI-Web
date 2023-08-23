import Link from "next/link";
import styles from '../navigation/styles.module.scss'

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

export default function Navigation() {
    return (
        <> 
            <section className="flex gap-10">
                    {navItems.map((items, index) => (
                        <Link href={items.href} key={index} className="text-[#294390]">{items.title}</Link>
                    ))}
            </section> 
        </>
    )
  }