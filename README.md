# Test for endpoints in public allegro Api

Test contained here use jest as a test runner and super tests for preforming requests.

## Requirements

Developed and tested on node v10.20.1
And Windows 10 os

## CI 
The tests are run using github actions workflow on Linux ubuntu-18.04 and using node version: 10.x, 12.x
Tests are run on push and PR. Results of test can be viewed It [Actions tab](https://github.com/michal-lubawy/qa-allegro-hw/actions)

### HTML report
A nice HTML report from tests is published as job artifact 
![HTML Report](/readmePictures/Screenshot.png)


## How To

### Run on CI
The test are run automatically on code push.

To run them manually go to Actions tab select a workflow and press the "run workflow " button. For more info follow the instrucitons provided in [manually-running-a-workflow](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-on-github)

### Running locally 
Before running the tests run `npm install` in the main folder of tests.

to run tests run `npm run test`.

The rest-examples folder contains some request examples for manual testing of endpoints. Those can be run straight from VS code with http-request plugin installed.
