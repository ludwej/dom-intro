describe('settings-bill', function() {

  it('Update the appropriate smsTotal.', function() {
    var set = settinBill();
    set.setSmsCost(11.00);
    set.updateSetting('sms');
    set.updateSetting('sms');
    set.updateSetting('sms');
    assert.equal(set.getSms(), 33);

  });

  it('Update the appropriate callsTotal.', function() {
    var set = settinBill()
    set.setCallCost(2.75);
    set.updateSetting('call')
    set.updateSetting('call')
    set.updateSetting('call')
    assert.equal(set.getCall(), 8.25);

  });
  it('should calculate total amount of sms&call.', function() {
    var set = settinBill()
    set.setCallCost(2.75);
    set.setSmsCost(0.75);
    set.updateSetting('call')
    set.updateSetting('call')
    set.updateSetting('sms');
    set.updateSetting('sms');
    set.updateSetting('call')
    set.updateSetting('call')
    assert.equal(set.getCall(), 11);

  });
  it('test if reached warning level' , function(){
    var set = settinBill()
    set.updateSetting('call')
    set.updateSetting('sms');
    assert.equal(set.ReachedWarning(),true);
    set.updateSetting('sms');
    set.updateSetting('call')
    set.updateSetting('sms');
    set.updateSetting('sms');
    set.updateSetting('call')
    set.updateSetting('call')
    set.updateSetting('sms');

    assert.equal(set.ReachedWarning(),true);

  });

  it('test if reaches critical level' , function(){
    var set = settinBill()
    set.updateSetting('call')
    set.updateSetting('sms');
    assert.equal(set.ReachedCritical(), true);
    set.updateSetting('sms');
    set.updateSetting('call')
    set.updateSetting('sms');
    set.updateSetting('sms');
    set.updateSetting('call')
    set.updateSetting('call')
    set.updateSetting('sms');
    set.updateSetting('sms');
    set.updateSetting('call')
    set.updateSetting('call')
    set.updateSetting('call')
    set.updateSetting('call')

    assert.equal(set.ReachedCritical(),true );


    });

});
