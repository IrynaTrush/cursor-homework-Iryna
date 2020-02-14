const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
 
// task 1
let newArr = [...students];
newArr[1] = "Лена";
newArr[2] = "Игорь";

function pairs (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        let partsOfArray = arr.slice(i, (i + 2));
        result.push(partsOfArray);
   }
    return result;
}
console.log(pairs(newArr));
const couples = pairs(newArr);

// task 2
function subjects (pairs, subject) {
let themesWithPairs = [];
 for (let i = 0; i < pairs.length; i ++) {
    themesWithPairs.push([pairs[i][0] + ' и ' + pairs[i][1], subject[i]]);
 }
return themesWithPairs;
}
console.log(subjects(couples, themes));

// task 3
function journal (students, marks) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        result.push([students[i], marks[i]]);
    }
    return result;
}
console.log(journal(newArr, marks));

// task 4
const randomMark = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;
const from1To5 = randomMark(1, 5);

function exam (pairs, subjects) {
    let result = [];
    for (let i = 0; i < pairs.length; i++) {
        result.push([pairs[i][0] + ' и ' + pairs[i][1], subjects[i], randomMark(1, 5)]);
    }
    return result;
}
console.log(exam(couples, themes));

