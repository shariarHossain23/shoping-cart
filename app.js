function updateProduct(product,issTrue){
    const productInput = document.getElementById(product +"-number");
    let productNumber = productInput.value;
    if(issTrue == true){
        productNumber = parseInt(productNumber) +1;
        console.log(productNumber)
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1;
    }
    productInput.value = productNumber;
    const total = productNumber * 59;

    // show html
    document.getElementById(product+"-total").innerText = total
}
// phone price

//  case price 
document.getElementById("case-increase").addEventListener("click",function(){
    updateProduct("case",true)
})
document.getElementById("case-decrease").addEventListener("click",function(){
    updateProduct("case",false)
})