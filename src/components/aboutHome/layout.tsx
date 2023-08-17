const decriptionAboutUs = "Keluarga Mahasiswa Hindu Dharma Universitas Indonesia merupakan Unit Kegiatan Mahasiswa bidang kerohanian yang menaungi mahasiswa universitas Indonesia khususnya yang beragama hindu untuk dapat menjalin relasi antar sesama agama hindu dan sebagai wadah untuk dapat mengembangkan kemampuan berorganisasi."


export default function AboutHome() {
  return (
    <>
        <div className='mt-14 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className="font-bold text-center text-xl ">About Us</h2>
                <p className="mt-3 text-justify	text-sm font-normal	leading-normal">{decriptionAboutUs}</p>
                <div className="">
                    <p className="m-auto">100+</p>
                    <p>Active Student</p>
                </div>
            </div>

            <div className="m-auto mt-34 ">
                <iframe  className="h-full w-auto min-h-200"
                src="https://www.youtube.com/embed/wikRopkg5HY" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                ></iframe>
            </div>

        </div>
    </>
  )
}
