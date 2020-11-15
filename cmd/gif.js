const { sender } = require('./sender');

const Tenor = require('tenorjs').client({
    "Key": process.env.TENOR_TOKEN, // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
});

function gif(args, msg) {
    name = args.join(' ');
    console.log(name)

    Tenor.Search.Query(name, '1').then(Results => {
        Results.forEach(Post => {
            console.log(Post);

            message = `Powered By Tenor: \n${Post.url}`
            sender(message, msg);
        });
    }).catch(console.error);
};

module.exports = { gif };