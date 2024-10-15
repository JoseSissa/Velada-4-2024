import { db, VoteSelections } from 'astro:db';

import { COMBATS } from '@/const/combats';

// https://astro.build/db/seed
export default async function seed() {
	const teams = COMBATS
		.flatMap(({ teams, boxers }) => teams ?? boxers)
		.map(id => ({ id }))
	
	await db.insert(VoteSelections).values(teams);

}
