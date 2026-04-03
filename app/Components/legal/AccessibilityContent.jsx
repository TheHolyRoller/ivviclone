import React from "react"
import LegalPage, { LegalA, LegalH2, LegalList } from "../LegalPage"
import a from "../../Styles/AccessibilityStatement.module.css"

export default function AccessibilityContent() {
	return (
		<LegalPage
			title="Accessibility Statement"
			titleId="accessibility-statement-title"
			bodyClassName={a.statementBody}
		>
			<article className={a.article} aria-labelledby="accessibility-statement-title">
				<LegalH2 id="a11y-commitment">1. Commitment to Accessibility</LegalH2>
				<p>
					At ivvi, we are committed to making our products and services accessible to everyone who uses them.
				</p>
				<p>
					Accessibility is central to how we design and build software. We aim for people of all abilities to use our products
					and websites with confidence.
				</p>

				<LegalH2 id="a11y-measures">2. Accessibility Measures</LegalH2>
				<LegalList>
					<li>
						<strong>Internal policies:</strong> Accessibility is built into how we plan, design, ship, and maintain products—not
						only as a one-off audit.
					</li>
					<li>
						<strong>Goals and ownership:</strong> Teams have clear accessibility goals and named responsibilities so progress
						does not stall between releases.
					</li>
					<li>
						<strong>Quality assurance:</strong> We use structured testing (manual and tool-assisted) to find issues early and
						track fixes.
					</li>
				</LegalList>

				<LegalH2 id="a11y-conformance">3. Conformance Status</LegalH2>
				<p>
					The Web Content Accessibility Guidelines (
					<abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
					) describe how to make web content accessible to people with disabilities. Conformance is defined at three levels:
					Level A, Level AA, and Level AAA.
				</p>
				<p>
					ivvi&apos;s products and services are <strong>partially conformant</strong> with WCAG 2.1 Level AA. We are working
					to close remaining gaps; some parts of the product or site may not yet meet every success criterion.
				</p>
				<p>
					We are not required to meet Section 508 of the US Rehabilitation Act (that law applies to{" "}
					<abbr title="United States">US</abbr> federal agencies). We still use Section 508 as practical guidance where it
					helps us support more users.
				</p>

				<LegalH2 id="a11y-feedback">4. Feedback Mechanism</LegalH2>
				<p>
					We welcome feedback on accessibility. If something is hard to use or you have ideas for improvement, email{" "}
					<LegalA href="mailto:support@ivvi.app">support@ivvi.app</LegalA>. We aim to reply within 24 hours.
				</p>

				<LegalH2 id="a11y-compatibility">5. Compatibility</LegalH2>
				<p>
					We design ivvi products to work with common assistive technologies. We test with screen readers including TalkBack,
					VoiceOver, and JAWS.
				</p>
				<p>
					Our web application is optimised for recent versions of Chrome and Edge. Other browsers may work; if you hit issues,
					tell us via the contact details below.
				</p>

				<LegalH2 id="a11y-limitations">6. Limitations and Alternatives</LegalH2>
				<p>
					We know some areas need improvement. Below are known limitations and what we are doing about them.
				</p>
				<LegalList>
					<li>
						<strong>Events:</strong> If an event title is left blank, several pages may show &apos;Untitled Event&apos;. We
						are exploring automatic, unique names so titles stay clear.
					</li>
					<li>
						<strong>Identical button labels:</strong> On the Events screen, every row uses a &apos;Move Event&apos; label
						without naming the specific event. The control after the event title shows which item moves. We are reviewing
						clearer labelling.
					</li>
					<li>
						<strong>Page titles:</strong> Some views need clearer document titles, for example View Event, reorder cards and task
						lists, home and record event, and account and collections. We are adding more descriptive titles over time.
					</li>
					<li>
						<strong>Third-party tools:</strong> Parts of ivvi rely on third-party components that are not fully accessible
						yet. We work with those vendors and replace or patch where we can.
					</li>
					<li>
						<strong>Guided tour and transcription:</strong> Not all steps are fully keyboard-operable. You can use our intro
						video and onboarding articles as alternatives while we improve keyboard support.
					</li>
					<li>
						<strong>Transcription focus mode:</strong> Screen readers work with our transcription service; with NVDA, use{" "}
						<kbd className={a.kbd}>Insert</kbd>
						<span className={a.kbdGap}>+</span>
						<kbd className={a.kbd}>Space</kbd> to interact in Focus Mode. We want to simplify this in a future release.
					</li>
				</LegalList>

				<LegalH2 id="a11y-assessment">7. Assessment Approach</LegalH2>
				<p>We assess accessibility in three ways:</p>
				<LegalList>
					<li>
						<strong>Self-evaluation:</strong> Our team runs regular checks with common tools and internal test protocols.
					</li>
					<li>
						<strong>External input:</strong> We involve external accessibility experts when we need a deeper review.
					</li>
					<li>
						<strong>In-house specialists:</strong> Accessibility specialists work with design and engineering on every major
						change.
					</li>
				</LegalList>

				<LegalH2 id="a11y-ongoing">8. Ongoing Improvements</LegalH2>
				<p>
					We keep fixing known issues and improving how ivvi works for assistive technology. That includes design updates,
					vendor collaboration, and new product ideas that put access first.
				</p>

				<LegalH2 id="a11y-contact">9. Contact Information</LegalH2>
				<p>
					For accessibility questions or to report a barrier, email{" "}
					<LegalA href="mailto:support@ivvi.app">support@ivvi.app</LegalA>. We will help where we can and use your feedback to
					prioritise fixes.
				</p>
			</article>
		</LegalPage>
	)
}
