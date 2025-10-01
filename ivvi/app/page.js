import Image from "next/image";
import Hero from "./Components/Hero";
import Footer from './Components/Footer'; 
import FeatureBlock from "./Components/FeatureBlock";
import ImageText from "./Components/ImageText";
// import FeatureBlock from "./Components/FeatureBlock";
import FeatureGrid from "./Components/FeatureGrid";
import ContactForm from "./Components/ContactForm";
import VideoBlock from "./Components/VideoBlock";
import TextImage from "./Components/TextImage";





export default function Home() {
  return (
    <div>

        <ContactForm/> 
        <VideoBlock/> 
        <div className="textIMG" style={{width: '100vw', height: '95vh', backgroundColor: '#ef7a1a'}}>

        <TextImage/> 
        
        </div>

        



    </div>
  );
}
