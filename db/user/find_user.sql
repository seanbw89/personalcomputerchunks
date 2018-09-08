select id,user_name,email,password
from users
where user_name = $1 and email = $2