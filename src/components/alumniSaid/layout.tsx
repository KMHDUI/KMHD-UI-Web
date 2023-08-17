import Image from "next/image"
import Alumni1 from "../../assets/alumnisaid1.jpg"
export default function alumniSaid() {
    return <>         
        <div className="mt-24">
            <div className="text-lg md:text-4xl font-bold text-center">
                <h1>See what our alumni Said</h1>
                <h1>About KMHD UI.</h1>
            </div>
            <div className="p-9">
                {/* <div className="">
                    <Image
                        src={Alumni1}
                        alt="Alumni Said Photo"
                    ></Image>
                </div> */}
            </div>
        </div>
    </>
}