const winston = require('winston');

let logger;

(function() {
  logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });
}());

module.exports = logger;