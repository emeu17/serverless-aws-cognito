# AWS Node HTTP API with Cognito Authorizer


## What to do

1 - follow the guide (https://serverless.com/blog/serverless-auth-with-aws-http-apis, see below) to set up Cognito User Pool and client. Two routes only accessible with valid token are GET and POST requests to **baseUrl/user/profile**

2 - Create the registration and login functions in the frontend (or do it through the AWS Cognito dashbaord) to access the token for a user

3 - if the authorized pages should be accessed through a front end framework hosted elsewhere (or locally), add CORS according to the guide https://www.serverless.com/framework/docs/providers/aws/events/http-api   


## Guide for Cognito Authorizer

This example demonstrates how you can use the new AWS HTTP API (Announced Dec. 2019) and the built in JSON Web Token Authorization it offers. using Amazon Cognito.

For more details, and more information on how to use tools like Auth0 instead of Cognito, you can review the blog post [here](https://serverless.com/blog/serverless-auth-with-aws-http-apis).


## Extra routes created
Using the getting started guide https://www.serverless.com/blog/getting-started-with-serverless-framework the **POST and GET routes baseUrl/customer** are created which allows posting customers (name and email) to a DynamoDB and retrieving all customers in a GET request.

Update: the GET route above has changed path to **baseUrl/test** to conform with planned routes. The GET route **baseUrl/user/profile** is changed to **baseUrl/auth**, also to conform with planned route naming.
