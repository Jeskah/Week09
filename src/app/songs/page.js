import Link from "next/link"
import { songs } from "./store"
import Image from "next/image"


export default function AllSongs () {
    return (
    <div className="flex-col">
        <div className="flex gap-5 font-bold">
        <h1>Mood</h1>
        <button>Hyper</button>
        <button>Minimal Input</button>
        <button>Romantic</button>
        <button>Sass</button>
    </div>

<div className="grid-cols-3 gap-6 p-6 w-100">
            <h1>Here`s something you might not have heard before...</h1>

            {songs.map((song) => (
                <Link key={song.id} href={`/songs/${song.id}`}>

                    <div className=" bg-gray-900 rounded-lg p-4  hover:scale-101 transition">
                        <Image
                            src={song.img_url}
                            width={100}
                            height={100}
                            alt={song.name}
                        />
                            
                            <h2>{song.artist}</h2>
                            <h1>{song.name}</h1>
                            <h2>{song.link}</h2>
                            <h2>{song.description}</h2>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}