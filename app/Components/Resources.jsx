import React from 'react'
import r from '../Styles/Resources.module.css'

const countryLinks = [
	{
		country: 'England',
		url: 'https://www.gov.uk/disabled-students-allowance-dsa/how-to-claim'
	},
	{
		country: 'Scotland',
		url: 'https://www.saas.gov.uk/guides/disabled-students-allowance/how-to-apply-for-dsa'
	},
	{
		country: 'Wales',
		url: 'https://www.studentfinancewales.co.uk/undergraduate-finance/full-time/tuition-fee-and-living-cost-students/what-s-available/disabled-students-allowance/'
	},
	{
		country: 'Northern Ireland',
		url: 'https://www.studentfinanceni.co.uk/types-of-finance/undergraduate/full-time/tuition-fee-and-living-cost-students/extra-help/disabled-students-allowance/applying/'
	}
]

function Resources() {
	return (
		<section className={r.mainContainer} id='dsa-resources'>
			<h2 className={r.mainHeader}>Further resources by country</h2>

			<p className={r.mainParagraph}>
				The application forms and portals are different for each nation within Great Britain. Your application goes to the funding body that
				provides your student finance.
			</p>
			<p className={r.paragraph}>
				This means you might study in England, but if you are from Scotland your funding body is SAAS. The details for each nation are below.
			</p>

			<ul className={r.list}>
				{countryLinks.map((item) => (
					<li className={r.item} key={item.country}>
						<strong className={r.strong}>{item.country}:</strong>
						<a className={r.link} href={item.url} target='_blank' rel='noreferrer'>
							{item.url}
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Resources
