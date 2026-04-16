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

export const metadata = {
	title: "ivvi Notes — live mind maps for dyslexia & ADHD | ivvi",
	description:
		"Turn lectures into live visual mind maps with ivvi Notes. Speech-to-Map™ transcription for dyslexia and ADHD. DSA approved — start your free trial.",
	alternates: {
		canonical: "/",
	},
}

export default function Home() {
  const getContactFormAction = () => "https://submit-form.com/DTcJ7Bccp";

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
      <div className="homeVideoBlockSection">
        <VideoBlock />
      </div>

      <FeatureGrid />

      <FirstTextElement />

      <FeatureBlock />

      <TextImage />

      <TextElement />

      <ContactForm formAction={getContactFormAction()} />
    </div>
  );
}
