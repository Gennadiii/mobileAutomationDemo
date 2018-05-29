const Jasmine = require('jasmine');


let jasmine = new Jasmine();
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 70 * 1000;

const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
  colors: 1,           // (0|false)|(1|true)|2
  cleanStack: 1,       // (0|false)|(1|true)|2|3
  verbosity: 4,        // (0|false)|1|2|(3|true)|4
  listStyle: 'indent', // "flat"|"indent"
  activity: false
});
jasmine.loadConfig({
  spec_dir: 'dist/spec',
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false
});
jasmine.addReporter(reporter);


export {jasmine};
