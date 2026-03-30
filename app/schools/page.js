import SchoolsHero from '../Components/SchoolsHero';
import sc from '../Styles/Schools.module.css'; 



export default function Schools() {



    return(

        <section className={sc.mainContainer} >

            {/* Add in the hero here  */}
            <SchoolsHero/> 



        </section>
    )



}