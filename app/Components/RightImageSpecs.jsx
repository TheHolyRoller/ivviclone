import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import it from '../Styles/RightImageSpecs.module.css'

function RightImageSpecs({
	imageSrc,
	imageAlt = 'feature image',
	heading = '',
	text = '',
	linkText = '',
	linkHref = ''
}) {
	return (
		<section className={it.featureMainContainer}>
			<div className={it.gridContainer}>
				<div className={it.textContainer}>
					{heading && <h3 className={it.mainHeading}>{heading}</h3>}
					{text && <p className={it.supportingText}>{text}</p>}

					{linkText && linkHref ? (
						<Link href={linkHref} className={it.linkStyle}>
							{linkText}
						</Link>
					) : null}
				</div>

				<div className={it.imageContainer}>
					<Image className={it.mainImage} src={imageSrc} alt={imageAlt} quality={100} loading='lazy' />
				</div>
			</div>
		</section>
	)
}

export default RightImageSpecs
