module.exports = {
  getvidcard: async (req,res)=>{
    let db = req.app.get('db')
    let videocard = await db.video_card.get_video_card()
    res.send(videocard)
  }
}