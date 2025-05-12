"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envName = envName;
exports.env = env;
exports.withEnv = withEnv;
function envName() {
    return env('NODE_ENV', 'development');
}
function env(name, defaultValue = '') {
    return process.env[name]?.trim() ?? defaultValue;
}
function withEnv(name, separator = '_') {
    return [envName(), name].join(separator);
}
