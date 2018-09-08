module.exports ={
  getmb: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let motherboard = await db.Motherboard.get_mb()
      res.send(motherboard)
    } catch (error) {
      console.log(error)
    }
  }
}