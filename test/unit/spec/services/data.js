'use strict';

describe('Service: data', function () {

  var data;

  beforeEach(function () {

    module('sinjaz');

    inject(function (_data_) {
      data = _data_;
    });

  });


  it('should do something', function () {
    expect(!!data).toBe(true);
  });

});