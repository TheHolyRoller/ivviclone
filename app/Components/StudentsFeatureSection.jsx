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
	className = ''
}) {
	return (
		
		<section className={`${s.section} ${className}`}>
			<div className={`${s.grid} ${reverse ? s.gridReverse : ''}`}>
				<div className={s.textContainer}>
					<h2 className={s.heading}>{title}</h2>
					<p className={s.description}>{description}</p>
					{children}
				</div>

				<div className={s.mediaContainer}>
					<Image className={s.media} src={image} alt={imageAlt} quality={100} loading='lazy' />
				</div>
			</div>
		</section>
	)
}

export default StudentsFeatureSection
