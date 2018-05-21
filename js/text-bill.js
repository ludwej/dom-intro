

// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne= document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");

addToBillBtn.addEventListener('click', textBillTotal);
//add an event listener for when the add button is pressed
// var totalOne= 0;
var fac = TextBill();

function textBillTotal(){
 var billTypeEntered = billTypeText.value.trim();
    // ... other code here
   fac.smsBillTotal(billTypeEntered);
    fac.callBillTotal(billTypeEntered);
    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = fac.returnCalls().toFixed(2);
    smsTotalOne.innerHTML = fac.returnSms().toFixed(2);
     // totalOne = totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = fac.returnTotal().toFixed(2);

    //color the total based on the criteria
    if (fac.returnTotal() >= 50){
       // adding the danger class will make the text red
         totalOne.classList.add("danger");
         totalOne.classList.remove("warning");
   }
   else if (fac.returnTotal()  >= 30){
       totalOne.classList.add("warning");
       totalOne.classList.remove('danger');

 }
 else{
   totalOne.classList.remove('danger');
   totalOne.classList.remove("warning");
 }
}
