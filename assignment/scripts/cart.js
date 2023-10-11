console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable basket that is equal to []
let basket = [];

// Create a function named addItem that takes an input parameter for a string item
// This function also will add a new item to the basket array and return true if item was added
function addItem(item) {
    basket.push(item);
    return true;

};
console.log(`Basket is: ${basket}`);
console.log('Adding Blackberries:', addItem('Blackberries'));
console.log('Adding Delice de Bourgogne:', addItem('Delice de Bourgogne'));
console.log('Adding Salami:', addItem('Salami'));
console.log('Adding Crackers:', addItem('Crackers'));
console.log('Adding Wine:', addItem('Wine'));
console.log(`Basket is now ${basket}`);

// Create a function named listItems that will loop over the items in our basket.
function listItems() {
    for (let i = 0; i <= basket.length -1; i++) {
        console.log(basket[i]);
    }

};
listItems();
console.log('Inside the listitems function:', basket.length);

// Create a function named empty that should rest the basket to an empty array.










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
