"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, headers) {
        // @ts-ignore
        return axios_1.default.get(url, { headers: headers }).then(this.extractResponseBody);
    };
    HttpClient.prototype.post = function (url, data, headers) {
        // @ts-ignore
        return axios_1.default.post(url, data, { headers: headers });
    };
    HttpClient.prototype.extractResponseBody = function (response) {
        if (response.data) {
            return response.data;
        }
        return response;
    };
    return HttpClient;
}());
exports.default = HttpClient;
