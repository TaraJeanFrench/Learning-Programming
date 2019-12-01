
async function story() {
    /* Fibbance Sequence
     what is fs?
     explain fs.
     1+1=2
     2+1=3
     3+2=5
     5+3=8
     8+5=13
     continued
      */
    logYellow("Fibbance Sequence")
    var answer = await ask("How long would you like to do the sequence?")
    var count = 0
    var fib1 = 1
    var fib2 = 1
    var fib3 = 1
    while (answer > count) {
        count = count + 1
        fib1=fib2
        fib2=fib3
        fib3= fib1 + fib2
        logYellow(fib1 + "+" + fib2 + "=" + fib3)
    }

}










































const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const ask = (function () {
    const getLineGen = (async function* (question) {
        for await (const line of readline) {
            yield line;
        }
    })();
    return async (question) => {
        console.log(FgCyan + question, Reset);
        return (await getLineGen.next()).value;
    }
})();

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

function logColor(color, text) {
    console.log(color + text);
}
function log(text) {
    logColor(FgGreen, text);
}


function logYellow(text) {
    logColor(FgYellow, text);
}

story().then(() => { readline.close(); console.log(Reset); });