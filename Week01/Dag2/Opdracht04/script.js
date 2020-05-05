const Myage = 19;

if (Myage >= 18 && Myage <= 25) {

    console.log('je krijgt 50% korting!');

} else {

    console.log('sorry geen korting');
}


const name = 'bram';

if (name === 'bram' || name === 'sarah') {
    console.log('gefeliciteerd met 50ste verjaardag, hier is een biertje');
} else {
    console.log('Sorry niet iedereen kan zo heten');
}


const totalAmount = 26;

if (totalAmount > 25 && totalAmount <= 50) {
    console.log('Omdat wij jarig zijn en je meer hebt uitgegeven dan 25 euro krijg je gratis bitterballen');
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log('Omdat wij jarig zijn en je meer hebt uitgegeven dan 50 euro krijg je nachos');
} else if (totalAmount >= 100) {
    console.log('Omdat wij jarig zijn en je meer hebt uitgegeven dan 100 euro krijg je champagne');
} else {
    console.log('fijne avond');
}



