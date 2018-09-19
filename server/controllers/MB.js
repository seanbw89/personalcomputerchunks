module.exports ={
  getmb: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let motherboard = await db.Motherboard.get_mb()
      res.status(200).send(motherboard)
    } catch (error) {
      console.log(error)
    }
  },
  getSingleMB: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {motherboard} = req.body
      let SingleMB = await db.Motherboard.get_single_mb([motherboard])
      res.send(SingleMB)
    } catch (error) {
      
    }
  }
}