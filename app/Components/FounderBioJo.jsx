import Image from "next/image"
import styles from "../Styles/FoundersBio.module.css"
import jo from "../../public/images/jo_profile.webp"

function FounderBioJo() {
	return (
		<section className={styles.founderSection}>
			<div className={styles.founderInner}>
				<h2 className={styles.founderHeading}>Founder Bio - Jo Lee</h2>
				<div className={`${styles.founderGrid} ${styles.founderGridReverse}`}>
					<div className={styles.founderImageWrap}>
						<Image
							src={jo}
							alt="Portrait of Jo Lee"
							className={styles.founderImage}
							sizes="(max-width: 760px) 94vw, 420px"
							loading="lazy"
						/>
					</div>
					<p className={styles.founderText}>
						Jo Lee is COO and co-founder of ivvi. Jo brings over 25 years of team building and operations experience to ivvi as well as the lived
						experience of a parent of children with dyslexia. Jo is passionate that every person has the opportunity and support needed to thrive
						and succeed.
					</p>
				</div>
			</div>
		</section>
	)
}

export default FounderBioJo
