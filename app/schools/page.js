import Demo from '../Components/Demo'
import SchoolGrid from '../Components/SchoolGrid'
import SchoolsHero from '../Components/SchoolsHero'
import SchoolsImageText from '../Components/SchoolsImageText'
import SpecGrid from '../Components/SpecGrid'
import TechSpecs from '../Components/TechSpecs'
import DemoRequest from '../Components/Demo_Request'
import SchoolsForm from '../Components/SchoolForm'
import girl from '../../public/images/girl_laptop.png'
import SchoolPricingForm from '../Components/SchoolPricingForm'
import SchoolText from '../Components/SchoolText'


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
				mainHeading='Request a Demo License'
				supportingHeadline=''
				bulletPoints={[
					'Free licence for assessment, demonstration and training purposes.',
					'Experience the functionality of ivvi',
					'DSA Approved',
					'No subscription',
					'Keep lifetime access to your maps'
				]}
				ctaText=''
				ctaLink='https://ivvi.dev'
				imageSrc={girl}
				imageAlt='Woman using laptop'
			/>

			<SchoolsForm />
			<SchoolPricingForm />
			<SchoolText />
		</main>
	)
}