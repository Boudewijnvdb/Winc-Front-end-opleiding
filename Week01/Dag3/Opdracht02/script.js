//deel A

/*
make sandwhich
   Get one slice of Bread 
   add meat
   put a slice on top

   */



//deel B
function makeSandWich(meat) {
    console.log('get one slice of bread' + ' ' + 'add' + ' ' + meat + ' ' + ' and put a slice on top');
}



makeSandWich('salami');

// function declaration
function makeSandWich(topping) {
    console.log('there you go, a sandwich with' + ' ' + topping);
}


// function call
makeSandWich('cheese');
makeSandWich('peanutbutter');



// deel C

function calculateDiscountedPrice(totalAmount, discount) {
    return totalAmount - discount;
}


console.log(Math.round(calculateDiscountedPrice(20, 2.77)));


// deel D
function calculateDiscountedPrices(totalAmount, discount) {
    if (totalAmount > 25) {
        return totalAmount - discount;
    } else {
        return totalAmount;
    }

}


console.log(Math.round(calculateDiscountedPrices(26, 2)));

