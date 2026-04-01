import styles from "../Styles/ApplyCTA.module.css"

function ApplyCTA({
	title = "Let's Get Started",
	copy = `Don't wait any longer - click the "Book Now" button below to schedule a Zoom call with us. We'll help you apply for the Access to Work grant and embark on this transformative journey together.`,
	primaryLabel = "Apply for the Grant with Us",
	secondaryLabel = "See Pricing"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.heading}>{title}</h2>

				<p className={styles.bodyCopy}>{copy}</p>

				<div className={styles.buttonGroup}>
					<button type='button' className={styles.primaryButton}>
					{primaryLabel}
					</button>

					<button type='button' className={styles.secondaryButton}>
					{secondaryLabel}
					</button>
				</div>
			</div>
		</section>
	)
}

export default ApplyCTA
