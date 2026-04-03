import React from "react"
import ResourcesHero from "../Components/ResourcesHero"

export const metadata = {
	title: "Learning resources, podcasts & tools | ivvi",
	description:
		"Free resources from ivvi: dyslexia and executive function podcasts, our dyslexia screener app, and guides alongside ivvi Notes visual note-taking.",
	alternates: {
		canonical: "/resources",
	},
}
import DyslexiaExploredPodcast from "../Components/DyslexiaExploredPodcast"
import ExecutiveFunctionPodcast from "../Components/ExecutiveFunctionPodcast"
import DyslexiaScreenerApp from "../Components/DyslexiaScreenerApp"

function ResourcesPage() {
	return (
		<main>
			<ResourcesHero
				title="Learning resources for dyslexia support and visual note-taking"
				showText
				showOverlay
			/>
			<DyslexiaExploredPodcast />
			<ExecutiveFunctionPodcast />
			<DyslexiaScreenerApp />
		</main>
		
	)
}

export default ResourcesPage
