let marks = [75, 45, 88, 60, 35, 90, 55, 40, 70, 60];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}
console.log("Total:", total);
console.log("Average:", total / marks.length);

console.log("Highest:", Math.max(...marks));
console.log("Lowest:", Math.min(...marks));

let pass = 0;
let fail = 0;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        pass++;
    } else {
        fail++;
    }
}
console.log("Pass:", pass);
console.log("Fail:", fail);

let grades = marks.map(function(mark) {
    if (mark >= 80) {
        return "A";
    } else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else {
        return "Fail";
    }
});
console.log("Grades:", grades);

let passed = marks.filter(function(mark) {
    return mark >= 50;
});
console.log("Passed Students:", passed);

let ascending = [...marks].sort((a, b) => a - b);
console.log("Ascending:", ascending);
let descending = [...marks].sort((a, b) => b - a);
console.log("Descending:", descending);

let unique = [...new Set(marks)];
console.log("Unique Marks:", unique);

console.log(marks.includes(90));