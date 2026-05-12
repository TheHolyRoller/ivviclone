import React from "react"
import Link from "next/link"
import LegalPage, { LegalA, LegalH2, LegalList } from "../LegalPage"
import { IVVI_APP_URL } from "../ivviAppUrl"
import styles from "../../Styles/LegalPage.module.css"

export default function DisgraphiaGuideContent() {
	return (
		<LegalPage title="Using ivvi with dysgraphia and dyslexia-related learning needs">
			<p>
				If writing by hand feels slow, tiring, or hard to organise, you are not alone. Many learners with dysgraphia (sometimes
				spelled disgraphia) also experience dyslexia-related challenges with sequencing, recall, and note structure. ivvi Notes
				is designed to reduce that load by turning spoken teaching into live visual mind maps you can review, edit, and reuse.
			</p>
			<p>
				This page explains a practical, low-stress way to use ivvi before, during, and after classes so your energy can go into
				understanding ideas instead of struggling to capture every word.
			</p>

			<LegalH2>Who this guide is for</LegalH2>
			<LegalList>
				<li>Students in school, college, or university who find handwriting or typed note-taking difficult.</li>
				<li>Learners who miss content while trying to keep up with lecture pace.</li>
				<li>Students who need stronger structure for revision and assignment planning.</li>
				<li>Support staff, assessors, and families helping a learner build an accessible study routine.</li>
			</LegalList>

			<LegalH2>Why ivvi can help with dysgraphia</LegalH2>
			<LegalList>
				<li>
					<strong>Less writing pressure:</strong> ivvi captures and organises content in real time, reducing the need for fast,
					manual note production.
				</li>
				<li>
					<strong>Visual structure first:</strong> Mind-map style layouts make relationships between ideas easier to follow than
					large blocks of text.
				</li>
				<li>
					<strong>Cognitive load support:</strong> You can stay focused on listening and understanding while ivvi builds the
					first draft of your notes.
				</li>
				<li>
					<strong>Editable output:</strong> You can tidy, simplify, and personalise maps later in a calmer review session.
				</li>
				<li>
					<strong>Revision-ready records:</strong> Sessions become reusable study assets instead of one-off handwritten pages.
				</li>
			</LegalList>

			<LegalH2>Set up ivvi for smoother study sessions</LegalH2>
			<LegalList>
				<li>
					<strong>Choose a quiet audio setup:</strong> A reliable mic or headset improves capture quality, especially in shared
					or echo-heavy spaces.
				</li>
				<li>
					<strong>Create subject folders:</strong> Keep maps grouped by module and week so retrieval is fast at revision time.
				</li>
				<li>
					<strong>Use a simple naming pattern:</strong> Example: "Biology Week 3 - Cell Transport" for consistent search and
					review.
				</li>
				<li>
					<strong>Agree a support routine:</strong> If you work with a tutor or mentor, define when maps are reviewed and which
					sections to prioritise.
				</li>
			</LegalList>

			<LegalH2>During class: a low-friction workflow</LegalH2>
			<LegalList>
				<li>Start ivvi at the beginning of the session and let it map as teaching progresses.</li>
				<li>Use short tags such as "check", "exam", or "ask tutor" rather than writing long side notes.</li>
				<li>When attention drifts, re-anchor by reading the current branch title instead of backtracking through full text.</li>
				<li>Focus on understanding examples and explanations, not on producing perfect notes in real time.</li>
			</LegalList>

			<LegalH2>After class: turn maps into usable revision tools</LegalH2>
			<LegalList>
				<li>
					<strong>10-minute tidy pass:</strong> Rename unclear branches and remove duplicates while the lesson is still fresh.
				</li>
				<li>
					<strong>Chunk into review sets:</strong> Break larger maps into smaller topics to avoid overload and improve recall.
				</li>
				<li>
					<strong>Add retrieval prompts:</strong> Convert key nodes into short questions for active recall practice.
				</li>
				<li>
					<strong>Build assignment outlines:</strong> Use major branches as a ready-made structure for essays, reports, or
					presentations.
				</li>
			</LegalList>

			<LegalH2>Practical adjustments that often work well</LegalH2>
			<LegalList>
				<li>Prefer shorter sessions with breaks to reduce writing and attention fatigue.</li>
				<li>Review maps with a supporter weekly to reinforce organisation and confidence.</li>
				<li>Pair ivvi maps with your institution&apos;s reading lists and lecture slides for context continuity.</li>
				<li>Keep one "key concepts" map per module to avoid searching across too many files before exams.</li>
				<li>Use plain language labels so branches are immediately meaningful under time pressure.</li>
			</LegalList>

			<LegalH2>For assessors, tutors, and support teams</LegalH2>
			<p>
				ivvi can be positioned as an assistive strategy that supports transcription burden, note organisation, and revision
				access. When documenting student support, focus on function: reduced manual writing demand, improved access to structured
				notes, and better continuity between live teaching and independent study.
			</p>
			<p>
				You can find additional context on student support pathways via{" "}
				<Link href="/dsa" className={styles.link}>
					Guide to the DSA for Dyslexia
				</Link>{" "}
				and{" "}
				<Link href="/accesstowork" className={styles.link}>
					Access to Work
				</Link>
				.
			</p>

			<LegalH2>Frequently asked questions</LegalH2>
			<p>
				<strong>Do I need to type a lot while using ivvi?</strong>
				<br />
				No. Most learners use minimal typing in live sessions, then make short edits afterwards.
			</p>
			<p>
				<strong>Can ivvi still help if I also have dyslexia or ADHD traits?</strong>
				<br />
				Yes. Visual structure and reduced note-taking pressure are often helpful where reading speed, working memory, or sustained
				attention are affected.
			</p>
			<p>
				<strong>Is this only for higher education?</strong>
				<br />
				No. The same workflow can be adapted for school, college, workplace training, and independent learning.
			</p>

			<LegalH2>Next steps</LegalH2>
			<p>
				Ready to try this workflow in practice?{" "}
				<LegalA href={IVVI_APP_URL}>Open ivvi Notes</LegalA>, then start with one live lesson and one short post-class review.
				Small, consistent sessions usually deliver better results than occasional long catch-up sessions.
			</p>
			<p>
				If you want implementation help, contact{" "}
				<LegalA href="mailto:support@ivvi.app">support@ivvi.app</LegalA> and our team can suggest a simple starting routine for
				you or your learner.
			</p>
		</LegalPage>
	)
}
