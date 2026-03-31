import route from "../Styles/Pricing.module.css"
import PricingHero from "../Components/PricingHero"
import Pricing from "../Components/Pricing"
import EnterprisePlan from "../Components/EnterprisePlan"
import PricingDetails from "../Components/PricingDetails"

function page() {
	return (
		<section className={route.mainContainer}>
			<PricingHero />
			<Pricing />
			<EnterprisePlan />
			<PricingDetails />
		</section>
	)
}

export default page
