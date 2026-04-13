import dynamic from "next/dynamic";
import AssessHero from "../Components/AssessHero";
import lady from "../../public/images/lady.webp";

const Demo = dynamic(() => import("../Components/Demo"));
const AssessorGrid = dynamic(() => import("../Components/AssessorGrid"));
const RightImageText = dynamic(() => import("../Components/RigthImageText"));
const SpecGrid = dynamic(() => import("../Components/SpecGrid"));
const TechSpecs = dynamic(() => import("../Components/TechSpecs"));
const DemoRequest = dynamic(() => import("../Components/Demo_Request"));
const AssessorForm = dynamic(() => import("../Components/AssessorForm"));
const SpecialistForm = dynamic(() => import("../Components/SpecialistForm"));
const Testimonial = dynamic(() => import("../Components/Testimonial"));

export const metadata = {
	title: "ivvi Notes for assessors and specialists | ivvi",
	description:
		"ivvi Notes for assessors and education specialists: evaluate DSA-ready visual note-taking with demo licences, technical specs and training from ivvi.",
	alternates: {
		canonical: "/assessors",
	},
}


function AssessorsPage() {
  return (
    <main aria-labelledby="assessors-hero-heading">
      <AssessHero />
      <Demo heading="Three-minute ivvi demo for assessors and specialists" />
      <AssessorGrid />
      <RightImageText />
      <SpecGrid sectionTitle="Key assistive features for assessment and study" />
      <TechSpecs heading="Audio, transcript and mind map in one assessment app" />


      <DemoRequest
        mainHeading="Request a demo license for assessment use"
        bulletPoints={[
          "Free licence for assessment, demonstration and training purposes.",
          "Experience the functionality of ivvi",
          "DSA Approved",
          "No Subscription",
          "Keep lifetime access to your maps",
        ]}
        ctaText=""
        ctaLink="https://ivvi.dev"
        imageSrc={lady}
        imageAlt="Woman using a laptop"
      />

      <AssessorForm />
      <SpecialistForm />
      <Testimonial />
    </main>
  );
}

export default AssessorsPage;
