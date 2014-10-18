// An orrery in Javascript.
// Fri 2014-02-21 15:23:02 -0500
// Copyright (C) 2014 by Ken Guyton.  All Rights Reserved.

/**
 * A planet object with a name, orbital radius in astronomical units
 * and position angle in degrees.
 */
function Planet(name, radius, posAngle) {
  'use strict';
  this.name = name;
  this.radius = radius;
  this.posAngle = posAngle;
}

/**
 * Convert the planet to a string.
 */
Planet.prototype.toStr = function () {
  'use strict';
  return this.name + ' rad: ' + this.radius.toFixed(2) +
      ' per: ' + this.period().toFixed(2) +
      ' at: ' + this.posAngle.toFixed(2);
};

/**
 * Compute the period of the planet.
 *
 * This is where the astronomy happens since the period is from Kepler's
 * third law.  The returned value is in years.
 */
Planet.prototype.period = function () {
  'use strict';
  return Math.pow(this.radius, 1.5);
};

/**
 * Advance the planet along its orbit for deltaTime years.
 *
 * The deltaTime can be a fraction of a year.  This changes the planet's
 * posAngle.
 */
Planet.prototype.step = function (deltaTime) {
  'use strict';
  this.posAngle += (360.0 / this.period() * deltaTime);
  this.posAngle = this.posAngle % 360.0;
};

/**
 * A container for several planets, like a solar system.
 */
function Orrery() {
  'use strict';
  this.planets = [];
  this.total_time = 0.0;
}

/**
 * Advance all planets along their orbits for deltaTime years.
 *
 * The deltaTime can be a fraction of a year.  This changes all of the
 * planets' posAngles.
 */
Orrery.prototype.step = function (deltaTime) {
  'use strict';
  var planetsLen = this.planets.length, i;

  for (i = 0; i < planetsLen; i += 1) {
    this.planets[i].step(deltaTime);
  }

  this.total_time += deltaTime;
};

/**
 * Add a planet to the orrery.
 */
Orrery.prototype.addPlanet = function (planet) {
  'use strict';
  this.planets.push(planet);
};

/**
 * Convert the orrery to a string for output.
 *
 * Returns a string with <br> at the end of each line (for each planet).
 */
Orrery.prototype.toStr = function () {
  'use strict';
  var outStr, i;

  outStr = '';
  for (i = 0; i < this.planets.length; i += 1) {
    outStr += this.planets[i].toStr() + '<br>\n';
  }

  return outStr;
};

/**
 * Run the orrery for a given step size and number of steps.
 *
 * Input comes from a document form.
 */
function runOrrery() {
  'use strict';

  var stepStr, countStr, step, count, i, outputStr, orrery,
    mercury, earth, jupiter, neptune;

  mercury = new Planet('Mercury', 0.39, 0.0);
  earth = new Planet('Earth', 1.0, 0.0);
  jupiter = new Planet('Jupiter', 5.0, 0.0);
  neptune = new Planet('Neptune', 30.1, 0.0);

  stepStr = document.getElementById("step").value;
  countStr = document.getElementById("count").value;

  step = parseFloat(stepStr);
  count = parseInt(countStr, 10);

  outputStr = '';

  orrery = new Orrery();
  orrery.addPlanet(mercury);
  orrery.addPlanet(earth);
  orrery.addPlanet(jupiter);
  orrery.addPlanet(neptune);

  for (i = 0; i < count; i += 1) {
    output_str += '<p>Total time: ' + orrery.total_time.toFixed(2) +
      '<br />';
    output_str += orrery.toStr() + '</p>';
    orrery.step(step);
  }

  document.getElementById("orr").innerHTML = outputStr;
}

exports.Planet = Planet;
exports.Orrery = Orrery;
