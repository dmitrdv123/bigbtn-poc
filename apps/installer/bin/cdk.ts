#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV ?? 'development'}`.trim() })

import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'

import { MainStack } from '../lib/main-stack'
import { env } from '../lib/utils'

if (!process.env.AWS_ACCOUNT) {
  throw new Error('AWS_ACCOUNT is not set')
}

if (!process.env.AWS_REGION) {
  throw new Error('AWS_REGION is not set')
}

const stackProps = {
  env: {
    account: env('AWS_ACCOUNT'),
    region: env('AWS_REGION'),
  }
}

const app = new cdk.App()
new MainStack(app, 'bigbtn-main', stackProps)
