# Board endpoints

**`GET`** `/api/boards`

Returns all boards

**example (unauthorized user):**
```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 1,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 2,
    "starred": true,
    "created": "2020-09-01"
  }
]
```
**example (authorized user):**
```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 1,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 2,
    "starred": true,
    "created": "2020-09-01"
  },
  {
    "name": "private board",
    "user": 1, // user id of the board author
    "id": 3,
    "starred": false,
    "created": "2020-09-01"
  }
]
```
---
**`GET`** `/api/boards?starred`

Returns all boards with `starred` attribute set to true.
**example:**
```json
[
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 2,
    "starred": true,
    "created": "2020-09-01"
  },
]
```

---
**`POST`** `/api/boards`

Creates a new board

**example request:**
```json
{
  "name": "moon landing 2"
}
```
**example response:**
```json
{
  "name": "moon landing 2",
  "user": 1,
  "id": 22559285486,
  "starred": false,
  "created": "2020-09-01",
}
```
---
**`GET`** `/api/boards/{boardId}`

Returns details of a board with given `boardId`

**example response:**
```json
{
  "name": "new project",
  "user": 0,
  "id": 27315982008,
  "starred": false,
  "created": "2020-09-01"
}
```
---
**`PATCH`** `/api/boards/{boardId}`

Changes details of a board with given `boardId`. `starred` and `name` attributes can be changed

**example request:**
```json
{
  "starred": true,
  "name": "project alpha"
}
```
---
**`DELETE`** `/api/boards/{boardId}`

Deletes a board with given `boardId`

---
**`DELETE`** /api/boards

Deletes all boards, lists and cards