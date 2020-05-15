const filmList = document.getElementById("filmLijst");
const radio = document.querySelectorAll('input');

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


//waarde van knop ophalen 
const ietsdoen = event => {
    const waarde = event.target.value;

    switch (waarde) {
        case 'Batman':

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
            break;
        default:


    }

}



radio.forEach((knoppen) => {
    knoppen.addEventListener('change', ietsdoen);
});






