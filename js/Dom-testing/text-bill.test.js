
describe('The text-bill widget Test', function(){
  it('should return the total amount for a string of calls made', function(){
      var amaCall = TextBill();
      amaCall.callBillTotal('call');
      amaCall.callBillTotal('call');
      assert.equal(amaCall.returnCalls(),5.5);
    });
    it('should return the total amount for a string of sms made', function(){
        var amaCall = TextBill();
        amaCall.smsBillTotal('sms');
        amaCall.smsBillTotal('sms');
        amaCall.smsBillTotal('sms');

        assert.equal(amaCall.returnSms(),2.25);
      });
      it('should return the total amount for a no string of call/sms made', function(){
        var noString = TextBill();
        noString.callBillTotal('');
        noString.smsBillTotal('');
        assert.equal(noString.returnCalls(),0);
        });


});
