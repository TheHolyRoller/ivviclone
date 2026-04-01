import React from 'react'
import AssessHero from '../Components/AssessHero'
import Demo from '../Components/Demo'
import AssessorGrid from '../Components/AssessorGrid'
import RightImageText from '../Components/RigthImageText'
import TechSpecs from '../Components/TechSpecs'
import SpecGrid from '../Components/SpecGrid'
import DemoRequest from '../Components/Demo_Request'
import lady from '../../public/images/lady.webp'
import AssessorForm from '../Components/AssessorForm'
import SpecialistForm from '../Components/SpecialistForm'
import Testimonial from '../Components/Testimonial'

function AssessorsPage() {
	return (
		<main>
			<AssessHero />
			<Demo />
			<AssessorGrid />
			<RightImageText />
			<SpecGrid />
			<TechSpecs />

			<DemoRequest
				mainHeading='Request a Demo License'
				bulletPoints={[
					'Free licence for assessment, demonstration and training purposes.',
					'Experience the functionality of ivvi',
					'DSA Approved',
					'No Subscription',
					'Keep lifetime access to your maps'
				]}
				ctaText=''
				ctaLink='https://ivvi.dev'
				imageSrc={lady}
				imageAlt='Woman using a laptop'
			/>

			<AssessorForm />
			<SpecialistForm />
			<Testimonial />
		</main>
	)
}

export default AssessorsPage