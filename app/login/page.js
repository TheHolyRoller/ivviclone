import LoginContent from "../Components/legal/LoginContent"

export const metadata = {
	title: "Log in to ivvi Notes — secure account access | ivvi",
	description:
		"Sign in to your ivvi account for visual notes, recordings and transcripts. Open the ivvi app to log in securely.",
	alternates: {
		canonical: "/login",
	},
}

export default function LoginPage() {
	return <LoginContent />
}
