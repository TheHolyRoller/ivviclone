import styles from "../Styles/PricingHero.module.css"
import Image from "next/image"

const DEFAULT_BULLETS = [
	"Free 15 hours of transcription",
	"No Commitment",
	"No Credit Card",
	"No Subscription",
	"Keep Lifetime Access to Your Maps"
]

function PricingHero({
	title = "Prices",
	subtitle = "Start Your Free 30-day Full Trial Here",
	bullets = DEFAULT_BULLETS,
	ctaLabel = "Try ivvi Notes Now",
	imageSrc = "/images/lady.webp",
	imageAlt = "Student using ivvi notes"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.heading}>{title}</h1>

				<div className={styles.contentGrid}>
					<div className={styles.copyBlock}>
						<h2 className={styles.subheading}>{subtitle}</h2>

						<ul className={styles.bulletList}>
							{bullets.map((item) => (
								<li key={item} className={styles.bulletItem}>
									{item}
								</li>
							))}
						</ul>

						<button type="button" className={styles.ctaButton}>
							{ctaLabel}
						</button>
					</div>

					<div className={styles.imageWrap}>
						<Image
							className={styles.image}
							src={imageSrc}
							alt={imageAlt}
							width={900}
							height={900}
							loading="lazy"
							sizes="(max-width: 768px) 100vw, 40vw"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingHero
