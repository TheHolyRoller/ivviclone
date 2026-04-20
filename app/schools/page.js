import dynamic from "next/dynamic";
import SchoolsHero from "../Components/SchoolsHero";
import girl from "../../public/images/girl_laptop.webp";

const Demo = dynamic(() => import("../Components/Demo"));
const SchoolGrid = dynamic(() => import("../Components/SchoolGrid"));
const SchoolsImageText = dynamic(() => import("../Components/SchoolsImageText"));
const SpecGrid = dynamic(() => import("../Components/SpecGrid"));
const TechSpecs = dynamic(() => import("../Components/TechSpecs"));
const DemoRequest = dynamic(() => import("../Components/Demo_Request"));
const SchoolsForm = dynamic(() => import("../Components/SchoolForm"));
const SchoolPricingForm = dynamic(() => import("../Components/SchoolPricingForm"));
const SchoolText = dynamic(() => import("../Components/SchoolText"));

export const metadata = {
	title: "ivvi Notes for schools and colleges | ivvi",
	description:
		"ivvi Notes for schools and colleges: demo licences, training and visual lecture notes for neurodiverse learners. DSA aligned — request a demo from ivvi.",
	alternates: {
		canonical: "/schools",
	},

  
}

export default function Schools() {
  return (
    <main aria-labelledby="schools-hero-heading">
      <SchoolsHero />
      <Demo heading="3 Minute ivvi Demo" />
      <SchoolGrid />
      <SchoolsImageText />
      <SpecGrid sectionTitle="Key assistive features for schools and colleges" />
      <TechSpecs heading="Audio, transcript and mind map in one school app" />

      <DemoRequest
        mainHeading="Request a demo licence for your school"
        supportingHeadline=""
        bulletPoints={[
          "Free licence for assessment, demonstration and training purposes.",
          "Experience the functionality of ivvi",
          "DSA Approved",
          "No subscription",
          "Keep lifetime access to your maps",
        ]}
        ctaText=""
        ctaLink="https://ivvi.dev"
        imageSrc={girl}
        imageAlt="Woman using laptop"
      />

      <SchoolsForm formAction="https://submit-form.com/SuZmqBaN3" />
      <SchoolPricingForm formAction="https://submit-form.com/2RJWKQIOQ" />
      <SchoolText />
    </main>
  );
}
