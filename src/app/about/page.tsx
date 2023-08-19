import Navbar from "@/components/navbar/layout";
import VisiMisi from "@/components/visiMisi/layout";
import ValueAbout from "@/components/valueAbout/layout";
import SliderEvent from "@/components/sliderEvent/layout";
import Footer from "@/components/footer/layout";
import StucturalOrganization from "@/components/strucucturalAbout/layout";
export default function Page() {
    return (<div>
      <div className="p-4 md:px-[100px]">
        <Navbar active={"Home"}></Navbar>
      </div>
      <VisiMisi></VisiMisi>
      <div className=" p-4 md:px-[100px]">
        <ValueAbout></ValueAbout>
        <SliderEvent></SliderEvent>
        <StucturalOrganization></StucturalOrganization>
        <Footer></Footer>
      </div>
    </div>)}