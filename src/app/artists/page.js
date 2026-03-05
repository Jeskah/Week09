import pg from "pg";
import Link from "next/link";
import Image from "next/image";

export default async function Artists () { 
    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const artists = (await db.query(
    `SELECT * FROM artists`)).rows
    // const artists = dbResponse.rows

    console.log(artists)

    return (
<div>
    <h1>All Artrists</h1>
    <div>
    {artists.map(artist => (
        <Link href={`/artists/${artists.id}`} key={artist.id}>
            {/* <Image src={artist.img_url} alt="" height={500} width={500}/> */}
        </Link>
    ))}
    </div>
</div>

    )
}