import Image from "next/image"
import styles from "../Styles/FoundersBio.module.css"
import darius from "../../public/images/darius-prof.webp"

function FounderBioDarius() {
	return (
		<section className={styles.founderSection}>
			<div className={styles.founderInner}>
				<h2 className={styles.founderHeading}>Founder Bio - Darius Namdaran</h2>
				<div className={styles.founderGrid}>
					<p className={styles.founderText}>
						Darius Namdaran is CEO and co-founder of ivvi. As someone who is dyslexic himself, Darius built ivvi to help visual thinkers capture
						and organise information the way their brains naturally work. His mission: help a million students with dyslexia learn to mind map by
						2030.
						
					</p>
					<div className={styles.founderImageWrap}>
						<Image
							src={darius}
							alt="Portrait of Darius Namdaran"
							className={styles.founderImage}
							sizes="(max-width: 760px) 94vw, 420px"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FounderBioDarius
