import { CacheType, Interaction } from 'discord.js';

export type Button = {
	data: {
		id: string;
	};

	execute: (interaction: Interaction<CacheType>) => Promise<void>;
};
