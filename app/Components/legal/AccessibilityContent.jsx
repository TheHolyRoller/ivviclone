import React from "react"
import LegalPage, { LegalA, LegalH2, LegalList } from "../LegalPage"

export default function AccessibilityContent() {
	return (
		<LegalPage title="Accessibility Statement">
			<LegalH2>1. Commitment to Accessibility</LegalH2>
			<p>
				At iVVi, we are committed to making our products and services accessible to all users. Accessibility is at the
				heart of our design and development process, ensuring that everyone, regardless of ability, can effectively use and
				interact with our software and websites.
			</p>

			<LegalH2>2. Accessibility Measures</LegalH2>
			<LegalList>
				<li>
					<strong>Internal Policies:</strong> We have established internal policies aimed at integrating accessibility into
					every stage of our product development. These policies guide our teams in designing, developing, and maintaining
					accessible digital experiences.
				</li>
				<li>
					<strong>Goals and Responsibilities:</strong> Our accessibility goals are clearly defined, with specific
					responsibilities assigned to team members across the organization. These roles ensure that accessibility is a
					continuous priority.
				</li>
				<li>
					<strong>Quality Assurance:</strong> We employ formal accessibility quality assurance methods, including testing
					protocols and tools, to evaluate and improve the accessibility of our products.
				</li>
			</LegalList>

			<LegalH2>3. Conformance Status</LegalH2>
			<p>
				The Web Content Accessibility Guidelines (WCAG) define requirements for improving accessibility for people with
				disabilities, with three levels of conformance: Level A, Level AA, and Level AAA. iVVi&apos;s products and services
				are partially conformant with WCAG 2.1 Level AA. This means that while we strive for full compliance, some aspects of
				our content may not fully meet these standards.
			</p>
			<p>
				Additionally, although iVVi is not required to conform to Section 508 of the Rehabilitation Act (which applies to US
				federal agencies), we use it as guidance to enhance the accessibility of our products for all users.
			</p>

			<LegalH2>4. Feedback Mechanism</LegalH2>
			<p>
				We welcome and encourage your feedback on accessibility. If you encounter any issues or have suggestions, please
				contact us at <LegalA href="mailto:support@ivvi.app">support@ivvi.app</LegalA>. We strive to respond to feedback within 24 hours.
			</p>

			<LegalH2>5. Compatibility</LegalH2>
			<p>
				iVVi products and services are designed to be compatible with a variety of assistive technologies. We conduct
				comprehensive testing to ensure compatibility with screen readers such as TalkBack, VoiceOver, and JAWS. Our web
				application is optimized for use with Chrome and Edge browsers.
			</p>

			<LegalH2>6. Limitations and Alternatives</LegalH2>
			<p>
				While we are committed to ensuring the accessibility of our products, we recognize that there are areas where we can
				improve. Here are some known limitations and the steps we are taking to address them:
			</p>
			<LegalList>
				<li>
					<strong>Events:</strong> Page titles can sometimes be incomplete if a user leaves the Event title blank, leading
					to multiple &apos;Untitled Event&apos; pages. We are exploring ways to automatically assign unique names to each
					Event.
				</li>
				<li>
					<strong>Identical Button Labels:</strong> On the Events page, all Events have a &apos;Move Event&apos; button
					without specifying which Event will be moved. The next tab after the Event title indicates the Event being moved.
					We are investigating solutions to make this clearer.
				</li>
				<li>
					<strong>Page Titles:</strong> Some screens do not have descriptive titles, including the View Event, Re-Order Cards
					and Task Lists, Home and Record Event, and Account and Collections views. We are working on providing more
					descriptive titles for these pages.
				</li>
				<li>
					<strong>Third-Party Applications:</strong> Some third-party applications integrated within iVVi are not fully
					optimized for accessibility. We are actively collaborating with our third-party providers to enhance the
					accessibility of their products.
				</li>
				<li>
					<strong>Guided Tour and Transcription Features:</strong> These features are not fully keyboard accessible.
					Alternatives include an introduction video and onboarding articles. We are working on making these features more
					accessible.
				</li>
				<li>
					<strong>Transcription Focus Mode:</strong> Our transcription service is accessible to screen readers, but NVDA
					users need to use Insert + Space to interact with the content in Focus Mode. We are looking for ways to simplify
					this interaction.
				</li>
			</LegalList>

			<LegalH2>7. Assessment Approach</LegalH2>
			<p>The accessibility of our products and services is evaluated through:</p>
			<LegalList>
				<li>
					<strong>Self-Evaluation:</strong> Conducted by our in-house team using accessibility testing tools and protocols.
				</li>
				<li>
					<strong>External Evaluation:</strong> We seek feedback from external accessibility experts to ensure a comprehensive
					assessment.
				</li>
				<li>
					<strong>In-House Specialists:</strong> Our dedicated accessibility specialists work closely with our design and
					development teams to maintain and improve accessibility standards.
				</li>
			</LegalList>

			<LegalH2>8. Ongoing Improvements</LegalH2>
			<p>
				We are continually working to address known limitations and enhance the accessibility of our products. This includes
				updating our designs, working with third-party providers, and exploring new technologies to better serve our users.
			</p>

			<LegalH2>9. Contact Information</LegalH2>
			<p>
				For any accessibility-related queries or feedback, 				please contact us at <LegalA href="mailto:support@ivvi.app">support@ivvi.app</LegalA>. We are here to help and ensure that our products meet your needs.
			</p>
		</LegalPage>
	)
}
