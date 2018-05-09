
describe('The text-bill widget Test', function(){
  it('should return the total amount for a string of calls made', function(){
      var amaCall = TextBill();
      amaCall.callBillTotal('call');
      assert.equal(amaCall.returnCalls(),2.75);
    });
    it('should return the total amount for a string of sms made', function(){
        var amaCall = TextBill();
        amaCall.smsBillTotal('sms');
        amaCall.smsBillTotal('sms');
        amaCall.smsBillTotal('sms');

        assert.equal(amaCall.returnSms(),2.25);
      });
      it('should return the total amount for a string of no  Calls or Smses made', function(){
          var amaCall = TextBill();
          amaCall.smsBillTotal('');
          amaCall.callBillTotal('');
          amaCall.smsBillTotal('');

          assert.equal(amaCall.returnSms(),0);
  });
});
