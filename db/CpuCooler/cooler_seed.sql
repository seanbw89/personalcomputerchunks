-- CPU COOLER 							
-- ID	MANUFACTURER	PART#	SUPPORTED SOCKETS	LIQUID	RAD SIZE	HEIGHT	PRODUCT ID
-- 	NOCTUA	NH-D15	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA2011, LGA2011-3, LGA2066	NO		6.50" (165mm)	
-- 	NOCTUA	NH-U9S	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA2011, LGA2011-3, LGA2066	NO		4.88" (124mm)	
-- 	NOCTUA	NH-D14	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA775	NO		6.30" (160mm)	
-- 	CRYORIG	CR-H7A	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156	NO		5.71" (145mm)	
-- 	BE QUIET	DARK ROCK PRO 3	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066, LGA775	NO		6.42" (163mm)	
-- 	CORSAIR	CW-9060009-WW CORSAIR H100I V2	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066	YES	240mm		
-- 	NZXT	RL-KRX62-02	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066, TR4	YES	280mm		
-- 	DEEP COOL	CAPTAIN 240 EX WHITE	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066	YES	240mm		
-- 	FRACTAL DESIGN	FD-WCU-CELSIUS-S24-BK	AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066, TR4	YES	240mm		
-- 	Enermax	ELC-LT120X-HP	AM2, AM2+, AM3, AM3+, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066, LGA775	YES	120mm		

-- create table cpu_cooler(cooler_id serial primary key,manufacturer varchar(30), partnum varchar(50),model varchar(40),supp_sockets varchar(220), liquid varchar(40),rad_size integer,c_height varchar(40),product_id uuid not null default uuid_generate_v4()) with(oids=false)
-- select * from cpu_cooler
-- DROP TABLE cpu_cooler

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, c_height)
-- values('NOCUTA','NH-D15','NOCTUA-NH-D15','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA2011, LGA2011-3, LGA2066','NO','6.50" (165mm)');

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, c_height)
-- values('NOCUTA','NH-U9S','NOCTUA-NH-U9S','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA2011, LGA2011-3, LGA2066','NO','4.88" (124mm)');

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, c_height)
-- values('NOCUTA','NH-D14','NOCTUA-NH-D14','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA775','NO','6.30" (160mm)');

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, c_height)
-- values('CRYORIG','CR-H7A','CRYORIG-H7','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156','NO','5.71" (145mm)');

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, c_height)
-- values('BE QUIET','DARK ROCK PRO 3','DARK ROCK PRO 3','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066, LGA775','NO','6.42" (163mm)');

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, rad_size)
-- values('CORSAIR','CW-9060009-WW','CORSAIR H100I V2','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066','YES',240);

-- insert into cpu_cooler(manufacturer, partnum,model,supp_sockets, liquid, rad_size)
-- values('NZXT','RL-KRX62-02','NZXT-KRAKEN X62 REV 2','AM2, AM2+, AM3, AM3+, AM4, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1366, LGA2011, LGA2011-3, LGA2066, TR4','YES',280);


