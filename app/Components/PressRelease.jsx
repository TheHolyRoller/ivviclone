import styles from "../Styles/PressRelease.module.css"
import Link from "next/link"

const PRESS_PARAGRAPHS = [
	"EDINBURGH, UK: ivvi Notes, a visual notes software for dyslexia, wins the 2026 Bett Award for SEND & Inclusion Resources and Services. A historic milestone for both the Scottish AI Edtech sector and the field of inclusive education.",
	"The Bett Awards, considered the 'gold standard' of educational technology, recognised ivvi Notes during a ceremony in London on January 21st.",
	"The judges said: \"We were particularly impressed by ivvi. A problem driven technology designed to support dyslexic learners at all stages of learning. Its AI powered transcription feature automatically records lectures, creates notes, and generates mind maps and visuals, making information more organised and accessible.\"",
	"The win is particularly significant as ivvi is the first AI-native product and the first Scottish company to win in the SEND category's 15-year history.",
	"Ivvi turns spoken lectures into visual mindmaps in real-time. Using Speech-to-Map technology, ivvi Notes transforms live lectures into visual mind maps. The tool is designed specifically for dyslexic and neurodiverse students who struggle with traditional linear note-taking.",
	"ivvi was founded by husband-and-wife team Darius Namdaran and Jo Lee. After seven years of teaching thousands of dyslexic students to mind map, they realised they needed to train an AI to do what Darius had been doing in the room. Jo, as COO, has driven the company from first sale to BETT winner in under twelve months.",
	"\"We set our mission nine years ago to help a million students with dyslexia learn to mind map by 2030,\" said Darius Namdaran. \"There's a difference between AI that does the work and AI that clears the path. ivvi removes the anxiety of note-taking so students can focus on understanding. To see the Bett judges believe in our mission to help one million students by 2030 is incredibly rewarding.\"",
	"* ivvi has scaled from its first sale to a Bett winner in under 12 months. The company is part of the University of Edinburgh's AI Accelerator."
]

function PressRelease() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<p className={styles.kicker}>Press Release</p>

				<h1 className={styles.heading}>ivvi Notes wins Bett Award for dyslexia support</h1>

				<p className={styles.subheading}>
					Scottish AI startup ivvi Notes for dyslexia wins prestigious Bett Award — first AI software in SEND category history
				</p>

				<h2 className={styles.sectionHeading}>Release details</h2>

				<div className={styles.copyBlock}>
					{PRESS_PARAGRAPHS.map((paragraph) => (
						<p key={paragraph} className={styles.bodyCopy}>
							{paragraph}
						</p>
					))}
				</div>

				<h2 className={styles.sectionHeading}>Media enquiries</h2>

				<div className={styles.metaBlock}>
					<p className={styles.metaText}>
						Website:
						<a className={styles.metaLink} href='https://www.ivvi.app' target='_blank' rel='noreferrer'>
							www.ivvi.app
						</a>
					</p>
					<p className={styles.metaText}>
						Media contact: Jo Lee (COO and Co-founder),
						<a className={styles.metaLink} href='mailto:jo@ivvi.app'>
							jo@ivvi.app
						</a>
						, 07971920560
					</p>
				</div>

				<Link href="/bett-press-release" className={styles.ctaButton}>
					Download Press Kit
				</Link>
			</div>
		</section>
	)
}

export default PressRelease
