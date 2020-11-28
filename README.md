<div align="center">
  <br>

# dudb.js
<br>
<p>
Node.js Wrapper for the Dangerous User Databse
</p>
<br>
<p>
<br>
<a href="https://www.npmjs.com/package/dudb.js"><img src="https://img.shields.io/npm/v/dudb.js.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/dudb.js"><img src="https://img.shields.io/npm/dt/dudb.js.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://david-dm.org/milanmdev/dudb.js"><img src="https://img.shields.io/david/milanmdev/dudb.js.svg?maxAge=3600" alt="Dependencies" /></a>
<a href="https://www.npmjs.com/package/dudb.js"><img src="https://api.ghprofile.me/view?username=milanmdev-dudb.js&style=flat" alt="Repository view count" /></a>
</p>

<br>

<p>
<a href="https://nodei.co/npm/dudb.js/"><img src="https://nodei.co/npm/dudb.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

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
