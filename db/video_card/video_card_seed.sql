-- create table psu(psu_id serial primary key, manufacturer varchar(120), partnum varchar(120), model varchar(120),form_type varchar(120),wattage integer,modular varchar(120),pci_6_2 integer,product_id uuid not null default uuid_generate_v4()) with(oids=false)
-- select * from psu
-- -- DROP TABLE psu

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('CORSAIR','CP-9020087-NA','AX1600i','ATX',1600,'FULL',8);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('EVGA','100-BR-0500-K1','EVGA BR500','ATX',500,'NO',2);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('CORSAIR','CP-9020131-NA','TX750M','ATX',750,'SEMI',4);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('CORSAIR','CP-9020092-NA','RM750X','ATX',750,'FULL',4);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('CORSAIR','CP-9020073','HX850I','ATX',850,'FULL',6);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('SEASONICE','SSR-650X','FOCUS PLUS 650 GOLD','ATX',650,'FULL',4);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('SEASONIC','X1050','X-SERIES','ATX',1050,'FULL',6);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('SILVERSTONE','SST-SX600-G','600W','SFX12V',600,'FULL',2);

-- insert into psu(manufacturer,partnum,model,form_type,wattage,modular,pci_6_2)
-- values('BE QUIET!','BN229','POWER 2','TFX12V',300,'NO',1);