const bcrypt = require('bcrypt')
module.exports = {
  register: async (req,res)=>{
    try {
      let db = req.app.get('db')
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
    } catch (error) {
      console.log(error)
    }
  },
  login: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {email, passWord} = req.body
      let user = await db.user.login_user([email,passWord])
      let hashPass = await db.user.hash_pass(email)
      bcrypt.compare(passWord,hashPass[0].password, async (err,response)=>{
        if(response){
          req.session.user = user[0]
          res.send(req.session.user)
        }else{
          res.send(`${err}`)
        }
      })
    } catch (error) {
      console.log(error)
    }
  },
  logout:(req,res)=>{
    try {
      req.session.destroy()
      res.send({})
    } catch (error) {
      console.log(error)
    }
  }
}