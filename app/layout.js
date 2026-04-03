import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";

export const metadata = {
  title: "ivvi",
  description: "Visual Notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">



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

        <Footer />

      </body>
    </html>
  );
}
