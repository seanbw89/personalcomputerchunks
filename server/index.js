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
  Video = require('./controllers/videoCard')
  PSU = require('./controllers/PowerSupply');
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
app.post('/api/singlecpu', Cpu.getSingle)
//Case
app.get('/api/case', Case.getcase)
app.post('/api/singlecase', Case.getSingleCase)
//Cpu_cooler
app.get('/api/cooler', Cooler.getcooler)
app.post('/api/singlecooler', Cooler.getSingleCooler)
//MotherBoard
app.get('/api/motherboard', MB.getmb)
app.post('/api/singlemotherboard', MB.getSingleMB)
//memory
app.get('/api/memory', Memory.getmem)
app.post('/api/getsinglememory', Memory.getSingleMem)
//storage
app.get('/api/storage', Stor.getstor)
app.post('/api/singlestorage', Stor.getSingleStor)
//Video Card
app.get('/api/videocard', Video.getvidcard)
app.post('/api/singlevideocard', Video.getSingleVidCard)
//PSU
app.get('/api/powersupply', PSU.getPsu)
app.post('/api/singlepowersupply', PSU.getSinglePsu)
