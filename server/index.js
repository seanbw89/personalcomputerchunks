require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT,DATABASE_URI} = process.env
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

massive(DATABASE_URI).then(db=>{
  app.set('db',db)
  console.log('Database Connected');
})


app.get('/api/cpu', async (req,res)=>{
  let db = app.get('db')
  let cpu = await db.getCpu()
  res.send([cpu])
})


app.listen(SERVER_PORT, ()=>{
  console.log(`Listening On Port ${SERVER_PORT}`);
})