module.exports = {
  getvidcard: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let videocard = await db.video_card.get_video_card()
      res.status(200).send(videocard)
    } catch (error) {
      console.log(error);
    }
  },
  getSingleVidCard: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {video} = req.body
      let singleVideoCard = await db.video_card.get_single_video_card([video])
      res.send(singleVideoCard)
    } catch (error) {
      console.log(error);
    }
  }
}