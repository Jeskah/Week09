import { db } from "../../../utils/db";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const artistId = searchParams.get("artistId");

    if (!artistId) {
        return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
    }

    const result = await db.query(
    `SELECT * FROM messages 
        WHERE artist_id = $1 
        ORDER BY created_at ASC`,
        [artistId]
    );

    return new Response(JSON.stringify(result.rows), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Database fetch failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
    });
    }
}


    export async function POST(request) {
    try {
        const body = await request.json();
        const { content, artist_id, bragger_id } = body;

        const result = await db.query(
        `INSERT INTO messages (content, artist_id, bragger_id)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [content, artist_id, bragger_id]
        );

        const newMessage = result.rows[0];

        return new Response(JSON.stringify(newMessage), {
        status: 200,
        headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Insert failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
        });
    }
    }