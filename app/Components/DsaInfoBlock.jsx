import React from 'react'
import Image from 'next/image'
import s from '../Styles/DsaInfoBlock.module.css'

function DsaInfoBlock({
	title,
	image,
	imageAlt,
	paragraphs = [],
	highlights = []
}) {
	return (
		<section className={s.section}>
			<div className={s.inner}>
				<h2 className={s.title}>{title}</h2>

				<div className={s.imageWrap}>
					<Image src={image} alt={imageAlt} className={s.image} quality={100} loading='lazy' />
				</div>

				<div className={s.content}>
					{paragraphs.map((paragraph) => (
						<p className={s.paragraph} key={paragraph}>
							{paragraph}
						</p>
					))}

					{highlights.length > 0 ? (
						<ul className={s.list}>
							{highlights.map((item) => (
								<li className={s.item} key={item.label}>
									<span className={s.label}>{item.label}</span>
									{item.text}
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default DsaInfoBlock
