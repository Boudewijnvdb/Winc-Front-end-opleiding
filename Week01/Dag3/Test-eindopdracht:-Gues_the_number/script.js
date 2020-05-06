



let name = prompt('hello what is your name?', []);

alert(`Hey ${name}!`);

let guess = prompt('"Voer een nummer in van 0 tot 25 om te beginnen met raden" ', []);




let x = Math.floor(Math.random() * 25) + 1;



while (parseInt(guess) !== x) {
    alert('Dat is niet correct!');

    guess = prompt('"Voer opnieuw een nummer in van 0 tot 25', []);


}



alert('Dat is correct!');



alert('gefeliciteerd je hebt gewonnen');

alert(`dag ${name}!`);










