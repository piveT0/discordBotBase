import { Collection, REST, Routes } from 'discord.js';
import * as commandsModules from '../commands';
import { clientId, discordToken } from '../env';
import { Command, CommandsCollection } from '../types/command';

export const commands: CommandsCollection = new Collection();
const rest = new REST().setToken(discordToken);

export async function deployCommands() {
	const commandsList = Object.values(commandsModules) as Command[];

	for (const command of commandsList) {
		console.log(`Registrando comando: "${command.data.name}"`);
		commands.set(command.data.name, command);
	}

	await registerCommand(commandsList);
}

async function registerCommand(commands: Command[]) {
	const body = commands.map((command) => command.data.toJSON());

	try {
		await rest.put(Routes.applicationCommands(clientId), { body });
	} catch (error: any) {
		console.error(error);
	}
}
