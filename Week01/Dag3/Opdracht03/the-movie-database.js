let favoMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['puff', 'Jackie', 'living Sneezes']
};

let PrinteMovie = function (movie) {
    x = movie.title
    y = movie.duration
    z = movie.stars

    console.log(x + ' ' + ' lasts for ' + y + ' minutes.' + ' Stars:' + z);
}

PrinteMovie(favoMovie);
