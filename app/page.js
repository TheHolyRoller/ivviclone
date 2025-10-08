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
        <ImageText/> 
          <VideoBlock/> 



          <FeatureGrid/> 

          <FirstTextElement/>


        <FeatureBlock/> 


          <TextImage/> 
      

        <TextElement/> 

       
          <ContactForm/> 

       
        <Footer/> 

      </div>
    );
  }
