
async function story() {
    logYellow("Hello Adventurer!!")
    var name = await ask(`What's your name?`);
    logYellow("Nice to meet you," + name);
    logYellow(name + ",let's go on an adventure!!!")
    /*
    Once there was a dog(noun) named name(Sunshine) her was very wild(adjective). One day
    she was very bad(adjective) and ran(verb) away from her humans(group of people). She went 
    very far(distance) from her home. 
    */
   var noun1 = await ask("Name an animal.")
   var name1 = await ask("Give a name for the animal.")
   var adjective = await ask("Give an adjective.")
   var adjective1 = await ask("Give an adjective.")
   var verb = await ask("Give a verb.")
   var humans = await ask("Word for a group of people.")
   var distance = await ask("Word for distance.")

   logYellow("Once upon a time there was a "+ noun1+ " named " + name1 + " her was very " + 
   adjective + ". She was very " + adjective1 + " and " + verb + " away from her " + humans + 
   ". She went " + distance + " from her home."
    )
}










































const readline = require('readline').createInterface({ input: process.stdin , output: process.stdout });
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

story().then(()=>{readline.close();console.log(Reset);});