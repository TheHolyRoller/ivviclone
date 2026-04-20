import Image from "next/image"
import styles from "../Styles/BettPressRelease.module.css"
import pressReleaseHero from "../../public/images/press_release_hero.webp"
import FounderBioDarius from "../Components/FounderBioDarius"
import FounderBioJo from "../Components/FounderBioJo"
import KeyStatistics from "../Components/KeyStatistics"
import CompanyLogoBranding from "../Components/CompanyLogoBranding"
import DariusJoPhotos from "../Components/DariusJoPhotos"
import BettAwardsPhotos from "../Components/BettAwardsPhotos"
import PreApprovedQuotes from "../Components/PreApprovedQuotes"
import ContactInformation from "../Components/ContactInformation"
import DownloadAssetsList from "../Components/DownloadAssetsList"
import PermissionStatement from "../Components/PermissionStatement"



export const metadata = {
	title: "ivvi Notes Press Kit | ivvi",
	description: "Press kit hero page for ivvi Notes Bett Award announcement.",
	alternates: {
		canonical: "/bett-press-release",
	},

}

function Page() {
	return (
		<main className={styles.page}  >
			<section className={styles.hero}>
				<div className={styles.container}>
					<h1 className={styles.title}>ivvi Notes | Press Kit</h1>
					<div className={styles.imageFrame}>
						<Image
							src={pressReleaseHero}
							alt="ivvi founders standing on a balcony for press release"
							className={styles.heroImage}
							priority
							sizes="(max-width: 768px) 92vw, (max-width: 1200px) 84vw, 980px"
						/>
					</div>
					<div className={styles.supportingTextBlock}>
						<h2 className={styles.supportingHeading}>ivvi Company Overview</h2>
						<p className={styles.supportingText}>
							ivvi is an AI-powered mindmapping tool that helps students with dyslexia transform lectures and notes into visual maps in real-time.
							Based in Edinburgh, Scotland, and part of the University of Edinburgh AI Accelerator programme and Venture labs.
							ivvi won the Bett (British Education Training and Technology) Award for SEND and Inclusion Resources &amp; Services 2026, becoming
							the first AI-native product and first Scottish company to win in the category&apos;s history. ivvi is one of only two products, out of
							approximately 95 on the official UK DSA, approved software list, to have ever won a BETT Award.
						</p>
					</div>

					<section className={styles.demoSection}>
						<h2 className={styles.demoHeading}>ivvi Short Demo</h2>
						<div className={styles.videoWrap}>
							<iframe
								className={styles.videoFrame}
								src="https://player.vimeo.com/video/1010294911"
								title="ivvi short demo video"
								loading="lazy"
								allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							/>
						</div>
						<a
							className={styles.demoButton}
							href="https://vimeo.com/1010294911?fl=pl&fe=cm"
							target="_blank"
							rel="noopener noreferrer"
						>
							Link to Vimeo
						</a>
					</section>

					<section className={styles.demoSection}>
						<h2 className={styles.demoHeading}>Bett Application Video</h2>
						<div className={styles.videoWrap}>
							<iframe
								className={styles.videoFrame}
								src="https://player.vimeo.com/video/1141475189"
								title="ivvi BETT application video"
								loading="lazy"
								allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							/>
						</div>
						<a
							className={styles.demoButton}
							href="https://www.youtube.com/watch?v=wPQD5qbsUvQ"
							target="_blank"
							rel="noopener noreferrer"
						>
							Link to Youtube
						</a>
					</section>

					<section className={styles.demoSection}>
						<h2 className={styles.demoHeading}>Bett Awards Video</h2>
						<div className={styles.videoWrap}>
							<iframe
								className={styles.videoFrame}
								src="https://player.vimeo.com/video/1161367627"
								title="BETT SEND winner Award 2026 video"
								loading="lazy"
								allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							/>
						</div>
						<a
							className={styles.demoButton}
							href="https://www.youtube.com/watch?v=EOVznaFXO_Y"
							target="_blank"
							rel="noopener noreferrer"
						>
							Link to Youtube
						</a>
					</section>


					<KeyStatistics />
					<CompanyLogoBranding />
					<DariusJoPhotos />
					<BettAwardsPhotos />
				</div>
			</section>
			<section className={styles.foundersGroup}>
				<FounderBioDarius />
				<FounderBioJo />
			</section>
			<section className={styles.preApprovedWrapper}>
				<PreApprovedQuotes />
			</section>
			<ContactInformation />
			<DownloadAssetsList />
			<PermissionStatement />

		</main>
	)
}

export default Page
