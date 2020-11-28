# dudb.js
Node.js Wrapper for the Dangerous User Databse

# Usage

## Add the package
To start, you will need to add the package. To do that, simply run `npm i dudb.js`. Now you can use any of the funcitons below!

---

### Checking a user
```js
dudb.check("423203831971708958").then(result => console.log(result));
```
The code above should return a 200 OK message, as long as I keep my discord account :D