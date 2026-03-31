import styles from "../Styles/TeamProfile.module.css"

function TeamProfile({
	name,
	paragraphs,
	imageSrc,
	imageAlt
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{name}</h2>

					{paragraphs.map((paragraph) => (
						<p key={paragraph} className={styles.bodyCopy}>
							{paragraph}
						</p>
					))}
				</div>

				<div className={styles.imageWrap}>
					<img className={styles.profileImage} src={imageSrc} alt={imageAlt} loading="lazy" />
				</div>
			</div>
		</section>
	)
}

export default TeamProfile
