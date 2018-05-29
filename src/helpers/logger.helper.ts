import {LoggerFactory, LoggerFactoryOptions, LFService, LogGroupRule, LogLevel} from 'typescript-logging';
const fs = require('fs');


// Create option instance and specify 1 LogGroupRules:
const options = new LoggerFactoryOptions()
  .addLogGroupRule(new LogGroupRule(new RegExp('.+'), LogLevel.Info));

// Create a named loggerfactory and pass in the options and export the factory.
// Named is since version 0.2.+ (it's recommended for future usage)
const factory = LFService.createNamedLoggerFactory('LoggerFactory', options);

const logger = {

  get(name) {
    return factory.getLogger(name.padEnd(15));
  }

};

export {logger};
