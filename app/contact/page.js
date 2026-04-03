import route from "../Styles/Contact.module.css"
import ContactElement from "../Components/ContactElement"

export const metadata = {
	title: "Contact ivvi — demos, DSA and account support | ivvi",
	description:
		"Contact ivvi Assistant Ltd in Edinburgh. Reach our team for demos, DSA questions, school or assessor licences, and help with ivvi Notes.",
	alternates: {
		canonical: "/contact",
	},
}

function Page() {
	return (
		<main className={route.mainContainer}>
			<ContactElement />
		</main>
	)
}

export default Page
