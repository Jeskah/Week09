import "./globals.css";
import Link from "next/link"
import "tailwindcss"

export default function RootLayout ({children}) {

  return (
    <html lang="en">
      <body className="global">
        <nav className="flex-1 color align-middle" >
                <Link href="./">HOME</Link>
                <Link href="../artists">ARTISTS</Link>
                <Link href="../songs">SONGS</Link>
                <Link href="../about">ABOUT</Link>
        </nav>
                {children}
      </body>
    </html>
  )
}