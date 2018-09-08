require('dotenv').config()
const express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  massive = require('massive'),
  User = require('./controllers/Users'),
  Cpu = require('./controllers/Cpu'),
  Case = require('./controllers/Case'),
  Cooler = require('./controllers/Cooler'),
  MB = require('./controllers/MB'),
  Memory = require('./controllers/Memory'),
  Stor = require('./controllers/Stor')
  Video = require('./controllers/videoCard');
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

  app.listen(SERVER_PORT, ()=>{
    console.log(`Listening On Port ${SERVER_PORT}`);
  })
})

//User
app.post('/api/register', User.register)
app.post('/api/login', User.login)
app.get('/api/logout', User.logout)

//----------------------------------------
//Cpu
app.get('/api/cpu', Cpu.getcpu)
//Case
app.get('/api/case', Case.getcase)
//Cpu_cooler
app.get('/api/cooler', Cooler.getcooler)
//MotherBoard
app.get('/api/motherboard', MB.getmb)
//memory
app.get('/api/memory', Memory.getmem)
//storage
app.get('/api/storage', Stor.getstor)
//Video Card
app.get('/api/videocard', Video.getvidcard)
