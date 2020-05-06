

let calculateSupply = function (age, amount) {
    x = (365 * amount) * age
    console.log('You will need ' + x + ' beers to last you until the ripe old age ' + age)
}

calculateSupply(30, 2);