import { Meteor } from "meteor/meteor";
import winston from 'winston';

const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'grey',
    info: 'green',
    verbose: 'cyan',
    silly: 'magenta'
  }
};

export const logger = () => {
  if (Meteor.isServer) {
    let winConsole = new winston.transports.Console({
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp :true,
      prettyPrint: true,
    });

    return new winston.Logger({
      transports: [
        winConsole
      ],
      levels: config.levels,
      colors: config.colors,
      exitOnError: false
    });

  }

  if (Meteor.isClient) {
    return {
      info: console.log,
      warn: console.log,
      error: console.log
    };
  }
};