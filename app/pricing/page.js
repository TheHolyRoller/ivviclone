import PricingHero from "../Components/PricingHero"
import Pricing from "../Components/Pricing"

export const metadata = {
	title: "ivvi Notes pricing — plans for students and teams | ivvi",
	description:
		"ivvi Notes pricing for students, professionals and organisations. Compare plans and how DSA or Access to Work may cover visual lecture notes.",
	alternates: {
		canonical: "/pricing",
	},
}
import EnterprisePlan from "../Components/EnterprisePlan"
import PricingDetails from "../Components/PricingDetails"

function Page() {
	return (
		<main>
			<PricingHero />
			<Pricing />
			<EnterprisePlan />
			<PricingDetails />
		</main>
	)
}

export default Page
