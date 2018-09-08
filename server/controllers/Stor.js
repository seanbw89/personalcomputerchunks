module.exports = {
  getstor: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let Stor = await db.Storage.get_storage()
      res.send(Stor)
    } catch (error) {
      console.log(error)
    }
  }
}