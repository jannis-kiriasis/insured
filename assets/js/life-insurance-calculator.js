let salary = document.getElementById("salary").value;
let years = document.getElementById("years").value;

function validateInput() {
    alert('works');
}

function calculate() {

}

// Listen to 'calculate' clicks
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", validateInput);