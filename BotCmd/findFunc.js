const { gif } = require('./gif');
const { calc } = require('./calc');
const prefix = '?'

function findFunc(msg) {
    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    console.log(command, args);

    if (command == 'calc') {
        calc(args, msg);
    } else if (command == 'gif') {
        gif(args, msg);
    }
};

module.exports = { findFunc };