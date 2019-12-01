const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const askQuestion = (function () {
    const getLineGen = (async function* (question) {
        for await (const line of readline) {
            yield line;
        }
    })();
    return async (question) => {
        console.log(question);
        return (await getLineGen.next()).value;
    }
})();

async function story() {

    console.log("Hello World!")
    var name = await askQuestion(`What's your name?`)
    //Execute code using question
    var answer = await askQuestion("How is your day," + name);
    //if the answer is great or good then respond with Good to hear, + name 
    //if the answer is not so good or I've been better then respond with I hope things get better + name
    if ((answer.toLowerCase().includes("great") || answer.toLowerCase().includes("good"))
        && answer.toLowerCase().includes("not") == false) {
        //respond with Good to hear, + name 
        console.log("Good to hear," + name)

    } else if (answer.toLowerCase().includes("not great") ||
        answer.toLowerCase().includes("not good")) {
        console.log("Sorry, to hear that," + name)
    }

    // Asks now would you like to go on an adventure?
    var yesOrNo = await askQuestion("Would you like to go on an the Adventure of A Programmer," + name + "?")
    if (yesOrNo.toLowerCase().includes("ye")) {
        
    }
}

story().then(() => { readline.close(); });