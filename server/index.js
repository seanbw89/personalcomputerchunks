require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const bcrypt = require('bcryptjs')
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
  let db = req.app.get('db')
  let {regUsername, regEmail, regPass} = req.body
  let foundUser = db.find_user([regEmail,regPass])
  if(foundUser[0]){
    res.send('You already Have An Account')
  }else{
    bcrypt.genSalt(10, (err,salt)=>{
      bcrypt.hash(regPass,salt,(err,hash)=>{
        let createdUser = db.create_user([regUsername,regEmail,hash,''])
        req.session.user = createdUser[0]
        res.send(req.session.user)
      })
})
  }
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