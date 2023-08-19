"use client"
import Image from "next/image"
import recSlider from "@/assets/rectagle-slider.svg"
import reSliderMini from "@/assets/rectagle-slider-mini.svg"
import NextSlide from "@/assets/next.svg"
import BackSlide from "@/assets/back.svg"
import CircleMobile from "@/assets/circle-2-mobile.svg"
import DummyImage from "@/assets/alumnisaid1.jpg"
import Kegiatan1 from "@/assets/kegiatan-1.jpg"
import Kegiatan2 from "@/assets/kegiatan-2.jpg"

import React, { useState } from 'react';
import { motion } from "framer-motion"


type SliderTyper = {
    date:String,
    title: String,
    decsription: String
}
const dataSlide:SliderTyper[] = [
    {   
        date: "31 Oktober 2023",
        title: "Makrab KMHD UI 2023",
        decsription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  "
    },
    {
       
        date: "21 July 2022",
        title: "Grand Opening Welcoming MABA KMHD UI 2023",
        decsription: "Welcoming Maba merupakan suatu rangkaian acara menyambut mahasiswa baru khususnya yang beragama hindu, terintegrasi dengan OKK UI dan fakultas-fakultas lainnya sebagai acuan keaktifan dari para mahasiswa baru terkhusus pada bidang kerohanian."
    }
]

export default function SliderEvent() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [animationTransition, setAnimation] = useState<boolean>(false)

    const gotToPrevious = () => {
        setAnimation(true)
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? dataSlide.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        
    }

    const goToNext = () => {
        setAnimation(false)
        const isLastIndex = currentIndex === dataSlide.length -1
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


    return <>
        <div className="px-8 my-40">
            <h3 className="font-bold text-center text-2xl">Get to know our events</h3>
            <p className="font-base mt-4 text-center">KMHD UI 2023 mewadahi seluruh mahasiswa hindu di Universitas Indonesia untuk dapat mengembangkan berbagai potensi diri baik dalam skill berorganisasi maupun mengasah ilmu pengetahian lainnya. Mari simak kegiatan serta program kerja apa saja yang akan dilaksanakan oleh KMHD UI 2023. </p>
            <section className="relative w-full">
                <div className="bg-[#2949A6] rounded-3xl relative mt-10">
                    <div className="absolute bottom-0 right-0 z-0">
                        <Image src={CircleMobile} alt="icon-circle-mobile"></Image>
                    </div>

                    <motion.div 
                        key={currentIndex}
                        initial={{x: animationTransition ? -100 : 100}}
                        animate={{x:0}}
                        exit={{x:animationTransition ? 100 : -100}}

                        className="content p-[27px] relative z-1 grid grid-cols-1 lg:grid-cols-4 lg:gap-12 pb-10 ">
                        <div className="overflow-hidden min-h-[300px] max-h-[315px] w-full rounded-3xl"><Image src={Kegiatan1} alt="dummy-data" className="scale-150"></Image></div>
                        <div className="pt-10 lg:pr-16 text-white col-span-3">
                            <p className="font-bold text-sm">{dataSlide[currentIndex].date}</p>
                            <h3 className="pt-4 font-bold text-3xl md:max-w-[600px]">{dataSlide[currentIndex].title}</h3>
                            <p className="pt-2 md:pt-8 md:pr-20 md:text-lg  text-justify font-light">{dataSlide[currentIndex].decsription} </p>
                        </div>
                    </motion.div>

                    <div className="absolute top-0 left-0">
                        <Image src={reSliderMini} alt="rectagle" className=" visible xl:hidden"></Image>
                        <Image src={recSlider} alt="rectagle" className="invisible xl:visible"></Image>
                    </div>
                </div>
                {/* <div className="mt-4 flex justify-center gap-4"> */}
                    <button className="
                        p-3 md:p-5 bg-white drop-shadow-md rounded-full
                        absolute left-1/4 md:top-1/2 md:left-0 transform md:-translate-x-1/2 md:-translate-y-1/2
                    "
                    onClick={gotToPrevious}
                    >
                        <Image src={BackSlide} alt="back-slide-icon"></Image></button>

                    <button className="
                        p-3 md:p-5 bg-white drop-shadow-md rounded-full
                        absolute right-1/4 md:top-1/2 md:-right-16 transform md:-translate-x-1/2 md:-translate-y-1/2
                    "
                    onClick={goToNext}
                    >
                        <Image src={NextSlide} alt="next-slide-icon"></Image></button>
            </section>
        </div>
    </>
}