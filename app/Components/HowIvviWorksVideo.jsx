import React from 'react'
import Link from 'next/link'
import v from '../Styles/HowIvviWorksVideo.module.css'

const DEFAULT_VIMEO_SRC =
	'https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'

function HowIvviWorksVideo({
	videoSrc = DEFAULT_VIMEO_SRC,
	videoTitle = 'How ivvi Notes works — overview video'
}) {
	return (
		<section className={v.section}>
			<div className={v.container}>
				<h2 className={v.heading}>How ivvi Notes Works</h2>

				<figure className={v.videoContainer}>
					<iframe
						className={v.mainVideoFrame}
						src={videoSrc}
						allow='autoplay; fullscreen; picture-in-picture'
						allowFullScreen
						title={videoTitle}
					/>
				</figure>

				<p className={v.subtext}>
					Watch a 3 min video that shows what ivvi Notes can do for you.
				</p>

				<Link className={v.ctaButton} href='/ivvi'>
					Try ivvi now
				</Link>
			</div>
		</section>
	)
}

export default HowIvviWorksVideo
