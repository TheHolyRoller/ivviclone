import React from 'react'
import v from '../Styles/LeadMagnet.module.css'
import Link from 'next/link'
import Image from 'next/image'
import background from '../../public/images/lead.webp'

function LeadMagnet({
	title = "Download our free ivvi guide to applying for the Disabled Students' Allowance"
}) {
	return (
		<section className={v.section}>
			<div className={v.container}>
				<h2 className={v.heading}>{title}</h2>

				<div className={v.imageWrap}>
					<Image className={v.image} src={background} alt='Cover image of DSA guide' loading="lazy" />
				</div>

				<Link className={v.ctaButton} href='/ivvi'>
					Download PDF here
				</Link>
			</div>
		</section>
	)
}

export default LeadMagnet