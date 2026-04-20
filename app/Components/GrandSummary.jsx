import ti from "../Styles/GrantSummary.module.css"
import Image from "next/image"

const DEFAULT_PARAGRAPHS = [
	"We understand that the DSA application process can seem daunting — we are here to help.",
	"The DSA path usually includes applying to your funding body, sharing evidence, attending a needs assessment, receiving your entitlement letter, and arranging equipment, software and training.",
	"We can meet with you on Zoom for 30 minutes and help you prepare what to include. For dyslexia, a diagnostic report or assessment history is often enough as evidence.",
	"If you are unsure which form to use or how to describe your study needs, we will help you map it to the student finance process for your nation."
]

function GrantSummary({
	title = "DSA applications: how we support you at each step",
	paragraphs = DEFAULT_PARAGRAPHS,
	imageSrc = "/images/guide.webp",
	imageAlt = "Three students collaborating with a laptop and notebooks on grass in a bright, modern setting"
}) {
	return (
		<section className={ti.featureMainContainer}>
			<div className={ti.gridContainer}>
				<div className={ti.textContainer}>
					<h2 className={ti.mainHeading}>{title}</h2>

					{paragraphs.map((paragraph) => (
						<p key={paragraph} className={ti.supportingText}>
							{paragraph}
						</p>
					))}
				</div>

				<div className={ti.imageContainer}>
					<div className={ti.imageFrame}>
						<Image
							className={ti.mainImage}
							src={imageSrc}
							alt={imageAlt}
							width={900}
							height={600}
							sizes="(max-width: 768px) 100vw, 45vw"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GrantSummary