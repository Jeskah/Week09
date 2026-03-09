// import { db } from "../../../utils/db";
import Image from "next/image";
import ChatBox from "../../components/ChatBox";
import { db } from "../../.././utils/db";

export default async function Artist ({params}) { 
    
    const {id} = await params
    const result = await db. query( 
        `SELECT * FROM artists WHERE id = $1`,
        [id]);

    const artist = result.rows[0];

        if (!artist) {
        return <p>Artist not found</p>;
        }

    console.log(result)

    return (
    <div>
            <h1>{artist.name}</h1>
<div className="flex flex-row justify-between">
        <div key={artist.id}>
            <Image 
                src={artist.img_url}
                alt=""
                height={350}
                width={350}
            />

            <h1>{artist.name}</h1>
            <p>{artist.year}</p>
            <p>{artist.bio}</p>
            <p>{artist.genre}</p>
        </div>

        <div className="w-100 border-4 p-4">
        <ChatBox artistId={artist.id} />
        </div>
</div>
</div>

    )
}