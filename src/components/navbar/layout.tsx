'use client'

import Image from 'next/image'
import Logo from '../../assets/logo.png'
import Link from 'next/link'
import styles from '../navbar/styles.module.scss';
import { useState, useEffect} from 'react'
import { useAnimate, stagger } from "framer-motion";

import Navigation from './navigation';
import NavigationMobile from './NavigationMobile';

import MenuToggle from './tougle';

type propsNavbar = {
    active: String
}

export default function Navbar(props: propsNavbar ) {
    const [isActive, setIsActive] = useState<boolean>(false);
    useEffect(
        () => {},[isActive])

    return (
        <> 
            <nav className={``}>
               <div className='flex justify-between mb-4 relative'>
                    <Image 
                        src={Logo} 
                        alt='Logo KMHD UI'
                        width={66}
                        height={66}
                        quality={20}
                        priority={false}
                        className='self-center'
                    ></Image>
                    <div className='self-center block md:hidden'>
                        <MenuToggle onClick= {() => setIsActive(!isActive)} status={isActive}></MenuToggle>
                    </div>
                    <div className='self-center hidden md:block'>
                        <Navigation />
                    </div>
               </div>
                {isActive ? <NavigationMobile active={isActive}></NavigationMobile> : <></>}
            </nav>  
        </>
    )
  }


