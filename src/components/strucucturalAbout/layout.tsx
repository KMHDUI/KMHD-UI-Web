"use client"
import Image from "next/image"
import React, { useState } from 'react';
import { motion } from "framer-motion"

import recSlider from "@/assets/rectagle-slider.svg"
import reSliderMini from "@/assets/rectagle-slider-mini.svg"
import NextSlide from "@/assets/next.svg"
import BackSlide from "@/assets/back.svg"
import CircleMobile from "@/assets/circle-2-mobile.svg"
import KetuaKMHD from "@/assets/ketua.jpeg"
import DummyImage from "@/assets/alumnisaid1.jpg"

import Ketua from "./asssets/geklan.png"
import Wakil1 from "./asssets/ajus.png"
import Wakil2 from "./asssets/lala.png"
import Sekretaris from "./asssets/indri.png"
import Keuangan from "./asssets/ocha.png"




type SlideStructureType = {
    nama:String,
    jabatan: String,
    url: any
}
const dataSlideStructure:SlideStructureType[] = [
    {   
        nama: "Geklan Wulandari",
        jabatan: "KETUA",
        url: Ketua
    },
    {
       
        nama: "Ida Bagus",
        jabatan: "WAKIL 1",
        url: Wakil1

    },
    {
       
        nama: "Nirmala",
        jabatan: "Wakil 2",
        url: Wakil2

    },
    {
       
        nama: "Ida Ayu S",
        jabatan: "Bendahara",
        url: Keuangan

    },
    {  
        nama: "Made Indri",
        jabatan: "Sekretaris",
        url: Sekretaris
    }
]

export default function StucturalOrganization() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [animationTransition, setAnimation] = useState<boolean>(false)

    const gotToPrevious = () => {
        setAnimation(true)
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? dataSlideStructure.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        
    }

    const goToNext = () => {
        setAnimation(false)
        const isLastIndex = currentIndex === dataSlideStructure.length -1
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    function nextIndex(myindex:number){
        if(myindex === dataSlideStructure.length -1){
            return 0;
        } 
        return myindex+1
        
    }

    return <>
        <div className="my-10  x:mx-28 grid grid-cols-1 lg:grid-cols-12">
            <section className="px-10 md:col-span-4 text-center lg:text-start">
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl py-3 ">Structural Organization</h3>
                <p className="xl:px-0 xl:pr-32">Our members are a part of diverse divisions that work together as one.</p>
            </section>

            <section className="lg:col-span-8 mx-14 lg:mx-10 max-w-[700px] justify-items-center">
                <div className="relative w-full h-full">
                    <motion.div
                        key={currentIndex}
                        initial={{x: animationTransition ? -100 : 100}}
                        animate={{x:0}}
                        exit={{x:animationTransition ? 100 : -100}}
                        className=" 
                        flex flex-row 
                        gap-4
                        justify-center
                        mt-6 md:mt-0">

                        <div className=" mx-auto text-center relative">
                            <div className="h-[316px] w-[282px]  overflow-hidden rounded-2xl relative">
                                <Image  className="-translate-y-10 object-cover "src={dataSlideStructure[currentIndex].url} alt="ketua-image" ></Image>
                            </div>
                            <div className="absolute bottom-8 w-full text-white">
                                <p className="text-2xl font-bold">{dataSlideStructure[currentIndex].jabatan}</p>
                                <p className="text-base ">{dataSlideStructure[currentIndex].nama}</p>
                            </div>
                            </div>

                        <div className="hidden lg:block mx-auto text-center relative
                            ">
                            <div className="h-[316px] w-[282px] overflow-hidden rounded-2xl relative">
                                <Image  className="-translate-y-10 object-cover w-full h-auto"src={dataSlideStructure[nextIndex(currentIndex)].url} alt={`${dataSlideStructure[nextIndex(currentIndex)].jabatan}`}></Image>
                            </div>
                            <div className="absolute bottom-8 w-full text-white">
                                <p className="text-2xl font-bold">{dataSlideStructure[nextIndex(currentIndex)].jabatan}</p>
                                <p className="text-base ">{dataSlideStructure[nextIndex(currentIndex)].nama}</p>
                            </div>
                        </div>
                    </motion.div>
                    <button 
                            onClick={gotToPrevious}
                            className="
                            p-3 md:p-4 bg-white drop-shadow-md rounded-full
                            absolute 
                            left-[-60px]
                            top-[45%] lg:left-3
                            ">
                    <Image src={BackSlide} alt="back-button"></Image></button>
                    
                    <button
                        onClick={goToNext}
                        className="
                        p-3 md:p-4 bg-white drop-shadow-md rounded-full
                        absolute
                        right-[-60px] 
                        top-[45%] lg:right-3
                        ">
                            <Image src={NextSlide} alt="back-button"></Image>
                        </button>
                
                </div>
                
            </section>
        </div>
    </>
}

// <button 
// onClick={gotToPrevious}
// className="
// p-3 md:p-4 bg-white drop-shadow-md rounded-full
// absolute 
// left-2 top-1/2
// md:left-1 xl:left-8 md:top-1/2 md:left-0 transform md:-translate-x-1/2 md:-translate-y-1/2
// ">
//     <Image src={BackSlide} alt="back-button"></Image>
// </button>
// <button
// onClick={goToNext}
// className="
// p-3 md:p-4 bg-white drop-shadow-md rounded-full
// absolute
// right-2 top-1/2
// md:top-1/2 md:-right-14 lg:-right-8 transform md:-translate-x-1/2 md:-translate-y-1/2
// ">
//     <Image src={NextSlide} alt="back-button"></Image>
// </button>