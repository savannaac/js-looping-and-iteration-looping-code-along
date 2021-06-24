// Code your solutions in this file
function writeCards(names, event) {
    const newArray = []
    // let event = birthday

    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}