'use client'

import Image from 'next/image'
import Logo from '../../assets/logo.png'
import Link from 'next/link'
import NavigationMobile from './navigation/index'
import styles from '../navbar/styles.module.scss';
import { useState } from 'react'

type propsNavbar = {
    active: String
}
 
export default function Navbar(props: propsNavbar ) {
    const [isActive, setIsActive] = useState<boolean>(false);
    
    return (
        <> 
            <nav className={`flex justify-between mb-4`}>
                <Image 
                    src={Logo} 
                    alt='Logo KMHD UI'
                    width={66}
                    height={66}
                    quality={20}
                    priority={false}
                ></Image>
                <div className={`${styles.button} visible md:invisible`} onClick={()=> {setIsActive(!isActive)}}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}` }></div>
                    {isActive ? <NavigationMobile />: <></>}
                </div>
            </nav>  
        </>
    )
  }