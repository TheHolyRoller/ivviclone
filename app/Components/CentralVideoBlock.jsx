import React from 'react'
import v from '../Styles/CentralVideoBlock.module.css'
import Link from 'next/link'

function CentralVideoBlock() {
	return (
		<section className={v.section}>
			<div className={v.container}>
				<h2 className={v.heading}>ivvi Notes in Action</h2>
				<figure className={v.videoContainer}>
					<iframe
						className={v.mainVideoFrame}
						src='https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
						allow='autoplay; fullscreen; picture-in-picture' 
						allowFullScreen
						title='ivvi Demo Video 30s'
					/>
				</figure>

				<p className={v.ctaText}>
					Watch a 30 second video that shows what <span className={v.ivvi}>ivvi</span> Notes can do for you.
				</p>

				<Link className={v.ctaButton} href='/ivvi'>
					Try ivvi Notes now
				</Link>
			</div>
		</section>
	)
}

export default CentralVideoBlock