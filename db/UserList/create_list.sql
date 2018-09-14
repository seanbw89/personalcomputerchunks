insert into userlist(
  cpu,
  cooler , 
  motherboard , 
  memory , 
  storage, 
  psu , 
  vid_card , 
  compcase , 
  user_id  
)values($1,$2,$3,$4,$5,$6,$7,$8,$9)returning *