import Image from "next/image"
import styles from "../Styles/CompanyLogoBranding.module.css"
import ivviWhite from "../../public/images/ivvi_white.webp"
import ivviBlack from "../../public/images/ivvi_black.webp"

function CompanyLogoBranding() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Company Logo and Branding</h2>

				<div className={styles.logoWrap}>
					<Image src={ivviWhite} alt="ivvi logo" className={styles.logo} priority />
				</div>
				
				
				

				<p className={styles.intro}>
					
					There are multiple ways to interpret the ivvi logo, each way it can be interpreted embodies our core values:
				</p>

				<div className={styles.points}>

					<p className={styles.point}>
						<span className={styles.accessibility}>Accessibility</span> - The mark relates to multiple audiences. It is professional yet human in
						form, approachable in style, and conveys partnership in the visual language it uses.
					</p>
					<p className={styles.point}>
						<span className={styles.confidence}>Confidence</span> - The logo carries our spirit as a creator archetype, and symbolically represents
						the service of providing structure to all.
					</p>
					<p className={styles.point}>
						<span className={styles.freedom}>Freedom</span> - The mirror aspect convey ivvi supporting the individual, and also the greater connection
						an individual using ivvi gains in the world around them and a reaching of potential.
					</p>
				</div>
				


				<div className={styles.assetsShowcase}>
					<div className={`${styles.logoCard} ${styles.logoCardBlue}`}>
						<Image src={ivviWhite} alt="ivvi white logo on blue background" className={styles.logoCardImage} loading="lazy" />
					</div>
					<div className={`${styles.logoCard} ${styles.logoCardBlack}`}>
						<Image src={ivviBlack} alt="ivvi black logo on black background" className={styles.logoCardImage} loading="lazy" />
					</div>
					<a href="#press-kit-download-zip" className={styles.assetsButton}>
						Download ALL Company Assets
					</a>
				</div>
			</div>
		</section>
	)
}

export default CompanyLogoBranding
