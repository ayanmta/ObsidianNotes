tags: #express #javascript #tech 


```typescript
  

const express = require('express')

const app = express()

const Redis = require('ioredis')

const axios = require('axios')

app.use(express.json());

const redis = new Redis({

host: '127.0.0.1', // Redis host

port: 6379, // Redis port

});

app.get('/',(req,res)=>{

res.send("with redis express and ts")

})

  

const checkcachedData = async (req, res, next) => {

try {

const cachedData = await redis.get('cachedData');

if (cachedData) {

res.send(JSON.parse(cachedData));

} else {

next();

}

} catch (error) {

next(error); // Pass error to error-handling middleware

}

};

  

// app.get('/cached',checkcachedData, async (req,res)=>{

// const dataToCache = {message:"hey i am from redis"}

// await redis.set('cachedData',JSON.stringify(dataToCache),'EX',2500)

// res.send(dataToCache)

// })

app.use((err, req, res, next) => {

console.error(err);

res.status(500).send('Internal Server Error');

})

  

//retrieve data without caching from axios

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

app.listen('8000',()=>{console.log('running on 8000')})
```