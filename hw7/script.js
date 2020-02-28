const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }; 

// task 1
function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log(`Result of the getMyTaxes function is: ${getMyTaxes.call(ukraine, 1000)}`);



// task 2

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(`Result of the getMiddleTaxes is : ${getMiddleTaxes.call(ukraine)}`);

// task 3

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(`Result of the getTotalTaxes function is: ${getTotalTaxes.call(ukraine)}`);

// task 4

function getMySalary(country) {
    setInterval(() => {
        const result = {};
const minSalary = 1500;
const maxSalary = 2000;
result.salary = Math.floor(minSalary + Math.random() * (maxSalary - minSalary + 1));
result.taxes = this.tax
result.profit = result.salary - this.tax;
console.log(result);
    }, 10000);
}

getMySalary.call(ukraine);

