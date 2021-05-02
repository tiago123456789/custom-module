"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importStar(require("winston"));
/**
 * @description Setting logger
 */
var logger = winston_1.default.createLogger({
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    transports: [
        new winston_1.default.transports.File({
            // @ts-ignore
            timestamp: true,
            level: 'info',
            filename: "./logs/process.log",
            handleExceptions: true,
            json: true,
            colorize: false,
        }),
        new winston_1.default.transports.File({
            // @ts-ignore
            'timestamp': true,
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
var isDev = process.env.NODE_ENV == "dev";
if (isDev) {
    logger.add(new winston_1.default.transports.Console({
        level: 'debug',
        handleExceptions: true,
        // @ts-ignore
        json: false,
        colorize: true,
    }));
}
exports.default = logger;
