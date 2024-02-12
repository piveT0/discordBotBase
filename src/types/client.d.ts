import { Client } from 'discord.js';
import { CommandHandle } from './command';

export type ClientWithCommands = Client & { commands?: CommandHandle };
