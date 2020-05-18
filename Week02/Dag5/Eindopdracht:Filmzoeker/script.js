const filmList = document.getElementById("filmLijst");
const radio = document.querySelectorAll('input');

const movieNames = movies.map(mov => mov.Title);
const moviePosters = movies.map(mov => mov.Poster);







const filmLijst = gefilterdeFilms => {
    gefilterdeFilms.forEach(films => {
        let list = document.createElement('li');
        filmList.appendChild(list);
        let movieLink = document.createElement('a');
        movieLink.href = 'http/www.imdb.com/title/' + films.imdbID;
        movieLink.target = '_blank';
        list.appendChild(movieLink);
        let plaat = document.createElement('img');
        plaat.src = films.Poster
        movieLink.appendChild(plaat);
    })
}


filmLijst(movies);


//waarde van knop ophalen 
const ietsdoen = event => {
    const waarde = event.target.value;

    switch (waarde) {
        case 'Batman':
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
            break;
        default:


    }

}



radio.forEach((knoppen) => {
    knoppen.addEventListener('change', ietsdoen);
});



const newMov = movies.filter(n => n.year >= 2014);
const batman = movies.filter(n => n.Title.includes("Batman"));
const princess = movies.filter(n => n.Title.includes("Princess"));
const xmen = movies.filter(n => n.Title.includes("x-Men"));
const avengers = movies.filter(n => n.Title.includes("Avengers"));
