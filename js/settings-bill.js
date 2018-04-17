// get a reference to the sms or call radio buttons
var billItemTypeWithSettings=document.querySelector('billItemTypeWithSettings');
// get refences to all the settings fields
var callTotalSettings=document.querySelector('.callTotalSettings');
var smsTotalSettings=document.querySelector('.smsTotalSettings');
var totalSettings=document.querySelector('.totalSettings');
//get a reference to the add button
var BillAddBtn=document.querySelector('.BillAddBtn');
//get a reference to the 'Update settings' button
var updateSettings=document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
var smsCostSetting=document.querySelector('.smsCostSetting');
var callCostSetting=document.querySelector('.callCostSetting');
var warningLevelSetting=document.querySelector('.warningLevelSetting');
var criticalLevelSettingl=document.querySelector('.criticalLevelSetting');


var smsCost= 0;
var callCost= 0;
var  warningLevel= 0;
var criticalLevel= 0;

// create a variables that will keep track of all three totals.
var call = 0;
var sms= 0;
var total= 0;


//add an event listener for when the 'Update settings' button is pressed


function update() {
  smsCost=parseFloat(smsCostSetting.value)
  callCost=parseFloat(callCostSetting.value)
  warningLevel=parseFloat(warningLevel.value)
  criticalLevel=parseFloat(criticalLevel.value)zzz

}





updateSettings.addEventListener('click', update);

function Billbtn(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'

  // get the value entered in the billType textfield

if (total) {

} else {

}
  if(billItemType === "call"){
      call += callCost;
  }
  else if(billItemType === "sms"){
      sms += smsCost;
  }
}

  callCostSetting.innerHTML = call.toFixed(2);
  smsCostSetting.innerHTML = sms.toFixed(2);
   total = call + sms;
totalSettings.innerHTML = total.toFixed(2);


  if (totalCost >= 30){
     // adding the danger class will make the text red
       totalTwo.classList.add("danger");
 }
 else if (totalCost  >= 20){
    totalTwo.classList.add("warning");

}



};

BillAddBtn.addEventListener('click', Billbtn);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
