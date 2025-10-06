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
    <div style={{position: "relative", backgroundColor: '#013699'}} >

      

      <div style={{width: '100vw', height: '100vh', backgroundColor: '#eeede8', paddingTop: '4rem', marginTop: '-5rem', overflow: 'hidden'}} >

      <Hero/> 

      </div>


      {/* Add in the image text element here  */}
      <div  style={{backgroundColor: '#eeede8', width: '100vw', height: '100vh'}} >

      <ImageText/> 



      </div>

      <div>
        <VideoBlock/> 

      </div>



      <div style={{backgroundColor: '#e1dad3', width: '100vw', height: '130vh', paddingBottom: '0rem',paddingTop: '0px',  position: "relative", zIndex: '99'}} >

        <FeatureGrid/> 


      </div>

      <div  style={{backgroundColor: '#79a479', width: '100vw', height: '406px', display: "grid", placeContent:'center', paddingBottom:"5rem"}} >
        <FirstTextElement/>


      </div>


      <div style={{width: '100vw', height: '100vh', backgroundColor: '#eeede8', paddingTop: '0rem', paddingBottom:"5rem", marginTop: '-5rem', display: "grid", placeContent: "center", overflow: 'hidden'}}  >

      <FeatureBlock/> 



      </div>

      <div style={{width: '100vw', height: '100vh', backgroundColor: '#ef7a1a', paddingTop: '4rem', marginTop: '-5rem', overflow: 'hidden', display: "grid", placeContent: "center",}}  >

        <TextImage/> 


      </div>


      <div style={{backgroundColor: '#c8c8c5', width: '100vw', height: '406px', display: "grid", placeContent:'center'}}>

      <TextElement/> 
      </div>

      <div>
        <ContactForm/> 

      <div style={{marginBottom: "-3rem", outline: "2px solid red", position: "absolute", bottom: '0'}}>

      </div>


      </div>

      <div style={{position: "relative",  zIndex:"9999"}} >

      <Footer/> 



      </div>







    </div>
  );
}
