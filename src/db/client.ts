import { createClient } from "@libsql/client";
import type { VoteTypeDB } from "@/types/VoteDB";

const turso = createClient({
    url: import.meta.env.TURSO_DATABASE_URL ?? "",
    authToken: import.meta.env.TURSO_AUTH_TOKEN ?? "",
});

export const addNewVote = async (vote: VoteTypeDB) => {
    const result = await turso.batch([
        {
            sql: `INSERT OR REPLACE INTO Votes (id, combatId, userId, voteId) VALUES (?, ?, ?, ?)`,
            args: [vote.id, vote.combatId, vote.userId, vote.voteId],
        }],
        "write" 
    )    
    return result;
}

export const getVotes = async (userId: string) => {
    const result = await turso.execute({
        sql: `SELECT * FROM Votes WHERE userId = ?`,
        args: [userId]
    });
    return result;
}