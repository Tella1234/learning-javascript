let inputNumber = document.querySelector('input')
let meterInputs = document.getElementById('meters-input')
let feetOutputs = document.getElementById('feet-output')
let feetInputs = document.getElementById('feet-input')
let meterOutputs = document.getElementById('meters-output')
let litersInputs = document.getElementById('liters-input')
let gallonsOutputs = document.getElementById('gallons-output')
let gallonsInputs = document.getElementById('gallons-input')
let litersOutputs = document.getElementById('liters-output')
let kgInputs = document.getElementById('kg-input')
let poundsOutputs = document.getElementById('pounds-output')
let poundsInputs = document.getElementById('pounds-input')
let kgOutputs = document.getElementById('kg-output')

inputNumber.addEventListener('input', updateInput);
inputNumber.addEventListener('input', feetOutput);
inputNumber.addEventListener('input', feetInput);
inputNumber.addEventListener('input', meterOutput);
inputNumber.addEventListener('input', literInput);
inputNumber.addEventListener('input', galonOutput);
inputNumber.addEventListener('input', galonInput);
inputNumber.addEventListener('input', literOutput);
inputNumber.addEventListener('input', kgInput);
inputNumber.addEventListener('input', poundsOutput);
inputNumber.addEventListener('input', poundsInput);
inputNumber.addEventListener('input', kgOutput);


function updateInput(e) {
    meterInputs.textContent = e.target.value;
}

function feetOutput(e) {
    feetOutputs.textContent = (e.target.value * 3.2808).toFixed(2);
}

function feetInput(e) {
    feetInputs.textContent = e.target.value;
}

function meterOutput(e) {
    meterOutputs.textContent = (e.target.value / 3.2808).toFixed(2);
}

function literInput(e) {
    litersInputs.textContent = e.target.value;
}

function galonOutput(e) {
    gallonsOutputs.textContent = (e.target.value / 3.7854).toFixed(3);
}

function galonInput(e) {
    gallonsInputs.textContent = e.target.value;
}

function literOutput(e) {
    litersOutputs.textContent = (e.target.value * 3.7854).toFixed(3);
}
function kgInput(e) {
    kgInputs.textContent = e.target.value;
}

function poundsOutput(e) {
    poundsOutputs.textContent = (e.target.value * 2.20462).toFixed(3);
}

function poundsInput(e) {
    poundsInputs.textContent = e.target.value;
}

function kgOutput(e) {
    kgOutputs.textContent = (e.target.value / 2.20462).toFixed(3);
}