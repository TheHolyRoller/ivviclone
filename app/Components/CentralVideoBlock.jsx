import React from 'react'
import v from '../Styles/CentralVideoBlock.module.css'
import Link from 'next/link'
import { IVVI_APP_URL } from './ivviAppUrl'
import LiteVimeoEmbed from './LiteVimeoEmbed'

function CentralVideoBlock({ heading = "ivvi Notes in Action" }) {
	return (
		<section className={v.section}>
			<div className={v.container}>
				<h2 className={v.heading}>{heading}</h2>
				<figure className={v.videoContainer}>
					<LiteVimeoEmbed
						className={v.mainVideoFrame}
						videoId="1007634251"
						title='ivvi Demo Video 30s'
					/>
				</figure>

				<p className={v.ctaText}>
					Watch a 30 second video that shows what <span className={v.ivvi}>ivvi</span> Notes can do for you.
				</p>

				<Link className={v.ctaButton} href={IVVI_APP_URL} target="_blank" rel="noopener noreferrer">
					Try ivvi Notes now
				</Link>
			</div>
		</section>
	)
}

export default CentralVideoBlock