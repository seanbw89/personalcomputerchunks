module.exports = {
  getcpu:async (req,res)=>{
    try {
      let db = req.app.get('db')
      let cpu = await db.Cpu.getCpu()
      res.send(cpu)
    } catch (error) {
      console.log(error)
    }
  }
}