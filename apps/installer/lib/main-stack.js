"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_ec2_1 = require("aws-cdk-lib/aws-ec2");
const utils_1 = require("./utils");
class MainStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, (0, utils_1.withEnv)(id, '-'), props);
        const output = {
            vpc: aws_ec2_1.Vpc.fromLookup(this, (0, utils_1.withEnv)('vpc'), {
                vpcId: (0, utils_1.env)('VPC')
            })
        };
    }
}
exports.MainStack = MainStack;
