const input = '‘jag heter yousef vad gör du';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    // Check if the current letter is 'e'
    if (input[i].toLowerCase() === 'e') {
        resultArray.push('ee');
    } 
    // Check if the current letter is 'u'
    else if (input[i].toLowerCase() === 'u') {
   /*      resultArray.push('uu'); */
            resultArray.push(input[i]);
    resultArray.push(input[i]);
    } 
    // Check if the current letter is a vowel (other than 'e' and 'u')
    else {
        for (let j = 0; j < vowels.length; j++) {
            if (input[i].toLowerCase() === vowels[j]) {
                resultArray.push(input[i]);
                break; // Exit the inner loop after a match is found
            }
        }
    }
}
// Join the elements of resultArray into a single string and capitalize all letters
/* const resultString = resultArray.join("").toUpperCase(); */
console.log(resultArray.join(' '));
