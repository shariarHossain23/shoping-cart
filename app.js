function updateProduct(product,price,issTrue){
    const productInput = document.getElementById(product +"-number");
    let productNumber = productInput.value;
    if(issTrue == true){
        productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1;
    }
    productInput.value = productNumber;
    const total = productNumber * price;

    // show html
    document.getElementById(product+"-total").innerText = total
    totalCalculation()
}
// 
function getInput(product){
    const productInputNumber = document.getElementById(product +"-number");
    const productCurrent = parseInt(productInputNumber.value);
    return productCurrent;
}

function totalCalculation(){
    const phoneInput = getInput("phone") * 1219;
    const caseInput = getInput("case")* 59
    const subTotal = phoneInput + caseInput;
    const tax = subTotal * .10;
    const grandTotal = subTotal + tax;

    //  show html 
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("grand-total").innerText = grandTotal;
}


// phone price
document.getElementById("phone-increase").addEventListener("click",function(){
    updateProduct("phone",1219,true)
})
document.getElementById("phone-decrease").addEventListener("click",function(){
    updateProduct("phone",1219,false)
})
//  case price 
document.getElementById("case-increase").addEventListener("click",function(){
    updateProduct("case",59,true)
})
document.getElementById("case-decrease").addEventListener("click",function(){
    updateProduct("case",59,false)
})