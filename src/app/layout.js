import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "WOW Modular",
  description: "Premium interiors for homes, hotels, and businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <div className="pt-20">{children}</div> {/* padding to avoid navbar overlap */}
        <Footer />
      </body>
    </html>
  );
}
