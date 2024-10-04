import { column, defineDb } from "astro:db";

const Votes = {
    columns: {
        id: column.text({ primaryKey: true }), // 'userId-combatId'
        combatId: column.text(),
        userId: column.text(),
        voteId: column.text(),
        voteTime: column.date(), // Time of vote
    },
};
// https://astro.build/db/config
export default defineDb({
    tables: {
        Votes,
    },
});
