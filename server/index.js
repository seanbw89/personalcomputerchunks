require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const bcrypt = require('bcrypt')
const {SERVER_PORT,DATABASE_URI,SESSION_SECRET} = process.env
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
  secret:SESSION_SECRET,
  saveUninitialized:false,
  resave:false
}))

massive(DATABASE_URI).then(db=>{
  app.set('db',db)
  console.log('Database Connected');
})

app.post('/api/register', async (req,res)=>{
  let db = app.get('db')
  let {regUsername, regEmail, regPass} = req.body
  const saltRounds = 10
  let found_user = await db.find_user([regUsername, regEmail])
  if(found_user[0]){
    res.status(401)
  }else{
    bcrypt.hash(regPass, saltRounds, async (err,hash)=>{      
      let created_user = await db.create_user([regUsername, regEmail, hash, ''])
      console.log(created_user[0])
      req.session.user = created_user[0]
      res.send(req.session.user)
    })
  }
  
})
app.post('/api/login', (req,res)=>{
  let db = app.get('db')
  let {email, passWord} = req.body
})


app.get('/api/logout', (req,res)=>{
  req.session.destroy()
  res.send({})
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