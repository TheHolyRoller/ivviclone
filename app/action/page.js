import React from 'react'
import ActionHero from '../Components/ActionHero'

export const metadata = {
	title: "See ivvi Notes in action — watch the demo | ivvi",
	description:
		"See ivvi Notes in action: how Speech-to-Map™ turns live speech into mind maps during lectures. Built for dyslexia, ADHD and visual learners.",
	alternates: {
		canonical: "/action",
	},
}
import HowIvviWorksVideo from '../Components/HowIvviWorksVideo'
import FreeTrial from '../Components/FreeTrial'
import ContactForm from '../Components/ContactForm'

function Page() {
	return (
		<main>
			<ActionHero/>

			<HowIvviWorksVideo/>

			<FreeTrial/>

			<ContactForm/>


		</main>
	)
}

export default Page
