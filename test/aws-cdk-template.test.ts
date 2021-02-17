import * as cdk from '@aws-cdk/core';
import * as AwsCdkTemplate from '../lib/aws-cdk-template-stack';

test('Dashboard has resource Dashboard', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AwsCdkTemplate.AwsCdkTemplateStack(app, 'MyTestStack');
  // THEN
  expect(stack).toBeInstanceOf(AwsCdkTemplate.AwsCdkTemplateStack);
});
