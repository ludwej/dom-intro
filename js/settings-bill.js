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

function factories(){

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
   function SetCallcost(num){
     callCost = parseFloat(num);
   }

   function SetSmscost(numb) {
    smsCost = parseFloat(numb)
   }

   function SetWarning(numbe) {
    warning = parseFloat(numbe);
   }
   function SetCritical(number){
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
 SetCallcost,
 SetSmscost,
 SetWarning,
 SetCritical,
 GetWarning,
 GetCritical,
 GetCallSett,
 GetSmsSett,
 GetTotallsett,

       }
}

var factorys = factories();

  function updateSettings(){
     factorys.SetCallcost(callCostSettings.value);
     factorys.SetSmscost(smsCostSetting.value);
    factorys.SetWarning(warningLevelSetting.value);
    factorys.SetCritical(criticalLevelSetting.value);
  }



       function settingsBillTotalDom(){
         // get the value entered in the billType textfield
         var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
         if (checkedSettingsBtn){
             var billItemTypeWithSettings = checkedSettingsBtn.value
             // billItemType will be 'call' or 'sms'
             factorys.settingsBillTotal(billItemTypeWithSettings);
         }
        var tot = factorys.GetTotallsett();

        callTotalSettings.innerHTML = factorys.GetCallSett().toFixed(2);
        smsTotalSettings.innerHTML = factorys.GetSmsSett().toFixed(2);;
        TotalSettings.innerHTML = factorys.GetTotallsett().toFixed(2);;

          if (tot >= factorys.GetWarning()){
                  // adding the danger class will make the text red
                  TotalSettings.classList.add("warning");

              }
           if (tot >= factorys.GetCritical()){
                  TotalSettings.classList.add("danger");
              }
              if (tot< factorys.GetCritical()){
                TotalSettings.classList.remove("danger");
              }
              if (tot< factorys.GetWarning()){
                TotalSettings.classList.remove("warning");
              }



    //update the totals that is displayed on the screen.

}


settingAddBtn.addEventListener('click', settingsBillTotalDom);
updateBtn.addEventListener('click',updateSettings);
