'use strict';

module.exports.get = (event, context, callback) => {
  console.log(context);
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: "You have accessed an authorized route in AWS",
    }),
  };

  callback(null, response);
};

module.exports.post = (event, context, callback) => {
  console.log(context);
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: 'Test of post request.',
    }),
  };

  callback(null, response);
};
