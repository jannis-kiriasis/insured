let salary = 0;
let years = 0;
let result = 0;
let calcApplyBtn = document.getElementById("calculate-apply-btns");
let formSalary = document.getElementById("salary");
let formYears = document.getElementById("years");

// Wait DOM to be loaded then run funtion
document.addEventListener("DOMContentLoaded", function() {
    let currentStage = document.getElementsByTagName("img")[3];
    currentStage.classList.add("verdigris");
});

//round entered Salary
function roundSalary () {
    let formSalaryValue = formSalary.value;
    formSalary.value = Math.round(formSalaryValue);
}

//round entered Years
function roundYears () {
    let formYearsValue = formYears.value;
    formYears.value = Math.round(formYearsValue);
}

formSalary.addEventListener('focusout', roundSalary);
formYears.addEventListener('focusout', roundYears);

// Listen to 'calculate' clicks
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculate);

function showApplyBtn () {
    if (salary !== "" && years !== "") {
        let btn = document.createElement("button");
        btn.setAttribute("id", "apply-now");
        btn.setAttribute("onclick", 
        "window.location.href='application-form.html'");

        btn.textContent = "Apply now for this cover";

        //Change calculate-btn color after use
        calculateBtn.removeAttribute("id");
        calculateBtn.classList.add("back-button");

        calcApplyBtn.insertBefore(btn, calculateBtn);
        calculateBtn.innerText = "Recalculate";
    }
}

function calculate() {
    // Calculate only if fields are blank or 0
    if (formSalary.value !== "" && formYears.value !== "" && 
    formYears.value !== 0 && formYears.value !== 0) 
    {
        salary = document.getElementById("salary").value;
        years = document.getElementById("years").value;
        result = salary * years;

        document.getElementById("life-cover-result").innerText = 
        result + `€ is the amount of cover you need!`;

        sessionStorage.setItem("salary", salary);
        sessionStorage.setItem("years", years);   
        
        // If - prevents apply-now from appearing at every 'calculate' click
        if (calculateBtn.innerText !== "Recalculate") {
            showApplyBtn();
        }

    } else {
        alert("Enter your salary and the years or cover you need!");
        formSalary.style.borderColor="red";
        formYears.style.borderColor="red";
    }
}