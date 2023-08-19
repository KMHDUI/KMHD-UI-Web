import Image from "next/image"
import Image1 from '../../assets/images1.jpg';
import styles from '../caroselHome/styles.module.scss'
export default function caroselHome() {
    return <>
    <div className="relative">
        <div className={`${styles.container_image} overflow-hidden bg-[#294390]`}>
            <Image className={`h-full w-full object-cover opacity-25`}
                src={Image1}
                alt="image1"
            ></Image>   
        </div>
        {/* <div className="absolute top-[50%] left-[50%] "> */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full m-auto text-center flex flex-col items-center justify-center font-semibold text-2xl md:text-4xl text-white ">
                <h3 >Welcome To</h3>
                <h3 >Official Website</h3>
                <h3 >KMHD UI 2023</h3>
            </div>
        </div>
    </div>
            
    </>
}