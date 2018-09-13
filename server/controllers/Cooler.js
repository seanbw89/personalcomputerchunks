module.exports = {
  getcooler: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let cooler = await db.CpuCooler.get_cooler()
      res.send(cooler)
    } catch (error) {
      console.log(error)
    }
  },
  getSingleCooler: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {cooler} = req.body
      let singleCooler = await db.CpuCooler.single_cpu_cooler([cooler])
      res.send(singleCooler)
    } catch (error) {
      console.log(error)
    }
  }
}