import Image from "next/image"
import styles from "../Styles/DariusJoPhotos.module.css"
import joDarius from "../../public/images/Jo_Darius.webp"
import together from "../../public/images/together.webp"
import joPortrait from "../../public/images/Jo_portrait.webp"
import dariusStanding from "../../public/images/Darius_standing.webp"
import joMiddle from "../../public/images/jo_middle.webp"
import joSide from "../../public/images/jo_side.webp"
import joLeft from "../../public/images/jo_left.webp"
import dariusDark from "../../public/images/darius_dark.webp"
import dariusLeft from "../../public/images/darius_left.webp"
import dariusLight from "../../public/images/darius_light.webp"

function DariusJoPhotos() {
	return (
		
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Darius and Jo Photos</h2>
				<div className={styles.imageWrap}>
					<Image
						src={joDarius}
						alt="Darius and Jo standing together for press photos"
						className={styles.image}
						sizes="(max-width: 768px) 94vw, (max-width: 1200px) 82vw, 900px"
						loading="lazy"
					/>
				</div>

				<div className={styles.portraitGrid}>
					<div className={styles.portraitCard}>
						<Image
							src={dariusStanding}
							alt="Darius standing portrait"
							className={styles.portraitImage}
							sizes="(max-width: 768px) 94vw, 420px"
							loading="lazy"
						/>
					</div>
					<div className={styles.portraitCard}>
						<Image
							src={joPortrait}
							alt="Jo portrait"
							className={styles.portraitImage}
							sizes="(max-width: 768px) 94vw, 420px"
							loading="lazy"
						/>
					</div>
				</div>

				<div className={styles.joTriptychGrid}>
					<div className={styles.portraitCard}>
						<Image
							src={joLeft}
							alt="Jo left portrait"
							className={styles.portraitImage}
							sizes="(max-width: 900px) 90vw, 300px"
							loading="lazy"
						/>
					</div>
					<div className={styles.portraitCard}>
						<Image
							src={joMiddle}
							alt="Jo middle portrait"
							className={styles.portraitImage}
							sizes="(max-width: 900px) 90vw, 300px"
							loading="lazy"
						/>
					</div>
					<div className={styles.portraitCard}>
						<Image
							src={joSide}
							alt="Jo side portrait"
							className={styles.portraitImage}
							sizes="(max-width: 900px) 90vw, 300px"
							loading="lazy"
						/>
					</div>
				</div>

				<div className={styles.featureImageWrap}>
					<Image
						src={together}
						alt="Darius and Jo standing together in office space"
						className={styles.featureImage}
						sizes="(max-width: 768px) 94vw, (max-width: 1200px) 90vw, 960px"
						loading="lazy"
					/>
				</div>

				<div className={styles.dariusTriptychGrid}>
					<div className={styles.portraitCard}>
						<Image
							src={dariusLeft}
							alt="Darius left portrait"
							className={styles.portraitImage}
							sizes="(max-width: 900px) 90vw, 300px"
							loading="lazy"
						/>
					</div>
					<div className={styles.portraitCard}>
						<Image
							src={dariusDark}
							alt="Darius dark portrait"
							className={styles.portraitImage}
							sizes="(max-width: 900px) 90vw, 300px"
							loading="lazy"
						/>
					</div>
					<div className={styles.portraitCard}>
						<Image
							src={dariusLight}
							alt="Darius light portrait"
							className={styles.portraitImage}
							sizes="(max-width: 900px) 90vw, 300px"
							loading="lazy"
						/>
					</div>
				</div>
				<a href="#press-kit-download-zip" className={styles.downloadPhotosButton}>
					Download All Photos
				</a>
			</div>
		</section>
	)
}

export default DariusJoPhotos
