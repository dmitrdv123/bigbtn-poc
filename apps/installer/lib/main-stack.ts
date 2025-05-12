import { Stack, StackProps } from 'aws-cdk-lib'
import { IVpc, Vpc } from 'aws-cdk-lib/aws-ec2'
import { Construct } from 'constructs'

import { env, withEnv } from './utils'

interface MainStackOutput {
  vpc: IVpc
}

export class MainStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, withEnv(id, '-'), props)

    const output: MainStackOutput = {
      vpc: Vpc.fromLookup(this, withEnv('vpc'), {
        vpcId: env('VPC')
      })
    }
  }
}
