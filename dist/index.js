"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ready_1 = require("./events/ready");
const interaction_1 = require("./events/interaction");
const env_1 = require("./env");
const command_1 = require("./core/command");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildModeration,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.AutoModerationExecution,
    ],
});
client.commands = command_1.commands;
client.once(discord_js_1.Events.ClientReady, ready_1.EvemtReady);
client.on(discord_js_1.Events.InteractionCreate, interaction_1.EventInteractionCreate);
client.login(env_1.discordToken);
