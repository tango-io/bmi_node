var bmi = require('../lib/bmi');

exports.bmi = function(test){
  test.equal(bmi.bmi(), "Error! need weight and height");
  bmi.weight(80,'k');
  bmi.height(1.7,'m');
  test.equal(bmi.bmi(), 27.68166089965398);
  test.done();
}

exports.weight = function (test){
  test.equal(bmi.weight(80,'k'), 80);
  test.equal(bmi.weight(80,'p'), 36.287389600000004);
  test.equal(bmi.weight(80,'f'), "Error! 'k' or 'p'");
  test.equal(bmi.weight(80), "Error! 'k' or 'p'");
  test.done();
}

exports.height = function (test){
  test.equal(bmi.height(1.7,'m'), 1.7);
  test.equal(bmi.height(1.7,'i'), 0.043179999999999996);
  test.equal(bmi.height(1.7,'f'), "Error! 'm' or 'i'");
  test.equal(bmi.height(1.7), "Error! 'm' or 'i'");
  test.done();
}

exports.prime = function (test){
  bmi.weight(80,'k');
  bmi.height(1.7,'m');
  test.equal(bmi.prime(), 1.1072664359861593);
  test.done();
}

exports.prcnt = function (test){
  bmi.weight(80,'k');
  bmi.height(1.7,'m');
  bmi.bmi();
  bmi.prime();
  test.equal(bmi.prcnt(), 10.726643598615926);
  test.done();
}



