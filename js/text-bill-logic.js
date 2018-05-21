
function TextBill(){

  var callsTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

function callBillTotal(billText){
    if (billText === "call"){
        callsTotal += 2.75
  }
}

function smsBillTotal(billText){
    if (billText === "sms"){
        smsTotal += 0.75;
  }
}

function returnCalls(){
  return callsTotal;
}

function returnSms(){
  return smsTotal;
}
function returnTotal(){
  return totalCost = callsTotal + smsTotal;
}

  return {
    TextBill,
    callBillTotal,
    smsBillTotal,
    returnCalls,
    returnSms,
    returnTotal
}
}
