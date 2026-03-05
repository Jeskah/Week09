import Link from "next/link"
import { songs } from "../store"

export default function AllSongs () {
    return (
        <div>
            <h1>SONGS</h1>
            <h3>Here`s something you might not have heard before...</h3>

            {songs.map((song) => (
            <Link key={song.id} href={`/songs/${song.id}`}>
            <h1>{song.name}</h1>
            <h2>{song.artist}</h2>
            <h2>{song.link}</h2>
            <h2>{song.description}</h2>
        </Link>
            ))}
        </div>
    )
}