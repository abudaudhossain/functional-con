// function declaration 
function bringSingara(taka) {
    var singaraPrice = 10;
    var singraQuantity = taka / singaraPrice;
    return singraQuantity;
}

var singaraQuantity = bringSingara(200);
console.log(singaraQuantity);