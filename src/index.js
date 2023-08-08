const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    getDotOrDash = (code) => {
        // console.log(code)
        let result = ""
        if (code === "10") {
            result = "."
        } else if (code === "11") {
            result = "-"
        }
        // console.log(result)
        return result
    }

    getLetterMorse = (code) => {
        let result = ""
        // console.log(code)
        for (j = 0; j < 10; j += 2) {
            result += getDotOrDash(code.slice(j, j + 2))
        }
        return result
    }

    getLetter = (codeMorse) => MORSE_TABLE[codeMorse]

    let phrase = ""
    let i = 0

    while (i < expr.length) {
        // let letterCode = expr.slice(i, i + 10)
        // console.log(letterCode)
        // let result = ""
        // if (letterCode === "**********") {
        //     phrase += " "
        //     i += 10
        //     continue
        // }

        phrase += (expr.slice(i, i + 10) !== "**********") ? getLetter(getLetterMorse(expr.slice(i, i + 10))) : " "
        i += 10
    }
    return phrase
}

module.exports = {
    decode
}

let a = "0000001111**********0000000010"
console.log(decode(a))