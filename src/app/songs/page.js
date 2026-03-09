import Link from "next/link"
import { songs } from "./store"
import Image from "next/image"


export default function AllSongs () {
    return (

    <div>
            <h1>Mood</h1>
            <button>Hyper</button>
            <button>Minimal Input</button>
            <button>Romantic</button>
            <button>Sass</button>

        <div>
            <div>
                <h1>Here`s something you might not have heard before...</h1>

                {songs.map((song) => (
                <Link key={song.id} href={`/songs/${song.id}`}>

                        <div className="bg-gray-500 w-100 h-100 p-2 hover:scale-101 transition space-x-3">

                            <Image
                                src={song.img_url}
                                width={200}
                                height={200}
                                alt={song.name}
                            />
                            
                                <h2>{song.artist}</h2>
                                <h1>{song.name}</h1>
                                <p href={song.link}>
                                    Listen Here</p>
                                <p>{song.description}</p>

                        </div>
                        
                    </Link>
                    
                ))}
                </div>
            </div>
        </div>
    )
}