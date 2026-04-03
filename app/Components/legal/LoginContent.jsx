import React from "react"
import LegalPage, { LegalA, LegalH2 } from "../LegalPage"
import { IVVI_APP_URL } from "../ivviAppUrl"

export default function LoginContent() {
	return (
		<LegalPage title="Login">
			<LegalH2>Sign in to your account</LegalH2>
			<p>
				Sign in to your ivvi account to access visual note-taking, recordings, transcripts, and your personal workspace.
			</p>
			<LegalH2>Log in via the ivvi app</LegalH2>
			<p>
				<LegalA href={IVVI_APP_URL}>Open the ivvi app</LegalA> to log in securely.
			</p>
		</LegalPage>
	)
}
