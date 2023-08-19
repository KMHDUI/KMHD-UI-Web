import Link from "next/link";
import styles from '../navigation/styles.module.scss'

const navItems = [
    {
        title: "Home",
        href: '/'
    },
    {
        title: "About",
        href: '/'
    },
    {
        title: "Home",
        href: '/'
    },
    {
        title: "Home",
        href: '/'
    },
]

export default function navigation() {
    return (
        <> 
            <section className={`${styles.body} `}>
                <div className={`${styles.nav} text-black`}>
                    <Link href="/" className={`${styles.link}`}>Home</Link>
                    <Link href="/about" className={`${styles.link}`}>About</Link>
                    <Link href="/" className={`${styles.link}`}>Blog</Link>
                    <Link href="/" className={`${styles.link}`}>Contact</Link>
                </div>
            </section> 
        </>
    )
  }