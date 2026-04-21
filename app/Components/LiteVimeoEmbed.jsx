"use client"

import { useMemo, useState } from "react"
import styles from "../Styles/LiteVimeoEmbed.module.css"

function LiteVimeoEmbed({
	videoId,
	title,
	className,
	query = "badge=0&autopause=0&player_id=0&app_id=58479",
	playLabel = "Play video",
}) {
	const [isLoaded, setIsLoaded] = useState(false)
	const src = useMemo(
		() => `https://player.vimeo.com/video/${videoId}?${query}`,
		[videoId, query]
	)

	if (!isLoaded) {
		return (
			<div className={`${styles.placeholder} ${className ?? ""}`}>
				<button
					type="button"
					className={styles.playButton}
					onClick={() => setIsLoaded(true)}
					aria-label={`Load ${title}`}
				>
					{playLabel}
				</button>
			</div>
		)
	}

	return (
		<iframe
			className={className}
			src={src}
			allow="autoplay; fullscreen; picture-in-picture"
			allowFullScreen
			title={title}
			loading="lazy"
		/>
	)
}

export default LiteVimeoEmbed
