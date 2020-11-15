const { sender } = require('../sender');
const {
    Users,
    BuildingDetails,
    Buildings,
    Employees,
    Customers,
    Addresses,
    Batteries,
    Elevators,
    Leads,
    Columns,
    Quotes
} = require('./mysqlConn');

const model = [['users', Users], ['building_details', BuildingDetails], ['buildings', Buildings], ['employees', Employees], ['customers', Customers], ['addresses', Addresses], ['batteries', Batteries], ['elevators', Elevators], ['leads', Leads], ['columns', Columns], ['quotes', Quotes]]

function db(args, msg) {
    if (args[0] == 'queryAll') {
        for (i = 0; i < model.length; i++) {
            if (args[1] == model[i][0]) {
                let name = model[i][0]
                model[i][1].findAll()
                    .then(data => prepData(data, name, msg))
                    .catch(err => sender(err, msg));
            };
        };
    } else if (args[0] == "queryId") {
        for (i = 0; i < model.length; i++) {
            if (args[1] == model[i][0]) {
                let name = model[i][0]
                model[i][1].findAll({ where: { id: args[2] } })
                    .then(data => prepData(data, name, msg))
                    .catch(err => sender(err, msg));
            };
        };
    } else {
        let message = '';

        message += '```css\n';
        message += '[The ?db function is in development and is still worked on at this time. The available tags for that command are] :\n';
        message += '  "?db queryAll [tableName]" => this will result by listing the first 5 rows of the table. This is due to the char limit on discord\n';
        message += '  "?db queryId [tableName] [id]" => this will result by giving you the desired row of a table\n\n'
        message += 'Tables supported:\n'
        message += '    ?db queryAll users\n'
        message += '    ?db queryId users 5\n'
        message += '    ?db queryAll employees\n'
        message += '    ?db queryId employees 5\n'
        message += '    ?db queryAll customers\n'
        message += '    ?db queryId customers 5\n'
        message += '    ?db queryAll addresses\n'
        message += '    ?db queryId addresses 5\n'
        message += '    ?db queryAll buildings\n'
        message += '    ?db queryId buildings 5\n'
        message += '    ?db queryAll building_details\n'
        message += '    ?db queryId building_details 5\n'
        message += '    ?db queryAll batteries\n'
        message += '    ?db queryId batteries 5\n'
        message += '    ?db queryAll columns\n'
        message += '    ?db queryId columns 5\n'
        message += '    ?db queryAll leads\n'
        message += '    ?db queryId leads 5\n'
        message += '    ?db queryAll quotes\n'
        message += '    ?db queryId quotes 5\n'
        message += '    ....'
        message += '```'
        sender(message, msg)
    }
};

function prepData(data, tableName, msg) {
    tableName = capFistChar(tableName);
    pretty = '';
    pretty += "```"
    pretty += `Table ${tableName}\n`
    for (i = 0; i < data.length; i++) {
        pretty += ` ${tableName} ${i + 1}:\n`

        Object.entries(data[i].dataValues).forEach(([key, val]) => {
            // console.log(key, val);
            pretty += `   ${key}: ${val}\n`
        });

        if (i == 4) {
            break;
        };
    };

    if (data.length == 0) {

    };

    pretty += "```"

    // console.log(pretty);
    console.log(pretty.length);
    sender(pretty, msg);
    
    // console.log(Object.keys(data[0].dataValues))
};

function capFistChar(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

module.exports = { db }