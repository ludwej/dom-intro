// //get a reference to the calculate button
// var calculateBtn = document.querySelector(".calculateBtn");
//
// //get a reference to the billTotal element
//  var billTotalElement=document.querySelector(".billTotal")
// //get a reference to the billString
// var billStringField =document.querySelector(".billString")
// //create the function that will be called when the calculate button is pressed
function calculateBtnClicked(billString){
    // get the string entered in the textArea

    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
        }

        return billTotal
}
