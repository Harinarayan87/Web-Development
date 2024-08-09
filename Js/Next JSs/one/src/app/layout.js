import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        <header className="bg-red-500 p-5">
          <div className="container flex justify-between mx-auto">
              <h1>LOGO</h1>
              <h2>harinarayanchaudhari87@gmail.com</h2>
          </div>
        </header>
        <nav className="bg-green-700 text-white p-5">
          <ul className="flex justify-center gap-7">
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/about">About Us</Link></li>
            <li> <Link href="/services">Services</Link></li>
            <li> <Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        
        {children}//pages like home page,about page
        
        <footer className="bg-black text-white p-5 text-center">
          Footer
        </footer>
        
        </body>
    </html>
  );
}
