/*
Nama  : Miftah Hasn Hadi Mohtar
NIM   : 121140045
Kelas : RB 
*/
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function calculateResult() {
    var displayValue = document.getElementById("display").value;
    try {
      var result = eval(displayValue);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  
