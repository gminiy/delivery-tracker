const request = require("request");

const api = {
  request: options =>
    new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) return reject(error);
        
        return resolve(body);
      });
    })
};

module.exports = api;
