insert into users(user_name,email,password)
values($1,$2,$3)
returning *