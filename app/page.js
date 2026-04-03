import dynamic from "next/dynamic";
import Hero from "./Components/Hero";

const ImageText = dynamic(() => import("./Components/ImageText"));
const VideoBlock = dynamic(() => import("./Components/VideoBlock"));
const FeatureGrid = dynamic(() => import("./Components/FeatureGrid"));
const FirstTextElement = dynamic(() => import("./Components/FirstTextElement"));
const FeatureBlock = dynamic(() => import("./Components/FeatureBlock"));
const TextImage = dynamic(() => import("./Components/TextImage"));
const TextElement = dynamic(() => import("./Components/TextElement"));
const ContactForm = dynamic(() => import("./Components/ContactForm"));
const Footer = dynamic(() => import("./Components/Footer"));

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#eeede8",
          paddingTop: "4rem",
          marginTop: "-5rem",
          overflow: "hidden",
        }}
      >
        <Hero />
      </div>

      <ImageText />
      <VideoBlock />

      <FeatureGrid />

      <FirstTextElement />

      <FeatureBlock />

      <TextImage />

      <TextElement />

      <ContactForm />

      <Footer />
    </div>
  );
}
