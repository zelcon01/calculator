//assignment Code
var generateBTN = document.querySelector("#generate");


function calculationandresult() {
  var calculation = calculatenumbers();
  var result = document.querySelector("#result");

  result.value = calculation;

}

function calculatenumbers () {
  
  var numberselection1 = window.prompt("which is your first number?");
  if(isNaN(numberselection1)) {
    window.alert("you must pick a number.");
    return;
  } 

  var firstnumber = parseFloat (numberselection1);

  var numberselection2 = window.prompt("which is your second number?");
  if(isNaN(numberselection2)) {
    window.alert ("you must pick a number.");
    return;
  } 

  var secondnumber = parseFloat (numberselection2);

  var calcaddition = window.confirm("Click OK to use addition");
  if (calcaddition) {
    return firstnumber + secondnumber;
  }

  var calcsubtraction = window.confirm("Click OK to use subtraction");
  if (calcsubtraction) {
    return firstnumber - secondnumber;
}

  var calcmultiplication = window.confirm("Click OK to use multiplication");
  if (calcmultiplication) {
    return firstnumber * secondnumber;
}

  var calcdivision = window.confirm("Click OK to use division");
  if (calcdivision) {
    return firstnumber / secondnumber;
}

if (!calcaddition && !calcsubtraction && !calcmultiplication && !calcdivision) {
    window.alert ("you must choose a method of calculation");
    return;
  }

}


// Add event listener to generate button
generateBTN.addEventListener('click', calculationandresult);
