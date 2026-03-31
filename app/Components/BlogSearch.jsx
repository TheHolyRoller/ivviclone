import styles from "../Styles/BlogSearch.module.css"

const CATEGORIES = [
	"All Categories",
	"Ai",
	"Ai Summaries",
	"Bett Awards",
	"Dsa",
	"Dyslexia",
	"Education",
	"Founder Story",
	"Ivvi",
	"Mind Mapping",
	"Send"
]

const SOCIALS = ["f", "X", "ig", "yt", "tt", "p"]

function BlogSearch() {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.searchRow}>
				<span className={styles.searchIcon} aria-hidden="true">
					&#128269;
				</span>
				<input className={styles.searchInput} type="text" placeholder="Search..." aria-label="Search blog" />
			</div>

			<p className={styles.intro}>Explore topics we've covered in our blog:</p>

			<div className={styles.categoryBlock}>
				<h2 className={styles.heading}>Categories</h2>
				<nav className={styles.categoryList} aria-label="Blog categories">
					{CATEGORIES.map((category) => (
						<a key={category} className={styles.categoryLink} href="#">
							{category}
						</a>
					))}
				</nav>
			</div>

			<div className={styles.socialBlock}>
				<h2 className={styles.heading}>Follow Us</h2>
				<div className={styles.socialRow}>
					{SOCIALS.map((social) => (
						<a key={social} className={styles.socialLink} href="#" aria-label={`Follow on ${social}`}>
							{social}
						</a>
					))}
				</div>
			</div>
		</aside>
	)
}

export default BlogSearch
