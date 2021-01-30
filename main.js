//handle book now
const bookBtn = document.getElementById("book-now");
bookBtn.addEventListener("click", function () {
    const homePage = document.getElementById("home-page");
    homePage.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});


//handle count of ticket 
function handleTicketCount(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true){
        ticketNewCount = ticketCount + 1;
    } 
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculateTotal();
}

// handle calculate total
function calculateTotal() {
    const economyCount = getInputValue("economy");
    const firstClassCount = getInputValue("firstClass");

    const subTotal = economyCount * 100 + firstClassCount * 150;
    document.getElementById("sub-total").innerText = '$' + subTotal;

    const tax = subTotal * 0.1;
    document.getElementById("tax-amount").innerText = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById("grand-total").innerText = '$' + grandTotal;
}

//handle get input value
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}