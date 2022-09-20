# List endpoints

**`GET`** `/api/lists`

Returns all lists
**example response**

```json
[
  {
    "boardId": 123456789,
    "name": "Groceries",
    "order": 0,
    "id": 68040017610,
    "created": "2022-01-26"
  },
  {
    "boardId": 987654321,
    "name": "Drugstore",
    "order": 1,
    "id": 87979775072,
    "created": "2022-02-11"
  }
]
```
---

**`GET`** `/api/lists?boardId={boardId}`

Returns all lists with given `boardId`

---
**`POST`** `/api/lists`

Creates a new list

**example request**
```json
{
  "boardId": {boardId}, // required
  "name": "to do"
}

```
---
**`PATCH`** `/api/lists/{listId}`

Changes details of a list with given `listId`.

**example request**
```json
{
  "name": "renamed list"
}

```
---
**`DELETE`** `/api/lists/{listId}`

Deletes a list with given `listId`.

---
**`DELETE`** /api/lists

Deletes all lists and cards
