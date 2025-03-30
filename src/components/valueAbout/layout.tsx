import Image from "next/image"
import Continous from "@/assets/continous.png"
import Solidarity from "@/assets/Solidarity.png"
import ProfesionalIcon from "@/assets/profesional.svg"
export default function ValueAbout() {

    return <>
        <div className="my-20 md:mt-32 px-9  md:px-24">
            <div className="text-center w-full align-center">
                <h3 className="font-bold text-lg md:text-2xl">“Berlayar Selaras Menyemaikan Makna”</h3>
                <p className="mt-5 md:px-30 lg:px-32">Untuk mencapai visi dan misi dari KMHD UI 2025, terdapat 3 nilai yang berdiri tegak untuk melandasi seluruh kegiatan KMHD UI 2025, diantaranya:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 mt-24">
                <div className="text-center" >
                    <div className="flex justify-center item-center">
                        <Image src={Solidarity} alt="logo-solidarity" className="w-[100px] md:max-w-[120px]"></Image>
                    </div>
                    <p className="mt-4">Solidarity</p>
                </div>
                <div className="flex items-center ">
                    <svg  className="w-full  hidden md:block" height="5" >
                        <path d="M1 1 H250 " stroke="#F46667" stroke-width="3" />             
                    </svg>
                    <div className=" ">
                        <svg  className="h-full  block md:hidden" height="120" >
                                <path d="M1 1 V250 " stroke="#F46667" stroke-width="3" />             
                        </svg>
                    </div>
                </div>
                <div className="text-center" >
                    <div className="flex justify-center item-center">
                        <Image src={ProfesionalIcon} alt="logo-profesional" className="w-[100px] md:max-w-[120px]"></Image>
                    </div>
                    <p className="mt-4">Profesional</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center text-center">
                        <svg  className="w-full  hidden md:block" height="5" >
                            <path d="M1 1 H250 " stroke="#F46667" stroke-width="3" />             
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <svg  className="h-full block md:hidden " height="120" >
                            <path d="M1 1 V250 " stroke="#F46667" stroke-width="3" />             
                        </svg>    
                    </div>           
                </div>
                <div className="text-center" >
                    <div className="flex justify-center item-center">
                        <Image src={Continous} alt="logo-continous" className="w-[100px] md:max-w-[120px]"></Image>
                    </div>
                    <p className="mt-4">Continous</p>
                </div>
            </div>
        </div>
    </>
}