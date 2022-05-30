
let inputNumber = document.querySelector('input')
let cupBtn = document.getElementById("cup")
let piecesBtn = document.getElementById("pieces")
let refillBtn = document.getElementById("refill")
let chin = document.getElementById("chin")
let chinKg = 100;
chin.innerText = "Chin Chin: " + chinKg + "Kg";

cupBtn.addEventListener("click", function() {
    if (chinKg < 3) {
        chinKg = "You are low on Chin Chin !!! Remaining less than 3";
    } else {
        chinKg -= 3;
    }
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})
piecesBtn.addEventListener("click", function() {
    if (chinKg == 0) {
        chinKg.innerText = "You are out of Chin Chin";
    } else {
        chinKg -= 1;
    }
    
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})
refillBtn.addEventListener("click", function() {
    if (chinKg <=2) {
        chinKg = 100;
    }
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})
inputNumber.addEventListener('input', function(e) {
    if (chinKg < e.target.value) {
        chinKg = "You don't have enough Chin Chin !!!";
    } else {
        chinKg -= e.target.value;
    }
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})