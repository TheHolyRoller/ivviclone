import React from 'react'
import v from '../Styles/Demo.module.css'
import Link from 'next/link'
import { IVVI_APP_URL } from './ivviAppUrl'
import LiteVimeoEmbed from './LiteVimeoEmbed'

function Demo({ heading = "3 Minute ivvi Demo" }) {
	return (
		<section className={v.hero}>
			<div className={v.heroContentContainer}>
				<h2 className={v.heroMainHeader}>{heading}</h2>

				<figure className={v.videoContainer}>
					<LiteVimeoEmbed
						className={v.mainVideoFrame}
						videoId="1007634251"
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