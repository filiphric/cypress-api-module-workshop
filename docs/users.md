# User endpoints

---
**`GET`** `/api/users`

Returns information for the current user

**example response**
```json
{
  "user": {
    "email": "filip@example.com",
    "password": "$2a$10$fdK.5O8uogdfjgklôjgd/gf90890NKLJ",
    "id": 1
  }
}
```
---
**`POST`** `/api/signup`

Creates a new user

**example request**
```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```
---
**`POST`** `/api/welcomeemail`

Sends a request for a welcome email

**example request:**
```json
{
  "email": "filip@example.com"
}
```
---
**`POST`** `/api/login`

Logs in a user

**example request**
```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```


---
**`DELETE`** /api/users

Deletes all users