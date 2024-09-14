#express #javascript #tech/javascript 


* used for creating routes for different parts together in a seperate module or component and using them together.
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
