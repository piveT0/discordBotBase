import { ChatInputCommandInteraction, Collection, SlashCommandBuilder } from 'discord.js';

export type CommandsCollection = Collection<string, Command>;

export type Command = {
	data: SlashCommandBuilder;
	// eslint-disable-next-line no-unused-vars
	execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};
