"use client"

import { useState, useEffect} from "react";

export default function ChatBox({ artistId }) { 
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("")

    useEffect(() => {
        async function fetchMessages() {
            const res = await fetch(`/api/messages?artistId=${artistId}`);
            const data = await res.json()
            setMessages(data)
        }

        if (artistId)
        fetchMessages();

    }, [artistId]);


    async function handleSubmit(e) {
        e.preventDefault();
        

        const res = await fetch(`/api/messages?artistId=${artistId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: text,
                artist_id: artistId,
                bragger_id: 1
            })
            
        });

    const newMessage = await res.json();
    setMessages([...messages, newMessage]);
    setText("");
    
}
console.log(messages);
    return (
        <div>
            <h2>Chat 💬 Post 🦅 Boast 😎</h2>
            

<div>
    {messages.map(( msg ) => (
    <div key={ msg.id }>
    <p>      { msg.created_at }</p>
    <strong> { msg.bragger_id }</strong>
    <p>      { msg.content }</p>
    </div>
    ))}
</div>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="brag about it..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                    <button className="hover:cursor-pointer">POST!</button>

                    
            </form>
        </div>
    )
}