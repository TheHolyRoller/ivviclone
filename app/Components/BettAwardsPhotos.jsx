import Image from "next/image"
import styles from "../Styles/BettAwardsPhotos.module.css"
import awardPhoto from "../../public/images/award_photo.webp"
import dinnerAward from "../../public/images/dinner_award.webp"
import groupAward from "../../public/images/groud_award.webp"
import groupImage from "../../public/images/group_image.webp"

function BettAwardsPhotos() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Bett Awards Photos</h2>
				<div className={styles.imageWrap}>
					<Image
						src={awardPhoto}
						alt="Darius and Jo at the Bett awards event"
						className={styles.image}
						sizes="(max-width: 768px) 94vw, (max-width: 1200px) 88vw, 920px"
						loading="lazy"
					/>
				</div>

				<div className={styles.imageRow}>
					<div className={styles.rowImageWrap}>
						<Image
							src={dinnerAward}
							alt="Darius and Jo seated at Bett awards dinner"
							className={styles.image}
							sizes="(max-width: 900px) 94vw, 460px"
							loading="lazy"
						/>
					</div>
					<div className={styles.rowImageWrap}>
						<Image
							src={groupAward}
							alt="Bett awards group photo"
							className={styles.image}
							sizes="(max-width: 900px) 94vw, 460px"
							loading="lazy"
						/>
					</div>
				</div>

				<div className={styles.groupImageWrap}>
					<Image
						src={groupImage}
						alt="Bett awards winners group photo on stage"
						className={styles.image}
						sizes="(max-width: 768px) 94vw, (max-width: 1200px) 88vw, 920px"
						loading="lazy"
					/>
				</div>

				<button type="button" className={styles.downloadPhotosButton}>
					Download All Photos
				</button>
			</div>
		</section>
	)
}

export default BettAwardsPhotos
