import React from 'react'
import AccessHero from '../Components/AccessHero'

export const metadata = {
	title: "Access to Work — ivvi for employment and meetings | ivvi",
	description:
		"ivvi for work: Access to Work and workplace support for dyslexia and ADHD. Capture meetings and training as organised visual notes with ivvi.",
	alternates: {
		canonical: "/accesstowork",
	},
}
import GetStarted from '../Components/GetStarted'
import ProcessGuide from '../Components/ProcessGuide'
import GrantOffer from '../Components/GrantOffer'
import Training from '../Components/Training'
import ApplyCTA from '../Components/ApplyCTA'

function Page() {
	return (
		<main>
			<AccessHero />
			<GetStarted />
			<ProcessGuide />
			<GrantOffer />
			<Training />
			<ApplyCTA />

		</main>
	)
}

export default Page