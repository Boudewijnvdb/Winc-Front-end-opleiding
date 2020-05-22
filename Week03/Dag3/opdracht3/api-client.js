const API_KEY = "7ae2bf77cac04aef4b77c4494e1032f3"
const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        console.log(`the response of the IPA ${res}`);
        const data = await res.json();
        console.log(`the data is ${data}`)
        return data;
    } catch (error) {
        console.log(error);
    }
}




const newData = async () => {
    const apiUrl = "https://api.themoviedb.org/3/find/tt6105098?api_key=7ae2bf77cac04aef4b77c4494e1032f3&language=en-US&external_source=imdb_id"
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const datas = await res.json();
        console.log(datas);
        return datas;

    } catch (error) {
        console.log(error);
    }
}


const topData = async () => {
    const apiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=7ae2bf77cac04aef4b77c4494e1032f3"
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const topDatas = await res.json();
        console.log(topDatas);
        return topDatas;

    } catch (error) {
        console.log(error);
    }
}

// echt hetzelfde als .then op dezelfde plekken, alleen moet alles ook in een functie die je async doet en ergens anders aanroept (zie script.js)













