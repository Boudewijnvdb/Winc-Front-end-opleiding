let assignGrades = function (number) {
    if (number > 8) {
        console.log('a');
    } else if (number > 6) {
        console.log('b');
    } else if (number > 4) {
        console.log('c');
    } else if (number > 2) {
        console.log('d');
    } else if (number > 0) {
        console.log('e')
    } else {
        console.log('no score')
    }
}


assignGrades(4);


function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(95));
console.log('You got a ' + assignGrade(65));



for (i = 60; i < 100; i++) {
    console.log(i + ' is a grade ' + assignGrade(i));
}


