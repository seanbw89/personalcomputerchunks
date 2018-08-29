-- CASE										
-- ID	MANUFACTURER	PART#	MODEL	TYPE	PSU	INTERNAL 2.5	INTERNAL 3.5	MB COMPATIBILITY	MAX VID CARD LENGTH	PRODUCT ID
-- 	Phanteks		PHANTEKS ENTHOO PRO	ATX Full Tower	no	1	6	ATX, EATX, Micro ATX, Mini ITX, SSI EEB	13.66" (347mm) With Drive Cages 18.58" (472mm) Without Drive Cages	
-- 	Phanteks	PH-ES215P_BK	PHANTEKS ENTHOO EVOLV ITX	Mini ITX Tower	no	2	3	Mini itx	12.99	
-- 	Corsair	CC-9011022-WW	CORSAIR 900D	ATX Full Tower	no	4	9	ATX, EATX, HPTX, Micro ATX, Mini ITX, XL ATX	19.69	
-- 	cooler master	RC-110-KKN2	COOLER MASTER ELITE 110	Mini ITX Tower	no	1	4	Mini itx	8.27"	
-- 	phanteks	PH-ES916E_BK	PHANTEKS ENTHOO ELITE	ATX Full Tower	no	4	6	ATX, EATX, Micro ATX, Mini ITX	19.25	
-- 	inwin	IW-XFRAME2-RED	INWIN X FRAME 2.0	ATX Test Bench	no	7	6	ATX, EATX, Micro ATX, Mini ITX	15.16"	

-- product_id uuid not null default uuid_generate_v4()) with(oids=false)

-- create table compcase(case_id SERIAL PRIMARY KEY, manufacturer varchar(20), partnum varchar(30),model varchar(30), form_type varchar(20), psu varchar(10), inttwofive integer, intthreefive integer, mbcompatible varchar(50), maxvidcardlength varchar(100),price decimal,product_id uuid not null default uuid_generate_v4()) with(oids=false)
-- drop table compcase
-- select * from compcase

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('Phanteks','PH-ES614P_BK','PHANTEKS ENTHOO PRO','ATX Full Tower','NO',1,6,'ATX, EATX, Micro ATX, Mini ITX, SSI EEB','13.66" (347mm) With Drive Cages 18.58" (472mm) Without Drive Cages',99.49);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('Phanteks','PH-ES215P_BK','PHANTEKS ENTHOO EVOLV ITX','MINI ATX TOWER','NO',2,3,'Mini ITX','12.99',151.14);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,price)
-- values('CORSAIR','CC-9011022-WW','CORSAIR 900D','ATX Full Tower','NO',4,9,'ATX,EATX,HPTX,Micro ATX,MiniITX,XL ATX',321.82);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('COOLER MASTER','RC-110-KKN2','COOLER MASTER ELITE 110','MINI ITX TOWER','NO',1,4,'Mini ITX','8.27',38.99);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,price)
-- values('Phanteks','PH-ES916E_BK','PHANTEKS ENTHOO ELITE','ATX Full Tower','NO',4,6,'ATX, EATX, Micro ATX, Mini ITX',920.52);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('INWIN','IW-XFRAME2-RED','INWIN X FRAME 2.0','ATX TEST BENCH','NO',7,6,'ATX, EATX, Micro ATX, Mini ITX','15.16',1237.00);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('FRACTAL DESIGN','FD-MCA-NODE-202-AA-US','NODE 202','HTPC','YES',2,0,'MINI ITX','12.20',86.96);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('CORSAIR','CC-9011044-WW','CORSAIR 760T','ATX FULL TOWER','NO',4,6,'ATX, EATX, Micro ATX, Mini ITX, XL ATX','17.72',169.99);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('FRACTAL DESIN','FD-CA-DEF-MINI-C-BK-W','DEFINE MINI C W/ WINDOW','MICROATX MID TOWER','NO',3,2,'Micro ATX, Mini ITX','12.40',79.99);

-- insert into compcase(manufacturer,partnum,model,form_type,psu,inttwofive,intthreefive,mbcompatible,maxvidcardlength,price)
-- values('CORSAIR',' CC-9011030-WW','CORSAIR AIR 540','ATX MID TOWER','NO',4,2,'ATX,EATX,Micro ATX, Mini ITX','12.60',128.99);


