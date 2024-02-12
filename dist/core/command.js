"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployCommands = exports.commands = void 0;
const discord_js_1 = require("discord.js");
const commandsModules = __importStar(require("../commands"));
const env_1 = require("../env");
exports.commands = new discord_js_1.Collection();
const rest = new discord_js_1.REST().setToken(env_1.discordToken);
function deployCommands() {
    return __awaiter(this, void 0, void 0, function* () {
        const commandsList = Object.values(commandsModules);
        for (const command of commandsList) {
            console.log(`Registrando comando: "${command.data.name}"`);
            exports.commands.set(command.data.name, command);
        }
        yield registerCommand(commandsList);
    });
}
exports.deployCommands = deployCommands;
function registerCommand(commands) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = commands.map((command) => command.data.toJSON());
        try {
            yield rest.put(discord_js_1.Routes.applicationCommands(env_1.clientId), { body });
        }
        catch (error) {
            console.error(error);
        }
    });
}
