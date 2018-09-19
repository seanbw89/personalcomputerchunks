module.exports = {
  getPsu:async (req,res) =>{
    try {
      let db = req.app.get('db')
      let psu = await db.PSU.get_psu()
      res.status(200).send(psu)    
    } catch (error) {
      console.log(error);
    }
  },
  getSinglePsu: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {psu} = req.body
      let singlePsu = await db.PSU.get_single_psu([psu])
      res.send(singlePsu)
    } catch (error) {
      console.log(error);
    }
  }
}