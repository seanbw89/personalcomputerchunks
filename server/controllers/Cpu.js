module.exports = {
  getcpu:async (req,res)=>{
    try {
      let db = req.app.get('db')
      let cpu = await db.Cpu.getCpu()
      res.status(200).send(cpu)
    } catch (error) {
      console.log(error)
    }
  },
  getSingle:async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {cpu} = req.body
      let singleCpu = await db.Cpu.Single_cpu([cpu])
      res.send(singleCpu)
    } catch (error) {
      console.log(error)
    }
  }
}