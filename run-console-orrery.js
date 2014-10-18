// Run the orrery from the command line.
// Ken Guyton
// Wed 2014-10-15 15:21:01 -0400
//
// This file can be run using Node.js:
//
// node run-console-orrery.js

var orreryjs = require('./orrery.js');


/**
 * A container for several planets, like a solar system.
 */
function ConsoleOrrery() {
  'use strict';
  this.planets = [];
}

ConsoleOrrery.prototype = new orreryjs.Orrery();

/**
 * Convert the orrery to a string for output.
 *
 * Returns strings for the console output.
 */
ConsoleOrrery.prototype.toStr = function () {
  'use strict';
  var out_str = '', i, planets_len = this.planets.length;

  for (i = 0; i < planets_len; i += 1) {
    out_str += this.planets[i].toStr() + '\n';
  }

  return out_str;
};


/**
 * Run the orrery for a given step size and number of steps.
 *
 * Note that the step size and steps are hard-coded.
 */
function runOrrery() {
  'use strict';

  var step, count, output_str, i, orrery, MERCURY, EARTH, JUPITER, NEPTUNE;

  MERCURY = new orreryjs.Planet('Mercury', 0.39, 0.0);
  EARTH = new orreryjs.Planet('Earth', 1.0, 0.0);
  JUPITER = new orreryjs.Planet('Jupiter', 5.0, 0.0);
  NEPTUNE = new orreryjs.Planet('Neptune', 30.1, 0.0);

  step = 1.0;
  count = 20;
  output_str = '';

  orrery = new ConsoleOrrery();
  orrery.addPlanet(MERCURY);
  orrery.addPlanet(EARTH);
  orrery.addPlanet(JUPITER);
  orrery.addPlanet(NEPTUNE);

  for (i = 0; i < count; i += 1) {
    output_str += 'Total time: ' + orrery.total_time.toFixed(2) + '\n';
    output_str += orrery.toStr() + '\n\n';
    orrery.step(step);
  }

  console.log(output_str);
}

runOrrery();
