#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: `.env.${process.env.NODE_ENV ?? 'development'}`.trim() });
require("source-map-support/register");
const cdk = __importStar(require("aws-cdk-lib"));
const main_stack_1 = require("../lib/main-stack");
const utils_1 = require("../lib/utils");
if (!process.env.AWS_ACCOUNT) {
    throw new Error('AWS_ACCOUNT is not set');
}
if (!process.env.AWS_REGION) {
    throw new Error('AWS_REGION is not set');
}
const stackProps = {
    env: {
        account: (0, utils_1.env)('AWS_ACCOUNT'),
        region: (0, utils_1.env)('AWS_REGION'),
    }
};
const app = new cdk.App();
new main_stack_1.MainStack(app, 'bigbtn-main', stackProps);
