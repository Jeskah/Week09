import pg from "pg";
import Link from "next/link";

export default async function Artists ({params}) { 
    const {id} = await params
    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const result = await db.query(`select * from artists WHERE id =$1`, [id])
    const artist = result.rows[0]

    console.log(artist)

    return (
<div>
    <p>All Artrists</p>
{artist}
</div>

    )
}