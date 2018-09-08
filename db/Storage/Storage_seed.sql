-- create table storage(id serial primary key,type varchar(10),manufacturer varchar(80),partnum varchar(80),model varchar(80),capicity varchar(80), interface varchar(80),rpm integer,form_factor varchar(80),product_id uuid not null default uuid_generate_v4()) with(oids=false)
-- select * from storage
-- DROP TABLE STORAGE

-- insert into storage(manufacturer ,partnum ,model,capicity , interface ,form_factor )
-- values('SAMSUNG','MZ-V6E1T0','960 EVO 1TB','1TB','M.2 (M)','M.2-2280');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface ,form_factor )
-- values('SAMSUNG','MZ-V6E500','960 EVO 500GB','500GB','M.2 (M)','M.2-2280');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface ,form_factor )
-- values('SAMSUNG','MZ-75E500B/AM','850 EVO-SERIES 500GB','500GB','SATA 6 Gb/S','2.5');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface ,form_factor )
-- values('SAMSUNG','MZ-7KE256BW','850 PRO SERIES 256GB','256GB','SATA 6Gb/S','2.5');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface, rpm, form_factor )
-- values('WESTERN DIGITAL','WD30EFRX','WD RED 3TB','3TB','SATA 6Gb/S','5400','3.5');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface, rpm, form_factor )
-- values('SEAGATE','ST2000LM015','SEAGATE BARRACUDA 2TB','2TB','SATA 6Gb/S','5400','2.5');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface, rpm, form_factor )
-- values('SEAGATE','ST2000DM006','SEAGATE BARRACUDA 2TB','2TB','SATA 6Gb/S','7200','3.5');

-- insert into storage(manufacturer ,partnum ,model,capicity , interface, rpm, form_factor )
-- values('TOSHIBA','HDWD110XZSTA','TOSHIBA P300','1TB','SATA 6Gb/S','7200','3.5');



