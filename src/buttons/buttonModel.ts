import { ButtonInteraction } from 'discord.js';

export const buttonModel = {
	data: {
		id: 'buttonID',
	},
	async execute(interaction: ButtonInteraction) {
		await interaction.reply({
			content: 'Button de exemplo',
			ephemeral: true,
		});
	},
};
