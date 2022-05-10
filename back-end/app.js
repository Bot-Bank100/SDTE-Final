const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const { MongoClient } = require('mongodb')
const database = 'mongodb://host.docker.internal:8000'

app.get('/', (req, res) => {
    res.json({ message: 'Hello!' })
  })

  
app.get('/users/:username', async(req, res) => {
  const username = req.params.username
  const client = new MongoClient(database)
  await client.connect()
  const user = await client.db('Test').collection('Test').findOne({"username": username})
  await client.close()
  res.status(200).send({
    "status": "ok",
    "user": user
  })
})

app.post('/users/create', async(req, res) => {
  const user = req.body
  console.log(user)
  const client = new MongoClient(database);
  await client.connect()
  await client.db('Test').collection('Test').insertOne({
    id: parseInt(user.id),
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    email: user.email,
  })
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "User with ID = '+user.id+' is created",
    "user": user
  })
})

app.listen(3000, () => {
    console.log('Application is running on port 3000')
})