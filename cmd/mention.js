function isMention(msg) {
    words = msg.content.split(' ');

    for (i = 0; i < words.length; i++) {
        // console.log('mention')
        if (words[i] === '<@!776947785740058694>') {
            return true;
        };
    };
};

module.exports = { isMention };