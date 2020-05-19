

const huiswerkMaken = (vak, callback) => {

    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);


    setTimeout(() => {
        callback();
    }, 3000);


};


const KlaarMetHuiswerk = () => {
    console.log("Kijk paps/mams, ik ben klaar met mijn huiswerk");
};


huiswerkMaken("wiskunde", KlaarMetHuiswerk);












const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);


// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();





const testNum = num => {
    return new Promise((resolve, reject) => {

        if (num > 10) {
            resolve(num + 'is greater than 10')
        } else {
            reject(num + 'is less than 10')
        }





    });



};







testNum(2)
    .then(resolved => console.log(resolved))
    .catch(reject => console.log(reject));





