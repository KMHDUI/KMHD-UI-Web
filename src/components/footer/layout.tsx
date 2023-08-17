import Image from "next/image"
import styles from '../caroselHome/styles.module.scss'
import LogoIcon from "../../assets/logo.png"
import LocationIcon from "../../assets/location.png"
import EmailIcon from "../../assets/email.png"
import PhoneIcon from "../../assets/phone.png"

export default function Footer() {
    return <>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3" >
            <div className="mt-6">
                <Image src={LogoIcon} alt="Logo KMHD UI" className="h-16 w-16"></Image>
                <h2 className="font-bold text-xl">KMHD Universitas Indonesia</h2>
                <h3 className="text-sm">#BerlayarSelarasMenyemaikanMakna</h3>
            </div>
            <div  className="mt-6 col-span-2 w-full">
                <h2 className="font-medium md:mt-3">Contact Us</h2>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="flex">
                            <Image src={LocationIcon} alt="location-icon" className="h-6 w-6"></Image>
                            <p className="ml-2.5">Pusgiwa Universitas Indonesia, Depok</p>
                        </div>
                        <div className="flex mt-4 mt-7">
                            <Image src={EmailIcon} alt="email-icon" className="h-6 w-6"></Image>
                            <p className="ml-2.5">@kmhdui2023@gmail.com</p>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 flex">
                        <Image src={PhoneIcon} alt="phone-icon" className="h-6 w-6"></Image>
                        <div className="ml-2.5">
                            <p className="font-bold">Dihyanti</p>
                            <p>081388322642</p>
                            <p className="font-bold mt-4">Putra</p>
                            <p>081918456567</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="p-3 mt-20 mb-14 bg-[#2949A6] rounded text-center text-white">
            <p>©2023 From Fasilkom KMHD UI for KMHD UI</p>
        </div>    
    </>
}