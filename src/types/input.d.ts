import { CacheType, Interaction } from 'discord.js';

export type Input = {
	data: {
		name: string;
		description: string;
		id: string;
	};
	// eslint-disable-next-line no-unused-vars
	execute: (interaction: Interaction<CacheType>) => Promise<void>;
};
