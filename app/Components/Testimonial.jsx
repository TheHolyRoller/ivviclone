import React from 'react'
import tm from '../Styles/Testimonial.module.css'


function Testimonial() {
	return (
		<article className={tm.mainContainer}>
			<div className={tm.subContainer}>
				<p className={tm.firstParagraph}>
					&ldquo;Now Oliver can stop worrying about missing important details and start listening in lectures with the help of ivvi. He used to
					try and create mind maps live, but with his dysgraphia he struggled to keep up.
				</p>

				<p className={tm.firstParagraph}>
					He had to focus so hard on recording information that he couldn&apos;t listen effectively and often missed key content.
				</p>

				<p className={tm.firstParagraph}>
					He now has the confidence to actively listen, knowing ivvi is providing the support he needs and helping him succeed.&rdquo;
				</p>

				<p className={tm.author}>Lesley H, Mum</p>
			</div>
		</article>
	)
}

export default Testimonial