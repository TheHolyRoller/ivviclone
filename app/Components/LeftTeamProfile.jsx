import styles from "../Styles/LeftTeamProfile.module.css"

function LeftTeamProfile({
	name,
	paragraphs,
	imageSrc,
	imageAlt
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.imageWrap}>
					<img className={styles.profileImage} src={imageSrc} alt={imageAlt} loading="lazy" />
				</div>

				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{name}</h2>

					{paragraphs.map((paragraph) => (
						<p key={paragraph} className={styles.bodyCopy}>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	)
}

export default LeftTeamProfile
