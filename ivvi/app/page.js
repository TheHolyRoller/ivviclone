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
import TextElement from "./Components/TextElement";
import FirstTextElement from "./Components/FirstTextElement";



export default function Home() {
  return (
    <div>
      <Hero/> 
      <div style={{width: '100vw', height: '100vh', backgroundColor: '#eeede8', paddingTop: '4rem', marginTop: '-5rem', overflow: 'hidden'}} >

      <ImageText/> 
      </div>

      <div>
        <VideoBlock/> 

      </div>



      <div style={{backgroundColor: '#e1dad3', width: '100vw', height: '130vh', paddingBottom: '0rem',paddingTop: '0px',  position: "relative", zIndex: '99'}} >

        <FeatureGrid/> 


      </div>

      <div   >
        <FirstTextElement/>


      </div>


      <div style={{backgroundColor: '#c8c8c5', width: '100vw', height: '406px', display: "grid", placeContent:'center'}}>

      <TextElement/> 
      </div>

      <div>
        <ContactForm/> 


      </div>

      <div style={{position: 'absolute', bottom: "0", zIndex:"9999"}} >

      {/* <Footer/>  */}


      </div>







    </div>
  );
}
