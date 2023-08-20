// item name display code
function titleTaker(id) {
    const title = document.getElementById(id);
    const titleValue = title.innerText;
    return titleValue;
}

function itemDisplay(id) {
    const output = titleTaker(id)
    const displayArea = document.getElementById('display-area');
    let count = displayArea.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1}.  ${output}  `;
    displayArea.appendChild(p)
}

// item price calculation
function priceTaker(id) {
    const price = document.getElementById(id);
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);
    return priceNumber;
}
// price calculation;

let totalPrice = 0;
function priceCalculator(id) {
    const productPrice = priceTaker(id);
    totalPrice = totalPrice + productPrice

    // set total price
    const setTotalPrice = document.getElementById('total-price');
    setTotalPrice.innerHTML = `${totalPrice} TK`
    const finalTotal = (totalPrice).toFixed(2);
        const finalTotalArea = document.getElementById('final-total')
        finalTotalArea.innerHTML = `${finalTotal} TK`;


// applyButton
const applyButton = document.getElementById('apply-button')
    if (totalPrice>= 200) {
        applyButton.disabled = false;
        applyButton.classList.add('bg-pink-500')
    }

// modal
const purchaseButton = document.getElementById('purchase');
    if (finalTotal > 0) {
        purchaseButton.disabled = false;
        purchaseButton.classList.add('bg-pink-500')
    }
}

// discount
const applyButton = document.getElementById('apply-button')

applyButton.addEventListener('click',function(){
    const applyInput = document.getElementById('apply-input');
    if (totalPrice >= 200 && applyInput.value === "SELL200") {
        const discount = (totalPrice * 0.2).toFixed(2) ;
        discountTotal =parseFloat(discount)
        const discountArea = document.getElementById('discount-area');
        discountArea.innerHTML = `${discountTotal} TK`

        // final total
        const finalTotal = (totalPrice - discountTotal).toFixed(2);
        const finalTotalArea = document.getElementById('final-total')
        finalTotalArea.innerHTML = `${finalTotal} TK`;
    }
    else{
        const finalTotalArea = document.getElementById('final-total')
        finalTotalArea.innerHTML = `${totalPrice} TK`;
    }
})

//go home
const goHome = document.getElementById('go-home');
goHome.addEventListener('click',function(){
    window.location.herf ="index.html" 
})





