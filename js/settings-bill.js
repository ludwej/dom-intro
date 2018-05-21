// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var settingsBillAddBtn = document.querySelector(".BillAddBtn");

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");
// console.log(callsTotalElem.innerHTML);



// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var TotalSettings = document.querySelector(".totalSettings");

// console.log(TotalSettings);

function updateSettings() {
  settingBill.setCallCost(callCostSettings.value);
  settingBill.setSmsCost(smsCostSetting.value);
  settingBill.setWarning(warningLevelSetting.value);
  settingBill.setCritical(criticalLevelSetting.value);
}


function settingsBillTotal() {
  //var billItemTypeWithSettings = checkedSettingsBtn.value
if( settingBill.getTotals()<settingBill.getCritical()){
  var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedSettingsBtn) {
    settingBill.updateSetting(checkedSettingsBtn.value);

    callTotalSettings.innerHTML = settingBill.getCall().toFixed(2);
    smsTotalSettings.innerHTML = settingBill.getSms().toFixed(2);
    TotalSettings.innerHTML = settingBill.getTotals().toFixed(2);


    if (settingBill.getTotals() >= settingBill.getWarning()) {
      // adding the danger class will make the text red
      TotalSettings.classList.add("warning");

    }
    if (settingBill.getTotals() >= settingBill.getCritical()) {
      TotalSettings.classList.add("danger");
    }
    if (settingBill.getTotals() < settingBill.getCritical()) {
      TotalSettings.classList.remove("danger");
    }
    if (settingBill.getTotals() < settingBill.getWarning()) {
      TotalSettings.classList.remove("warning");
    }
    // billItemType will be 'call' or 'sms'
  }
}
  // get the value entered in the billType textfield

}


//update the totals that is displayed on the screen.


settingsBillAddBtn.addEventListener('click', settingsBillTotal);
updateSettingsBtn.addEventListener('click', updateSettings);
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
