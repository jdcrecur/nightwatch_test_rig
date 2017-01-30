# e2e nightwatch test rig
End to end testing via selenium and Nightwatchjs test runner.

This is a ready to go setup to use with the e2e test runner Nightwatch. It's purpose is to boilerplate a new/existing project with e2e testing.

See: http://nightwatchjs.org  &&   http://nightwatchjs.org/api

## Installing
1.  Install nodejs: https://nodejs.org/en/
1.  Install nightwatch globally, `npm install -g nightwatch`
1.  Install java jdk 1.8+ http://www.oracle.com/technetwork/java/javase/downloads/index.html
1.  Copy this test rig folder to you project in a e2e_testing (name is up to you) folder.
1.  Run npm install wherever you copy the test rig to.
1.  Grab the selenium **stand alone** .jar file and copy to the bin folder in this test rig. Get the latest version: http://selenium-release.storage.googleapis.com/index.html?path=3.0/ At the time of writing this was the latest http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
1.  To start with just use the Gecko web browser to do your tests: https://github.com/mozilla/geckodriver Download the latest version for your operating system and again copy to the bin folder in your test rig.

Recap: Your bin/ should now contain:
```
bin/.gitkeep
bin/geckodriver
bin/selenium-server-standalone-3.0.1.jar
```


## Running nightwatch
1.  Out of the box this repo is configured to run a simple test against google. To run it, simply run (for linux) `nightwatch -c nightwatch_linux.json` from the base of the test rig will run the tests with settings found in the `config/settings_global.js`.


## Running nightwatch with an alternate settings file, eg settings_dev.js
You can pass a cli arg to run alternative settings: `nightwatch -c nightwatch_linux.json --mode=dev` where `dev` is the tail of the settings filename you want to run

So running this: `nightwatch -c nightwatch_linux.json --mode=dev`  will start the runner with the linux nightwatch json, it will open the settings_global.js and then merge in the settings_dev.js into it. Anything from the .._dev.js file will overwrite the global. This bascially allows for different domains, grace times etc etc to be easily housed in an extendible format.


## How to use nightwatch and selenium

See nightwatch.org for the rest, it is well documented.