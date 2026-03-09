import "./globals.css";
import Link from "next/link"
import "tailwindcss"
import Image from "next/image";
// import Footer from "./components/Footer";

export default function RootLayout ({children}) {

  return (
    <html lang="en">
      <body className="global p-5">
        <header>
          <Image 
            src="/shuffle-logo.png"
            alt="logo shuffle symbol"
            className="hover:scale-105 transition"
            width={200}
            height={200}
          />

          <nav className="flex gap-7 font-extrabold">
            <Link href="./">HOME</Link>
            <Link href="../artists">ARTISTS</Link>
            <Link href="../songs">SONGS</Link>
            <Link href="../about">ABOUT</Link>
            <Link href="./posts">POSTS</Link>
          </nav>
        </header>

        <main>
            <h1>Discover New Favourites</h1>
              {children}
        </main>
      </body>
    </html>
  )
}