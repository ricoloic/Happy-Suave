require('dotenv').config();

let msg
const {
    findFunc,
    isMention,
    cmdList
} = require('./BotCmd/all');

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';

// Creating a connection from the bot to the server
client.login(process.env.discordtoken);

// Making sure the bot is ready to operate
client.on('ready', () => {
    console.log('The Happy bot is ready to operate !!!');
});

// Listening of message events => when somebody send a message
client.on('message', botRead);

function botRead(message) {
    msg = message;
    if (isMention(msg)) {
        cmdList(msg);
    } else if (msg.content.startsWith(prefix)) {
        findFunc(msg);
    };
};

module.exports = msg;