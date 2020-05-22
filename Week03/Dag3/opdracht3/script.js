const doSomethingWithData = async function () {
    const data = await getData();
    console.log(data);

    data.genres.forEach(genre => {
        const item = document.createElement('li');
        const genreLijst = document.getElementById('lijst');
        item.innerHTML = genre.name
        genreLijst.appendChild(item);



    })

}



doSomethingWithData();





const doSomethingWithDataLion = async function () {
    const Ldata = await newData();
    console.log(Ldata);

    Ldata.movie_results.forEach(movieRes => {
        const item = document.createElement('li');
        const genreLijst = document.getElementById('favo');
        item.innerHTML = movieRes.title
        genreLijst.appendChild(item);



    })

}



doSomethingWithDataLion();




const doSomethingWithTopData = async function () {
    const topperdata = await topData();
    console.log(topperdata);

    topperdata.results.forEach(movieResTop => {
        const item = document.createElement('li');
        const genreLijst = document.getElementById('top');
        item.innerHTML = movieResTop.title
        genreLijst.appendChild(item);



    })

}



doSomethingWithTopData();