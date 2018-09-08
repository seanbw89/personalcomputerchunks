CREATE TABLE motherboard(_id serial primary key,manufacturer varchar(20),partnum varchar(50),model varchar(40), form_factor varchar(20), cpu_socket varchar(20), mem_slot integer, mem_type varchar(120), max_mem integer, sata integer,product_id uuid not null default uuid_generate_v4()) with(oids=false)
drop table motherboard
select * from motherboard

insert into motherboard(manufacturer,partnum,model,form_factor,cpu_socket ,mem_slot,mem_type,max_mem,sata)
values('ASUS','900RU0-M0EAY0','ASUS PRIME Z270-A','ATX','LGA1151',4,'DDR4-2133 / 2400 / 2666 / 2800 / 3000 / 3200 / 3300 / 3333 / 3400 / 3466 / 3600 / 3733 / 3866',64,6);

insert into motherboard(manufacturer,partnum,model,form_factor,cpu_socket ,mem_slot,mem_type,max_mem,sata)
values('ASUS','900M90-M0EAY0','MAXIMUS VIII HERO','ATX','LGA1151',4,'DDR4-2133 / 2400 / 2666 / 2800 / 3000 / 3200 / 3300 / 3400',64,4);

insert into motherboard(manufacturer,partnum,model,form_factor,cpu_socket ,mem_slot,mem_type,max_mem,sata)
values('MSI','7A62-001R','Z270 GAMING M3','ATX','LGA1151',4,'DDR4-2133 / 2400 / 2800 / 3000 / 3200 / 3600 / 3800',64,6);

insert into motherboard(manufacturer,partnum,model,form_factor,cpu_socket ,mem_slot,mem_type,max_mem,sata)
values('ASUS','900UJ0-M0EAY0','STRIX B350-F GAMING','ATX','AM4',4,'DDR4-2133 / 2400 / 2666 / 2933 / 3200',64,6);

insert into motherboard(manufacturer,partnum,model,form_factor,cpu_socket ,mem_slot,mem_type,max_mem,sata)
values('GIGABYTE','AB350-GAMING 3','GA-AB350-GAMING 3','ATX','AM4',4,'DDR4-2133 / 2400 / 2666 / 2933 / 3200',64,6);

insert into motherboard(manufacturer,partnum,model,form_factor,cpu_socket ,mem_slot,mem_type,max_mem,sata)
values('ASROCK','AB350 Gaming-ITX/ac','Fatal1ty AB350 Gaming-ITX/ac','MINI-ATX','AM4',4,'DDR4-2133 / 2400 / 2666 / 2800 / 3000 / 3200 / 3300 / 3333 / 3400 / 3466 / 3600 / 3733 / 3866',64,6);
