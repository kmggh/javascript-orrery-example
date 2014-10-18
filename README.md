Orrery in Javascript
====================



Ken Guyton
Mon 2014-02-24 21:25:07 -0500



This is my typical "Hello World" orrery program, this time as a first
program in Javascript.  The style follows much, probably not all, of
the published Google Javascript style.  It also passes JSlint.


About the Model
---------------

The two input fields are a step size, measured in years, and a count
of steps to compute.  The program outputs a planetary position in
degrees (around it's orbit) for each step.

This program uses a simple, circular orbit model and all planets start
aligned in the same position at zero degrees.  The purpose of an
orrery is to show the relative speeds of planets around the sun as
well as, in this case, their relative distances.


To Run
------

### From the browser

Open the orrery.html file in a browser.


### From the command line

    node run-console-orrery.js


### To run tests

To run tests, install jest with *npm* and then run the test.


    npm install jest-cli --save-dev
    npm test
