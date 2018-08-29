-- drop table cpu
-- create table cpu(cpu_id serial primary key,manufacturer varchar(30),model varchar(20),partnum varchar(30),socket varchar(30), frenquency decimal, turbo decimal, cores integer, tdp integer, multithread varchar(5),maxmem varchar(10), intgraphics varchar(20), included_cooler varchar(5),price decimal,product_id uuid not null default uuid_generate_v4()) with(oids=false)
--  select * from cpu

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 7 2700x','YD270XBGAFBOX','am4',3.7,4.3,8,105,'YES','64GB','NO','NO',323.89);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 7 1700X','YD2400C5FBBOX','am4',3.4,3.8,8,95,'YES','64GB','NO','NO',228.20);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 7 1800X','YD180XBCAEWOF','am4',3.6,4,8,95,'YES','64GB','NO','NO',239.99);


-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 5 2600x','YD260XBCAFBOX','am4',3.6,4.2,6,95,'YES','64GB','NO','YES',225.76);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 5 1600','YD1600BBAEBOX','am4',3.2,3.6,6,95,'YES','64GB','NO','YES',149.99);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 5 2400G','YD2400C5FBBOX','am4',3.6,3.9,6,65,'YES','64GB','Radeon Vega 11','YES',159.99);



-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 3 1300x','YD130XBBAEBOX','am4',3.5,3.7,4,65,'NO','64GB','NO','YES',123.67);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 3 1200','YD1200BBAEBOX','am4',3.1,3.4,4,65,'NO','64GB','NO','YES',93.50);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('amd','ryzen 3 2200G','YD2200C5FBBOX','am4',3.5,3.7,4,65,'NO','64GB','Radeon Vega 8','YES',98.90);



-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i3-8100', 'BX80684I38100', 'LGA1151', 3.6, 0, 4, 65, 'NO', '64GB', 'intel UHD630','YES',115.89);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i3-8350k', 'BX80684I38350K', 'LGA1151', 4.0,0, 4, 91, 'NO', '64GB', 'intel UHD630','NO',169.99);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i3-7100', 'BX80677I37100', 'LGA1151', 3.9,0,2, 51, 'YES', '64GB', 'intel UHD630','YES',124.99);



-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i5-8600k', 'BX80684I58600K', 'LGA1151', 3.6, 4.3, 6, 95, 'NO', '64GB', 'intel UHD630','NO',248.90);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i5-8400', 'BX80684I58400', 'LGA1151', 2.8, 4.0, 6, 65, 'NO', '64GB', 'intel UHD630','YES',199.79);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i5-7600k', 'BX80677I57600K', 'LGA1151', 3.8, 4.2, 4, 91, 'NO', '64GB', 'intel UHD630','NO',228.88);



-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i7-8700k', 'BX80684I78700K', 'LGA1151', 3.7, 4.7, 6, 95, 'YES', '64GB', 'intel UHD630','NO',355.89);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i7-7700K', 'BX80677I77700K', 'LGA1151', 4.5, 4.5, 4, 91, 'YES', '64GB', 'intel UHD630','NO',328.90);

-- insert into cpu(manufacturer, model,partnum,socket, frenquency, turbo, cores, tdp, multithread, maxmem, intgraphics,included_cooler,price)
-- values('intel', 'i7-8700', 'BX80684I78700', 'LGA1151', 3.2, 4.6, 4, 65, 'YES', '64GB', 'intel UHD630','YES',309.99);