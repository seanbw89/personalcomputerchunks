module.exports = {
  getmem: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let mem = await db.Memory.get_mem()
      res.send(mem)
    } catch (error) {
      console.log(error)
    }
  }
}