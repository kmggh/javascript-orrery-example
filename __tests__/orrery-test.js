jest.dontMock('../orrery');

describe('Planet period', function() {
  it('Jupiter with orbital radius 5.0  has a period 11.18', function() {
    var orreryjs = require('../orrery');
    var aPlanet = new orreryjs.Planet('Jupiter', 5.0, 0.0);
    var aPeriod = aPlanet.period();
    expect(aPeriod).toBeCloseTo(11.18, 0.01);
  });
});

describe('Planet step', function() {
  it('Jupiter with orbital radius 5.0 and step 1.0 has pos 8.5.', function() {
    var orreryjs = require('../orrery');
    var aPlanet = new orreryjs.Planet('Jupiter', 5.0, 0.0);
    aPlanet.step(1.0)
    expect(aPlanet.posAngle).toBeCloseTo(32.20, 0.01);
  });
});

describe('Planet toStr', function() {
  it('Jupiter with orbital radius 5.0 and step 1.0 toStr', function() {
    var orreryjs = require('../orrery');
    var aPlanet = new orreryjs.Planet('Jupiter', 5.0, 0.0);
    expect(aPlanet.toStr()).toBe('Jupiter rad: 5.00 per: 11.18 at: 0.00');
  });
});

describe('Orrery toStr', function() {
  it('Orrery with Jupiter toStr', function() {
    var orreryjs = require('../orrery');
    var aPlanet = new orreryjs.Planet('Jupiter', 5.0, 0.0);
    var anOrrery = new orreryjs.Orrery();
    anOrrery.addPlanet(aPlanet);
    expect(anOrrery.toStr()).toBe(
      'Jupiter rad: 5.00 per: 11.18 at: 0.00<br>\n');
  });
});

describe('Orrery step', function() {
  it('Orrery with Jupiter toStr', function() {
    var orreryjs = require('../orrery');
    var aPlanet = new orreryjs.Planet('Jupiter', 5.0, 0.0);
    var anOrrery = new orreryjs.Orrery();
    anOrrery.addPlanet(aPlanet);

    anOrrery.step(1.0);
    expect(anOrrery.toStr()).toBe(
      'Jupiter rad: 5.00 per: 11.18 at: 32.20<br>\n');
  });
});

