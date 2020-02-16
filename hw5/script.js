// task 1
function getRandomArray(length, min, max) {
    const newArr = [];
    for (let i = 0; i < length; i++) {
    newArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return newArr;
}
console.log(`Result of the getRandomArray: ${getRandomArray(7, 5, 25)}`);

// task 2


// task 3
function getAverage(...numbers) {
   const result = numbers.reduce((accumulator, el) => {
    let sum = 0;    
    if (Number.isInteger(el)) {
            sum += el;
        }
        return sum + accumulator;
    }, 0 );
    return result / numbers.length;
} 
console.log(`Result of the getAverage function is: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

// task 4
function getMedian (...numbers) {
    let median = 0;
    const sorted  = numbers.sort((a, b) => a -b);
    let properIndex = 0;
    if (numbers.length % 2 !== 0) {
        properIndex = Math.floor(numbers.length / 2);
        median = numbers[properIndex];
    } else {
        properIndex = numbers.length / 2;
        median = (numbers[properIndex - 1] + numbers[properIndex]) / 2;
        }
    return median;
}
console.log(`Result of the getMedian fuction is: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

// task 5
function filterEvenNumbers (...numbers) {
    return numbers.filter(el => el % 2 !== 0);
}
console.log(`Result of the filterEvenNumbers function is: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`);

// task 6
function countPositiveNumbers (...numbers) {
    const positive = numbers.filter(el => el > 0);
return positive.length;
}
console.log(`Result of the countPositiveNumbers function is: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);

// task 7
function getDividedByFive (...numbers) {
    return numbers.filter(el => el % 5 === 0);
}
console.log(`Result of the getDividedByFive function is: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

// task 8


// task 9
function divideByThree (string) {
    const arr = string.split(' ')
    const result = [];
    arr.map(el => {
      for (let i = 0; i < el.length; i+=3) {
        result.push(el.slice(i, i + 3));
      }
    })
    return result
  } 
console.log(`Result of the dividedByThree function is: ${divideByThree("Commander")}`);

// task 10

document.writeln(`
Result of the getRandomArray: ${getRandomArray(7, 5, 25)}<br>
Result of the getAverage function is: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
Result of the getMedian fuction is: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
Result of the filterEvenNumbers function is: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}<br>
Result of the countPositiveNumbers function is: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}<br>
Result of the getDividedByFive function is: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
Result of the dividedByThree function is: ${divideByThree("Commander")};
`)