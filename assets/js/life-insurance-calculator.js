let salary = 0;
let years = 0;
let result = 0;

function validateInput() {
    salary = document.getElementById("salary").value;
    years = document.getElementById("years").value;
    calculate();
}

function calculate() {
    result = salary * years;
    document.getElementById("life-cover-result").innerText = result;
}

// Listen to 'calculate' clicks
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", validateInput);