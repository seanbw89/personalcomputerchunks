require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT,DATABASE_URI,SESSION_SECRET} = process.env
const app = express()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(session({
  secret:SESSION_SECRET,
  saveUninitialized:false,
  resave:false
}))

massive(DATABASE_URI).then(db=>{
  app.set('db',db)
  console.log('Database Connected');
})


app.get('/api/cpu', async (req,res)=>{
    let db = app.get('db')
    let cpu = await db.getCpu()
    res.send(cpu)
})

app.get('/api/case', async (req,res)=>{
  let db = app.get('db')
  let compcase = await db.GetCase()
  res.send(compcase)
})

app.listen(SERVER_PORT, ()=>{
  console.log(`Listening On Port ${SERVER_PORT}`);
})