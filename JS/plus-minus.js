
let amountNumber = +document.getElementById("amount_number").textContent;


function plus() {
    amountNumber += 1;
    document.getElementById("amount_number").textContent = amountNumber;
}
document.getElementById("plus").addEventListener("click", plus);

function minus() {
     if (amountNumber > 1) {
        amountNumber -= 1;
        document.getElementById("amount_number").textContent = amountNumber;
    }
}

document.getElementById("minus").addEventListener("click", minus);

