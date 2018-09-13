module.exports = {
  getstor: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let Stor = await db.Storage.get_storage()
      res.send(Stor)
    } catch (error) {
      console.log(error)
    }
  },
  getSingleStor: async (req,res) =>{
    try {
      let db = req.app.get('db')
      let {stor} = req.body
      let singleStor =  await db.Storage.get_single_storage([stor])
      res.send(singleStor)
    } catch (error) {
      console.log(error);
    }
  }
}