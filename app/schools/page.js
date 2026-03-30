import Demo from '../Components/Demo';
import RightImageText from '../Components/RigthImageText';
import SchoolGrid from '../Components/SchoolGrid';
import SchoolsHero from '../Components/SchoolsHero';
import SchoolsImageText from '../Components/SchoolsImageText';
import SpecGrid from '../Components/SpecGrid';
import sc from '../Styles/Schools.module.css'; 
import TechSpecs from '../Components/TechSpecs';
import DemoRequest from '../Components/Demo_Request';
import AssessorForm from '../Components/AssessorForm';
import SpecialistForm from '../Components/SpecialistForm';
import Testimonial from '../Components/Testimonial';
import SchoolsForm from '../Components/SchoolForm'; 



import girl from '../../public/images/girl_laptop.png'; 
import lady from '../../public/images/lady.webp'; 
import SchoolPricingForm from '../Components/SchoolPricingForm';
import SchoolText from '../Components/SchoolText';


export default function Schools() {



    return(

        <section className={sc.mainContainer} >

            {/* Add in the hero here  */}
            <SchoolsHero/> 
            <Demo/> 
            <SchoolGrid/> 

            {/* <RightImageText/>  */}
            <SchoolsImageText/> 
            <SpecGrid/> 
            <TechSpecs/> 

            <DemoRequest
      mainHeading="Request a Demo License"
      supportingHeadline=""
      bulletPoints={[
        'Free licence for  assessment, demonstration and training purposes.',
        'Experience the Functionality of ivvi',
        'DSA Approved',
        'No Subscription',
        'Keep Lifetime Access to Your Maps',
      ]}
      ctaText=""
      ctaLink="https://ivvi.dev"
      imageSrc={girl}
      imageAlt="Woman using laptop"
    />

    {/* <AssessorForm/>  */}
    {/* <SpecialistForm />  */}
    <SchoolsForm/> 
    


    {/* <SpecialistForm/>    */}
    <SchoolPricingForm/> 

    <SchoolText/> 



    {/* <Testimonial/>  */}


            




        </section>
    )



}