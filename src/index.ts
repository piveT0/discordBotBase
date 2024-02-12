import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import { EvemtReady } from './events/ready';
import { EventInteractionCreate } from './events/interaction';
import { discordToken } from './env';
import { ClientWithCommands } from './types/client';
import { Command } from './types/command';
import { commands } from './core/command';

const client: ClientWithCommands = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildModeration,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.AutoModerationExecution,
	],
});

client.commands = commands as Collection<String, Command>;

client.once(Events.ClientReady, EvemtReady);
client.on(Events.InteractionCreate, EventInteractionCreate);

client.login(discordToken);
