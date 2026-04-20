import React from 'react'
import it from '../Styles/SpecGrid.module.css'
import LeftImageSpecs from './LeftImageSpecs'
import RightImageSpecs from './RightImageSpecs'
import sync from '../../public/images/sync.webp'
import audioRec from '../../public/images/audio_rec.webp'
import trans from '../../public/images/trans.webp'
import mindMap from '../../public/images/mind_map.webp'
import edit from '../../public/images/edit.webp'
import high from '../../public/images/high.webp'
import outline from '../../public/images/outline.webp'

const specItems = [
	{
		component: RightImageSpecs,
		imageSrc: sync,
		imageAlt: 'Synchronised note views',
		heading: 'Synchronised Visual Notes',
		text: 'ivvi records audio, transcribes speech, and builds an editable mind map in real time. Each view stays synchronised so students can move between formats without losing context.'
	},
	
	{
		component: LeftImageSpecs,
		imageSrc: audioRec,
		imageAlt: 'Clear audio recording',
		heading: 'Clear Audio Recording',
		text: 'High-quality recording reduces pressure to write everything live and helps students revisit exact lecture moments later.'
	},
	{
		component: RightImageSpecs,
		imageSrc: trans,
		imageAlt: 'Full transcript view',
		heading: 'Full Transcription',
		text: 'Searchable transcripts improve access for auditory processing and hearing-related needs while making revision faster.'
	},
	{
		component: LeftImageSpecs,
		imageSrc: mindMap,
		imageAlt: 'Live mind map',
		heading: 'Live Mind Map',
		text: 'AI generates visual structure as content is spoken, helping learners understand relationships between ideas quickly.'
	},
	{
		component: RightImageSpecs,
		imageSrc: edit,
		imageAlt: 'Editable notes',
		heading: 'Edit Freely',
		text: 'Students can personalise structure, labels, and layout to match their own cognitive workflow and revision style.'
	},
	{
		component: LeftImageSpecs,
		imageSrc: high,
		imageAlt: 'Highlighted key points',
		heading: 'Highlight Quotes',
		text: 'Key information can be flagged instantly during lectures, making review more targeted and less time-consuming.'
	},
	{
		component: RightImageSpecs,
		imageSrc: outline,
		imageAlt: 'Visual and linear outline',
		heading: 'Visual Outline',
		text: 'Switch between map and outline modes to support both visual and linear processing preferences.'
	}
]

function SpecGrid({ sectionTitle = "Key Assistive Technology Features" }) {
	return (
		<section className={it.specGrid}>
			<h2 className={it.mainHeadline}>{sectionTitle}</h2>

			{specItems.map((item) => {
				const FeatureComponent = item.component

				return (
					<FeatureComponent
						key={item.heading}
						imageSrc={item.imageSrc}
						imageAlt={item.imageAlt}
						heading={item.heading}
						text={item.text}
					/>
				)
			})}
		</section>
	)
}

export default SpecGrid