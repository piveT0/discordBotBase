import { Client } from 'discord.js';
import { deployCommands } from '../core/command';

export async function EvemtReady(readyClient: Client<true>) {
	console.log(`Estou online em ${readyClient.user.tag}`);
	await deployCommands();
}
