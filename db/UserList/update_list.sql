update userlist
set cpu = $1,
  cooler = $2,
  motherboard = $3,
  memory = $4,
  storage = $5,
  psu = $6,
  vid_card = $7,
  compcase = $8
where user_id = $9 and list_id = $10
returning *