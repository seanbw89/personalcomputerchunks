-- create table vid_card(vid_id serial primary key,manufacturer varchar(120), partnum varchar(120),model varchar(120), mem_size integer, core_clock decimal, tdp integer, fan_length varchar(120),outputs varchar(120),product_id uuid not null default uuid_generate_v4()) with(oids=false)
-- select * from vid_card
-- drop table vid_card

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('ZOTAC','ZT-P10510A-10L','GEFORCE GTX 1050Ti 4GB','4',1.30,75,'5.71" (145mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 1 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('MSI','GEFORCE GTX 1060 GAMING X 6G','GEFORCE GTX 1060 GAMING X 6GB','6',1.59,120,'10.91" (277mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 3 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('EVGA','08G-P4-6173-KR','GEFORCE GTX 1070 8GB SC GAMING','8',1.59,180,'10.51" (267mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 3 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('MSI','GTX 1070 TI TITANIUM 8G','GEFORCE GTX 1070Ti 8B TITANIUM','8',1.61,180,'10.98" (279mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 3 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('EVGA','08G-P4-6286','GEFORCE GTX 1080 8GB FTW GAMING ACX','8',1.72,215,'10.51" (267mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 3 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('ASUS','STRIX-GTX1080TI-11G-GAMING','GEFORCE GTX 1080Ti 11GB STRIX','11',1.49,250,'11.73" (298mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 2 HDMI 2');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('NVIDIA','900-1G500-2500-000','GEFORCE GTX TITAN V 12GB','12',1.2,250,'10.51" (267mm)','DISPLAYPORT 3 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('MSI','RADEON RX 560 AERO ITX 4G OC','MSI 560 4GB','4',1.20,90,'6.10" (155mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 1 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('MSI','RX 570 GAMING X 4G','RADEON RX 570 4GB GAMING X','4',1.71,150,'10.87" (276mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 2 HDMI 2');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('SAPPHIRE','11265-05-20G','RADEON RX 580 8GB PULSE','8',1.26,225,'9.06" (230mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 2 HDMI 2');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('MSI','Vega56 AIR BOOST 8G','MSI Vega56 AIR BOOST 8G Video Card','8',1.16,210,'Yes 10.63" (270mm)','DISPLAYPORT 3 HDMI 1');

-- insert into vid_card(manufacturer, partnum,model,mem_size, core_clock,tdp, fan_length, outputs)
-- values('ASUS','ROG-STRIX-RXVEGA64-O8G-GAMING','RADEON RX VEGA 64 8GB ROG STRIX','8',1.25,295,'Yes 11.73" (298mm)','DVI-D DUAL-LINK 1 DISPLAYPORT 2 HDMI 2');

