module.exports = {
  getcase: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let compcase = await db.Case.GetCase()
      res.send(compcase)
    } catch (error) {
      console.log(error)
    }
  }
}