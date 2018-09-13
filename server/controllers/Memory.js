module.exports = {
  getmem: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let mem = await db.Memory.get_mem()
      res.send(mem)
    } catch (error) {
      console.log(error)
    }
  },
  getSingleMem: async (req,res)=>{
    let db = req.app.get('db')
    let {memory} = req.body
    let singleMemory = await db.Memory.get_single_mem([memory])
    res.send(singleMemory)
  }
}