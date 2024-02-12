import { CacheType, Interaction } from 'discord.js';
import * as buttonsCollecter from '../../buttons';
import { Button } from '../../types/button';

export async function buttonHandle(interaction: Interaction<CacheType>) {
	if (!interaction.isMessageComponent()) return;

	const buttonsList = Object.values(buttonsCollecter) as Button[];
	const button = buttonsList.find((v) => v.data.id === interaction.customId);

	if (!button) return;

	await button.execute(interaction);
}
