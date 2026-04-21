import "./globals.css";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { getMetadataBaseUrl } from "./siteUrl"
import { Lato, Nunito_Sans } from "next/font/google"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata = {
  metadataBase: new URL(getMetadataBaseUrl()),
  title: {
    default: "ivvi Notes — DSA-approved visual mind maps | ivvi",
  },
  description:
    "ivvi Assistant Ltd — ivvi Notes turns lectures into live visual mind maps. DSA-approved assistive technology for dyslexia and ADHD.",
  icons: {
    icon: [
      { url: "/icon.ico", type: "image/x-icon" },
      { url: "/icons/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${lato.variable}`}>
      <head />

      <body
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="appMainContainer">
          <Hamburger />
          <div style={{ position: "relative", zIndex: "99999999999" }}>
            <Navbar />
          </div>

          <div className="appPageContent">{children}</div>

          <Footer />
        </div>

        <Analytics />

      </body>
    </html>
  );
}
