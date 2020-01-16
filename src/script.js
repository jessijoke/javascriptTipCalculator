function calculateTip() {
  var billAmt = document.getElementById("billAmt").value;
  var servicequality = document.querySelector('input[name="service"]:checked')
  .value;
  var tipTotal = document.getElementById("tipTotal").value;
  var billTotal = document.getElementById("billTotal").value;

  var total = billAmt * servicequality;
  var Total = parseFloat(billAmt) + parseFloat(total);

  document.getElementById("tipTotal").innerHTML = total.toFixed(2);

  document.getElementById("billTotal").innerHTML = Total.toFixed(2);

  let splitBill;
  if (document.getElementById("billSplit").value > 0) {
    splitBill = Total / document.getElementById("billSplit").value;
    document.getElementById("perPerson").innerHTML = splitBill.toFixed(2);
  } else if (document.getElementById("billSplit").value <= 0) {
    document.getElementById("perPerson").innerHTML = "";
  }
  if (document.getElementById("billAmt").value <= 0) {
    document.getElementById("billTotal").innerHTML = "";
  }
}


document.getElementById("billSplit").addEventListener("keydown", e => {
        if(e.keyCode == 189 || e.keyCode == 190 || e.keyCode == 69) {
            e.preventDefault();
        }
    });

document.getElementById("billAmt").addEventListener("keydown", e => {
  
    if(e.keyCode == 189 || e.keyCode == 69) {
            e.preventDefault();
        }
    });

document.addEventListener("keyup", event => {
  if (document.getElementById("billAmt").value <0) {
    document.getElementById("billAmt").value === 1;
  }
  if (document.getElementById("billSplit").value <0) {
    document.getElementById("billSplit").value === 1;
  }
  
  calculateTip();
  // do something
});

document.addEventListener("click", event => {
  if (document.getElementById("billAmt").value <0) {
    document.getElementById("billAmt").value === 1;
  }
  if (document.getElementById("billSplit").value <0) {
    document.getElementById("billSplit").value === 1;
  }
  calculateTip();
  // do something
});
