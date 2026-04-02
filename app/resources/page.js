import React from "react"
import ResourcesHero from "../Components/ResourcesHero"
import DyslexiaExploredPodcast from "../Components/DyslexiaExploredPodcast"
import ExecutiveFunctionPodcast from "../Components/ExecutiveFunctionPodcast"
import DyslexiaScreenerApp from "../Components/DyslexiaScreenerApp"

function ResourcesPage() {
	return (
		<main>
			<ResourcesHero title="" showText={false} showOverlay={false} />
			<DyslexiaExploredPodcast />
			<ExecutiveFunctionPodcast />
			<DyslexiaScreenerApp />
		</main>
	)
}

export default ResourcesPage
