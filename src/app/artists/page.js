import Link from "next/link";
import Image from "next/image";
import { db } from "../../utils/db";

export default async function Artists () { 

    const artists = (await db.query(
    `SELECT * FROM artists`)).rows

    console.log(artists)

    return (
<div>
    <h1>All Artrists</h1>
    
    <div className="flex flex-row flex-wrap">
    {artists.map((artist) => (
        <Link href={`/artists/${artist.id}`} key={artist.id}>

            <div className="w-80 h-100 object-contain border-3 gap-6 p-5">
            <Image src={artist.img_url} alt="" height={200} width={200}/>
            {artists.id}
            <h1 className="text-x1">Name:{artist.name}</h1>
            <h1>Year:{artist.year}</h1>
            <h1>Genre:{artist.genre}</h1>
            <h1>{artist.bio}</h1>
            <h1>Rank:{artist.rank}</h1>
            </div>
        </Link>
    ))}
    </div>
</div>
)
}

