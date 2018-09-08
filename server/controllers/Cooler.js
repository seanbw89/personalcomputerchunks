module.exports = {
  getcooler: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let cooler = await db.CpuCooler.get_cooler()
      res.send(cooler)
    } catch (error) {
      console.log(error)
    }
  }
}