import { CacheType, Interaction } from 'discord.js';
import * as inputsCollecter from '../../inputs';
import { Input } from '../../types/input';

export async function inputHandle(interaction: Interaction<CacheType>) {
	if (!interaction.isModalSubmit()) return;

	const inputsList = Object.values(inputsCollecter) as Input[];
	const input = inputsList.find((v) => v.data.id === interaction.customId);

	if (!input) return;

	await input.execute(interaction);
}
