import React from 'react'
import v from '../Styles/All.module.css'
import Link from 'next/link'


function All() {
	return (
		<section className={v.section}>
			<div className={v.container}>

        <div className={v.textContainer}>

				<h2 className={v.heading}>ivvi Notes in Action</h2>

        <p className={v.mainSupportingText}>

        Everything happens with one click. The audio, transcript and map are synchronised with each other. It is a dream for visual thinkers to use! 

        <div className={v.ctaSupportingText}>

        Watch a 3 Min Demo:

        </div>

        </p>
        </div>

				<figure className={v.videoContainer}>
					<iframe
						className={v.mainVideoFrame}
						src='https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
						allow='autoplay; fullscreen; picture-in-picture'
						allowFullScreen
						title='ivvi Demo Video 30s'
					/>
				</figure>

			</div>
		</section>
	)
}

export default All