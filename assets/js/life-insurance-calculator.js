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
        btn.setAttribute("onclick", "window.location.href='application-form.html'");
        btn.textContent = "Apply now for this cover";

        //Change calculate-btn color after use
        calculateBtn.removeAttribute("id");
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
    sessionStorage.setItem("salary", salary);
    sessionStorage.setItem("years", years);
    sessionStorage.setItem("result", result);
    
    // If - prevents apply-now from appearing at every 'calculate' click
    if (calculateBtn.innerText !== "Recalculate") {
        showApplyBtn();
    }
}



