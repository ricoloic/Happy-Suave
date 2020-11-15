const { sender } = require("./sender");
const { randomIntInc } = require('./calc')

const happy = [["Be happy with what you have and are, be generous with both, and you won't have to hunt for happiness.", "William E. Gladstone"], ["Thinking happy thoughts literally creates a positive chemical change in the brain which stimulates both positive physical and psychological benefits.", "Deepak Chopra"], ["Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", "Nhat Hanh"], ["Thousands of candles can be lighted from a single candle. Happiness never decreases by being shared.", "Gautama Buddha"], ["Happiness is not something ready made. It comes from your own actions.", "Dalai Lama"], ["Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.", "Ralph Marston"]];
const superhero = [["It’s not who I am underneath, but what I do that defines me.", "Batman"], ["The answers you seek shall be yours, once I claim what’s mine.", "Thor"], ["What is a superhero? They’re supposed to represent hope, opportunity, and strength for everybody.", "Aldis Hodge"], ["Heroes are made by the path they choose, not the powers they are graced with.", "Iron Man"], ["With great power, comes great responsibility.", "Spiderman"], ["No man can win every battle, but no man should fall without a struggle.", "Peter Parker"], ["Listen, smile, agree, and then do whatever you were gonna do anyway.", "Iron Man"], ["You are much stronger than you think you are. Trust me.", "Superman"], ["Life doesn’t give us purpose. We give life purpose.", "The Flash"]]

function quotes(type, msg) {
    let message
    switch(type) {
        case 'happy':
            message = happyQ();
            sender(message, msg);
            break;
        case 'superhero':
            message = superheroQ();
            sender(message, msg);
            break; 
        default:
            message = happyQ();
            sender(message, msg);
            break;
    };
};

function happyQ() {
    const i = randomIntInc(0, (happy.length - 1));

    quote = `> "*${happy[i][0]}*"\n`;
    author = `>  **${happy[i][1]}**`;
    return quote + author;
};

function superheroQ() {
    const i = randomIntInc(0, (superhero.length - 1));

    quote = `> "*${superhero[i][0]}*"\n`;
    author = `>  **${superhero[i][1]}**`;
    return quote + author;
};

module.exports = { quotes }