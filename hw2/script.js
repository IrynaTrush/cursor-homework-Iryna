let numberN = +prompt('Enter a start number, please');
while(!Number.isInteger(numberN)){
    numberN = +prompt('Enter an integer start number, please');
}
let numberM = +prompt('Enter a final number, please');
while (!Number.isInteger(numberM)) {
    numberM = +prompt('Enter an integer final number, please');
}

if(numberN > numberM){
    numberM = +prompt('Enter a final number greater that a start number, please');
}

let skipEven =  confirm('Do you want to skip the even numbers?');

let sum = 0;

for (let i = numberN; i <= numberM; i++) {
    if(skipEven === false){
      sum +=i;
    }else if(skipEven === true){
        if(i % 2 !== 0){
            sum +=i;
        }
    }
    
}
console.log(sum);
document.writeln(`
A start number is ${numberN},<br>
a final number is ${numberM},<br>
To skip the even numbers: ${skipEven},<br>
The sum of the numbers from ${numberN} to ${numberM} is ${sum}.
`);