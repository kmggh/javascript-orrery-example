// An orrery in Javascript.
// Ken Guyton
// Fri 2014-02-21 15:23:02 -0500

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

  // Normalize the angle.
  while (this.posAngle >= 360.0) {
    this.posAngle -= 360.0;
  }
};

/**
 * A container for several planets, like a solar system.
 */
function Orrery() {
  'use strict';
  this.planets = [];
}

/**
 * Advance all planets along their orbits for deltaTime years.
 *
 * The deltaTime can be a fraction of a year.  This changes all of the
 * planets' posAngles.
 */
Orrery.prototype.step = function (deltaTime) {
  'use strict';
  var planets_len = this.planets.length, i;

  for (i = 0; i < planets_len; i += 1) {
    this.planets[i].step(deltaTime);
  }
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
  var out_str = '', i, planets_len = this.planets.length;

  for (i = 0; i < planets_len; i += 1) {
    out_str += this.planets[i].toStr() + '<br>\n';
  }

  return out_str;
};

/**
 * Run the orrery for a given step size and number of steps.
 *
 * Input comes from a document form.
 */
function runOrrery() {
  'use strict';

  var step_str, count_str, step, count, i, output_str, orrery,
    MERCURY, EARTH, JUPITER, NEPTUNE;

  MERCURY = new Planet('Mercury', 0.39, 0.0);
  EARTH = new Planet('Earth', 1.0, 0.0);
  JUPITER = new Planet('Jupiter', 5.0, 0.0);
  NEPTUNE = new Planet('Neptune', 30.1, 0.0);

  step_str = document.getElementById("step").value;
  count_str = document.getElementById("count").value;

  step = parseFloat(step_str);
  count = parseInt(count_str, 10);

  output_str = '';

  orrery = new Orrery();
  orrery.addPlanet(MERCURY);
  orrery.addPlanet(EARTH);
  orrery.addPlanet(JUPITER);
  orrery.addPlanet(NEPTUNE);

  for (i = 0; i < count; i += 1) {
    output_str += '<p>' + orrery.toStr() + '</p>';
    orrery.step(step);
  }

  document.getElementById("orr").innerHTML = output_str;
}
