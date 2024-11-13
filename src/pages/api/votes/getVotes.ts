import { getSession } from "auth-astro/server";
import { getVotes } from "@/db/client";
import type { APIRoute } from "astro";
import { generateUserId } from "@/lib/users";

export const GET: APIRoute = async ({ request }) => {    
    const session = await getSession(request);
    if (!session || session?.user?.email == null) {
        return new Response("Unauthirized", { status: 401 });
    }

    const userId = generateUserId(session.user);
    try {
        const votes = await getVotes(userId);
        return new Response(JSON.stringify(votes), { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response("Error to get votes", { status: 500 });
    }

};