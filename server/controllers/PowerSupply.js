module.exports = {
  getPsu:async (req,res) =>{
    let db = req.app.get('db')
    let psu = await db.PSU.get_psu()
    res.send(psu)
  }
}