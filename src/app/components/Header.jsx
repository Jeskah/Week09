import Link from "next/link"


export default function Header () {
    return (
        <div className="nav">
            <div>
                <h5>This is my header component</h5>
            </div>
            <header>
                <Link href="./">HOME</Link>
                <Link href="../songs">SONGS</Link>
                <Link href="../about">ABOUT</Link>
            </header>
        </div>
    )
}

