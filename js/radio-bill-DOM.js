var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
var callsTotalTwoElem = document.querySelector(".callTotalTwo");
var  smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var  totalCostTwoElem = document.querySelector(".totalTwo");
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the add button

radioTotalAddBtn.addEventListener('click', radioBillTotal);

var Bill = radioBill();
function radioBillTotal(){
  //To get the bill type to add from the radio button
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeRadio']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
      console.log(billItemType);
      // billItemType will be 'call' or 'sms'
  }

  Bill.callBillTotal(billItemType);
   Bill.smsBillTotal(billItemType);
   //update the totals that is displayed on the screen.
   callsTotalTwoElem.innerHTML = Bill.returnCalls().toFixed(2);
   smsTotalTwoElem.innerHTML = Bill.returnSms().toFixed(2);
    // totalOne = totalCost = callsTotal + smsTotal;
   totalCostTwoElem.innerHTML = Bill.returnTotal().toFixed(2);


    // Bill.smsC(billItemType);
    // Bill.callC(billItemType);
    // var totalCost = Bill.returnTot();
    // callsTotalTwoElem.innerHTML = Bill.getCall().toFixed(2);
    // smsTotalTwoElem.innerHTML = Bill.getSms().toFixed(2);
    // totalCost = Bill.getCall() + Bill.getSms();
    // totalCostTwoElem.innerHTML = totalCost.toFixed(2);
    if (Bill.returnTotal() >= 50){
       // adding the danger class will make the text red
         totalCostTwoElem.classList.add("danger");
         totalCostTwoElem.classList.remove("warning");
   }
   else if (Bill.returnTotal()  >= 20){
       totalCostTwoElem.classList.add("warning");
       totalCostTwoElem.classList.remove('danger');

 }
 else{
   totalCostTwoElem.classList.remove('danger');
   totalCostTwoElem.classList.remove("warning");
 }
 }

//add an event listener for when the add button is pressed
// radioTotalAddBtn.addEventListener('click', radioBillTotal);
