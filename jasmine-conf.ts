const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;


const jasmine = new Jasmine();
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 70 * 1000;
const specReporter = new SpecReporter({
  spec: {
    displayPending: true
  }
});
const htmlReporter = new HtmlReporter({
  path: 'report'
});
jasmine.loadConfig({
  spec_dir: 'dist/spec',
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false
});
jasmine.addReporter(specReporter);
jasmine.addReporter(htmlReporter);


export {jasmine};
