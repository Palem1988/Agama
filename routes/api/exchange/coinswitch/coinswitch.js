const request = require('request');
const Promise = require('bluebird');
const API_KEY_PROD = '3sie59MENW47hvcAsaUXgw0R7BCQmKZ4CapfB90c';
const API_KEY_DEV = 'cRbHFJTlL6aSfZ0K2q7nj6MgV5Ih4hbA2fUG0ueO';

const httpReq = (options) => {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        const retObj = {
          msg: 'error',
          result: error,
        };
      
        resolve(retObj);
        api.log(error, 'exchanges.coinswitch');
      } else {
        try {
          const json = JSON.parse(body);
          const retObj = {
            msg: 'success',
            result: json,
          };
        
          resolve(retObj);
        } catch (e) {
          api.log(`can\'t parse json from [${options.method}] ${options.url}`, 'exchanges.coinswitch');
          const retObj = {
            msg: 'error',
            result: `can\'t parse json from [${options.method}] ${options.url}`,
          };
        
          resolve(retObj);
        }
      }
    });
  });
};

module.exports = (api) => {
  /*
   *  type: GET
   *
   */
  api.get('/exchange/coinswitch/coins', (req, res, next) => {
    if (api.checkToken(req.query.token)) {
      const options = {
        method: 'GET',
        url: 'https://api.coinswitch.co/v2/coins',
        headers: {
          'x-user-ip': '127.0.0.1',
          'x-api-key': req.query.dev ? API_KEY_DEV : API_KEY_PROD,
        },
      };
    
      httpReq(options)
      .then((result) => {
        res.end(JSON.stringify(result));
      });
    } else {
      const retObj = {
        msg: 'error',
        result: 'unauthorized access',
      };

      res.end(JSON.stringify(retObj));
    }
  });

  /*
   *  type: GET
   *
   */
  api.get('/exchange/coinswitch/rate', (req, res, next) => {
    if (api.checkToken(req.query.token)) {
      const options = {
        method: 'POST',
        url: 'https://api.coinswitch.co/v2/rate',
        headers: {
          'x-user-ip': '127.0.0.1',
          'x-api-key': req.query.dev ? API_KEY_DEV : API_KEY_PROD,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          depositCoin: req.query.src,
          destinationCoin: req.query.dest,
        }),
      };
    
      httpReq(options)
      .then((result) => {
        console.log(result);

        if (result.msg === 'success' &&
            result.result.success &&
            !result.result.data) {
          const retObj = {
            msg: 'error',
            result: 'unavailable',
          };
          res.end(JSON.stringify(retObj));              
        } else {
          res.end(JSON.stringify(result));
        }
      });
    } else {
      const retObj = {
        msg: 'error',
        result: 'unauthorized access',
      };

      res.end(JSON.stringify(retObj));
    }
  });

  return api;
};