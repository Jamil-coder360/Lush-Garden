import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Lush Garden | Nature's Beauty Delivered to You",
  description: "Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers and planters that will bring a touch of nature to your home!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-[#fbfcfb] text-[#1e2e25]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

