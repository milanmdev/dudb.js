const dudb = require(__dirname+"/index.js");

(async () => {

/* check Testing */

/* check (200 OK) */ await dudb.check("423203831971708958").then(result => console.log(result));

/* check (error 400) */ await dudb.check("NOTANACCOUNT").then(result => console.log(result));

/* check (error "TypeError: User ID must be a string") */ await dudb.check().then(result => console.log(result));

/* check (error 401) */ await dudb.check("").then(result => console.log(result));

})();