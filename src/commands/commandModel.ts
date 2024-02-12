import { SlashCommandBuilder, type CommandInteraction } from 'discord.js';

export const commandModel = {
	data: new SlashCommandBuilder().setName('name').setDescription('commandDescription'),

	async execute(interaction: CommandInteraction) {
		await interaction.reply({
			content: 'Comando base',
			ephemeral: true,
		});
	},
};
