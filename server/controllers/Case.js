module.exports = {
  getcase: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let compcase = await db.Case.GetCase()
      res.send(compcase)
    } catch (error) {
      console.log(error)
    }
  },
  getSingleCase: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {ccase} = req.body
      let singleCase = await db.Case.get_single_case([ccase])
      res.send(singleCase)
    } catch (error) {
      console.log(error);
    }
  }
}