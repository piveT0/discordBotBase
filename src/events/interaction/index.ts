import { CacheType, Interaction } from 'discord.js';
import { commandHandler } from './command';
import { inputHandle } from './input';
import { buttonHandle } from './buttons';

export async function EventInteractionCreate(
	interaction: Interaction<CacheType>
) {
	commandHandler(interaction);
	inputHandle(interaction);
	buttonHandle(interaction);
}
