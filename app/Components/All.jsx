import React from 'react'
import s from '../Styles/All.module.css'
import LiteVimeoEmbed from './LiteVimeoEmbed'

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
							<LiteVimeoEmbed
								className={s.mainVideoFrame}
								videoId="1007634251"
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
