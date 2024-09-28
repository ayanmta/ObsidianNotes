#express #javascript #tech/javascript 


# [[Express INTRO|Express INTRO]]
* used for creating routes for different parts together in a seperate module or component and then using them together.
      ***we can create a route to be used in common prefix as seperate module and export them together using Router object***


 * make sure to use `app.use()` for router handling 
 * make sure to have `module.exports=router`  WHERE `router = express.Router()

exmple :
***index.js**
```javascript
const express = require("express
const wiki = require('./wiki.js')

const app = express()


app.get('/',(req,res)=>{

res.send("hello world````")

})

app.use("/wiki",wiki)

  

app.listen("4040",()=>{

console.log("app started on port 4040")

})
```

***wiki.js :***
```javascript

const app = require('express');

const router = app.Router();

  

router.get("/",(req,res)=>{

res.send("main wiki page")

})

  

router.get("/second",(req,res)=>{

res.send("second wiki page")

})

  

module.exports = router;

```


# [[EXPRESS MIDDLEWARE|EXPRESS MIDDLEWARE]] :

it is a function that runs after request and before response in express
 * make sure to use `next()` to pass res to next function response or middleware
 * express we can use many already available middleware but we can create our own 
 
> NOTE: The middleware can perform any operation, execute any code, make changes to the request and response object, and it can _also end the request-response cycle_. If it does not end the cycle then it must call `next()` to pass control to the next middleware function (or the request will be left hanging).

`next()` is what seperates middlewAre from routes
### [Handling errors]

Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: `(err, req, res, next)`. For example:

``` javascript

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```
