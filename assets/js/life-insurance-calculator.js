let salary = 0;
let years = 0;
let result = 0;
let calcApplyBtn = document.getElementById("calculate-apply-btns");

function showApplyBtn () {

    if (salary !== "" && years !== "") {
        let btn = document.createElement("button");
        btn.setAttribute("class", "back-button");
        btn.textContent = "Apply now";
        calcApplyBtn.appendChild(btn);
    }
}

function calculate() {
    salary = document.getElementById("salary").value;
    years = document.getElementById("years").value;
    result = salary * years;
    document.getElementById("life-cover-result").innerText = result + `€ is the amount of cover you need!`;
    showApplyBtn();
}

// Listen to 'calculate' clicks
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculate);

