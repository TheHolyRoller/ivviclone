import route from "../Styles/Blog.module.css"
import BlogHero from "../Components/BlogHero"

export const metadata = {
	title: "ivvi blog — dyslexia, DSA and education news | ivvi",
	description:
		"Read the ivvi blog: DSA updates, dyslexia strategies, product news and ideas for visual note-taking in higher education.",
	alternates: {
		canonical: "/blog",
	},
}
import BlogArticle from "../Components/BlogArticle"
import BlogSearch from "../Components/BlogSearch"

function page() {
	return (
		<section className={route.mainContainer}>
			<div className={route.layout}>
				<div className={route.mainContent}>
					<BlogHero />
					<BlogArticle />
					<BlogArticle
						imageSrc="/images/ivvi%20logo.webp"
						imageAlt="ivvi logo"
						title="Introducing ivvi to the DSA market."
						paragraphs={[
							"Today, we are thrilled to share something that has us all buzzing with excitement - a new market opportunity we believe is about to make a big impact. ivvi is our AI-powered Mind Mapping app, purpose-built to support people with Dyslexia and ADHD by creating instant, real-time visual notes during lectures..."
						]}
						linkLabel="Continue Reading..."
					/>
				</div>
				<div className={route.sidebarWrap}>
					<BlogSearch />
				</div>
			</div>
		</section>
	)
}

export default page
