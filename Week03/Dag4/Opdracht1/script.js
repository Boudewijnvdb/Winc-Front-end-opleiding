const landenKnop = document.getElementById("button1");
const SteenBokKnop = document.getElementById("button2");
const creditKnop = document.getElementById("button3");

const dataList = document.getElementById("lijst");



const ietsDoenLanden = function () {
    randomPersonData.forEach(data => {
        let list = document.createElement('li');
        dataList.appendChild(list);
        list.innerHTML = data.region;
    })
}




const ietsDoenVrouwen = function () {
    oudeV.forEach(data => {
        let list = document.createElement('li');
        dataList.appendChild(list);
        list.innerHTML = `${data.name} ${data.surname}`;




    })
}



const ietsLeegMaken = function () {
    dataList.innerHTML = '';
    ietsDoenVrouwen();


}


const ietsLeegMaken2 = function () {
    dataList.innerHTML = '';
    ietsDoenLanden();


}


//vrouwen
const women = randomPersonData.filter((v) => {
    return v.gender === 'female'

})

const oudeV = women.filter(n => n.age > 30);


const volwassen = randomPersonData.filter(n => n.age > 18);


console.log(volwassen);



const credit = volwassen.filter(ex => ex.credit_card.expiration.includes("20"));

console.log(credit);



//knoppen
SteenBokKnop.addEventListener('click', ietsLeegMaken);
landenKnop.addEventListener('click', ietsLeegMaken2);
creditKnop.addEventListener('click', ietsLeegMaken3);













