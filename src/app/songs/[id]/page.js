import pg from "pg";

export default async function Songs ({params}) { //deconstructing the data from Song ID's
    const {id} = await params
    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const song = await db.query(`select * from books where id = $1` [id])
    const result = song.rows[0]

    console.log(result)
    return (
        <div>
            <p>{song.title}</p>
            <p>{song.artist}</p>
        </div>
    )
}