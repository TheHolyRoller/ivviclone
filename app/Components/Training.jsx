import styles from "../Styles/Training.module.css"
import Image from "next/image"

function Training({
	title = "Training",
	copy = "Once you receive your award letter, you can purchase the recommended software, hardware, and training from providers of your choice. We offer mind mapping training and can guide you to other reputable speech-to-text and text-to-speech service providers.",
	imageSrc = "/images/zoom.webp",
	imageAlt = "Laptop showing a video conference call on a wooden desk next to a teal mug"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{title}</h2>
					<p className={styles.bodyCopy}>{copy}</p>
				</div>

				<div className={styles.imageBlock}>
					<Image
						className={styles.image}
						src={imageSrc}
						alt={imageAlt}
						width={1200}
						height={720}
						sizes="(max-width: 768px) 100vw, 45vw"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default Training
