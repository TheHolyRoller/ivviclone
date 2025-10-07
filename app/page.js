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
import Hamburger from "./Components/Hamburger";



export default function Home() {
  return (
    <div style={{position: "relative", }} >

      

      <div style={{width: '100vw', height: '100vh', backgroundColor: '#eeede8', paddingTop: '4rem', marginTop: '-5rem', overflow: 'hidden'}} >

      <Hero/> 

      </div>


      {/* Add in the image text element here  */}
      <div>

      <ImageText/> 



      </div>

      <div style={{backgroundColor: '#013699'}} >
        <VideoBlock/> 

      </div>



      <div>

        <FeatureGrid/> 


      </div>

      <div  style={{backgroundColor: '#79a479', display: "grid", placeContent:'center', paddingBottom:"5rem"}} >
        <FirstTextElement/>


      </div>


      <div style={{ backgroundColor: '#eeede8', paddingTop: '0rem', display: "grid", placeContent: "center", overflow: 'hidden'}}  >

      <FeatureBlock/> 

      </div>

      <div style={{ backgroundColor: '#ef7a1a', overflow: 'hidden', display: "grid", placeContent: "center",}}  >

        <TextImage/> 


      </div>


      <div style={{backgroundColor: '#c8c8c5', display: "grid", placeContent:'center'}}>

      <TextElement/> 
      </div>

      <div>
        <ContactForm/> 


      </div>

      <div style={{position: "relative",  zIndex:"9999"}} >

      <Footer/> 



      </div>

    </div>
  );
}
