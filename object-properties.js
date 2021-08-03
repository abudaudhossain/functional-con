var myComputer = {
    name : "Pavilion",
    price : 61000,
    brand : 'HP',
    Storage : '1tb',
    color : 'silver',
    processor : 'intel i5'   
};

// read the Object Value  

console.log(myComputer);
var myComputerPrice = myComputer.price;
var brand = 'brand';
console.log('Computer Price: ', myComputerPrice);
console.log('Computer Brand: ', myComputer['brand']);
console.log('Computer Brand: ', myComputer[brand]);
console.log('Computer color: ', myComputer.color);

// set the object value

myComputer.price = 55000;
myComputer['Storage'] = '2tb';
myComputer[brand] = 'Dell';
console.log(myComputer);

// add the properties 
myComputer['ram'] = '8gb';

console.log(myComputer);