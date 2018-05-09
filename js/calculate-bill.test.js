describe('Calculate Bill' , function(){
    it('should calculate the total amount of calls' , function(){
        assert.equal(calculateBtnClicked('call,call'), '2.75')

});
  it('should total amount of calls and smses' , function(){
    assert.equal(calculateBtnClicked('call,call,sms,sms,call'), '9.75')
});
it('should total amount of smses' , function(){
    assert.equal(calculateBtnClicked('sms,sms,sms,sms'),3.00)
});
});
