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
        `SELECT * FROM messages WHERE artist_id = $1 ORDER BY created_at ASC`,
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