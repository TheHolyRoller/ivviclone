// Production site origin for metadataBase and SEO. Set NEXT_PUBLIC_SITE_URL when the live domain changes (e.g. custom domain).

export function getMetadataBaseUrl() {
	const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()

	if (raw) {
		if (raw.startsWith("http://") || raw.startsWith("https://")) {
			return raw.replace(/\/$/, "")
		}

		return `https://${raw.replace(/\/$/, "")}`
	}

	return "https://ivviclone.vercel.app"
}
