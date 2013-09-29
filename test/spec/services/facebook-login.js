'use strict';

describe('Service: facebookLogin', function () {

  // load the service's module
  beforeEach(module('angularFacebookApp'));

  // instantiate service
  var facebookLogin;
  beforeEach(inject(function (_facebookLogin_) {
    facebookLogin = _facebookLogin_;
  }));

  it('should do something', function () {
    expect(!!facebookLogin).toBe(true);
  });

});
