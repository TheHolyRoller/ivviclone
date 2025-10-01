import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


export const metadata = {
  title: "myScreener",
  description: "Your Dyslexia Screener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">



      <body>
        <div style={{position: 'relative', zIndex: '99999999999'}}>

    <Navbar/> 
        </div>

        {children}


      </body>
    </html>
  );
}
