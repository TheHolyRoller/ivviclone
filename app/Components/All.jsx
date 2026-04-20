import React from 'react'
import s from '../Styles/All.module.css'

function All({
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
					<h2 className={s.heading}>
						{/* Sync audio, transcript and mind map in one workspace */}
						All in One App 
					</h2>
					<p className={s.description}>
            
          Everything happens with one click. The audio, transcript and map are synchronised with each other. It is a dream for visual thinkers to use! 
            
            </p>
					{/* {children} */}

          
          <div className={s.supportingCTAText}>

          Watch a 3 Min Demo:

          </div>


				</div>

				<div className={s.mediaContainer}>
					<div className={s.videoBg}>
						<figure className={s.media}>
							<iframe
								className={s.mainVideoFrame}
								src='https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture'
								allowFullScreen
								title='ivvi Demo Video 30s'
							/>
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
}

export default All
