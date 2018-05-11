//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
 var billTotalElement=document.querySelector(".billTotal")
//get a reference to the billString
var billStringField =document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(billString){
    // get the string entered in the textArea

//     //split the string
//     var billItems = billString.split(",");
//     // a variable for the total phone bill.
//     var billTotal = 0;
//     //loop over all the bill items
//     for (var i=0;i<billItems.length;i++){
//         var billItem = billItems[i].trim();
//         if (billItem === "call"){
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms"){
//             billTotal += 0.75;
//         }
//         }
//         return billTotal
// }


function inner () {

   var billString = billStringField.value;
   var Bill= calculateBtnClicked(billString);
    //round to two decimals
    var roundedBillTotal = Bill.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
   if (Bill >= 30){
      // adding the danger class will make the text red
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning");
  }
  else if (Bill  >= 20){
      billTotalElement.classList.add("warning");
      billTotalElement.classList.remove('danger');

}
else{
  billTotalElement.classList.remove('danger');
  billTotalElement.classList.remove("warning");
}
}

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', inner);


    // get the string entered in the textArea

    //round to two decimals
