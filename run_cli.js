// Run the orrery from a command line.
// Copyright (c) 2014 by Ken Guyton.  All Rights Reserved.

var orrery_lib = require('orrery.js');

/**
 * Run the orrery from the command line for a step and count.
 */
function runFromCmdLine(step, count) {
  'use strict';

  var i, orrery, mercury, earth, jupiter, neptune;

  mercury = new orrery_lib.Planet('Mercury', 0.39, 0.0);
  earth = new orrery_lib.Planet('Earth', 1.0, 0.0);
  jupiter = new orrery_lib.Planet('Jupiter', 5.0, 0.0);
  neptune = new orrery_lib.Planet('Neptune', 30.1, 0.0);
  
  orrery = new orrery_lib.Orrery();
  orrery.addPlanet(mercury);
  orrery.addPlanet(earth);
  orrery.addPlanet(jupiter);
  orrery.addPlanet(neptune);

  for (i = 0; i < count; i += 1) {
    console.log(orrery.toStr());
    console.log(' ')
    orrery.step(step);
  }
}

runFromCmdLine(0.25, 10);
