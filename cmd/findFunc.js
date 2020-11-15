const { gif } = require('./gif');
const { calc } = require('./calc');
const { quotes } = require('./quotes')
const { cmdList } = require('./list')
const { db } = require('./db/db')
const prefix = '?'

function findFunc(msg) {
    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    console.log(command, args);

    switch(command) {
        case 'calc':
            calc(args, msg);
            break;
        case 'gif':
            gif(args, msg);
            break;
        case 'quote':
            quotes(args[0], msg);
            break;
        case 'db':
            db(args, msg);
            break;
        case 'help':
            cmdList(msg);
            break;
    };
};

module.exports = { findFunc };