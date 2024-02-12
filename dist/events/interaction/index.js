"use strict";
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
exports.EventInteractionCreate = void 0;
const command_1 = require("./command");
const input_1 = require("./input");
const buttons_1 = require("./buttons");
function EventInteractionCreate(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, command_1.commandHandler)(interaction);
        (0, input_1.inputHandle)(interaction);
        (0, buttons_1.buttonHandle)(interaction);
    });
}
exports.EventInteractionCreate = EventInteractionCreate;
