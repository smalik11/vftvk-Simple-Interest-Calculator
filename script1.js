let principal = document.getElementById("principal");
let intRate = document.getElementById("int-rate");
let intSlider = document.getElementById("int-slider");
let noOfYears = document.getElementById("duration");
let result = document.getElementById("outcome");
let resultBtn = document.getElementById("outcome-btn");

var interestRate = intRate.value;
intSlider.innerHTML = interestRate + "%";

intRate.oninput = function () {
  intSlider.innerHTML = intRate.value + "%";
};

function compute() {
  let principalAmount = principal.value;
  let interestRate = intRate.value
  
  if (principalAmount <= 0) {
    alert("Please enter a positive number!");
    principal.focus();
  } else {
      let currYear = new Date().getFullYear();
      let year = parseInt(noOfYears.value);
      let yearOfPayment = currYear + year;
      let calculation = Math.floor(principalAmount * (interestRate / 100) * noOfYears.value);
    
      result.innerHTML = `If you deposit
                      <span class="highlight">${principalAmount}</span>,<br/>
                      at an interest rate of
                      <span class="highlight">${interestRate}%</span>.<br/>
                      You will receive an amount of
                      <span class="highlight">${calculation}</span>,<br/>
                      in the year
                      <span class="highlight">${yearOfPayment}</span>`;
  }
}
