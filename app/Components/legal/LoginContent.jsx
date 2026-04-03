import React from "react"
import LegalPage, { LegalA } from "../LegalPage"
import { IVVI_APP_URL } from "../ivviAppUrl"

export default function LoginContent() {
	return (
		<LegalPage title="Login">
			<p>
				Sign in to your ivvi account to access visual note-taking, recordings, transcripts, and your personal workspace.
			</p>
			<p>
				<LegalA href={IVVI_APP_URL}>Open the ivvi app</LegalA> to log in securely.
			</p>
		</LegalPage>
	)
}
