const table = document.querySelector('.table');


let inputNumberRed = +document.querySelector('.inputNumberRed').value;
const inputPriceRed = +document.querySelector('.inputPriceRed').value;
const totalCostRed = document.querySelector('.totalCostRed');


const inputNumberBlue = +document.querySelector('.inputNumberBlue').value;
const inputPriceBlue = +document.querySelector('.inputPriceBlue').value;
const totalCostBlue = document.querySelector('.totalCostBlue')

const inputNumberСolorless = +document.querySelector('.inputNumberСolorless').value;
const inputPriceColorless = +document.querySelector('.inputPriceColorless').value;
const totalCostColorless = document.querySelector('.totalCostColorless')

const totalCost = document.querySelector('.totalCost');

calculateCostRed()
calculateCostBlue()
calculateCostСolorless()
calculateCost()


function calculateCostRed () {
    let sum;
    if (typeof(inputNumberRed) === 'number' && typeof(inputPriceRed) === 'number') {
        sum = inputNumberRed * inputPriceRed
    } else {
        alert('Введите корректное число!')
    }
    return totalCostRed.innerHTML = sum;
}

function calculateCostBlue () {
    let sum;
    if (typeof(inputNumberBlue) === 'number' && typeof(inputPriceBlue) === 'number') {
        sum = inputNumberBlue * inputPriceBlue
    } else {
        alert('Введите корректное число!')
    }
    return totalCostBlue.innerHTML = sum;
}

function calculateCostСolorless () {
    let sum;
    if (typeof(inputNumberСolorless) === 'number' && typeof(inputPriceColorless) === 'number') {
        sum = inputNumberСolorless * inputPriceColorless
    } else {
        alert('Введите корректное число!')
    }
    return totalCostColorless.innerHTML = sum;
}

function calculateCost () {
    let sum;

    sum = calculateCostRed() + calculateCostBlue() + calculateCostСolorless();

    return totalCost.innerHTML = +sum;
}



