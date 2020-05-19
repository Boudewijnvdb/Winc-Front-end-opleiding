const filmList = document.getElementById("filmLijst");
const radio = document.querySelectorAll('input');

<<<<<<< HEAD
const filmLijst = gefilterdeFilms => {
    gefilterdeFilms.forEach(films => {
        let list = document.createElement('li');
        filmList.appendChild(list);
        let movieLink = document.createElement('a');
        movieLink.href = 'http:/www.imdb.com/title/' + films.imdbID;
        list.appendChild(movieLink);
        let plaat = document.createElement('img');
        plaat.src = films.Poster
        movieLink.appendChild(plaat);
    })
}

filmLijst(movies);
=======
const movieNames = movies.map(mov => mov.Title);
const moviePosters = movies.map(mov => mov.Poster);






console.log(movies);

//add titles and images to DOM
const movieListItems = movies.forEach(movie => {
    let poster = movie.Poster;
    let name = movie.Title;

    let list = document.createElement('li');
    list.innerHTML = name;
    filmList.appendChild(list);
    let plaat = document.createElement('img');
    plaat.src = poster;
    filmList.appendChild(plaat);
}

);

>>>>>>> 9c7a2d2bfaed969733d97753ff2fce93d062ba79

//waarde van knop ophalen 
const ietsdoen = event => {
    const waarde = event.target.value;

    switch (waarde) {
        case 'Batman':
<<<<<<< HEAD
            filmList.innerHTML = '';
            filmLijst(batman);
            break;
        case 'Laatste Films':
            filmList.innerHTML = '';
            filmLijst(newMov);
            break;
        case 'Avenger':
            filmList.innerHTML = '';
            filmLijst(avengers);
            break;
        case 'Princess':
            filmList.innerHTML = '';
            filmLijst(princess);
            console.log(waarde);
            break;
        case 'X':
            filmList.innerHTML = '';
            filmLijst(xmen);
            console.log(waarde);
=======

            let avengersFilms = movies.filter(n => n.Title.includes("Avengers"));
            avengersFilms();
            console.log('doe batman');
            break;
        case 'Laatste Films':
            console.log('laatste films');
            break;
        case 'Avenger':

            console.log('doe avengers');
            break;
            avengersMovies();
            break;
        case 'Princess':
            console.log('doe princess');
            break;
        case 'X-Men':
            console.log('doe xmen');
>>>>>>> 9c7a2d2bfaed969733d97753ff2fce93d062ba79
            break;
        default:


    }

}


<<<<<<< HEAD
=======

>>>>>>> 9c7a2d2bfaed969733d97753ff2fce93d062ba79
radio.forEach((knoppen) => {
    knoppen.addEventListener('change', ietsdoen);
});

<<<<<<< HEAD
const newMov = movies.filter(n => n.year >= 2014);
const batman = movies.filter(n => n.Title.includes("Batman"));
const princess = movies.filter(n => n.Title.includes("Princess"));
const xmen = movies.filter(n => n.Title.includes("x-Men"));
const avengers = movies.filter(n => n.Title.includes("Avengers"));
=======


>>>>>>> 9c7a2d2bfaed969733d97753ff2fce93d062ba79



