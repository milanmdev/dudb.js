const dudb = require(__dirname+"/index.js");
const token = "NOTOKEN";

(async () => {

/* check Testing */

/* check (200 OK) */ await dudb.check("423203831971708958").then(result => console.log(result));

/* check (error 400) */ await dudb.check("NOTANACCOUNT").then(result => console.log(result));

// /* check (error "TypeError: User ID must be a string") */ await dudb.check().then(result => console.log(result));

/* check (error 401) */ await dudb.check("").then(result => console.log(result));





/* report Testing */

/* report (200 OK) */ await dudb.report("1234", token, "testing").then(result => console.log(result));

/* report (error "TypeError: User ID must be an integer") */ await dudb.report("NOTANACCOUNT", token, "testing").then(result => console.log(result));

/* report (error "Error, invalid API key.") */ await dudb.report("1234", "NOTATOKEN", "testing").then(result => console.log(result));

/* report (error "TypeError: You must specify a reason for this report") */ await dudb.report("1234", token).then(result => console.log(result));

/* report (error "TypeError: User ID must be a string") */ await dudb.report().then(result => console.log(result));

/* report (error "TypeError: You must specify an API key") */ await dudb.report("").then(result => console.log(result));

/* report (error "TypeError: You must specify an API key") */ await dudb.report("", "", "").then(result => console.log(result));

})();