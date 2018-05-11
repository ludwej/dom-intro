
function factory() {


//add an event listener for when e add button is pressed
``
var callsTotal = 0.00;
var smsTotal = 0.00;
var totalCost = 0.00;

var smsCost = 0.00;
var callCost = 0.00;
var warningLevel = 0.00;
var criticalLevel = 0.00;



function totalSetting(){


        if (billItemType === "call"){
            callsTotal += callCost;
          console.log(callsTotal);
        }
        else if (billItemType === "sms"){
            smsTotal += smsCost;
        }
        totalCost = callsTotal + smsTotal;
      }
        // update the correct total


    function getSms() {
        return smsTotal;
      }

    function getCalls() {
      return callsTotal;
    }

    function getTotal() {
      return callsTotal + smsTotal ;
      }

    function smsCostSet(set) {
      smsCost =  parseFloat(set);
    }

    function callCostSet(set) {
      callCost = parseFloat(set);
    }
    function warningLevelSett(set) {
       warningLevel = parseFloat(set);
    }

    function criticalLevelSet(set) {
      criticalLevel = parseFloat(set);

    }
    function getCritical () {
      return criticalLevel;

    }

    function getWarning() {
      return warningLevel ;
    }

    return {
      getSms,
      getCalls,
      getTotal,
      getCritical
      getWarning
      smsCostSett,
      callCostSett,
      warningLevelSett,
      criticalLevelSett,
      totalSetting

    }
}
var factoryF = factory() ;
