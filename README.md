# AWS Node HTTP API with Cognito Authorizer


## What this project contains

1 - follow the guide (https://serverless.com/blog/serverless-auth-with-aws-http-apis, see below) to set up Cognito User Pool and client. Two routes only accessible with valid token are GET and POST requests to **baseUrl/user/profile**

2 - Create the registration and login functions in the frontend (or do it through the AWS Cognito dashboard) to access the token for a user (see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html which links further to https://github.com/aws-amplify/amplify-js/tree/master/packages/amazon-cognito-identity-js, or use this to use fetch requests https://aws.amazon.com/premiumsupport/knowledge-center/cognito-hosted-web-ui/)

3 - if the authorized pages should be accessed through a front end framework hosted elsewhere (or locally), add CORS according to the guide https://www.serverless.com/framework/docs/providers/aws/events/http-api   

4 - following the guide https://www.serverless.com/blog/getting-started-with-serverless-framework a DynamoDB is connected to the project and a POST request can be sent to the route **baseUrl/customer** (name and email parameters required) to create a new post in the collection. A GET-route to the same url retrieves all items in the collection.

Updates: the GET route **/customer** above has changed path to **baseUrl/test** to conform with planned routes. The GET route **baseUrl/user/profile** is changed to **baseUrl/auth**, also to conform with planned route naming. See routes created below for summary of the important routes.


## Guide for Cognito Authorizer

This example demonstrates how you can use the new AWS HTTP API (Announced Dec. 2019) and the built in JSON Web Token Authorization it offers. using Amazon Cognito.

For more details, and more information on how to use tools like Auth0 instead of Cognito, you can review the blog post [here](https://serverless.com/blog/serverless-auth-with-aws-http-apis).


## Routes created
The important routes for the project are:
- GET /baseUrl/test: retrieve all items in the db-collection
- GET /baseUrl/auth: with a valid token this route is accessible and returns a message
- POST /baseUrl/customer: add an entry in the db-collection (name and email required)

As mentioned in step 2 (what this project contains) the Cognito User pool is accessible through different pathways. One way would be through a route option, for example baseUrl/login...., see https://aws.amazon.com/premiumsupport/knowledge-center/cognito-hosted-web-ui/.  
