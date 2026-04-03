import "./globals.css";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "ivvi",
  description: "Visual Notes",
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

      <body>


          <Hamburger/> 
        <div style={{position: 'relative', zIndex: '99999999999'}}>

    <Navbar/> 

        </div>

        <div
          style={{
            position: "relative",
            zIndex: 0,
            isolation: "isolate",
          }}
        >
          {children}
        </div>

        <Analytics />

      </body>
    </html>
  );
}
