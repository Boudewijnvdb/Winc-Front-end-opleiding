


// intro
let name = prompt('hello what is your name?', []);

alert(`Hey ${name}!`);

let guess = prompt('"Voer een nummer in van 0 tot 25 om te beginnen met raden" ', []);


// random nummer generator
let x = (Math.round(Math.random() * 25 + 1));




let gok = parseInt(guess);


console.log(gok);
console.log(x);





while (gok !== x) {
    alert('Dat is niet correct!');

    let guess = prompt('"Voer opnieuuw een nummer in van 0 tot 25', []);

}

alert('Dat is correct!');



alert('gefeliciteerd je hebt gewonnen');

alert(`dag ${name}!`);











