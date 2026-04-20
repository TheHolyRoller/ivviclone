import styles from "../Styles/GrantOffer.module.css"
import Image from "next/image"

const OFFER_ITEMS = [
	"Speech-to-text software (around £600) and training (£275)",
	"Text-to-speech software (£405) and training (£275)",
	"Mind mapping software (£405) and training (£275 - £405)",
	"12 sessions of one-to-one coaching (£1,120)"
]


function GrantOffer({
	title = "What Does the Grant Offer?",
	intro = "A typical Access to Work grant includes:",
	note = "(This is indicative only. The final grant offered will be dependent on needs.)",
	imageSrc = "/images/grant_offer.webp",
	imageAlt = "Colleagues collaborating at a desk with laptops in a modern open-plan office"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.imageBlock}>
					<Image
						className={styles.image}
						src={imageSrc}
						alt={imageAlt}
						width={900}
						height={600}
						sizes="(max-width: 768px) 100vw, 45vw"
						loading="lazy"
					/>
				</div>

				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{title}</h2>

					<p className={styles.bodyCopy}>{intro}</p>

					<ul className={styles.list}>
						{OFFER_ITEMS.map((item) => (
							<li key={item} className={styles.listItem}>
								{item}
							</li>
						))}
						
					</ul>

					<p className={styles.bodyCopy}>{note}</p>
				</div>
			</div>
		</section>
	)
}

export default GrantOffer
