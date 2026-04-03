// Content-Security-Policy for all routes (pages and /_next/static). Tighten over time (e.g. nonces) when feasible.
// Production value must match vercel.json "Content-Security-Policy" (Vercel edge applies it to every path including /_next/static).

export const PRODUCTION_CONTENT_SECURITY_POLICY =
	"default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com https://*.vimeocdn.com; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://submit-form.com; frame-src https://player.vimeo.com; form-action 'self' https://submit-form.com; base-uri 'self'; object-src 'none'; worker-src 'self' blob:; upgrade-insecure-requests"

export function buildContentSecurityPolicy() {
	const isDev = process.env.NODE_ENV === "development"

	const scriptSrc = [
		"'self'",
		"'unsafe-inline'",
		"https://va.vercel-scripts.com",
	]

	if (isDev) {
		scriptSrc.push("'unsafe-eval'")
	}

	if (!isDev) {
		return PRODUCTION_CONTENT_SECURITY_POLICY
	}

	const directives = [
		"default-src 'self'",
		`script-src ${scriptSrc.join(" ")}`,
		"style-src 'self' 'unsafe-inline'",
		"img-src 'self' data: blob: https://images.unsplash.com https://*.vimeocdn.com",
		"font-src 'self'",
		[
			"connect-src 'self'",
			"https://vitals.vercel-insights.com",
			"https://*.vercel-insights.com",
			"https://vercel.live",
			"https://va.vercel-scripts.com",
			"https://submit-form.com",
		].join(" "),
		"frame-src https://player.vimeo.com",
		"form-action 'self' https://submit-form.com",
		"base-uri 'self'",
		"object-src 'none'",
		"worker-src 'self' blob:",
		"upgrade-insecure-requests",
	]

	return directives.join("; ")
}
