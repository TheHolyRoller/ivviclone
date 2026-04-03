import React from 'react'
import it from '../Styles/SpecGrid.module.css'
import LeftImageSpecs from './LeftImageSpecs'
import RightImageSpecs from './RightImageSpecs'
import sync from '../../public/images/sync.webp'
import recording from '../../public/images/recording.webp'

const specItems = [
	{
		component: RightImageSpecs,
		imageSrc: recording,
		imageAlt: 'Synchronised note views',
		heading: 'Synchronised Visual Notes',
		text: 'ivvi records audio, transcribes speech, and builds an editable mind map in real time. Each view stays synchronised so students can move between formats without losing context.'
	},
	{
		component: LeftImageSpecs,
		imageSrc: sync,
		imageAlt: 'Clear audio recording',
		heading: 'Clear Audio Recording',
		text: 'High-quality recording reduces pressure to write everything live and helps students revisit exact lecture moments later.'
	},
	{
		component: RightImageSpecs,
		imageSrc: recording,
		imageAlt: 'Full transcript view',
		heading: 'Full Transcription',
		text: 'Searchable transcripts improve access for auditory processing and hearing-related needs while making revision faster.'
	},
	{
		component: LeftImageSpecs,
		imageSrc: sync,
		imageAlt: 'Live mind map',
		heading: 'Live Mind Map',
		text: 'AI generates visual structure as content is spoken, helping learners understand relationships between ideas quickly.'
	},
	{
		component: RightImageSpecs,
		imageSrc: recording,
		imageAlt: 'Editable notes',
		heading: 'Edit Freely',
		text: 'Students can personalise structure, labels, and layout to match their own cognitive workflow and revision style.'
	},
	{
		component: LeftImageSpecs,
		imageSrc: sync,
		imageAlt: 'Highlighted key points',
		heading: 'Highlight Quotes',
		text: 'Key information can be flagged instantly during lectures, making review more targeted and less time-consuming.'
	},
	{
		component: RightImageSpecs,
		imageSrc: recording,
		imageAlt: 'Visual and linear outline',
		heading: 'Visual Outline',
		text: 'Switch between map and outline modes to support both visual and linear processing preferences.'
	}
]

function SpecGrid() {
	return (
		<section className={it.specGrid}>
			<h2 className={it.mainHeadline}>Key Assistive Technology Features</h2>

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