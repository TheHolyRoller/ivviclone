import styles from "../Styles/DownloadAssetsList.module.css"

function DownloadAssetsList() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Click Here to Download Zip file for all Assets</h2>

				<a
					className={styles.downloadButton}
					href="https://drive.google.com/file/d/1jxCb4t9qqugemU2HECuivPYKpH1JnBhn/view"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download Assets
				</a>

				<div className={styles.copyBlock}>
					<h3 className={styles.blockTitle}>ivvi-press-kit-2026-zip organisation</h3>

					<p className={styles.groupTitle}>1. logos</p>
					<ul className={styles.list}>
						<li>ivvi logo colour.png</li>
						<li>ivvi logo colour.svg</li>
						<li>ivvi logo white.png</li>
						<li>ivvi logo white.svg</li>
						<li>ivvi logo mono.png</li>
						<li>ivvi logo mono.svg</li>
					</ul>

					<p className={styles.groupTitle}>2. ivvi Photos</p>
					<ul className={styles.list}>
						<li>Darius headshot [1-3].jpg</li>
						<li>Jo headshot [1-3].jpg</li>
						<li>Darius and Jo staircase.jpg</li>
					</ul>

					<p className={styles.groupTitle}>3. product</p>
					<ul className={styles.list}>
						<li>Darius teaching on ipad.png</li>
						<li>ivvi mindmap on laptop.png</li>
						<li>ivvi mindmap sample.png</li>
					</ul>

					<p className={styles.groupTitle}>4. video</p>
					<ul className={styles.list}>
						<li>ivvi 3mins demo.mp4</li>
						<li>ivvi Bett 2026 finalist video.mp4</li>
						<li>ivvi Bett SEND winner award.mp4</li>
					</ul>

					<p className={styles.groupTitle}>5. text</p>
					<ul className={styles.list}>
						<li>ivvi Bett press release.pdf</li>
						<li>ivvi style guidelines sheet.pdf</li>
						<li>company overview/boilerplate.txt</li>
						<li>founder bios.txt</li>
						<li>key stats.txt</li>
						<li>quotes.txt</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default DownloadAssetsList
