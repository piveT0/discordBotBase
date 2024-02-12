import { CacheType, Interaction } from 'discord.js';
import { ClientWithCommands } from '../../types/client';

export async function commandHandler(interaction: Interaction<CacheType>) {
	if (!interaction.isCommand()) return;

	const client = interaction.client as ClientWithCommands;
	const command = client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`Comando "${interaction.commandName}" não encontrado!`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);

		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({
				content: 'Ocorreu um erro ao executar este comando!',
				ephemeral: true,
			});
		} else {
			await interaction.reply({
				content: 'Ocorreu um erro ao executar este comando!',
				ephemeral: true,
			});
		}
	}
}
