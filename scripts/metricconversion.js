let inputNumber = document.querySelector('input')
let meterInputs = document.getElementById('meters-input')
let feetOutputs = document.getElementById('feet-output')
let feetInputs = document.getElementById('feet-input')
let meterOutputs = document.getElementById('meters-output')

inputNumber.addEventListener('input', updateInput);
inputNumber.addEventListener('input', feetOutput);
inputNumber.addEventListener('input', feetInput);
inputNumber.addEventListener('input', meterOutput);


function updateInput(e) {
    meterInputs.textContent = e.target.value;
}

function feetOutput(e) {
    feetOutputs.textContent = (e.target.value * 3.2808).toFixed(4);
}

function feetInput(e) {
    feetInputs.textContent = e.target.value;
}

function meterOutput(e) {
    meterOutputs.textContent = (e.target.value / 3.2808).toFixed(4);
}