import route from "../Styles/Contact.module.css"
import ContactElement from "../Components/ContactElement"

function page() {
	return (
		<section className={route.mainContainer}>
			<ContactElement />
		</section>
	)
}

export default page
