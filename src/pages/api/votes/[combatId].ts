import { getSession } from "auth-astro/server";
import { object, safeParse, string } from "valibot";
import { addNewVote } from "@/db/client";
import type { VoteTypeDB } from "@/types/VoteDB";

import type { APIRoute } from "astro";

import { COMBATS } from "@/const/combats";
import { generateUserId } from "@/lib/users";

const VoteSchema = object({
    voteId: string(),
});

const response = (
    body: string,
    {
        status,
        statusText,
        headers,
    }: { status?: number; statusText?: string; headers?: Headers }
) => {
    return new Response(body, { status, statusText, headers });
};


// POST --> /api/vote/combatId
export const POST: APIRoute = async ({ params, request }) => {
    // Verificamos si la sesión existe y si el usuario tiene un email
    const session = await getSession(request);
    if (!session || session?.user?.email == null) return response("Unauthirized", { status: 401 });    

    // Verificamos que el combatId existe/llegue desde la URL
    const { combatId } = params;
    if (!combatId) return response("Combat ID is required", { status: 400 });

    // Verificamos que el combat existe
    const combatData = COMBATS.find((combat) => combat.id === combatId);
    if (!combatData) return response("Combat not found", { status: 404 });


    // Obtenemos el voto del usuario
    const { success, output } = safeParse(VoteSchema, await request.json());    
    if (!success) return response("Bad Request", { status: 400 });
    const { voteId } = output;

    const userId = generateUserId(session.user);
    const id = `${userId}-${combatId}`;

    const vote: VoteTypeDB = { id, combatId, userId, voteId };

    // Insertar información en la base de datos
    try {
        await addNewVote(vote);
    } catch (error) {
        console.error(error);
        return response("Error Inserting Vote", { status: 500 });
    }    

    return response("OK end RES", { status: 200 });
};
