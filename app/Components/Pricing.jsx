import Link from "next/link"
import styles from "../Styles/PricingPlans.module.css"
import { IVVI_APP_URL } from "./ivviAppUrl"

const DEFAULT_PLANS = [
	{
		label: "MONTHLY",
		price: "£30/month",
		note: "Standard",
		features: [
			"Initial 30 Day Free Trial",
			"30 hours a month transcription",
			"Unlimited audio recording",
			"Unlimited Manual Mindmap Notes",
			"Full mind map tools",
			"Export and share",
			"Email support"
		],
		ctaLabel: "Start 30 Day Trial"
	},
	{
		label: "YEARLY",
		price: "£300/year",
		note: "Save 20% compared to monthly",
		features: [
			"Initial 30 Day Free Trial",
			"All monthly features",
			"Priority phone support",
			"One to One Zoom Support",
			"Online Monthly Community Group",
			"One Hour Personal Onboarding",
			"Transcription Addons"
		],
		ctaLabel: "Start 30 Day Trial"
	}
]

function Pricing({ plans = DEFAULT_PLANS }) {
	return (
		<section className={styles.section}>
			<div className={styles.grid}>
				{plans.map((plan) => (
					<article key={plan.label} className={styles.card}>
						<p className={styles.planLabel}>{plan.label}</p>
						<h2 className={styles.priceText}>{plan.price}</h2>
						<p className={styles.planNote}>{plan.note}</p>

						<ul className={styles.featureList}>
							{plan.features.map((feature) => (
								<li key={feature} className={styles.featureItem}>
									{feature}
								</li>
							))}
						</ul>

						<Link
							className={styles.ctaButton}
							href={IVVI_APP_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							{plan.ctaLabel}
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}

export default Pricing
