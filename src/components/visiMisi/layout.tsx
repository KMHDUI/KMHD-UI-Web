import Image from "next/image"
import Curver from "@/assets/top-curve.svg"
import Circle from "@/assets/Ellipsebg.svg"
import Spline from "@/assets/Spline.svg"

type contentMisionType = {
    number: Number,
    content: String
}

const contentMision:contentMisionType[] = [
    {
        number: 1,
        content: "Merekatkan kembali KMHD UI baik fungsionaris maupun non-fungsionaris dengan segenap kegiatan bersifat kekeluargaan."
    },
    {
        number: 2,
        content: "Menciptakan lingkungan kerja yang dinamis dengan melibatkan seluruh anggota KMHD UI mengikuti kegiatan pengembangan diri yang diadakan oleh internal KMHD UI."
    },
    {
        number:3,
        content: "Memberi kebermanfaatan untuk sesama tidak hanya dilingkungan internal tetapi juga pada eksternal KMHD UI"
    },
    {
        number: 4,
        content: "Membangun jejaring relasi alumni dan eksternal KMHD UI."
    }
]
export default function VisiMisi() {

    return <>
        <div className="">
            <div className="text-center">
                <h2 className="font-bold text-xl md:text-3xl">KMHD UI 2023</h2>
                <p className="text-light text-xs md:text-lg">#Berlayar Selaras Menyemaikan Makna</p>
            </div>


            <div className="bg-[#2949A6] overflow-hidden relative" >
                <div className="absolute
                    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 ">
                    <Image className=" h-[700px] w-auto scale-[3] md:scale-[1.90]" src={Circle} alt="circle"></Image>
                </div>

                <div className="absolute top-0 -z-1 right-40">
                    <Image className="h-[700px] w-auto scale-150 invisible md:visible" src={Spline} alt="spline"></Image>
                </div>
                
                <div className="p-14 mt-4 md:my-20 lg:my-32
                        grid grid-cols-1 md:grid-cols-2 gap-2 
                        relative z-1
                        ">
                    <div className="text-white  px-0 md:px-24">
                        <h3 className="font-bold text-xl md:text-2xl">Vision</h3>
                        <p className="font-light text-base mt-8 md:max-w-[490px] md:text-lg">Mewujudkan KMHD UI sebagai organisasi kekeluargaan yang progresif, inklusif, dan berdedikasi bagi internalnya maupun eksternal KMHD UI.</p>
                        <p className="mt-4 text-xs">@kmhdui2023</p>
                    </div>
                    <div className="px-0 md:px-16 lg:px-24 xl:px-28 2xl:px-40
                        mt-10 md:mt-0
                    ">
                        <h2 className="font-bold text-xl md:text-2xl text-white">Mission</h2>
                        {contentMision.map((items) => (<div className="
                            bg-white 
                            mt-4 
                            p-4 
                            rounded-2xl
                            grid grid-cols-4
                            ">
                            <p className="col-span-1 flex text-xl font-bold items-center text-center justify-center">{`0${items.number.toString()}`}</p>
                            <p className="col-span-3 text-justify font-light text-sm">{items.content}</p>
                        </div>))}
                    </div>
                </div>
                <Image className="absolute top-0 z-0 w-full" src={Curver} alt="curve"></Image>
            </div>
        </div>     
    </>
}