import styles from "../Styles/PricingDetails.module.css"

const INCLUDED_FEATURES = [
	"Unlimited audio recording",
	"Full mind map customization",
	"30G Storage",
	"Export in multiple formats",
	"Share Maps with Co-workers",
	"30-day Free Trial"
]

function PricingDetails({
	includedTitle = "All Plans Include:",
	activationTitle = "Do You Want to Activate a DSA Licence?",
	activationCopy = "You can get ivvi Notes via the Disabled Students Allowance and other government grants. If you have a licence from the grant as a provider or student click here to activate it on your device.",
	downloadTitle = "Download the ivvi for Desktop Software here:",
	subscribeLabel = "Subscribe Now",
	activateLabel = "Activate Licence Key",
	downloadLabel = "Download ivvi for Desktop"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.topGrid}>
					<div className={styles.leftBlock}>
						<h2 className={styles.includedTitle}>{includedTitle}</h2>

						<ul className={styles.featureList}>
							{INCLUDED_FEATURES.map((feature) => (
								<li key={feature} className={styles.featureItem}>
									{feature}
								</li>
							))}
						</ul>

						<a
							className={styles.subscribeButton}
							href="https://ivvi.dev/subscription"
							target="_blank"
							rel="noopener noreferrer"
						>
							{subscribeLabel}
						</a>
					</div>

					<div className={styles.rightBlock}>
						<h2 className={styles.activationTitle}>{activationTitle}</h2>
						<p className={styles.activationCopy}>{activationCopy}</p>

						<a
							className={styles.activateButton}
							href="https://ivvi.dev/student-registration"
							target="_blank"
							rel="noopener noreferrer"
						>
							{activateLabel}
						</a>
					</div>
				</div>

				<div className={styles.downloadBlock}>
					<h2 className={styles.downloadTitle}>{downloadTitle}</h2>

					<a
						className={styles.downloadButton}
						href="https://ivvi.dev/download"
						target="_blank"
						rel="noopener noreferrer"
					>
						{downloadLabel}
					</a>
				</div>
			</div>
		</section>
	)
}

export default PricingDetails
