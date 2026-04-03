import React from 'react'
import Image from 'next/image'
import s from '../Styles/DsaContentSection.module.css'

function DsaContentSection({
	title,
	subtitle,
	bullets = [],
	paragraphs = [],
	image,
	imageAlt,
	reverse = false,
	background = '#eeede8'
}) {
	return (
		<section className={s.section} style={{ background }}>
			<div className={`${s.grid} ${reverse ? s.reverse : ''}`}>
				<div className={s.text}>
					{title ? <h2 className={s.title}>{title}</h2> : null}
					{subtitle ? <h3 className={s.subtitle}>{subtitle}</h3> : null}

					{bullets.length > 0 ? (
						<ul className={s.list}>
							{bullets.map((item) => (
								<li className={s.item} key={item}>
									{item}
								</li>
							))}
						</ul>
					) : null}

					{paragraphs.map((paragraph) => (
						<p className={s.paragraph} key={paragraph}>
							{paragraph}
						</p>
					))}
				</div>

				<div className={s.mediaWrap}>
					<Image className={s.media} src={image} alt={imageAlt} loading="lazy" />
				</div>
			</div>
		</section>
	)
}

export default DsaContentSection
