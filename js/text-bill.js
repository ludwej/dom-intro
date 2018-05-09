document.addEventListener('DOMContentLoaded', function(){

// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne= document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");


//add an event listener for when the add button is pressed


function textBillTotal(){
 var billTypeEntered = billTypeText.value.trim();
    // ... other code here

    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = textBillTotal.callBillTotal.toFixed(2);
    smsTotalOne.innerHTML = textBillTotal.smsBillTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = textBillTotal.totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
});
