import Link from "next/link"
import styles from "../Styles/EnterprisePlan.module.css"
import { IVVI_APP_URL } from "./ivviAppUrl"

const DEFAULT_FEATURES = [
	"All yearly features",
	"1-hour a year personal training via zoom",
	"One to One Zoom support sessions",
	"All Assistive Technology features.",
	"Access to Work Invoicing"
]

function EnterprisePlan({
	planLabel = "3 YEARS",
	price = "£495 for 3 years",
	note = "Best value! Save 50%",
	features = DEFAULT_FEATURES,
	ctaLabel = "Start 30 Day Trial"
}) {
	return (
		<section className={styles.section}>
			<article className={styles.card}>
				<p className={styles.planLabel}>{planLabel}</p>
				<h2 className={styles.priceText}>{price}</h2>
				<p className={styles.planNote}>{note}</p>

				<ul className={styles.featureList}>
					{features.map((feature) => (
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
					{ctaLabel}
				</Link>
			</article>
		</section>
	)
}

export default EnterprisePlan
