// get a reference to the sms or call radio buttons
var billItemTypeRadio=document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtn=document.querySelector('.radioBillAddBtn');
var billTypeEntered=document.querySelector('.billTypeEntered');

var smsTotalTwo=document.querySelector('.smsTotalTwo');
var callTotalTwo=document.querySelector('.callTotalTwo');
var totalTwo=document.querySelector('.totalTwo');

//create a variable that will keep track of the total bill
var smsTotal = 0;
var callTotal = 0;
var total = 0;
//add an event listener for when the add button is pressed
function radioButton(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'

  // get the value entered in the billType textfield

  // update the correct total
  if(billItemType === "call"){
      callTotal += 2.75;
  }
  else if(billItemType === "sms"){
      smsTotal += 0.75;
  }
}

  callTotalTwo.innerHTML = callTotal.toFixed(2);
  smsTotalTwo.innerHTML = smsTotal.toFixed(2);
   totalCost = callTotal + smsTotal;
  totalTwo.innerHTML = totalCost.toFixed(2);


  if (totalCost>=50){
     // adding the danger class will make the text red
       totalTwo.classList.add("danger");
 }
 else if (totalCost>=30){
    totalTwo.classList.add("warning");

}



};




  radioBillAddBtn.addEventListener('click', radioButton);





//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
