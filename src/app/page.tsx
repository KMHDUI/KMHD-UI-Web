import Image from 'next/image'
import Navbar from '@/components/navbar/layout'
import CaroselHome from '@/components/caroselHome/layout'
import AboutHome from '@/components/aboutHome/layout'
import AlumniSaid from '@/components/alumniSaid/layout'
import Aspirasi from '@/components/aspirasi/layout'
import Footer from '@/components/footer/layout'
const decriptionAboutUs = "Keluarga Mahasiswa Hindu Dharma Universitas Indonesia merupakan Unit Kegiatan Mahasiswa bidang kerohanian yang menaungi mahasiswa universitas Indonesia khususnya yang beragama hindu untuk dapat menjalin relasi antar sesama agama hindu dan sebagai wadah untuk dapat mengembangkan kemampuan berorganisasi."

export default function Home() {
  return (
    <main >
      <div className="p-4 md:px-[100px]">
        <Navbar active={"Home"}></Navbar>
      </div>
      <div className='px-5 sm:px-5 md:px-10 lg:px-32 pt-4'>
        <CaroselHome></CaroselHome>
        <AboutHome></AboutHome>
        <AlumniSaid></AlumniSaid>
        <Aspirasi></Aspirasi>
        <Footer></Footer>
      </div>
      
    </main>
  )
}
