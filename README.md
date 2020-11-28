# dudb.js
Node.js Wrapper for the Dangerous User Databse

# Usage

## Add the package
To start, you will need to add the package. To do that, simply run `npm i dudb.js`. In your code, add the following:
```js
const dudb = require("dudb.js");
```
Now you can use any of the funcitons below!

---

### Checking a user
```js
dudb.check("USER_ID").then(result => console.log(result));
```
The code above should return a 200 OK message. (JSON)

### Reporting a user
```js
dudb.report("USER_ID", "API_TOKEN", "REASON").then(result => console.log(result));
```
The code above should return a 200 OK message. (JSON: Success)