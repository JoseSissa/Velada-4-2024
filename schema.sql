DROP TABLE IF EXISTS "Votes";

CREATE TABLE "Votes" (
    id TEXT PRIMARY KEY,
    combatId TEXT,
    userId TEXT,
    voteId TEXT
);