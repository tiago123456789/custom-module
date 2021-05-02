import winston, { format } from 'winston';

/**
 * @description Setting logger
 */
const logger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new winston.transports.File({
    // @ts-ignore
      timestamp: true,
      level: 'info',
      filename: "./logs/process.log",
      handleExceptions: true,
      json: true,
      colorize: false,
    }),
    new winston.transports.File({
    // @ts-ignore
     'timestamp':true,
      level: 'error',
      filename: "./logs/error.log",
      handleExceptions: true,
      json: true,
      colorize: false,
    })
  ],
  exitOnError: false
});

// @ts-ignore
const isDev = process.env.NODE_ENV == "dev";
if (isDev) {
  logger.add(new winston.transports.Console({
    level: 'debug',
    handleExceptions: true,
    // @ts-ignore
    json: false,
    colorize: true,
  }));
}

export default logger;