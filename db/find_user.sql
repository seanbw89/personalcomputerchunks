select user_name,email,user_id
from users
where email = $1 and password = $2