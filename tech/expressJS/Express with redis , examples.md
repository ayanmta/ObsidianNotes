tags: #express #javascript #tech 


```typescript
  
  

const express = require('express')

const app = express()

const redis = require('redis')

const axios = require('axios')

  

let redisClient

(()=>{

redisClient = redis.createClient();

redisClient.on('error',(err)=>console.log(err));

redisClient.connect()

//default connection 6379

})()

  

async function cacheData(req,res,next) {

const userInfo = req.params.info

try{

const cachedData = await redisClient.get(userInfo)

const results=JSON.parse(cachedData)

if(cachedData){

res.send({fromCache:true,

data:results

})

}else{next()}

}catch(err){

throw err

}

}

  

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

  
  

async function fetchApiData(info){

const apiResp = await axios.get(`http://localhost:3000/${info}`)

console.log('req sent to api');

return apiResp.data

}

  

async function getApiData(req,res){

const info = req.params.info;

let results

try{

results = await fetchApiData(info);

if(results.length===0){

throw "Api returned empty array"

}

await redisClient.set(info,JSON.stringify(results),{

EX:300,

NX:true

})

  

res.send(

{fromCache:false,

data:results

}

)

}

catch(error){

console.error(error)

res.status(404).send("data unaivalable")

}

}

app.get('/redis/:info',cacheData,getApiData)

  
  

app.listen('8000',()=>{console.log('running on 8000')})
```