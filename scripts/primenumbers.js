let output = document.getElementById("output")
let inputNumber = document.querySelector("input");

inputNumber.addEventListener("input", function(e) {
    inputValue = e.target.value
})

take.addEventListener('click', function() {
    // check if number is equal to 1
    if (inputValue == 1) {
        output.innerText= "1 is neither prime nor composite number.";
    } else if (inputValue > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < inputValue; i++) {
            if ((inputValue % i) == 0) {
                output.innerText= inputValue + " is not a Prime Number";
                break;
            } else {
                output.innerText= inputValue + " is a Prime Number";
            }
        }
    } else {
        output.innerText= inputValue + " is Negative or zero!!! Enter a Positive Number"
    }
    console.log(inputValue % 2)
})
