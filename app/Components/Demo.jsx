import React from 'react'
import v from '../Styles/Demo.module.css'
import Link from 'next/link'
import { IVVI_APP_URL } from './ivviAppUrl'

function Demo() {
	return (
		<section className={v.hero}>
			<div className={v.heroContentContainer}>
				<h2 className={v.heroMainHeader}>3 Minute ivvi Demo</h2>

				<figure className={v.videoContainer}>
					<iframe
						className={v.mainVideoFrame}
						src='https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
						allow='autoplay; fullscreen; picture-in-picture'
						allowFullScreen
						title='ivvi Demo Video'
					/>
				</figure>

				<Link className={v.heroCTAButton} href={IVVI_APP_URL} target="_blank" rel="noopener noreferrer">
					Get a Demo Licence
				</Link>
			</div>
		</section>
	)
}

export default Demo