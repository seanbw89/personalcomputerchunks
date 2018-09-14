create table userlist
(id serial primary key,
cpu uuid,
cooler uuid , 
motherboard uuid , 
memory uuid , 
storage uuid, 
psu uuid , 
vid_card uuid , 
compcase uuid , 
user_id uuid , 
list_id uuid not null default uuid_generate_v4()) with(oids=false);