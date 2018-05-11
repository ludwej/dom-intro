
describe('radioBill', function(){
  it('should return the total amount for a string of calls made', function(){
    var radio = RadioBill();
      radio.callCost('call');
      assert.equal(radio.callsValues(),2.75);
    });
      it('should return the total amount for a string of calls made', function(){
          var radio =RadioBill ();
          radio.smsCost('sms');
          radio.smsCost('sms');
          radio.smsCost('sms');

          assert.equal(radio.smsValues(),2.25);
        });

  });
