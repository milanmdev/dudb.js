// packages
const fetch = require('node-fetch');

// Module.Exports
module.exports = {

/**
 * Check if a user exists
 * 
 * @param {string} userid - The id of the user
 * @returns {Promise} - A json of the data recieved from the API
*/
check: function(userid) {
  if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://discord.riverside.rocks/check.json.php?id=${userid}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) { 
      reject(new Error(err)); 
    }
  });
},

/**
 * Report a user
 * 
 * @param {string} userid - The id of the user
 * @param {string} token - Your API token (https://discord.riverside.rocks/dashboard)
 * @param {string} reason - A reason for this report
 * @returns {Promise} - A json of the data recieved from the API
*/
report: function(userid, token, reason) {
  if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
  if (!token) throw new TypeError('You must specify an API key');
  if (isNaN(userid)) throw new TypeError('User ID must be an integer');
  if (!reason) throw new TypeError('You must specify a reason for this report');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://discord.riverside.rocks/report.json.php?key=${token}&id=${userid}&details=${reason}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) { 
      reject(new Error(err)); 
    }
  });
}

}