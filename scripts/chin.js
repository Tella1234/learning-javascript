
let take = document.getElementById("take")
let inputNumber = document.querySelector("input");
let cupBtn = document.getElementById("cup")
let piecesBtn = document.getElementById("pieces")
let refillBtn = document.getElementById("refill")
let chin = document.getElementById("chin")
let chinKg = 100;
chin.innerText = "Chin Chin: " + chinKg + "Kg";

cupBtn.addEventListener("click", function() {
    if (chinKg < 3) {
        alert("You are low on Chin Chin !!! Remaining less than 3Kg");
    } else {
        chinKg -= 3;
    }
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})

piecesBtn.addEventListener("click", function() {
    if (chinKg == 0) {
        alert("You are out of Chin Chin");
    } else {
        chinKg -= 1;
    }
    
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})

refillBtn.addEventListener("click", function() {
    if (chinKg <= 20) {
        chinKg = 100;
    } else {
        alert("You still have enough Chin Chin")
    }
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})

inputNumber.addEventListener("input", function(e) {
    inputValue = e.target.value
})

take.addEventListener('click', function() {
    if (chinKg < inputValue) {
        alert("You don't have enough Chin Chin !!!");
    } else if (chinKg > inputValue) {
        chinKg -= inputValue;
    }
    chin.innerText = "Chin Chin: " + chinKg + "Kg";
})
