import route from "../Styles/PressReleaseRoute.module.css"
import PressRelease from "../Components/PressRelease"

function page() {
	return (
		<section className={route.mainContainer}>
			<PressRelease />
		</section>
	)
}

export default page
