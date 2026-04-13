import React from 'react'
import DSAHero from '../Components/DSAHero'

export const metadata = {
	title: "DSA funding guide — ivvi Notes for university | ivvi",
	description:
		"UK DSA guide for dyslexia: who qualifies, how to apply, needs assessments and assistive tech funding — including ivvi Notes.",
	alternates: {
		canonical: "/dsa",
	},
}
import GrantSummary from '../Components/GrandSummary'
import DSASpec from '../Components/DSASpec'
import DSA_Allowance from '../Components/DSA_Allowance'
import Eligible from '../Components/Elibible'
import GrantCover from '../Components/Grant_Cover'
import DSA_Apply from '../Components/DSA_Apply'
import DSASteps from '../Components/DSASteps'
import Assessment from '../Components/Assessment'
import Prepare from '../Components/Prepare'
import Award from '../Components/Award'
import Query from '../Components/Query'
import LeadMagnet from '../Components/LeadMagnet'
import Resources from '../Components/Resources'


function Page() {
	return (
		<main>
			<DSAHero />
			<GrantSummary />
			<DSASpec />
			<DSA_Allowance />
			<Eligible />
			<GrantCover />
			<DSA_Apply />
			<DSASteps />
			<Assessment />
			<Prepare />
			<Award />
			<Query />
			<LeadMagnet />
			<Resources />
		</main>
	)
}

export default Page
