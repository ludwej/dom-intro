var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
  var warningLevelSetting = document.querySelector(".warningLevelSetting");
    var callCostSettings = document.querySelector(".callCostSetting");
      var smsCostSetting = document.querySelector(".smsCostSetting");
        var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

        var callTotalSettings = document.querySelector(".callTotalSettings");
         var smsTotalSettings = document.querySelector(".smsTotalSettings");
          var TotalSettings = document.querySelector(".totalSettings");

//get a reference to the add button
  var settingAddBtn = document.querySelector(".SettingsAddBtn");

//get a reference to the 'Update settings' button
  var updateBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings

function FactoryF(){

   var callSettings =0;
    var  smsSettings =0;
     var totall =0;

    var callCost =0;
      var smsCost =0;
       var warning =0;
        var critical =0;

// create a variables that will keep track of all three totals.
// console.log(TotalSettings);


function settingsBillTotal(billItemTypeWithSettings){
  // update the correct total

    if (billItemTypeWithSettings === "call"){

        callSettings += callCost;
        totall += callCost;

        if (totall > critical){
          var diff = totall - critical;
          callSettings -= diff;
          totall -= diff;

        }

    }


    else if (billItemTypeWithSettings === "sms"){
        smsSettings += smsCost;
        totall += smsCost;

        if (totall > critical){
          var diff = totall - critical;
          smsSettings -= diff;
          totall -= diff;
}

   }
 }


   //setters
   function setClalls(num){
     callCost = parseFloat(num);
   }

   function setSms(numb) {
    smsCost = parseFloat(numb)
   }

   function warningLevelSett(numbe) {
    warning = parseFloat(numbe);
   }
   function crit(number){
    critical = parseFloat(number);
   }

   //getters
   function GetCritical(number){
   return critical;
   }

   function GetWarning() {
     return warning;
   }

   function GetCallSett() {
      return callSettings;
   }

   function GetSmsSett() {
    return smsSettings;
   }

   function GetTotallsett(){
    return callSettings + smsSettings ;
   }


return {
 settingsBillTotal,
 setClalls,
 setSms,
 warningLevelSett,
 crit,
 GetWarning,
 GetCritical,
 GetCallSett,
 GetSmsSett,
 GetTotallsett,

       }
}

var facory = FactoryF();

  function updateSettings(){
     facory.setClalls(callCostSettings.value);
     facory.setSms(smsCostSetting.value);
    facory.warningLevelSett(warningLevelSetting.value);
    facory.crit(criticalLevelSetting.value);
  }



       function settingsBillTotalDom(){
         // get the value entered in the billType textfield
         var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
         if (checkedSettingsBtn){
             var billItemTypeWithSettings = checkedSettingsBtn.value
             // billItemType will be 'call' or 'sms'
             facory.settingsBillTotal(billItemTypeWithSettings);
         }
        var tot = facory.GetTotallsett();

        callTotalSettings.innerHTML = facory.GetCallSett().toFixed(2);
        smsTotalSettings.innerHTML = facory.GetSmsSett().toFixed(2);;
        TotalSettings.innerHTML = facory.GetTotallsett().toFixed(2);;

          if (tot >= facory.GetWarning()){
                  // adding the danger class will make the text red
                  TotalSettings.classList.add("warning");

              }
           if (tot >= facory.GetCritical()){
                  TotalSettings.classList.add("danger");
              }
              if (tot< facory.GetCritical()){
                TotalSettings.classList.remove("danger");
              }
              if (tot< facory.GetWarning()){
                TotalSettings.classList.remove("warning");
              }



    //update the totals that is displayed on the screen.

}


settingAddBtn.addEventListener('click', settingsBillTotalDom);
updateBtn.addEventListener('click',updateSettings);
