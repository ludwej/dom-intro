var billItemTypeRadio=document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn=document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill

var callTotalTwo=document.querySelector(".callTotalTwo" );
var smsTotalTwo=document.querySelector(".smsTotalTwo" );
var totalTwo=document.querySelector(".totalTwo");


//add an event listener for when e add button is pressed

var callTotal=0;
var smsTotal=0;
var totalCost=0;



function radioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'
  }
    // update the correct total
    if (billItemType === "call"){
        callTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }

    callTotalTwo.innerHTML = callTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");

    }
    else if (totalCost >= 30){
        totalTwo.classList.add("warning");


    }
    else {
      totalTwo.classList.remove("danger");
      totalTwo.classList.remove("warning");
    }
};

radioBillAddBtn.addEventListener('click', radioBillTotal);
