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


type SlideStructureType = {
    nama:String,
    jabatan: String,
}
const dataSlideStructure:SlideStructureType[] = [
    {   
        nama: "Geklan Wulandari",
        jabatan: "KETUA",
    },
    {
       
        nama: "Geklan Wulandari",
        jabatan: "WAKIT",
    },
    {
       
        nama: "Geklan Wulandari",
        jabatan: "SKRETARIS",
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
        <div className="my-10 mx-30 grid grid-cols-1 lg:grid-cols-12">
            <section className="px-10 md:col-span-4 text-center md:text-start">
                <h3 className="font-bold text-4xl py-10 ">Structural Organization</h3>
                <p className="text-xl">Our members are a part of diverse divisions that work together as one.</p>
            </section>

            <section className="lg:col-span-8">
                <div className="relative w-full h-full">
                    <motion.div
                        key={currentIndex}
                        initial={{x: animationTransition ? -100 : 100}}
                        animate={{x:0}}
                        exit={{x:animationTransition ? 100 : -100}}
                        className="grid lg:grid-cols-2 mt-6 gap-10 md:mt-0 py-10">

                        <div className="mx-auto text-center relative">
                            <div className="max-h-[400px] max-w-[350px] overflow-hidden rounded-2xl relative">
                                <Image  className="-translate-y-10 object-cover"src={KetuaKMHD} alt="ketua-image"></Image>
                            </div>
                            <div className="absolute bottom-5 w-full text-white">
                                <p className="text-2xl font-bold">{dataSlideStructure[currentIndex].jabatan}</p>
                                <p className="text-base ">{dataSlideStructure[currentIndex].nama}</p>
                            </div>
                        </div>
                        
                        <div className="hidden lg:block mx-auto text-center relative
                        ">
                            <div className="max-h-[400px] max-w-[350px] overflow-hidden rounded-2xl relative">
                                <Image  className="-translate-y-10 object-cover"src={KetuaKMHD} alt="ketua-image"></Image>
                            </div>
                            <div className="absolute bottom-5 w-full text-white">
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
                    left-2 top-1/2
                    md:left-1 xl:left-8 md:top-1/2 md:left-0 transform md:-translate-x-1/2 md:-translate-y-1/2
                    ">
                        <Image src={BackSlide} alt="back-button"></Image>
                    </button>
                    <button
                    onClick={goToNext}
                    className="
                    p-3 md:p-4 bg-white drop-shadow-md rounded-full
                    absolute
                    right-2 top-1/2
                    md:top-1/2 md:-right-14 lg:-right-8 transform md:-translate-x-1/2 md:-translate-y-1/2
                    ">
                        <Image src={NextSlide} alt="back-button"></Image>
                    </button>
                </div>
            </section>
        </div>
    </>
}