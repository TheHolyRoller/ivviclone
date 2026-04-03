import React from 'react'
import Image from 'next/image'
import s from '../Styles/StudentsFeatureSection.module.css'

function StudentsFeatureSection({
	title,
	description,
	image,
	imageAlt,
	reverse = false,
	children,
	className = '',
	titleTag = 'h2'
}) {
	const Heading = titleTag === 'h3' ? 'h3' : 'h2'

	return (

		<section className={`${s.section} ${className}`}>
			<div className={`${s.grid} ${reverse ? s.gridReverse : ''}`}>
				<div className={s.textContainer}>
					<Heading className={s.heading}>{title}</Heading>
					<p className={s.description}>{description}</p>
					{children}
				</div>

				<div className={s.mediaContainer}>
					<Image className={s.media} src={image} alt={imageAlt} loading="lazy" />
				</div>
			</div>
		</section>
	)
}

export default StudentsFeatureSection
