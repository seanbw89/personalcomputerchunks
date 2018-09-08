insert into users(user_name,email,password,picture)
values($1,$2,$3,$4)
returning user_name, email, picture, user_id