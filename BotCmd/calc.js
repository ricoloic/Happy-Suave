const mexp = require('math-expression-evaluator');
const { sender } = require('./sender');

function calc(args, msg) {
    let expression = '';
    for (i = 0; i < args.length; i++) {
        expression += args[i];
    };
    // console.log(expression);
    // console.log(mexp.eval(expression));

    try{
        expression = mexp.eval(expression);
        sender("```Result: " + expression + "```", msg);
    }
    catch (err) {
        // console.log(err);
        sender(`Error: ${err.message}`, msg);
    };
};


module.exports = { calc };