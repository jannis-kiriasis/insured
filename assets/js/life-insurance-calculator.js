let salary = 0;
let years = 0;
let result = 0;

function calculate() {
    salary = document.getElementById("salary").value;
    years = document.getElementById("years").value;
    result = salary * years;
    document.getElementById("life-cover-result").innerText = result + `€ is the amount of cover you need!`;
}

// Listen to 'calculate' clicks
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculate);