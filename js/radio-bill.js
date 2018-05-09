function RadioBill() {


var callTotal=0;
var smsTotal=0;
var totalCost=0;



// function radioBillTotal(){
//     // get the value entered in the billType textfield
//     var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
//   if (checkedRadioBtn){
//       var billItemType = checkedRadioBtn.value
//       // billItemType will be 'call' or 'sms'
//   }
    // update the correct total
  function callBillTotal() {
    if (billItemType === "call"){
        callTotal += 2.75
    }
  }

  function returnCalls(){
    return callsTotal;
  }


  function smsBillTotal() {
    if (billItemType === "sms"){
        smsTotal += 0.75;
    }
  }

  function returnSms(){
    return smsTotal;
  }

  function returnTotal(){
    return totalCost = callsTotal + smsTotal;
  }

  return {
    callBillTotal,
    returnCalls,
    smsBillTotal,
    returnSms,
    returnTotal
}
}
