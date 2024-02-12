"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientId = exports.discordToken = void 0;
require("dotenv/config");
exports.discordToken = process.env.DISCORD_TOKEN;
exports.clientId = process.env.DISCORD_CLIENT_ID;
