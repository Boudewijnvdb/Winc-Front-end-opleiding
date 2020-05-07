



let name = prompt('hello what is your name?', []);

alert(`Hey ${name}!`);

let guess = prompt('"Voer een nummer in van 0 tot 25 om te beginnen met raden" ', []);




let x = Math.floor(Math.random() * 10) + 1;

let kansen = 0

while (parseInt(guess) !== x && kansen < 5) {
    alert('Dat is niet correct!');
    kansen++;
    guess = prompt('"Voer opnieuuw een nummer in van 0 tot 25', []);


}

if (parseInt(guess) === x) {
    alert('Dat is correct!');
    alert('gefeliciteerd je hebt gewonnen');
    alert(`dag ${name}!`);
} else {
    alert('helaas teveel pogingen');
}






