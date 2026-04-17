import "./globals.css";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { getMetadataBaseUrl } from "./siteUrl"

export const metadata = {
  metadataBase: new URL(getMetadataBaseUrl()),
  title: {
    default: "ivvi Notes — DSA-approved visual mind maps | ivvi",
  },
  description:
    "ivvi Assistant Ltd — ivvi Notes turns lectures into live visual mind maps. DSA-approved assistive technology for dyslexia and ADHD.",
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Nunito.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lato-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >


          <Hamburger/> 
        <div style={{position: 'relative', zIndex: '99999999999'}}>

    <Navbar/> 

        </div>

        <div style={{overflowX: 'hidden', padding: '0', margin: '0'}}  >

          {children}
        </div>

        <Footer />

        <Analytics />

      </body>
    </html>
  );
}
