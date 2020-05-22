fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => document.getElementById('api').innerHTML = data)
    .catch(error => {
        console.log(error)
    });




function loadData() {
    document.getElementById('api').innerText = JSON.parse(this.responseText);
}


await res.json()