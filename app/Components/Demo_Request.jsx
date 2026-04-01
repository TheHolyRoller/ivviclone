import React from 'react'
import ti from '../Styles/DemoRequest.module.css'
import Link from 'next/link'
import Image from 'next/image'

function DemoRequest({
	mainHeading,
	supportingHeadline,
	bulletPoints = [],
	ctaText,
	ctaLink,
	imageSrc,
	imageAlt
}) {
	return (
		<section className={ti.featureMainContainer}>
			<div className={ti.gridContainer}>
				<div className={ti.textContainer}>
					<h2 className={ti.mainHeading}>{mainHeading}</h2>

					{supportingHeadline ? (
						<div className={ti.supportingHeadlineContainer}>
							<p className={ti.supportingHeadline}>{supportingHeadline}</p>
						</div>
					) : null}

					{bulletPoints.length > 0 ? (
						<div className={ti.bulletPointListContainer}>
							<ul className={ti.bulletPointList}>
								{bulletPoints.map((point) => (
									<li key={point} className={ti.bulletPointListItem}>
										{point}
									</li>
								))}
							</ul>
						</div>
					) : null}

					{ctaText && ctaLink ? (
						<Link className={`${ti.ctaLink} ${ti.cta}`} href={ctaLink}>
							{ctaText}
						</Link>
					) : null}
				</div>

				{imageSrc ? (
					<div className={ti.imageContainer}>
						<Image className={ti.mainImage} src={imageSrc} alt={imageAlt || 'Demo request illustration'} quality={100} loading='lazy' />
					</div>
				) : null}
			</div>
		</section>
	)
}

export default DemoRequest
