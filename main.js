// confirmation  eventHandler

const bookNowBtn = document.getElementById("book-now");
 bookNowBtn.addEventListener("click", function(){
    const bookingSection = document.getElementById("booking-section");
    bookingSection.style.display = "none";
    const confirmSection = document.getElementById("confirm-section");
    confirmSection.style.display = "block"
})

// First class tickets eventHandler 
const fClassPlusBtn = document.getElementById("f-class-btn-plus");
fClassPlusBtn.addEventListener("click", function(){
    const inputNumber = getInputNumber("input");
    

    updateSpanText("subtotal", inputNumber);
    updateSpanText("total", inputNumber);
    updateSpanText("vat-total", vatTotal);

    document.getElementById("input").value = "";
})
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpanText(id, inputNumber){
    const subtotal = document.getElementById(id).innerText;
    const subtotalNumber = parseFloat(subtotal);
 
    const fClassTickets = inputNumber * 150;
    const vat = subtotalNumber / 100;
    const vatTotal = vat * 10;
    const total = fClassTickets + subtotalNumber + vatTotal;
    document.getElementById(id).innerText = total;
}