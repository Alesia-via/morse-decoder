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
    let result = '';
    for (let i=0; i< expr.length; i+=10){
    let decodedLetter = expr.slice(i, i+10);
    if (decodedLetter === '**********') {
     result += ' ';
       continue;}
        let morseStr = '';
         
         for (let n = 0; n < 10; n += 2) {
             let decodedsymbol = decodedLetter.slice(n, n + 2);
             
             if (decodedsymbol === '10') {
                 morseStr += '.';
             } else if (decodedsymbol === '11') {
                 morseStr += '-';
             }
         }
         
         result += MORSE_TABLE[morseStr];
     }
     
     return result;
 }
module.exports = {
    decode
}