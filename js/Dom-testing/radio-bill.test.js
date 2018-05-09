
describe('radioBill', function(){
  it('should return the total amount for a string of calls made', function(){
      var Bill = TextBill();
      Bill.smsBillTotal('sms');
      assert.equal(Bill.returnSms(),0.75);
    });
    it('should return the total amount for a string of calls made', function(){
        var Bill = TextBill();
        Bill.callBillTotal('call');
        Bill.callBillTotal('call');
        Bill.callBillTotal('call');

        assert.equal(Bill.returnCalls(),8.25);
      });
      it('should return the total amount for a string of no  Calls or Smses made', function(){
          var Bill = TextBill();
          Bill.smsBillTotal('');
          Bill.callBillTotal('');
          Bill.smsBillTotal('');

          assert.equal(Bill.returnCalls(),0);
  });
});
