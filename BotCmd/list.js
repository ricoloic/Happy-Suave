const { sender } = require('./sender');

function cmdList(msg) {
    sender(rowCompile(msg), msg);
};

function rowCompile(msg) {
    rows = []
    rows.push(`> :robot: Happy-Suave\n`);
    rows.push(`> \n`);
    rows.push(`> Hi <@!${msg.author.id}>. I've notice that you have mention me in a message.\n`);
    rows.push(`> \n`);
    rows.push(`> Here is a list of all the available command.\n`);
    rows.push(`> \n`);
    rows.push(`> Prefix : **?**\n`);
    rows.push("```");
    rows.push("?Calc                   ?Calc 4 + 9         →      Result: 13\n");
    rows.push("?Gif                    ?Gif hight five     →      https://tenor.com/vL00.gif");
    rows.push("```\n");
    rows.push(``);
    rows.push(``);

    message = ``;
    for (i - 0; i < rows.length; i++) {
        message += rows[i];
    };

    return message;
};

module.exports = { cmdList };