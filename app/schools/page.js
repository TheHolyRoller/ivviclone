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

export default function Schools() {
  return (
    <main>
      <SchoolsHero />
      <Demo />
      <SchoolGrid />
      <SchoolsImageText />
      <SpecGrid />
      <TechSpecs />

      <DemoRequest
        mainHeading="Request a Demo License"
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

      <SchoolsForm />
      <SchoolPricingForm />
      <SchoolText />
    </main>
  );
}
