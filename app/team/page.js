import team from "../Styles/Team.module.css"
import TeamHero from "../Components/TeamHero"
import TeamProfile from "../Components/TeamProfile"
import LeftTeamProfile from "../Components/LeftTeamProfile"

function page() {
	return (
		<section className={team.mainContainer}>
			<TeamHero />
			<TeamProfile
				name="Darius Namdaran LLb"
				paragraphs={[
					"Darius is the CEO and Co-Founder of ivvi. He is an entrepreneur who has learned to overcome the challenges of dyslexia with the creative gifts that come with it.",
					"Darius has trained thousands of children and adults to mind map and through this process, he realised how challenging note-taking is for fellow dyslexic thinkers and the critical importance of a visual system that fully harnesses the power of assistive technology to support their learning."
				]}
				imageSrc="/images/dar%20profile.png"
				imageAlt="Portrait of Darius Namdaran"
			/>
			<LeftTeamProfile
				name="Jo Lee BSc Hons"
				paragraphs={[
					"Jo is the Co-Founder and COO of ivvi and brings over 25 years of team building and operations experience. She is responsible for the smooth running of all day to day operations and financial oversight.",
					"Jo is a passionate coach and trainer who works with individuals and businesses across all sectors to provide support and guidance to help them thrive and succeed."
				]}
				imageSrc="/images/jo%20lee.png"
				imageAlt="Portrait of Jo Lee"
			/>
			<TeamProfile
				name="Roman Mavlutov"
				paragraphs={[
					"Roman is the Chief Technical Officer at ivvi, with over 20 years of experience in software development. He is deeply passionate about mind mapping and the potential of technology to enhance cognitive processes.",
					"As a full-stack developer, Roman plays a critical role in building and refining ivvi's platform, ensuring it meets the needs of users who think differently, enabling them to work more effectively and creatively."
				]}
				imageSrc="/images/roman.png"
				imageAlt="Portrait of Roman Mavlutov"
			/>
			<LeftTeamProfile
				name="Erica Warren"
				paragraphs={[
					'Dr Erica Warren is an educational therapist, author and expert in executive function, dedicated to empowering individuals to improve their cognitive and organisational skills. She is instrumental in building community through group coaching. Erica brings a wealth of knowledge to the team, supporting the development of executive function strategies and co-hosting, with Darius, the "Executive Function: Brain Trainer Podcast."'
				]}
				imageSrc="/images/erika.png"
				imageAlt="Portrait of Erica Warren"
			/>
			<TeamProfile
				name="Kerry Pace"
				paragraphs={[
					"Kerry is our Accessibility and Training Advisor with over 20 years of experience. At ivvi, she meets the training needs of our users, focusing on assistive technology and inclusive practices. Kerry is instrumental in creating mind mapping resources and training materials, ensuring that all users - especially those who think differently - can fully leverage ivvi's tools to enhance their learning and productivity."
				]}
				imageSrc="/images/kerry.png"
				imageAlt="Portrait of Kerry Pace"
			/>
		</section>
	)
}

export default page
