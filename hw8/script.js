class Student {
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = [5, 4, 4, 5];
        this.isExpelled = false;
    }
    getInfo() {
        return `Студент ${this.university}, ${this.course}-го курсу, ${this.fullName}`;
    }
    get marks() {
        if (this.isExpelled) {
            return null;
        } else {
            return this.allMarks;
        }
    }
    set marks(value) {
        if(this.isExpelled) {
            return null;
        } else {
            return this.allMarks.push(value);
        }
    }
    getAverageMark() {
        return (this.allMarks.reduce((sum, item) => sum += item, 0)) / this.allMarks.length;
    }
    dismiss() {
        this.isExpelled = true;
    }
    recover() {
        this.isExpelled = false;
    }
}

const student = new Student('ЛНМУ ім. Данила Галицького', 6, 'Іван Петров');
console.log (
    `${student.getInfo()};
    Оцінки студента: ${student.allMarks};
    Студент отримав нову оцінку: ${student.marks = 5};
    Середня оцінка студента: ${student.getAverageMark()};`
)
// Advanced

class BudgetStudent extends Student {
    constructor(arrOfMarks) {
        super();
        this.allMarks = arrOfMarks;
        setInterval(() => console.log(this.getScholarship()), 3e5);
    }
    getScholarship() {
        const averageMark = 4;
        if((!this.isActive)&&(this.getAverageMark() >= averageMark)){
            return `отримали 1400 грн стипендії`;
        } else {
            return `не отримали стипендії`;
        }
    }
}

const withMoney = new BudgetStudent ([5, 4, 4, 5, 5]);
const withoutMoney = new BudgetStudent ([3, 3, 3, 3, 4]);

console.log(
    `Студенти, які мають середній бал більше 4, ${withMoney.getScholarship()}.`
);

console.log(
    `Студенти, які мають середній бал менше 4, ${withoutMoney.getScholarship()}.`
);