function optellen(...numbers) {
    return numbers.reduce((previous, current) => {
        console.log(numbers);
        return previous + current;

    })


}



console.log(optellen(5, 9, 10, 99, 88, 44));



const omzetten = (x, y, z) => {
    return x + y + z;


};


let cijfers = [6, 7, 4];

console.log(omzetten(...cijfers));