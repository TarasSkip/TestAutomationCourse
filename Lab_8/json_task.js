let student = {
    "name" : "Taras",
    "surname" : "Skip",
    "rate" : "5"
}

console.log(student.name);

let string = JSON.stringify(student);
console.log(string);

let rate2 = student.rate * 2;
console.log(rate2);