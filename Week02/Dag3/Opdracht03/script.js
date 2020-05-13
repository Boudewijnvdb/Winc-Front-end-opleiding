//A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }];


const findSpiderMan = function (superFilter) {
    return superFilter.find(function (superhero) {
        return superhero.name === "Spiderman";
    });

}

console.log(findSpiderMan(superheroes));


//B
const doubleArrayValues = function (arrayvalues) {
    return arrayvalues.map(function (singles) {
        return singles * 2;
    });

}

console.log(doubleArrayValues([1, 2, 3]));



//C

const containsNumberBiggerThan10 = function (array) {
    return array.some(function (number) {
        return number > 10;
    })

}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

//D
const isItalyInTheGreat7 = function (array) {
    return array.includes('Italy');



}



console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))


//E 

const tenfold = function (array) {
    return array.map(function (number) {
        return number * 10;
    })
}



console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))


//F

const isBelow100 = function (array) {
    return array.every(function (number) {
        return number < 100;
    })

}


console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))





//E
const bigSum = function (array) {
    return array.reduce(function (accu, number) {
        return accu + number;
    });

}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));