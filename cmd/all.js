const { calc } = require('./calc');
const { sender } = require('./sender');
const { isMention } = require('./mention');
const { cmdList } = require('./list');
const { gif } = require('./gif');
const { findFunc } = require('./findFunc')

module.exports = {
    findFunc,
    gif,
    calc,
    sender,
    isMention,
    cmdList
};