import React from 'react'
import Link from 'next/link'
import v from '../Styles/HowIvviWorksVideo.module.css'
import { IVVI_APP_URL } from './ivviAppUrl'
import LiteVimeoEmbed from './LiteVimeoEmbed'

function HowIvviWorksVideo({
	videoId = "1007634251",
	videoTitle = 'How ivvi Notes works — overview video'
}) {
	return (
		<section className={v.section}>
			<div className={v.container}>
				<h2 className={v.heading}>How ivvi Notes Works</h2>

				<figure className={v.videoContainer}>
					<LiteVimeoEmbed
						className={v.mainVideoFrame}
						videoId={videoId}
						title={videoTitle}
					/>
				</figure>

				<p className={v.subtext}>
					Watch a 3 min video that shows what ivvi Notes can do for you.
				</p>

				<Link className={v.ctaButton} href={IVVI_APP_URL} target="_blank" rel="noopener noreferrer">
					Try ivvi now
				</Link>
			</div>
		</section>
	)
}

export default HowIvviWorksVideo
