
tags: #express #javascript #tech 



```

```JAVASCRIPT
const express = require('express');

const app =express();

const port = 3000;

  
  

app.get('/',(req,res)=>{

res.send("hello world")

});

  

//example route-handler

const ab = function(req,res,next){

console.log("i am a ")

next()

}

const ab1 = function(req,res,next){

console.log("i am a1 ")

next()

}

const ab2 = function(req,res,next){

console.log("i am a2 ")

next()

}

const ab3 = function(req,res,next){

console.log("i am a3 ")

next()

}

const ab4 = function(req,res,next){

console.log("i am a4")

next()

}

  

app.get('/route-handler',[ab,ab1,ab2,ab3,ab4],(req,res,next)=>{

res.send("hey there all the things before are here ")

})

  
  
  

//chainable route can be created using app.route() example:

  

app.route('/book')

.get((req,res)=>{res.send("get random book")})

.post((req,res)=>{res.send("add a book")})

.put((req,res)=>{res.send("update a book")})

  
  

// express router can create route as middleware , modular mountable route handler , often called mini-app

// created in file birds.js and imported here

  

const birds = require('./birds')

app.use('/birds',birds)

  
  
  

/*

** Q) lets create a middleware function called requestTime and add a property called requestTime to req object

  

**** we will be adding it with the text response in the ropute /timehandler

  

*/

const requestTime = function(req,res,next){

req.requestTime = Date.now();

next()

}

app.use(requestTime)

app.get('/timehandler',(req,res)=>{

  

let respText = 'Hello the time is <br>'

respText += `<p> requested at : ${req.requestTime}</p>`

res.send(respText)

})

  
  

/*

** Q) cookie-parser and validator example

*/

  
  
  

app.listen(port,()=>{

console.log(`app started on port ${port}`)

})
```
