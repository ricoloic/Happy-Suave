const { sender } = require('./sender');

function cmdList(msg) {
    sender(rowCompile(msg), msg);
};

function rowCompile(msg) {
    rows = []
    rows.push(`:robot: Hi <@!${msg.author.id}>. I've notice that you have mention me in a message.\n`);
    rows.push("```css\n");
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push("| Name         | Use Case                        | Result                                       |\n");
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push("| ?Calc        | ?Calc 5+10*sin(45)/(2*(1.5))    | Result: 7.357022...                          |\n");
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push("| ?Gif         | ?Gif Snoop Dogg                 | https://tenor.com/TH2X.gif                   |\n");
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push('| ?Quote       | ?Quote || ?Quote superhero      | "Listen, smile, agree, .."                   |\n');
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push("| ?db          | ?db                             | Give you a list of command associated to ?db |\n");
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push("| @Happy-Suave |                 Will give you a list of command                                |\n");
    rows.push("+--------------+---------------------------------+----------------------------------------------+\n");
    rows.push("```");
    rows.push("");

    message = "";
    for (i - 0; i < rows.length; i++) {
        message += rows[i];
    };

    return message;
};

module.exports = { cmdList };