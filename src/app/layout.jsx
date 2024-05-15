import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ridzwan G | Anime List",
  description: "Website Anime List Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
