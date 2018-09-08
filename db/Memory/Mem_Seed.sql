-- create table memory(mem_id serial primary key,manufacturer varchar(80),partnum varchar(90),model varchar(80),speed varchar(20), size varchar(120),cas_latency integer,product_id uuid not null default uuid_generate_v4()) with(oids=false)
-- DROP TABLE  memory
-- select * from memory


-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('KINGSTON','HX421C14FB/8','HYPERX FURY','DDR4-2133','8GB (1 x 8GB)',14);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('CORSAIR','CMK8GX4M1A2400C16','VENGANCE LPZ','DDR4-2400','8GB (1 x 8GB)',16);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('CRUCIAL','BLS8G4D240FSB','BALLISTIX SPORT LT','DDR4-2400','8GB (1 x 8GB)',16);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('CORSAIR','CMK16GX4M2B3000C15W','VENGANCE LPX','DDR4-300','16GB (2 x 8GB)',15);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('G.SKILL','F4-3000C16D-16GTZR','TRIDENT Z RGB','DDR4-3000','16GB (2 x 8GB)',16);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('CORSAIR','CMK32GX4M2B3200C16','VENGANCE LPX','DDR4-3200','32GB (2 x 16GB)',16);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('CORSAIR','CMR32GX4M4C3000C15W','VENGANCE RGB','DDR4-3000','32GB (4 x 8GB)',15);

-- insert into memory(manufacturer,partnum,model,speed,size,cas_latency)
-- values('CORSAIR','CMU64GX4M4C3200C16','VENGANCE LED','DDR4-3200','64GB (4 x 16GB)',16);
