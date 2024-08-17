tags: #javascript #nodejs #tech/javascript #express 
```javascript
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

var cors = require('cors')

app.use(cors())

  

const Pool = require('pg').Pool

app.use(express.json());

const pool = new Pool({

user:'me',

host:'localhost',

database:'apidemo',

password:'password',

port:'5432'

})

  

const getUsers=(req,res)=>{

pool.query('SELECT * FROM users ORDER BY id ASC',(err,results)=>{

if(err){throw err}

res.send(results.rows)

})

}

  

const getUserById = (request,response)=>{

const id = parseInt(request.params.id);

console.log("idididi",id)

pool.query('SELECT * FROM users WHERE id=$1',[id],(error,results)=>{

if(error){

throw error

}

response.status(200).json(results.rows[0])

})

}

  

const createUser = (request,response)=>{

const {name,email} = request.body

console.log("idididi",name,email)

  

pool.query('INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *',

[name,email],(error,results)=>{

if(error){

throw error

}

response.status(201).send(`user added with ID: ${results.rows[0].id}`)

})

}

const updateUser=(request,response)=>{

const id= parseInt(request.params.id)

const {name,email}=request.body

  

pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3',[name,email,id],

(error,results)=>{

if(error){

throw error

}

response.status(200).send(`user modified with ID: ${id}`)

}

)

}

  

const deleteUser = (request,response)=>{

const id=parseInt(request.params.id)

pool.query('DELETE FROM users WHERE id = $1',[id],

(error,results)=>{

if(error){

throw error

}

response.status(200).send(`User deleted with ID: ${id}`)

}

)

}

  

const PORT = 4000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{res.json({index:'node and postgres api'})})

app.get('/users',getUsers)

app.get('/users/:id',getUserById)

app.post('/users',createUser)

app.put('/users/:id',updateUser)

app.delete('/users/:id',deleteUser)

  

app.listen(PORT,()=>console.log(`app started on port : ${PORT}`))

app.use((req, res, next) => {

const error = new Error('Something went wrong');

next(error);

});

// Error-handling Middleware

app.use((err, req, res, next) => {

console.error('Error:', err.message);

res.status(500).send('Internal Server Error');

});
```