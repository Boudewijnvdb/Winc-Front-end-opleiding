console.log('hello world');


let knop = document.getElementById('myButton');

let knop2 = document.getElementById('myButton2');

let lichaam = document.querySelector(".blue-background")

knop.addEventListener('click', function () {
    alert('button clicked');
});


knop2.addEventListener('click', function () {
    lichaam.classList.toggle("red-background");
});

