import React from 'react'
import ts from '../Styles/TechSpecs.module.css'
import LiteVimeoEmbed from './LiteVimeoEmbed'

function TechSpecs({ heading = "All in One App" }) {
	return (
		<section className={ts.featureMainContainer}>
			<div className={ts.gridContainer}>
				<div className={ts.textContainer}>
					<h2 className={ts.mainHeading}>{heading}</h2>
					<p className={ts.supportingText}>
						Everything happens in one place. Audio, transcript, and map stay synchronised so students can switch views instantly.
					</p>
					<p className={ts.extraSupportingText}>Watch a 3 Minute Demo:</p>
				</div>

				<div className={ts.imageContainer}>
					<figure className={ts.videoContainer}>
						<LiteVimeoEmbed
							className={ts.mainVideoFrame}
							videoId="1007634251"
							title='ivvi Demo Video'
						/>
					</figure>
				</div>
			</div>
		</section>
	)
}

export default TechSpecs