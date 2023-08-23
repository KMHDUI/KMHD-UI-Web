import Image from "next/image"
export default function Aspirasi() {
    return <>         
        <div className="mt-20 grid 
                    grid grid-cols-1 md:grid-cols-2 
                    bg-[#2949A6]
                    p-11
                    md:pt-32
                    rounded-3xl
                    
                    text-white
                    ">
            <div>
                <h1 className="
                text-center 
                text-xl md:text-4xl
                font-bold
                ">Tell Your Aspiration</h1>
                <p className="mt-7
                    text-center md:text-start
                ">Halo Warga KMHD UI!</p>
                <p className="mt-3 
                    md:pr-20
                    text-center md:text-start
                ">Yuk tuangkan aspirasi kalian untuk bersama-sama membangun KMHD UI lebih baik lagi. Ditunggu aspirasi kerennya!</p>
            </div>
            <form action="" className="grid grid-cols-1 ">
                <label htmlFor="Name" className="font-light	">Name</label>
                <input type="text" className="mt-2 rounded  h-9"/>
                <label htmlFor="Aspiration" className="font-light mt-9">Anspiration</label>
                <textarea name="" id="" className=" rounded h-52 mt-2"></textarea>
                <button className="mt-8 bg-[#C8BA40] p-2 rounded-full font-bold">Submit</button>
            </form>
        </div>
    </>
}