let salary = 0;
let years = 0;
let result = 0;
let calcApplyBtn = document.getElementById("calculate-apply-btns");

// Listen to 'calculate' clicks
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculate);

function showApplyBtn () {
    if (salary !== "" && years !== "") {
        let btn = document.createElement("button");
        btn.setAttribute("id", "apply-now");
        btn.textContent = "Apply now for this cover";
        calculateBtn.classList.add("back-button");
        calcApplyBtn.insertBefore(btn, calculateBtn);
        calculateBtn.innerText = "Recalculate";
    }
}

function calculate() {
    salary = document.getElementById("salary").value;
    years = document.getElementById("years").value;
    result = salary * years;
    document.getElementById("life-cover-result").innerText = result + `€ is the amount of cover you need!`;
    showApplyBtn();
}



