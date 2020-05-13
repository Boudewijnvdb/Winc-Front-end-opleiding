


//A
const addTheWordCool = (array) => {
    // add your code
    array.push('cool');
    return array;
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]


//B
const AmountOfElementsInArray = (array) => {
    return array.length;
}

console.log(AmountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C

const selectBelgiumFromBenelux = (array) => {
    return array[0];
}


console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxenburg']));


//D


const lastElementInArray = (array) => {
    return array[array.length - 1];
};

console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));


//E

const presidents = ['trump', 'Obama', 'Bush', 'Clinton']

const impeachTrumpSlice = function (array) {
    return array.slice(1, 4);
}

const impeachTrumpSplice = function (array) {
    array.splice(0, 1);
    return array;

}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F

const stringsTogether = function (array) {
    return array.join(' ');
}


console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

//G

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const combineArrays = function (reeks, reek) {
    return reeks.concat(reek);
};


console.log(combineArrays(array1, array2));