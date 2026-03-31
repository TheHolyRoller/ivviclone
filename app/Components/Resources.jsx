import React from 'react'
import r from '../Styles/Resources.module.css'; 


function Resources() {
  return (
    <section className={r.mainContainer}>

    <div className={r.mainHeader}>

    Further Resources by Country

    </div>

    <p className={r.mainParagraph}>

    The application forms and portals are different for each nation within Great Britain. Your application goes to the funding body that provides your student finance. This means you might be studying in England, but because you are from Scotland, your funding body is SAAS.

    </p>
    <p className={r.paragraph}>

    The details for each nation can be found below:


    </p>

    <ul className={r.list}>
    
    <li className={r.item}>

    <strong className={r.strong}>
    England:

    </strong>

    <a className={r.link} href='https://www.gov.uk/disabled-students-allowance-dsa/how-to-claim'>

    https://www.gov.uk/disabled-students-allowance-dsa/how-to-claim

    
    </a>


    </li>

    <li className={r.item}>

<strong className={r.strong}>
{/* England: */}
Scotland: 

</strong>

<a className={r.link} href='https://www.saas.gov.uk/guides/disabled-students-allowance/how-to-apply-for-dsa'>

{/* https://www.gov.uk/disabled-students-allowance-dsa/how-to-claim */}
https://www.saas.gov.uk/guides/disabled-students-allowance/how-to-apply-for-dsa
    

</a>


</li>

<li className={r.item}>

<strong className={r.strong}>
Wales: 

</strong>

<a className={r.link} href='https://www.studentfinancewales.co.uk/undergraduate-finance/full-time/tuition-fee-and-living-cost-students/what-s-available/disabled-students-allowance/'>

https://www.studentfinancewales.co.uk/undergraduate-finance/full-time/tuition-fee-and-living-cost-students/what-s-available/disabled-students-allowance/
    

</a>


</li>
<li className={r.item}>

<strong className={r.strong}>

Northern Ireland: 

</strong>

<a className={r.link} href='https://www.studentfinanceni.co.uk/types-of-finance/undergraduate/full-time/tuition-fee-and-living-cost-students/extra-help/disabled-students-allowance/applying/'>

https://www.studentfinanceni.co.uk/types-of-finance/undergraduate/full-time/tuition-fee-and-living-cost-students/extra-help/disabled-students-allowance/applying/
    

</a>


</li>


    </ul>

    </section>
  )
}

export default Resources
