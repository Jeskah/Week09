import Link from "next/link"
import { songs } from "../store"
import Image from "next/image"


export default async function Song ({params}) {

    const { id } = await params 

    const song = songs.find((s) => s.id === Number(id))

    if (!song) {
    return <h1>Song not found</h1>
}

    return (
        <div>
            <div>
                <Image height={100} width={100}src={song.img_url} alt="">{song.img_url}</Image>
                <h1>{song.name}</h1>
                <h2>{song.artist}</h2>
                <h2>{song.link}</h2>
                <h2>{song.description}</h2>
            </div>
        </div>
    )
}