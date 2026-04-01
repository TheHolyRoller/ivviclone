import React from 'react'
import st from '../Styles/SchoolText.module.css'

function SchoolText() {
	return (
		<section className={st.mainContainer}>
			<blockquote className={st.mainParagraph}>
				&quot;I use ivvi to understand what my teacher is asking me to do. When I see the instructions as a map, I know what to do.
				I can record what my teacher is saying or paste text in and it becomes a map.&quot;
			</blockquote>
			<p className={st.details}>Rosie P, 7-year-old student</p>
		</section>
	)
}

export default SchoolText