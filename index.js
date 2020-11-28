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
}

}