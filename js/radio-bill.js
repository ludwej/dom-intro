function RadioBill(){
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var lastTotal = 0;

  function smsCost(billItemType){
    if (billItemType === "sms"){
        smsTotalTwo += 0.75;
    }
    return smsTotalTwo;
  }
    // update the correct total
    function callCost(billItemType){
      if (billItemType === "call"){
          callsTotalTwo += 2.75
      }
    }

    function smsValues(){
      return smsTotalTwo.toFixed(2);
    }

    function callsValues(){
      return callsTotalTwo.toFixed(2);
    }

    function totalCost(){
      return lastTotal =(callsTotalTwo + smsTotalTwo).toFixed(2);
    }

    return{
    //  forValue,
      smsCost,
      callCost,
      smsValues,
      callsValues,
      callsValues,
      totalCost,
      RadioBill
    }

}

var Bill = RadioBill();
