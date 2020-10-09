'use strict';

module.exports.ping = async event => {
  /*return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'pong',
        input: event,
      },
      null,
      2
    ),
  };*/

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return { message: 'pong!' };
};
