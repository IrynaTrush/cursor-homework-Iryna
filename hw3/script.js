// function 1
function maxNumber (number) {
 let result = String(number);
 result.split('');
 return Math.max(...result);
 }
 console.log("Result of the maxNumber function: " + maxNumber(8691));

 // function 2
 function powNumber (num, exp) {
     if(num === 0)
     return 1;
  let result = num;
 for(let i = 1; i < exp; i++){
  result *=num;
 }
 return result;
 }
console.log("Result of the pow function: " + powNumber(0, 3)); 

// function 3
let userName = 'ivAn';
function uppercaseFirstLetter (name) {
  const firstLetter = name[0].toUpperCase();
   const lastPart = name.slice(1).toLowerCase();
   return firstLetter + lastPart;
}
console.log("Result of the uppercaseFirstLetter function: " + uppercaseFirstLetter(userName));

// function 4
function restFromTaxes (pay) {
   const taxes = 19.5;
   return pay - (pay / 100) * taxes;
}
console.log("Result of the restFromTaxes function: " + restFromTaxes(30000));

// function 5
function randomNumber (n ,m) {
   return Math.floor(Math.random() * (m - n) + n);
}
console.log("Result of the randomNumber function: " + randomNumber(33, 55));

// function 6
function countLetter (letter, word) {
let counter = 0;
let arr = word.split('');
for (let i = 0; i < arr.length; i++){
   if(arr[i] === letter){
      counter++;
   }
  }
return counter;
}
console.log("Result of the countLetter function: " + countLetter('a', "astalavista"));

//function 7
const commonCurency = 25;
function convertCurrency (currency) {
   const baks = "$";
   const grn = "UAH";
   let converted;
   if (currency.toLowerCase().includes('uah')){
      converted = (parseInt(currency) / 25) + baks;
   } else if (currency.includes('$')){
      converted = (parseInt(currency) * 25) + grn;
   }else{
      throw new Error('Invalid currency');
   }
   return converted;
}
console.log("Result of the commonCurency function: " + convertCurrency("2500UAH"));

// function 8
function getRandomPassword (digits) {
   let password = "";
    for (let i = 0; i < digits; i++) {
      let passwordItem = String(Math.round(Math.random() * 10));
      password += passwordItem;
   }
   return password;
}
console.log("Result of the getRandomPassword function: " + getRandomPassword(8));

// function 9
function deleteLetters (letter, word) {
   let deleted = "";
   let arr = word.split('');
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== letter) {
      deleted += arr[i];
      }
   }
   return deleted;
}
console.log("Result of the deleteLetters function: " + deleteLetters('a', "blablabla"));

//function 10
function isPalyndrom (word) {
    for (let i = 0; i < (word.length / 2); i++) {
      let leftChar = word[i];
      let rightChar = word[word.length - (i + 1)];
      if (leftChar !== rightChar) {
         return false;
      }
   }
   return true;
}
console.log ("Result of the isPalyndrom function: " + isPalyndrom('madam'));

//function 11
function deleteDuplicateLetter (sentence) {
   sentence = sentence.toLowerCase();
    let deleted = '';
      for (let i = 0; i < sentence.length; i++) {
        if (sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i])) {
          deleted += sentence[i];
        }
     }
   return deleted;
}
console.log("Result of the isPalyndrom function: " + deleteDuplicateLetter("Бисквит был очень нежный"));


document.writeln(`
1.Result of the maxNumber function: ${maxNumber(8691)}<br>
2.Result of the pow function: ${powNumber(0, 3)}<br>
3.Result of the uppercaseFirstLetter function: ${uppercaseFirstLetter(userName)}<br>
4.Result of the restFromTaxes function: ${restFromTaxes(30000)}<br>
5.Result of the randomNumber function: ${randomNumber(33, 55)}<br>
6.Result of the countLetter function: ${countLetter('a', "astalavista")}<br>
7.Result of the commonCurency function: ${convertCurrency("2500UAH")}<br>
8.Result of the getRandomPassword function: ${getRandomPassword(8)}<br>
9.Result of the deleteLetters function: ${deleteLetters('a', "blablabla")}<br>
10.Result of the isPalyndrom function: ${isPalyndrom('madam')}<br>
11.Result of the isPalyndrom function: ${deleteDuplicateLetter("Бисквит был очень нежный")}
`);
