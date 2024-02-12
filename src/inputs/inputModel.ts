import { CacheType, ModalSubmitInteraction } from 'discord.js';

export const inputProduct = {
	data: {
		id: 'modalID',
	},
	async execute(interaction: ModalSubmitInteraction<CacheType>) {
		// const inputValue = interaction.fields.getTextInputValue('InputID');
	},
};
