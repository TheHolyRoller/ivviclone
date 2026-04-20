import styles from "../Styles/ProcessGuide.module.css"
import Image from "next/image"

const DEFAULT_COPY = [
	"We understand that the application process can seem daunting, however, we are here to help.",
	"The Access to Work journey involves five stages: Applying, being assessed, receiving the award, training, and paying for the services. We're here to provide moral support and guidance every step of the way.",
	"We'll meet with you on Zoom for 30 minutes and help you complete the application form. No formal dyslexia assessment is required - simply explain how dyslexia impacts your work life.",
	"If you're in employment, we will work with your HR and Finance Departments to support them through the process."
]

function ProcessGuide({
	title = "Access to Work: how we support your application",
	copy = DEFAULT_COPY,
	imageSrc = "/images/guide.webp",
	imageAlt = "Three students collaborating with a laptop and notebooks on grass in a bright, modern setting"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{title}</h2>

					{copy.map((paragraph) => (
						<p key={paragraph} className={styles.bodyCopy}>
							{paragraph}
						</p>
					))}
				</div>

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
			</div>
		</section>
	)
}

export default ProcessGuide
