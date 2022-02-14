function updateNumbar(prodact,price,Incarsing){
    const caseInput = document.getElementById(prodact+'-numbar');
    let productNumber = caseInput.value;
    if(Incarsing == true){
    productNumber = parseInt(productNumber) + 1;
      }
      else if(productNumber > 0){
         productNumber = parseInt(productNumber) - 1;
      }
      caseInput.value = productNumber;
      // update case total
      const caseTotal = document.getElementById(prodact+'-total');
      caseTotal.innerText = productNumber * price;
  calculateTotal()

}
// function all total Number 
function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-numbar');
    const phonNumbar = parseInt(phoneInput.value);
    return phonNumbar;
    }
    function calculateTotal() {
        const phontotal = getInputValue('phon') * 1219;
        const caseTotal = getInputValue('case') * 59;
        const subTotal = phontotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;
        // update all value total 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;
       
    }





// phon increse decrease events 
document.getElementById('phon-plus').addEventListener('click', function(){
    updateNumbar('phon',1219,true);
    
})
document.getElementById('phon-minus').addEventListener('click',function(){
    updateNumbar('phon',1219,false);
})

// handle case increse decrease event for phone covar 
document.getElementById('case-plus').addEventListener('click', function() {
    updateNumbar('case',59,true);   
})
document.getElementById('case-minus').addEventListener('click', function() {
   updateNumbar('case',59,false);   
})