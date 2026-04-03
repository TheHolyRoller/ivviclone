import CookiesContent from "../Components/legal/CookiesContent"

export const metadata = {
	title: "Cookie preferences — how ivvi uses cookies | ivvi",
	description:
		"How ivvi.app uses cookies, consent, third-party services, and where to read more in our privacy policy.",
	alternates: {
		canonical: "/cookies",
	},
}

export default function CookiesPage() {
	return <CookiesContent />
}
